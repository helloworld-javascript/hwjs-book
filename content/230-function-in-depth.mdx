# 함수 더 알아보기

## 객체로서의 함수

이전에도 언급했듯이, **함수는 `Function` 생성자로부터 생성되는 객체입니다.** 다만, 다른 객체들과는 다르게 **호출할 수 있다(callable)**는 특징이 있습니다.

함수 객체는 두 가지 유용한 속성을 갖고 있습니다.

- `length` - 함수의 매개변수의 개수를 반환합니다.
- `name` - 함수의 이름을 반환합니다.

```js
function add(x, y) {
  return x + y;
}
console.log(add.length); // 2
console.log(add.name); // add
```

`name` 속성의 값은 다양한 조건에 의해 결정됩니다. 자세한 사항은 [MDN 문서](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name)를 참고하세요.

## 주인 없는 this

`this`는 생성자 혹은 메소드에서 객체를 가리킬 때 사용하는 키워드입니다. 하지만, 생성자나 메소드가 아닌 함수에서 `this` 키워드를 사용한다고 해서 에러가 나지는 않습니다.[^1]

```js
function printThis() {
  console.log(this);
}

printThis(); // Window { ... }
```

위 예제에서 `this`는 **전역 객체**를 가리키고 있습니다!

예전 버전(ES5 미만)의 JavaScript에는 여러 가지 좋지 않은 부분들이 있는데, `this`가 전역 객체를 가리키는 성질은 이들 중 가장 대표적인 것입니다. 이런 이상한 동작 방식 때문에, **프로그래머의 작은 실수로 인해 큰 문제가 생길 수도 있습니다.**

```js
function Person(name) {
  this.name = name;
}

// `new`를 빠트린 채 생성자를 호출하면, `this`는 전역 객체를 가리키게 됩니다!
Person('john');

// 의도치 않게 전역 객체의 속성이 변경되었습니다.
console.log(window.name); // john
```

## 엄격 모드 (Strict Mode)

다행히, 위와 같은 실수를 미연에 방지할 수 있는 방법이 있습니다. JavaScript에는 **엄격 모드(strict mode)**라는 것이 있습니다. 엄격 모드에서는 JavaScript 언어의 동작 방식이 미묘하게 바뀌는데, 예전 버전 JavaScript의 특징으로 인해 프로그래머가 실수하기 쉬운 **몇 가지 문법에 대해 제약사항을 추가합니다.** 예를 들어, 엄격 모드에서는 위와 같이 `this`를 사용했을 때, 전역 객체 대신 `undefined`를 반환합니다.

엄격 모드를 활성화하려면 `.js` 파일 또는 함수의 가장 위에 `'use strict';`와 같이 문자열을 써 주면 됩니다. 파일 위에서 엄격 모드를 선언하면 해당 파일 전체가 엄격 모드로 동작하고, 함수 위에서 선언한다면 해당 함수만 엄격 모드로 동작합니다.

```js
function Person(name) {
  // 엄격 모드를 활성화합니다.
  'use strict';

  // `undefined`의 속성을 변경하려고 하고 있기 때문에, 에러가 납니다.
  this.name = name;
}

Person('john'); // TypeError: Cannot set property 'name' of undefined
```

이처럼 엄격 모드는 프로그래머의 실수를 미연에 방지해주기 때문에, **항상 사용하는 것이 좋습니다.**

그러면 엄격 모드를 사용하기 위해 매번 `'use strict';`를 직접 써주어야 할까요? 다행히도 그렇지는 않습니다.

**ES2015 모듈**을 이용해 작성된 코드는 **항상 엄격 모드로 동작**하기 때문에, 함수 위에 `'use strict';`를 붙여주지 않아도 엄격 모드로 동작합니다. 요즈음 만들어지는 클라이언트 측 JavaScript 코드는 대부분 Babel과 TypeScript같은 트랜스파일러를 통해 ES2015 모듈 방식으로 작성되기 때문에, 이런 도구를 사용하고 있다면 **본인이 작성하는 코드가 항상 엄격 모드로 동작하고 있다**고 생각해도 무방합니다.

엄격 모드에 대해서 자세히 알고 싶다면 [MDN 문서](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)를 참고하세요.

## this 바꿔치기

앞에서 봤던 것처럼, `this`는 때에 따라 다른 값을 가리킵니다. 심지어는 **우리가 원하는 값을 가리키게 만들 수도 있는데,** 함수 객체의 `bind`, `call`, `apply` 메소드를 사용하면 됩니다.

함수 객체의 `bind` 메소드를 호출하면, 메소드의 **인수로 넘겨준 값이 `this`가 되는 새로운 함수**를 반환합니다.

```js
function printGrade(grade) {
  console.log(`${this.name} 님의 점수는 ${grade}점입니다.`);
}

const student = {name: 'Mary'};
const printGradeForMary = printGrade.bind(student);

printGradeForMary(100); // Mary 님의 점수는 100점입니다.
```

`call` 혹은 `apply` 메소드를 사용하면, 새로운 함수를 만들지 않고도 임시적으로 `this`를 바꿔버릴 수 있습니다. `call`과 `apply`는 인수를 넘겨주는 형식에 차이가 있을 뿐, 나머지 기능은 동일합니다.

```js
function printGrade(grade) {
  console.log(`${this.name} 님의 점수는 ${grade}점입니다.`);
}

const student = {name: 'Mary'};

printGrade.call(student, 100); // Mary 님의 점수는 100점입니다.
printGrade.apply(student, [100]); // Mary 님의 점수는 100점입니다.
```

## arguments와 나머지 매개변수 (Rest Parameters)

`function` 구문을 통해 생성된 함수가 호출될 때는, `arguments`라는 변수가 함수 내부에 자동으로 생성됩니다. `arguments`는 유사 배열 객체(array-like object)이자 반복 가능한 객체(iterable object)로, 함수에 주어진 인수가 순서대로 저장되기 때문에 인덱스를 가지고 인수를 읽어오거나 `for...of`를 통해 순회할 수 있습니다.

```js
function add(x, y) {
  // `arguments[0]`에는 `x`와 같은 값이, `arguments[1]`에는 `y`와 같은 값이 저장됩니다.
  console.log(arguments[0], arguments[1]);
  return x + y;
}

add(1, 2); // 1 2
```

`arguments`는 ES2015 이전까지 **인수의 개수에 제한이 없는 함수**를 정의하는 데에 사용되고는 했습니다.

```js
function sum() {
  let result = 0;
  for (let item of arguments) {
    result += item;
  }
  return result;
}

sum(1, 2, 3, 4); // 10
```

하지만, ES2015에서 도입된 **나머지 매개변수(rest parameters)** 문법을 통해 똑같은 기능을 더 깔끔한 문법으로 구현할 수 있기 때문에, `arguments`는 더 이상 사용되지 않는 기능이 되었습니다.

```js
function sum(...ns) {
  let result = 0;
  for (let item of ns) {
    result += item;
  }
  return result;
}

sum(1, 2, 3, 4); // 10
```

위의 예제와 같이, 매개변수 앞에 `...`을 붙여주면, 해당 매개변수에 모든 인수가 저장됩니다. `arguments`와는 달리 나머지 매개변수는 **실제 배열**이기 때문에, 배열의 메소드를 활용할 수 있습니다.

```js
function sum(...ns) {
  // `for...of` 루프 대신에 `reduce` 메소드를 사용해서 합계를 구할 수 있습니다.
  return ns.reduce((acc, item) => acc + item, 0);
}

sum(1, 2, 3, 4); // 10
```

단, `...` 문법은 마지막 매개변수에만 사용할 수 있습니다.

```js
function printGrades(name, ...grades) {
  console.log(`${name} 학생의 점수는 ${grades.join(', ')} 입니다.`);
}

printGrades('Mary', 96, 78, 68); // Mary 학생의 점수는 96, 78, 68 입니다.
```

아래와 같이 마지막 매개변수가 아닌 매개변수에 `...` 문법을 사용하려고 하면 에러가 납니다.

```js
function printGrades(...grades, name) {
  console.log(`${name} 학생의 점수는 ${grades.join(',')} 입니다.`);
}
// SyntaxError: Rest parameter must be last formal parameter
```

사실 `arguments` 객체는 더 많은 기능을 포함하고 있지만, 여기에서 소개하지 않은 기능은 '주인 없는 this'와 함께 예전 버전 JavaScript의 좋지 않은 부분 중 하나이므로 사용하지 않는 것이 좋습니다. 그래도 어떤 기능이 있는지 궁금하시다면 [MDN 문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/arguments)를 참고하세요.

## 화살표 함수 (Arrow Function)

화살표 함수(arrow function)는 ES2015에서 도입된 **새로운 유형의 함수**입니다. 화살표 함수는 `(매개변수 목록) => {함수 내용}`과 같은 문법을 통해 정의할 수 있습니다.

```js
const add = (x, y) => {
  return x + y;
}
const negate = (x) => {
  return !x;
}
```

다만, 특정 조건을 만족하는 화살표 함수는 조금 더 간결한 문법으로 정의할 수도 있습니다.

- 만약 화살표 함수의 **매개변수가 하나**라면, **괄호를 생략**할 수 있습니다.
- 만약 화살표 함수의 내부가 **하나의 구문**으로 이루어졌다면, **중괄호를 생략**할 수 있습니다. 이 때, 이 **구문의 결과값이 곧 함수의 반환값**이 됩니다.

이 성질을 이용해 위 코드를 더 짧게 작성할 수 있습니다.

```js
const add = (x, y) => x + y;
const negate = x => !x;
```

`function` 구문으로 정의되는 함수와 비교했을 때, 화살표 함수는 문법 측면에서만 다른 것이 아니라 특별한 성질을 갖고 있습니다.

- 화살표 함수는 **생성자로 사용될 수 없습니다.** 따라서 `prototype` 속성을 갖고 있지 않습니다. 그리고 스스로의 `new.target`을 가지지 않습니다.
- 화살표 함수는 **스스로의 `this`, `arguments`, `super`를 가지지 않습니다.**[^2]
- 화살표 함수 내부에서 **`yield` 키워드를 사용할 수 없습니다.** 즉, 제너레이터로 사용될 수 없습니다.[^3]

여기서 스스로의 `this`를 가지지 않는다는 말은 함수 내부에서 `this`를 사용할 수 없다는 말이 아닙니다. 화살표 함수 내부에서 `this`를 사용하면, 그 `this`는 함수가 정의된 스코프에 존재하는 `this`를 가리킵니다. 이는 `new.target`, `arguments`, `super` 모두 마찬가지입니다.

```js
function Person(name) {
  this.name = name;
  this.getName = () => {
    // 여기에서 사용된 `this`는 '함수가 정의된 스코프', 즉 'Person 함수 스코프'에 존재하는 `this`를 가리키게 됩니다.
    return this.name;
  }
}

const mary = new Person('mary');
mary.getName(); // 'mary'
```

이런 성질 때문에, 화살표 함수 내부에 있는 `this`는 엄격 모드의 영향을 받지 않습니다.

```js
// 주의!
// 화살표 함수는 생성자로 사용될 수 없지만,
// 위 '엄격 모드' 파트에 있는 예제와 비슷하게 보이기 위해서
// 함수의 이름을 대문자로 시작하도록 했습니다.
const Person = (name) => {
  'use strict';
  this.name = name;
}

Person('mary');
console.log(window.name); // mary
```

화살표 함수를 통해 `this`를 다룰 때 주의해야 할 점에 대해서 조금 더 알아보겠습니다.

화살표 함수는 스스로의 `this`를 갖지 않는다고 했습니다. 이 때문에, 화살표 함수에 대해 `bind`, `call`, `apply` 메소드를 호출해도 **아무런 효과가 없습니다.**

```js
function Person(name) {
  this.name = name;
  this.getName = () => {
    // 여기에서 사용된 `this`는 '함수가 정의된 스코프',
    // 즉 'Person 함수 스코프'에 존재하는 `this`를 가리키게 됩니다.
    return this.name;
  }
}

const mary = new Person('mary');

// `this`를 바꿔보려고 해도, 아무런 효과가 없습니다.
mary.getName.call({name: 'john'}); // 'mary'
```

그리고, 화살표 함수 내부에서 `this`를 사용하면 **함수가 정의된 스코프에 있는 `this`**를 가리킨다고 했습니다. 즉, 화살표 함수 내부의 `this`는 **화살표 함수가 정의된 문맥에 의해 결정됩니다.**
`function` 구문으로 정의된 함수에서 쓰이는 `this`가 **어떻게 호출되는지에 의해 결정되는** 것과는 다른 동작 방식을 보입니다.

```js
const mary = {
  name: 'mary',
  getName: () => {
    return this.name;
  }
};

// 위의 화살표 함수는 전역 스코프에서 정의되었기 때문에, `this`는 전역 객체를 가리킵니다.
// `mary`의 메소드로 사용된다고 해도, 이 사실이 변하지 않습니다.
// 브라우저 환경의 전역 객체인 `window`는 `name`이라는 속성에 빈 문자열을 갖고 있기 때문에, 이 값이 대신 반환됩니다.
mary.getName(); // ''
```

이처럼, **객체의 속성 값에 메소드를 직접 정의할 때**에는 화살표 함수를 사용해서는 안 됩니다.

그러면 어떨 때 화살표 함수를 사용하는 게 좋을까요? 화살표 함수의 편리함은 **함수를 다른 함수의 인수로 넘겨야 할 때** 발휘됩니다. 함수를 받아서 호출하는 쪽에서 어떻게 호출하든, `this` 때문에 문제가 생길 일이 없습니다. 화살표 함수의 `this`는 '어떻게 정의되었는지'에 따라 결정되기 때문이죠!

아래 코드를 실행해보시고, `getName` 메소드를 일반적인 함수(`function () { ...`)로 바꾸어서 결과가 어떻게 나오는지 관찰해보세요.

```js
function Person(name) {
  this.name = name;
  this.getName = () => {
    return this.name;
  }
}

const mary = new Person('mary');

function printResult(func) {
  console.log(func());
}

// 화살표 함수로 정의된 메소드는 다른 함수의 인수로 넘겨도 아무런 문제가 없습니다!
printResult(mary.getName);
```

정리하겠습니다. `function` 구문으로 생성되는 함수가 단순한 함수 이외에 생성자나 제너레이터 등의 여러 기능까지 떠맡고 있는 반면에, 화살표 함수는 오직 **함수 혹은 메소드**로 사용되도록 만들어졌습니다. 그리고 어떻게 호출되더라도 `this`가 변하지 않고 문법이 간결하기 때문에, **함수를 값으로 다루어야 하는 경우 (특히 함수를 다른 함수의 인수로 넘겨야 하는 경우)** 에는 화살표 함수가 일반 함수보다 편리한 경우가 많습니다.

## 매개변수의 기본값 (Default Parameter)

앞에서 보았던 `Array.prototype.slice` 메소드는 인수를 주었을 때나 주지 않았을 때나 모두 잘 동작합니다.

```js
const arr = [1, 2, 3, 4, 5];
arr.slice(); // [1, 2, 3, 4, 5]
arr.slice(2); // [3, 4, 5]
arr.slice(2, 3); // [3]
```

이런 함수는 어떻게 만들 수 있을까요? 먼저 매개변수가 있는 함수에 아무런 인수도 주지 않았을 때 어떻게 되는지 확인해보겠습니다.

```js
// 인수를 그대로 반환하는 함수(identity function)입니다.
const ident = x => x;
ident(); // undefined
```

위와 같이, 함수 호출 시에 인수를 주지 않으면 매개변수에는 `undefined`가 대입됩니다. 이 사실을 이용해, 인수가 주어지지 않았을 때는 대신 미리 설정된 값을 사용하는 함수를 작성할 수 있습니다.

```js
function hello(name) {
  // 매개변수는 `var` 변수와 같은 성질을 갖기 때문에, 재대입을 할 수 있습니다.
  if (name === undefined) {
    name = 'Mary';
  }
  console.log(`Hello, ${name}!`);
}

hello('John'); // Hello, John!
hello(); // Hello, Mary!
hello(undefined); // Hello, Mary!
```

JavaScript 세계에서 위와 같은 기법이 너무 많이 사용되었던 관계로, 이를 쉽게 만들어주는 문법이 ES2015에서 도입되었습니다. 이 문법을 **매개변수의 기본값(default parameter)**이라고 부릅니다. 이를 이용해서 위의 예제와 완전히 같은 일을 하는 함수를 아래와 같이 작성할 수 있습니다.

```js
// 'Mary'가 `name` 매개변수의 기본값이 됩니다.
function hello(name = 'Mary') {
  // 코드가 훨신 더 깔끔해졌습니다!
  console.log(`Hello, ${name}!`);
}

hello('John'); // Hello, John!
hello(); // Hello, Mary!
hello(undefined); // Hello, Mary!
```

[^1]: [repl.it](https://repl.it/languages/babel)을 통해 이 코드를 실행시키면 에러가 납니다. 이것은 repl.it의 동작 방식 때문에 브라우저 보안정책에 따른 에러가 난 것입니다. 대신 브라우저의 개발자 콘솔을 열어서 그곳에서 코드를 실행시켜보세요.
[^2]: `super`는 [클래스와 OOP](./270-class.md) 챕터에서 자세히 다룹니다.
[^3]: 제너레이터는 [Iteration](./260-iteration.md) 챕터에서 자세히 다룹니다.
