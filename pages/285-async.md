# 비동기 프로그래밍

## Motivation - 타이머 API

웹 브라우저에는 **함수를 특정 시간이 지난 뒤에 실행**시키거나, 혹은 **함수를 주기적으로 실행**시키는 작업을 할 수 있게 해 주는 함수가 내장되어 있습니다.

```js
setTimeout(() => {
  console.log('setTimeout이 실행된 지 2초가 지났습니다.');
}, 2000);

setInterval(() => {
  console.log('3초마다 출력됩니다.');
}, 3000);
```

`setTimeout`과 `setInterval`은 각각 **타이머 식별자**를 반환합니다. 이 식별자를 가지고 실행 중인 타이머를 취소할 수 있습니다.

```js
const timeoutId = setTimeout(() => {
  console.log('setTimeout이 실행된 지 2초가 지났습니다.');
}, 2000);

const intervalId = setInterval(() => {
  console.log('3초마다 출력됩니다.');
}, 3000);

clearTimeout(timeoutId);
clearInterval(intervalId);

// 아무것도 출력되지 않습니다.
```

### 타이머 사용 시 주의할 점

`setTimeout`과 `setInterval`은 **정확한 지연시간을 보장해 주지 않습니다.**

```js
const start = new Date();

setTimeout(() => {
  console.log(new Date() - start);
}, 100);

// 실제 지연시간과 약간의 차이가 존재합니다.
```

또한 **지연시간을 0으로 주었을 때**는 코드가 기대한대로 동작하지 않습니다. `setTimeout` 호출 시 지연시간으로 0을 넘기면 어떻게 되는지 확인해보겠습니다.

```js
setTimeout(() => {
  console.log('hello');
}, 0);

console.log('world');

// 출력 결과:
// world
// hello
```

분명 지연시간을 0으로 주었는데도 코드가 뒤늦게 실행되었습니다. 어떻게 된 일일까요? 이를 이해하기 위해서는 먼저 **브라우저에서 JavaScript 코드가 실행되는 과정**을 알아야 할 필요가 있습니다.

## 브라우저의 JavaScript 코드 실행 과정

### 호출 스택 (Call Stack)

호출 스택(call stack)은 스택 형태의 저장소로, JavaScript 엔진은 **함수 호출과 관련된 정보**를 이 곳에서 관리합니다.

아래의 코드에 대한 호출 스택을 그림으로 나타내보면 다음과 같습니다.[^1]

```js
function add(x, y) {
  return x + y;
}

function add2(x) {
  return add(x, 2); // `add`를 호출
}

function add2AndPrint(x) {
  const result = add2(x); // `add2`를 호출
  console.log(result); // `console.log`를 호출
}

add2AndPrint(3); // `add2AndPrint`를 호출
```

<embed src="../images/callstack.svg" onload="onKSLoad(this)" data-loop>

호출 스택에 저장되는 각 항목을 **실행 맥락(execution context)**[^2]이라고 부릅니다. 실행 맥락에는 아래와 같은 정보들이 저장됩니다.

- 함수 내부에서 사용되는 변수
- 스코프 체인
- `this`가 가리키는 객체

브라우저가 JavaScript 코드를 실행시킬 때, 호출 스택을 다음과 같이 조작합니다.

- 스크립트를 불러올 때, 전역 실행 맥락(global execution context)을 호출 스택에 추가합니다.
- 함수가 호출되면, 해당 호출에 대한 실행 맥락을 생성해서 호출 스택에 추가(push)합니다.
- 변수에 대입이 일어나면, 호출 스택에 저장되어 있는 변수의 내용을 변경합니다.
- 함수의 실행이 끝나면, 결과값을 반환하고 호출 스택 가장 위에 있는 실행 맥락을 제거(pop)합니다.
- 스크립트의 실행이 모두 끝나면, 전역 실행 맥락을 호출 스택에서 제거(pop)합니다.

이를 통해, 변수에 값을 대입한다거나, 함수가 여러 번 중첩되어 호출되는 등의 **복잡한 코드의 동작을 단순한 자료구조로 표현할 수 있게 됩니다.**

웹 브라우저는 **호출 스택에 실행 맥락이 존재하는 동안, 즉 실행 중인 함수가 존재하는 동안**에는 먹통이 되어 버립니다.[^3] 브라우저는 대개 60fps로 동작하기 때문에, 대략 16ms 안에 코드의 실행을 완료하지 못하면 브라우저의 애니메이션이 뚝뚝 끊기는 현상이 나타납니다. 이는 사용자 경험에 악영향을 미칠 수 있습니다.

```js
// 특정 시간동안 계속 루프를 도는 코드
function sleep(milliseconds) {
  const start = Date.now();
  while ((Date.now() - start) < milliseconds);
}

sleep(5000);
// 5초 동안 while 루프가 실행되므로, 호출 스택이 비워지지 않고 브라우저는 먹통이 됩니다.
```

따라서, 브라우저에서 동작하는 JavaScript 코드, 특히 **사용자와의 상호작용을 위한 코드**를 작성할 때에는 코드의 실행 시간이 얼마나 될지를 항상 염두에 두어야 합니다.

### 작업 큐 (Task Queue)

하지만 모든 작업을 16ms 안에 처리할 수는 없습니다. **어떤 사건(event)이 일어날 때까지** 기다리거나, 혹은 **큰 데이터에 대한 계산이 완료될 때까지** 기다리는 데에는 시간이 오래 걸리기 마련입니다.

이런 경우, 브라우저에서는 다음과 같은 절차를 통해 **오래 기다려야 하는 일**을 처리할 수 있습니다.

- 기다려야 하는 일을 JavaScript 엔진에서 직접 처리하는 것이 아니라 **API를 통해 브라우저에 위임**[^4]합니다. 이 때, 일이 끝나면 실행시킬 **콜백**을 같이 등록합니다.
- 위임된 일이 끝나면, 그 결과와 콜백을 **작업 큐(task queue)**에 추가합니다.
- 브라우저는 호출 스택이 비워질 때마다 작업 큐에서 가장 오래된 작업을 꺼내와서 해당 작업에 대한 콜백을 실행시킵니다. 브라우저는 이 과정을 끊임없이 반복하는데, 이를 **이벤트 루프(event loop)**라고 부릅니다.

<embed src="../images/eventloop.svg" onload="onKSLoad(this)" data-loop>

JavaScript 코드를 작성할 때에는, 호출 스택과 작업 큐의 성질을 반드시 염두에 두어야 합니다.

- 각 작업은 작업 큐에 쌓인 순서대로 실행됩니다.
- 이미 작업 큐에 작업이 쌓여있다면, 뒤늦게 추가된 작업은 앞서 추가된 작업이 모두 실행된 다음에, 즉 호출 스택이 비워진 다음에야 실행됩니다.
- 호출 스택이 비워지지 않는다면, 작업 큐에 쌓여있는 작업을 처리할 수 없습니다.
- **각 작업 사이에 브라우저는 화면을 새로 그릴 수 있습니다.** 즉, 호출 스택이 비워지지 않는다면 브라우저는 화면을 새로 그릴 수 없습니다.

앞서 지연시간으로 0을 넘겨준 `setTimout` 예제를 다시 한 번 보겠습니다. 지연시간을 0으로 주면, 브라우저는 `setTimeout`에 넘겨진 콜백을 바로 실행하는 것이 아니라 그 콜백을 작업 큐에 등록합니다.[^5] 호출 스택이 비워지면, 그제서야 작업 큐에 들어있는 콜백을 가져와서 실행시킵니다. 이 때문에 `hello`가 나중에 출력되는 것입니다.

```js
setTimeout(() => {
  console.log('hello');
}, 0); // 작업 큐에 콜백이 추가됨

console.log('world');
```

## 비동기 프로그래밍 (Asyncronous Programming)

이처럼 어떤 일이 완료되기를 기다리지 않고 다음 코드를 실행해 나가는 프로그래밍 방식을 일러 **비동기 프로그래밍(asynchronous programming)**이라고 합니다. 반대로 어떤 일이 완료될 때까지 코드의 실행을 멈추고 기다리는 프로그래밍 방식을 **동기식 프로그래밍(synchronous programming)**이라고 부릅니다.

브라우저에서의 비동기 프로그래밍은 주로 **통신**과 같이 오래 걸리는 작업들을 브라우저에 위임할 때 이루어집니다.[^6]

비동기 프로그래밍 방식은 대개 프로그램의 성능과 응답성을 높이는 데에 도움을 줍니다. 하지만 **코드가 실제로 실행되는 순서가 뒤죽박죽이 되므로**, 코드의 가독성을 해치고 디버깅을 어렵게 만든다는 비판을 받아왔습니다. 이런 문제를 해결하기 위해 비동기 프로그래밍을 위한 여러 기법이 생겨났고, 또 어떤 것들은 JavaScript 언어 자체에 포함되기도 했습니다. 여기에서는 근래 JavaScript 생태계에서 자주 사용되는 몇 가지 비동기 프로그래밍 기법들을 살펴 보겠습니다.

몇몇 예제 코드에서 사용한 [Github REST API v3](https://developer.github.com/v3/)에는 [API 사용량 제한](https://developer.github.com/v3/#rate-limiting)이 있어서, 이를 초과하면 코드 실행 중에 에러가 날 수도 있습니다. 이 때에는 한 시간 정도 흐른 뒤에 다시 코드를 실행해보세요.[^7]

### 콜백 (Callback)

콜백은 다른 함수의 인수로 넘기는 함수를 말하는데, 이 콜백을 가지고 비동기 프로그래밍을 할 수 있습니다.

아래 예제는 유명한 JavaScript 라이브러리인 jQuery를 이용해, Github의 [create-react-app 프로젝트에 등록되어 있는 이슈 목록](https://github.com/facebookincubator/create-react-app/issues)을 가져와서 출력하는 코드입니다. ([여기](https://repl.it/@seungha/async-callback-jquery)에서 코드를 직접 실행해보세요.)

```js
const $ = require('jquery');
const API_URL = 'https://api.github.com/repos/facebookincubator/create-react-app/issues?per_page=10';

$.ajaxSetup({
  dataType: 'json'
});

$.get(API_URL, issues => {
  console.log('최근 10개의 이슈:');
  issues
    .map(issue => issue.title)
    .forEach(title => console.log(title));
  console.log('출력이 끝났습니다.');
});

console.log('받아오는 중...');
```

위 예제에서 `$.get` 메소드의 두 번째 인수로 콜백을 넘겨주었습니다. `$.get` 메소드는 비동기식으로 동작하며, Github API 서버와 통신하는 일을 브라우저에 위임한 후 바로 종료됩니다. 통신이 끝나면, 그 결과를 첫 번째 인수로 해서 콜백을 호출하게 됩니다.

여기서 주의할 것이 있습니다. 콜백을 인수로 받는 함수가 항상 비동기식으로 동작하는 것은 아닙니다. 위 예제의 `map`, `forEach`의 인수로 넘겨준 것 역시 콜백이지만, 이 때에는 **콜백이 동기식으로 호출됩니다.** 즉, 콜백의 실행이 끝날때까지 코드의 실행 흐름이 다음으로 넘어가지 않습니다. 예제 코드를 직접 실행해본 후, 어떤 순서로 출력이 되었는지 살펴보세요.

콜백은 JavaScript가 고차함수를 잘 지원한다는 특징 때문에 가장 많이 사용되는 비동기 프로그래밍 양식이었습니다. 하지만 콜백만으로는 복잡한 비동기 데이터 흐름를 표현하기가 어려워서 많은 프로그래머들이 힘들어했고, 결국 **콜백 지옥(callback hell)**이라는 용어까지 생겨났습니다.

예를 들어, 아래의 흐름대로 데이터를 가져오기 위해서는 복잡한 형태로 콜백을 사용해야 합니다.

1. Github에 공개되어있는 저장소 중, 언어가 JavaScript이고 별표를 가장 많이 받은 저장소를 불러온다.
2. 위 저장소에 가장 많이 기여한 기여자 5명의 정보를 불러온다.
3. 해당 기여자들이 최근에 Github에서 별표를 한 저장소를 각각 10개씩 불러온다.
4. 불러온 저장소를 모두 모아, 개수를 센 후 저장소의 이름을 개수와 함께 출력한다.

```js
const $ = require('jquery');
const API_URL = 'https://api.github.com';
const starCount = {};

$.ajaxSetup({
  dataType: 'json'
});

// 1. Github에 공개되어있는 저장소 중, 언어가 JavaScript이고 별표를 가장 많이 받은 저장소를 불러온다.
$.get(`${API_URL}/search/repositories?q=language:javascript&sort=stars&per_page=1`, result => {
  // 2. 위 저장소에 가장 많이 기여한 기여자 5명의 정보를 불러온다.
  $.get(`${API_URL}/repos/${result.items[0].full_name}/contributors?per_page=5`, users => {
    let repoArrs = [];
    for (let user of users) {
      // 3. 해당 기여자들이 최근에 Github에서 별표를 한 저장소를 각 기여자마다 10개씩 불러온다.
      $.get(`${API_URL}/users/${user.login}/starred?per_page=10`, repos => {
        repoArrs.push(repos);
        // 4. 불러온 저장소를 모두 모아, 개수를 센 후 저장소의 이름을 개수와 함께 출력한다.
        if (repoArrs.length === 5) {
          for (let repoArr of repoArrs) {
            for (let repo of repoArr) {
              if (repo.full_name in starCount) {
                starCount[repo.full_name]++;
              } else {
                starCount[repo.full_name] = 1;
              }
            }
          }
          console.log(starCount);
        }
      });
    }
  });
});

console.log('fetching...');
```

위의 2, 3번 과정은 한 비동기 작업이 끝난 후 다른 비동기 작업을 시작하고 있고, 이를 위해 콜백 안에서 다시 콜백을 사용하고 있습니다. 또한 4번 과정을 실행하기 위해서는 앞서 3번 과정에서 실행된 10개의 비동기 작업이 모두 끝나는 시점을 알아야 할 필요가 있기 때문에, `repoArrs` 배열의 길이를 체크하고 있습니다.

이처럼 순수하게 콜백만 사용했을 때는, 데이터 흐름이 조금만 복잡해져도 코드가 복잡해지는 문제가 생깁니다.

### Promise

위에서 설명한 콜백의 문제를 해결하기 위해 여러 라이브러리들이 등장했고, 그 중에서 개발자들에게 널리 선택받은 것이 바로 Promise 패턴을 사용한 라이브러리들([jQuery Deffered](https://api.jquery.com/category/deferred-object/), [Q](http://documentup.com/kriskowal/q/), [Bluebird](http://bluebirdjs.com/docs/getting-started.html))이었습니다. 이 라이브러리들이 [표준화](https://promisesaplus.com/)되어, 결국 ES2015에 이르러 JavaScript 언어 자체에 포함되게 되었습니다.

Promise는 **'언젠가 끝나는 작업'의 결과값**을 담는 통과 같은 객체입니다. Promise 객체가 만들어지는 시점에는 그 통 안에 무엇이 들어갈지 모를 수도 있습니다. 대신 `then` 메소드를 통해 콜백을 등록해서, 작업이 끝났을 때 결과값을 가지고 추가 작업을 할 수 있습니다.

Promise 객체를 생성하는 가장 쉬운 방법은 `Promise.resolve` 정적 메소드를 사용하는 것입니다.

```js
const p = Promise.resolve(1);
```

위 코드에서 `1`이라는 결과값을 갖는 Promise 객체를 생성했습니다. 그러나 이 코드는 비동기 작업을 하고 있지는 않습니다.

비동기 작업을 하는 Promise 객체는 `Promise` 생성자를 통해 만들 수 있습니다.

```js
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('2초가 지났습니다.');
    resolve('hello');
  }, 2000);
});
```

`Promise` 생성자는 콜백을 인수로 받습니다. 이 콜백의 첫 번째 인수로 `resolve` 함수가 들어오는데, 콜백 안에서 `resolve`를 호출하면 **`resolve`에 인수로 준 값이 곧 Promise 객체의 궁극적인 결과값이 됩니다.**

두 번째 인수로 들어오는 `reject` 함수는 비동기 작업에서 에러가 발생했을 때 호출하는 함수인데, 여기에서는 소개만 하고 넘어가고 [예외 처리](./290-exception.md) 챕터에서 자세히 다루도록 하겠습니다.

위 예제에서는 `setTimeout`을 이용해 2초가 지난 뒤에 콜백이 실행되도록 했습니다. 즉, `p` 변수에 저장된 Promise 객체는 2초 동안은 결과값이 없는 상태가 됩니다. 그리고 2초가 지나면, `resolve` 함수가 호출되어 `p` 객체는 결과값을 갖는 객체가 됩니다.

Promise 객체의 **결과값을 사용해 추가 작업**을 하려면 `then` 메소드를 호출해야 합니다. `then` 메소드에 콜백을 넘겨서, 첫 번째 인수로 들어온 결과값을 가지고 추가 작업을 할 수 있습니다.

```js
p.then(msg => {
  console.log(msg); // hello
});
```

`then` 메소드에는 아주 중요한 특징이 있는데, 바로 **`then` 메소드 자체도 Promise 객체를 반환한다**는 것입니다. 이 때, 콜백에서 반환한 값이 곧 Promise의 결과값이 됩니다.

```js
const p2 = p.then(msg => {
  return msg + ' world';
});

p2.then(msg => {
  console.log(msg); // hello world
});
```

위 코드는 아래와 같이 줄여 쓸 수 있습니다.

```js
p.then(msg => {
  return msg + ' world';
}).then(msg => {
  console.log(msg);
});
```

또한, `then` 메소드에 넘겨준 콜백에서 Promise 객체를 반환하면, `then` 메소드가 반환한 Promise 객체는 앞의 Promise 객체의 결과를 따르게 됩니다. 아래 예제를 직접 실행하고, 어떻게 출력이 되는지 확인해보세요.

```js
// Promise 객체를 반환하는 함수
function delay(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`${ms} 밀리초가 지났습니다.`);
      resolve();
    }, ms);
  });
}

delay(1000)
  .then(() => delay(2000))
  .then(() => Promise.resolve('끝'))
  .then(console.log);

console.log('시작');
```

이제 HTTP 통신을 할 때 Promise가 어떻게 사용되는지 살펴보겠습니다. 아래에 사용된 `axios`는 JavaScript를 통해 직접 요청을 보내기 위해 널리 사용되는 라이브러리입니다. GET 메소드로 요청을 보내기 위해 `axios.get()` 함수를 사용할 수 있는데, 이 때 **Promise 객체가 반환됩니다.**

```js
const axios = require('axios');
const API_URL = 'https://api.github.com';

axios.get(`${API_URL}/repos/facebookincubator/create-react-app/issues?per_page=10`)
  .then(res => {
    console.log('최근 10개의 이슈:');
    res.data
      .map(issue => issue.title)
      .forEach(title => console.log(title));
    console.log('출력이 끝났습니다.');
  });
```

`axios.get()`을 호출해서 반환된 Promise 객체에 담긴 결과값은 `Response` 객체로, HTTP 응답에 대한 내용을 담고 있습니다.

위 코드를 직접 실행해보고 출력 결과를 살펴보세요.

여기까지 읽은 독자 중에서는, 아마 **Promise도 똑같이 콜백을 등록하는데 뭐가 더 좋다는 건지 모르겠다**고 생각하는 분도 계실 것입니다. Promise의 진가는, **복잡한 비동기 데이터 흐름을 다룰 때** 발휘됩니다.

별로 중요해보이지 않는 아래의 두 특징을 활용하면, 콜백만 사용했을 때보다 코드를 훨씬 더 깔끔하게 작성할 수 있습니다.

- `then` 메소드는 Promise 객체를 반환하므로, **콜백을 중첩하지 않고도 비동기 작업을 연이어 할 수 있습니다.**
- 비동기 작업이라는 동작 자체를 **값으로 다룰 수 있게 됩니다.** 즉, 이제까지 값을 다루면서 해왔던 모든 작업을 Promise 객체에 대해서도 할 수 있습니다.

아래 예제는 위에서 콜백 지옥을 보여줬던 비동기 데이터 흐름을 Promise를 이용해 다시 작성한 것입니다. 3번 과정에서 사용한 `Promise.all` 정적 메소드는, '인수로 들어온 iterable에 들어있는 모든 Promise 객체가 완료되었을 때' 그 자신도 완료되는 새 Promise 객체를 반환합니다. `Promise.all`과 `map` 메소드를 함께 사용하는 부분을 잘 살펴보세요.

```js
const API_URL = 'https://api.github.com';
const starCount = {};
const axios = require('axios');

// 1. Github에 공개되어있는 저장소 중, 언어가 JavaScript이고 별표를 가장 많이 받은 저장소를 불러온다.
axios.get(`${API_URL}/search/repositories?q=language:javascript&sort=stars&per_page=1`)
  // 2. 위 저장소에 가장 많이 기여한 기여자 5명의 정보를 불러온다.
  .then(res => axios.get(`${API_URL}/repos/${res.data.items[0].full_name}/contributors?per_page=5`))
  // 3. 해당 기여자들이 최근에 Github에서 별표를 한 저장소를 각각 10개씩 불러온다.
  .then(res => {
    const ps = res.data.map(user => axios.get(`${API_URL}/users/${user.login}/starred?per_page=10`));
    return Promise.all(ps);
  })
  .then(ress => Promise.all(ress.map(r => r.data)))
  // 4. 불러온 저장소를 모두 모아, 개수를 센 후 저장소의 이름을 개수와 함께 출력한다.
  .then(repoArrs => {
    for (let repoArr of repoArrs) {
      for (let repo of repoArr) {
        if (repo.full_name in starCount) {
          starCount[repo.full_name]++;
        } else {
          starCount[repo.full_name] = 1;
        }
      }
    }
    console.log(starCount);
  })

console.log('fetching...');
```

여기에서 다루지 않은 Promise의 기능이 몇 가지 더 있습니다. `Promise.race`에 대한 MDN 문서를 검색해보시고, `Promise.all`과 어떤 차이가 있는지 살펴보세요. [예외 처리](./290-exception.md) 챕터에서는 Promise를 통해 비동기 작업을 하는 중에 에러가 발생하면, 그것을 어떻게 처리해야 하는지에 대해 다룹니다.

### 비동기 함수 (Async Function)

Promise를 사용하는 비동기 프로그래밍 방식은 이전의 방식과 비교하면 여러 가지 장점을 갖지만, **여전히 콜백을 사용한다**는 점 때문에 '불편하다', '가독성이 좋지 않다'는 비판을 받아왔습니다.

ES2017에서 도입된 **비동기 함수(async function)**를 사용하면, 동기식 코드와 거의 같은 구조를 갖는 비동기식 코드를 짤 수 있습니다.

함수 앞에 **`async` 키워드**를 붙이면, 이 함수는 비동기 함수가 됩니다.

```js
// 비동기 함수
async function func1() {
  // ...
}

// 비동기 화살표 함수
const func2 = async () => {
  // ...
}

// 비동기 메소드
class MyClass {
  async myMethod() {
    // ...
  }
}
```

비동기 함수는 **항상 Promise 객체를 반환한다**는 특징을 갖습니다. 이 Promise의 결과값은 비동기 함수 내에서 무엇을 반환하느냐에 따라 결정되며, **`then` 메소드와 똑같은 방식으로 동작합니다.**

```js
async function func1() {
  return 1;
}

async function func2() {
  return Promise.resolve(2);
}

func1().then(console.log); // 1
func2().then(console.log); // 2
```

또 하나의 중요한 특징은 비동기 함수 내에서 **`await` 키워드**를 쓸 수 있다는 것입니다. `await`는 Promise의 `then` 메소드와 유사한 기능을 하는데, **`await` 키워드 뒤에 오는 Promise가 결과값을 가질 때까지 비동기 함수의 실행을 중단시킵니다.** 여기서의 '중단'은 비동기식이며, 브라우저는 Promise가 완료될 때까지 다른 작업을 처리할 수 있습니다.

`await`는 연산자이기도 하며, **`await` 연산의 결과값은 뒤에 오는 Promise 객체의 결과값**이 됩니다.

앞서 `then` 메소드를 사용했던 예제와 아래의 예제를 비교해보세요.

```js
// Promise 객체를 반환하는 함수.
function delay(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`${ms} 밀리초가 지났습니다.`);
      resolve()
    }, ms);
  });
}

async function main() {
  await delay(1000);
  await delay(2000);
  const result = await Promise.resolve('끝');
  console.log(result);
}

main();
```

비동기 함수의 가장 큰 장점은 **동기식 코드를 짜듯이 비동기식 코드를 짤 수 있다**는 것입니다. 아래 예제는 Github 데이터를 불러오는 예제를 비동기 함수를 사용해 다시 작성한 것입니다.

```js
const axios = require('axios');
const API_URL = 'https://api.github.com';

async function fetchStarCount() {
  const starCount = {};

  // 1. Github에 공개되어있는 저장소 중, 언어가 JavaScript이고 별표를 가장 많이 받은 저장소를 불러온다.
  const topRepoRes = await axios.get(`${API_URL}/search/repositories?q=language:javascript&sort=stars&per_page=1`);

  // 2. 위 저장소에 가장 많이 기여한 기여자 5명의 정보를 불러온다.
  const topMemberRes = await axios.get(`${API_URL}/repos/${topRepoRes.data.items[0].full_name}/contributors?per_page=5`);

  // 3. 해당 기여자들이 최근에 Github에서 별표를 한 저장소를 각각 10개씩 불러온다.
  const ps = topMemberRes.data.map(user => axios.get(`${API_URL}/users/${user.login}/starred?per_page=10`));
  const starredReposRess = await Promise.all(ps);
  const starredReposData = starredReposRess.map(r => r.data)

  // 4. 불러온 저장소를 모두 모아, 개수를 센 후 저장소의 이름을 개수와 함께 출력한다.
  for (let repoArr of starredReposData) {
    for (let repo of repoArr) {
      if (repo.full_name in starCount) {
        starCount[repo.full_name]++;
      } else {
        starCount[repo.full_name] = 1;
      }
    }
  }
  return starCount;
}

fetchStarCount().then(console.log);
```

`then` 메소드를 사용한 버전과 비교했을 때, 비동기 작업을 위해 콜백을 사용하는 부분이 모두 사라졌습니다.

`await` 키워드는 `for`, `if`와 같은 제어 구문 안에서도 쓰일 수 있기 때문에, `then` 메소드를 사용할 때보다 **복잡한 비동기 데이터 흐름을 아주 쉽게 표현할 수 있다**는 장점이 있습니다. 다만, 비동기 함수 역시 Promise를 사용하기 때문에, 비동기 함수를 잘 쓰기 위해서는 여전히 Promise에 대해 잘 알고 있어야 합니다.

비동기 함수는 `await` 도중 에러가 났을 때 이를 편하게 처리할 수 있는 방법도 지원하는데, 이에 대해서는 [예외 처리](./290-exception.md) 챕터에서 자세히 살펴보겠습니다.

### Generator

[Iterable](./260-iteration.md) 챕터에 다뤘던 generator 함수는 **'함수를 잠시 멈춰둘 수 있다'**는 특징을 갖고 있습니다. 이 특징으로 인해 generator가 비동기 프로그래밍을 위해 사용되기도 합니다.

아래는 generator를 비동기식으로 작동시킬 수 있는 [co](https://github.com/tj/co) 라이브러리를 사용해서 Github에서 데이터를 불러오는 예제를 다시 작성한 것입니다.

```js
const co = require('co');
const axios = require('axios');
const API_URL = 'https://api.github.com';

function* fetchStarCount() {
  const starCount = {};

  // 1. Github에 공개되어있는 저장소 중, 언어가 JavaScript이고 별표를 가장 많이 받은 저장소를 불러온다.
  const topRepoRes = yield axios.get(`${API_URL}/search/repositories?q=language:javascript&sort=stars&per_page=1`);

  // 2. 위 저장소에 가장 많이 기여한 기여자 5명의 정보를 불러온다.
  const topMemberRes = yield axios.get(`${API_URL}/repos/${topRepoRes.data.items[0].full_name}/contributors?per_page=5`);

  // 3. 해당 기여자들이 최근에 Github에서 별표를 한 저장소를 각각 10개씩 불러온다.
  const ps = topMemberRes.data.map(user => axios.get(`${API_URL}/users/${user.login}/starred?per_page=10`));
  const starredReposRess = yield Promise.all(ps);
  const starredReposData = starredReposRess.map(r => r.data)

  // 4. 불러온 저장소를 모두 모아, 개수를 센 후 저장소의 이름을 개수와 함께 출력한다.
  for (let repoArr of starredReposData) {
    for (let repo of repoArr) {
      if (repo.full_name in starCount) {
        starCount[repo.full_name]++;
      } else {
        starCount[repo.full_name] = 1;
      }
    }
  }
  return starCount;
}

co(fetchStarCount).then(console.log);
```

비동기 함수를 사용한 예제와 비교해서 보면, 코드의 구조가 굉장히 비슷합니다. 실제로, ES2017에서 비동기 함수가 도입되기 전에는 generator가 비동기 프로그래밍을 위해 널리 사용되었습니다. 최근에는 언어에 내장되어 있고 더 쉬운 비동기 함수를 많이 사용하는 편입니다.

다만 generator는 **함수의 재개를 프로그래머가 직접 제어할 수 있다**는 장점을 갖고 있기 때문에, 일부러 비동기 함수 대신 generator를 사용하는 경우도 있습니다. React에서 비동기 프로그래밍을 하기 위해 널리 사용되는 라이브러리인 [redux-saga](https://redux-saga.js.org/) 역시 generator를 활용하고 있습니다.

[^1]: 디버거를 사용하면, 특정 시점의 호출 스택에 저장되어 있는 정보를 직접 확인해볼 수 있습니다.
[^2]: 다른 프로그래밍 언어에서는 이를 스택 프레임(stack frame)이라고 부르기도 합니다.
[^3]: 정확히는, microtask queue가 비워질때까지 브라우저의 렌더링이 멈춥니다. 여기서는 세부적인 내용을 생각하기 위해 위와 같이 설명했습니다.
[^4]: 혹은 웹 워커(Web Worker)에 위임을 할 수도 있습니다. 이 때에는 `message` 이벤트에 이벤트 리스너를 등록하는 방식으로 결과를 받습니다.
[^5]: 정확히는, 지연시간으로 0을 준다고 해도 바로 작업 큐에 추가되지 않고 4ms 지연시간이 흐른 뒤에 작업 큐에 추가됩니다. `setTimeout`에 4보다 작은 지연시간을 주면, 4ms 지연시간이 대신 사용되기 때문입니다. ([명세](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timer-initialisation-steps))
[^6]: 또 다른 유명한 구동환경인 Node.js에는 여러 입출력 API를 제공하면서, 각 API마다 동기식 API, 비동기식 API를 따로 제공하고 있습니다. [생활코딩](https://opentutorials.org/course/2136/11884) 강의를 참고하세요.
[^7]: Github REST API는 인증을 하지 않은 사용자보다 인증을 한 API 사용자에게 훨씬 더 관대한 사용량을 부여합니다. Github에는 [인증 토큰을 생성하고 토큰 별로 권한을 다르게 부여할 수 있는 기능](https://github.com/settings/tokens)이 있기 때문에, 이 기능을 활용하셔도 됩니다. 하지만 실습 시에는 최소한의 권한만을 부여한 토큰을 사용하시고, 더불어 토큰이 유출되지 않도록 각별히 주의하세요. 특히 repl.it은 코드를 자동으로 저장하는 기능을 내장하고 있기 때문에, 공개된 repl.it에서 편집 중인 코드에 토큰을 붙여넣는 행동을 해서는 안됩니다.
