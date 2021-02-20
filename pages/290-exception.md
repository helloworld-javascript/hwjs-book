# 예외 처리

JavaScript에는 코드 실행 중에 예기치 못한 에러가 발생했을 때, 이로부터 코드의 실행 흐름을 복구할 수 있는 기능이 내장되어 있습니다. 이런 기능을 일러 **예외 처리(exception handling)**라고 합니다.

## 동기식 코드에서의 예외 처리

JavaScript 코드에서 발생할 수 있는 에러에는 다양한 것들이 있습니다. 문법 에러와 같이 프로그래머의 실수로 인해 에러가 발생하는 경우도 있지만, 네트워크 에러와 같이 코드와는 무관한 이유로 발생하는 에러도 있습니다.

```js
new Array(-1); // RangeError: Invalid array length
```

```js
console.log(foo); // ReferenceError: foo is not defined
```

```js
fetch('https://nonexistent-domain.nowhere'); // TypeError: Failed to fetch
```

코드 실행 중에 에러가 발생하면, **코드의 실행이 중단되어 그 시점에 실행 중이었던 작업을 완료할 수 없게 됩니다.** JavaScript는 이로부터 **코드의 실행 흐름을 원상복구**할 수 있는 기능을 제공하며, `try...catch...finally` 구문을 사용하면 에러가 나더라도 코드의 실행을 지속할 수 있습니다.

```js
try {
  console.log('에러가 나기 직전까지의 코드는 잘 실행됩니다.');
  new Array(-1); // RangeError: Invalid array length
  console.log('에러가 난 이후의 코드는 실행되지 않습니다.');
} catch (e) {
  console.log('코드의 실행 흐름이 catch 블록으로 옮겨집니다.');
  alert(`다음과 같은 에러가 발생했습니다: ${e.name}: ${e.message}`);
}
```

에러가 났을 때 원상복구를 시도할 코드를 `try` 블록 내부에 작성하면, 에러가 발생했을 때 코드의 실행 흐름이 `try` 블록에서 `catch` 블록으로 옮겨갑니다. 이 때, `catch` 블록 안에서는 에러에 대한 정보를 담고 있는 객체(위 코드의 `e`)를 사용할 수 있습니다. 만약 `e` 객체를 사용하지 않는다면 아래 예제처럼 생략할 수 있습니다.

```js
try {
  new Array(-1); // RangeError: Invalid array length
} catch {
  alert(`에러가 발생했습니다.`);
}
```

`try` 블록은 예외 처리를 위해서만 쓰이는 것은 아닙니다. `try` 블록 바로 뒤에 `finally` 블록이 오면, `finally` 블록에 있는 코드는 `try` 블록 안에서의 에러 발생 여부와 관계 없이 **무조건 실행됩니다.** 심지어 `try` 블록 내에서 `return`, `break`, `continue` 등으로 인해 **코드의 실행 흐름이 즉시 이동될 때에도 마찬가지**입니다.

```js
for (let i of [1, 2, 3]) {
  try {
    if (i === 3) {
      break;
    }
  } finally {
    console.log(`현재 i의 값: ${i}`);
  }
}
```

`finally` 블록은 `catch` 블록과도 같이 사용됩니다. 이 때 코드의 실행 순서를 정리해 보면 다음과 같습니다.

- 에러가 안 났을 때: `try` - `finally`
- 에러가 났을 때: `try` - **에러 발생** - `catch` - `finally`

아래 코드를 통해 코드의 실행 순서를 시험해보세요.

```js
try {
  console.log('try');
  new Array(-1); // RangeError: Invalid array length
} catch (e) {
  console.log('catch');
} finally {
  console.log('finally');
}
```

## 직접 에러 발생시키기

`Error` 생성자와 `throw` 구문을 사용해서 프로그래머가 직접 에러를 발생시킬 수 있습니다.

```js
const even = parseInt(prompt('짝수를 입력하세요'));
if (even % 2 !== 0) {
  throw new Error('짝수가 아닙니다.');
}
```

간혹 프로그램을 작성하면서 **에러의 종류를 구분**해야 하거나 **에러 객체에 기능을 추가**해야 할 필요가 있습니다. 이런 경우에는 **`Error`를 상속받는 클래스**를 만들어서, `throw` 구문에서 이 클래스를 대신 사용할 수 있습니다.

예를 들어, 아래 `MyError` 클래스를 통해 에러 객체를 생성할 때 에러에 대한 상세 정보를 포함시키면, `catch` 블록 안에서 원상복구를 위해 이 값을 활용할 수 있습니다.

```js
class MyError extends Error {
  constructor(value, ...params) {
    super(...params);
    this.value = value;
    this.name = 'MyError';
  }
}

try {
  const even = parseInt(prompt('짝수를 입력하세요'));
  if (even % 2 !== 0) {
    throw new MyError(even, '짝수가 아닙니다.');
  }
} catch (e) {
  if (e instanceof MyError) {
    console.log(e.value);
  }
}
```

## 비동기식 코드에서의 예외 처리

### 비동기 콜백

**비동기식으로 작동하는 콜백**의 **내부**에서 발생한 에러는, **콜백 바깥**에 있는 `try` 블록으로는 잡아낼 수 없습니다.

```js
try {
  setTimeout(() => {
    throw new Error('에러!');
  });
} catch (e) {
  console.error(e);
}
```

JavaScript 엔진은 에러가 발생하는 순간 **호출 스택을 되감는 과정**을 거칩니다. **이 과정 중에 `try` 블록을 만나야** 코드의 실행 흐름을 원상복구시킬 수 있습니다. 위 예제에서 `setTimeout`에 넘겨진 콜백에서 에러가 발생하면, 호출 스택을 따라 올라가도 `try` 블록을 만나는 것이 아니므로, 코드의 실행 흐름이 `catch` 블록으로 옮겨지지 않는 것입니다.

따라서, 위 예제의 `try` 블록을 비동기 콜백 내부에 작성해주어야 합니다.

```js
setTimeout(() => {
  try {
    throw new Error('에러!');
  } catch (e) {
    console.error(e);
  }
});
```

### Promise

Promise 객체는 세 가지 상태를 가질 수 있습니다.

- pending - Promise 객체에 결과값이 채워지지 않은 상태
- fulfilled - Promise 객체에 결과값이 채워진 상태
- **rejected - Promise 객체에 결과값을 채우려고 시도하다가 에러가 난 상태**

Promise 객체가 rejected 상태가 되면, 이 Promise에 대해서는 `then` 메소드에 첫 번째 인수로 넘겨준 콜백이 실행되지 않고, **두 번째 인수로 넘겨준 콜백**이 대신 실행됩니다. 그리고 이 콜백에는 **에러 객체가 첫 번째 인수**로 주어집니다.

```js
const p = new Promise(resolve => {
  const even = parseInt(prompt('짝수를 입력하세요'));
  if (even % 2 !== 0) {
    throw new Error('짝수가 아닙니다.');
  } else {
    resolve(even);
  }
});

p.then(even => {
  return '짝수입니다.';
}, e => {
  return e.message;
}).then(alert);
```

혹은, **`catch` 메소드**를 통해 에러 처리 콜백을 지정해줄 수도 있습니다.

```js
p.then(even => {
  return '짝수입니다.';
}).catch(e => {
  return e.message;
}).then(alert);
```

만약, `then` 메소드의 연쇄 안에서 에러가 발생하면, `try...catch` 구문과 유사하게 **처음 만나는 에러 처리 콜백으로 코드의 실행 흐름이 건너뛰는 결과**를 낳게 됩니다.

```js
Promise.resolve()
  .then(() => {
    throw new Error('catch 메소드를 통해 예외 처리를 할 수 있습니다.');
  })
  .then(() => {
    console.log('이 코드는 실행되지 않습니다.');
  })
  .catch(e => {
    return e.message;
  })
  .then(console.log);
```

### 비동기 함수

앞에서 봤던 Promise 객체의 예외 처리 방식은, 일반적인 동기식 예외 처리 방식과 다르게 **콜백**을 사용하고 있어서 코드를 복잡하게 만드는 원인이 됩니다.

비동기 함수 내부에서는, **rejected 상태가 된 Promise 객체**를 동기식 예외 처리 방식과 동일하게 **`try...catch...finally` 구문으로 처리할 수 있습니다.**

```js
async function func() {
  try {
    const res = await fetch('https://nonexistent-domain.nowhere');
  } catch (e) {
    console.log(e.message);
  }
}

func(); // 출력 결과: Failed to fetch
```

단, Promise 객체에 대해 **`await` 구문**을 사용하지 않는 경우, 에러가 발생해도 `catch` 블록으로 코드의 실행 흐름이 이동하지 않는다는 사실을 기억하세요.

```js
async function func() {
  try {
    fetch('https://nonexistent-domain.nowhere');
  } catch (e) {
    console.log(e.message);
  }
}

func(); // 아무것도 출력되지 않습니다.
```
