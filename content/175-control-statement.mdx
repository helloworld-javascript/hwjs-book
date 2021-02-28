# 제어 구문

이제까지 나온 코드 예제들은 아주 단순한 계산과 입출력을 하는 프로그램이었습니다. 하지만 실제로 사용되는 프로그램들은 복잡한 **논리 구조**를 갖고 있고, 그를 통해 프로그램의 여러 기능이 제대로 동작하는 것입니다. 이 챕터에서는 프로그램의 논리 구조를 표현할 수 있는 **조건문과 반복문**, 그리고 그 밖에 프로그램의 논리 구조에 영향을 미치는 구문들을 살펴볼 것입니다.

## 조건문 (Conditional Statement)

우리가 실제로 사용하는 프로그램들은 수많은 **'경우의 수'**을 다루고 있습니다.

- 사용자가 스프레드시트의 셀을 클릭했을 때, **만약** 그것이 왼쪽 클릭이면 해당 셀을 선택하고, 왼쪽 더블이면 해당 셀을 편집 모드로 전환하고, 오른쪽 클릭이면 메뉴를 보여준다.
- 사용자가 더블 클릭한 물약이 **만약** 빨강 물약이면 HP를 채우고, 파랑 물약이면 MP를 채운다.
- 사용자가 전송 버튼을 클릭했을 때, **만약** 입력 필드가 모두 채워져 있지 않으면 에러 메시지를 보여주고, 입력 필드가 모두 채워져 있으면 서버로 입력 필드의 내용을 전송한다.

이렇게 경우에 따라 프로그램의 동작이 달라야 할 때, 우리는 **조건문(conditional statement)**을 통해 프로그램의 논리 구조를 표현할 수 있습니다.

## `if...else` 구문

`if...else` 구문을 사용하면 조건에 따라 특정 영역의 코드를 실행시키거나 실행시키지 않을 수 있습니다. 아래의 예제를 통해 사용법을 알아보겠습니다.

```js
function roll() {
  return Math.ceil(Math.random() * 6);
}

function game() {
  const result = roll();

  alert(`결과: ${result}`);

  // if...else 구문
  if (result >= 4) {
    // 괄호 안의 조건을 만족하면, 즉 결과값이 true 이면
    // 이 영역의 코드가 실행된다.
    alert('당신이 이겼습니다!');
  } else {
    // 위 조건을 만족하지 않으면, 즉 결과값이 false 이면
    // 대신 이 영역의 코드가 실행된다.
    alert('당신이 졌습니다.');
  }
}

game();
```

위 코드를 직접 실행해보세요.

`else`가 필요 없는 경우에는 `else`를 생략할 수 있습니다.

```js
  if (result === 6) {
    alert('당신은 운이 좋군요!');
  }
```

중괄호(curly brace) 내부에 들어있는 구문이 하나라면, 중괄호를 생략해 줄 수도 있습니다.

```js
  if (result === 6) alert('당신은 운이 좋군요!');
```

### `if...else` 구문의 중첩

만약 세 개 이상의 경우의 수를 `if...else`를 통해 표현하려면, `if...else`를 **중첩**시키면 됩니다.

주사위를 굴려 3 또는 4가 나오면 비긴 것으로 게임을 고쳐보겠습니다.

```js
function roll() {
  return Math.ceil(Math.random() * 6);
}

function game() {
  const result = roll();

  alert(`결과: ${result}`);

  if (result >= 5) {
    alert('당신이 이겼습니다!');
  } else {
    // 중첩된 if...else 구문
    if (result >= 3) {
      alert('비겼습니다.');
    } else {
      alert('당신이 졌습니다.');
    }
  }
}

game();
```

위와 같이 `if...else` 구문이 단순히 중첩된 경우라면 바깥쪽 `else`의 중괄호(curly brace)를 생략할 수도 있습니다.

```js
  if (result >= 5) {
    alert('당신이 이겼습니다!');
  } else if (result >= 3) {
    alert('비겼습니다.');
  } else {
    alert('당신이 졌습니다.');
  }
```

코드가 이전보다 훨씬 보기 좋아졌습니다. `if...else`의 중첩에는 제한이 없으므로, 경우의 수가 많은 경우에는 `if...else` 구문을 아래와 같이 계속 이어나갈 수 있습니다.

```js
function translateColor(english) {
  if (english === 'red') {
    return '빨강색';
  } else if (english === 'blue') {
    return '파랑색';
  } else if (english === 'purple' || english === 'violet') {
    return '보라색';
  } else {
    return '일치하는 색깔이 없습니다.';
  }
}
```

## switch 구문

바로 위의 예제와 같이 하나의 변수에 대해 많은 경우의 수가 있는 경우, `switch` 구문을 사용하면 코드를 조금 더 보기 좋게 만들 수 있습니다.

아래 예제는 바로 위의 코드 예제와 완전히 똑같이 동작합니다.

```js
function translateColor(english) {
  let result;
  switch (english) {
    case 'red':
      result = '빨강색';
      break;
    case 'blue':
      result = '파랑색';
      break;
    case 'purple':
      result = '보라색';
      break;
    case 'violet':
      result = '보라색';
      break;
    default:
      result = '일치하는 색깔이 없습니다.';
  }
  return result;
}
```

`switch` 구문은 `case`, `break`, `default`라는 키워드와 함께 사용됩니다. `switch` 바로 뒤의 괄호의 값이 '코드 실행 여부를 판별할 기준이 되는 값'이고, 이 기준이 되는 값과 `case` 바로 뒤에 오는 값이 **일치**[^1]하면 콜론(:) 뒤의 코드 영역이 실행됩니다. 일치하는 값이 없으면 `default` 코드 영역이 대신 실행됩니다.

단, 여기서 주의할 점이 있습니다. `case` 뒤쪽의 코드 영역 마지막에 `break`를 써주지 않으면, 해당 `case`가 실행될 때 바로 뒤의 `case` 코드 영역이 뒤이어 실행되게 됩니다. 예를 들어, 위 코드 예제에서 `case 'blue':` 부분의 `break`를 지우고 코드를 실행해보면 이런 결과가 나옵니다.

```js
translateColor('blue'); // '보라색'
```

위와 같이 함수를 호출하면 `case 'blue':` 뒤쪽의 코드 영역이 실행되는데, 이 안에 `break`를 써주지 않았기 때문에 다음에 나오는 `case 'purple':` 뒤쪽의 코드 영역이 같이 실행되었습니다.

이처럼 `break`를 써 주지 않으면 의도치 않은 동작을 할 수 있으니 주의하세요. 다만 `break`의 이런 성질을 활용해서 코드를 짧게 쓸 수도 있습니다.

```js
function translateColor(english) {
  let result;
  switch (english) {
    case 'red':
      result = '빨강색';
      break;
    case 'blue':
      result = '파랑색';
      break;
    case 'purple':
    case 'violet':
      // 이 코드 영역은 english 변수의 값이 'purple'일 때와 'violet'일 때 모두 실행됩니다.
      result = '보라색';
      break;
    default:
      result = '일치하는 색깔이 없습니다.';
  }
  return result;
}
```

## 반복문 (Looping Statement)

프로그래밍을 하다보면 유사한 작업을 여러 번 반복해서 해야할 경우가 있습니다.

- 스프레드시트의 A열에 있는 각 셀의 글자수를 구해서 B열에 집어넣는 작업을 첫 번째 행부터 1000 번째 행까지 **반복**
- 바둑의 승리자가 결정될 때까지 번갈아가며 턴을 **반복**
- 게시글에 달린 여러 개의 댓글을 보여주는 작업을 각 댓글에 대해 **반복**

위와 같은 작업을 하기 위해 JavaScript에서는 반복문(looping statement)을 사용합니다. 반복문은 **루프**라고 불리기도 합니다.

## `while` 구문

`while` 구문은 특정 조건을 만족하는 한 코드를 반복해서 실행시킵니다.

```js
let i = 0; // 초기값

while (i < 5) {
  // 위 괄호의 값이 `true`인 동안에는
  // 이 안쪽의 코드를 반복해서 실행시킵니다.
  console.log(`현재 i의 값: ${i}`);
  i++; // 갱신
}

console.log('루프가 종료되었습니다.');
```

처음에 `i`의 값이 0이었다가, 코드가 실행됨에 따라 점차 증가하면서 결국 `i < 5`의 값이 `false`가 되면, `while` 구문은 더 이상 내부 코드를 실행시키지 않고 실행 흐름을 다음으로 넘깁니다.

## `do...while` 구문

`do...while` 구문은 `while` 구문과 사용법은 크게 다르지 않으나, **내부 코드를 무조건 한 번은 실행시킨다**는 차이점이 있습니다.

```js
do {
  console.log('do...while!');
} while (false); // 절대 `true`가 될 수 없지만, 루프는 1회 실행됩니다.
```

## `for` 구문

위의 `while` 구문 예제에서 볼 수 있듯이, 루프에는 초기값과 갱신에 대한 코드가 있는 경우가 많습니다. 이런 경우에는 `for` 구문을 이용해 코드를 조금 더 짧게 짤 수 있습니다. 아래 예제는 위 `while` 구문에 대한 예제와 완전히 똑같이 작동합니다.

```js
// for (초기값 정의; 실행 조건; 갱신) { ... }
for (let i = 0; i < 5; i++) {
  console.log(`현재 i의 값: ${i}`);
}
console.log('루프가 종료되었습니다.');
```

`for` 구문으로 정의된 루프는 항상 `while` 구문으로 바꿔쓸 수 있고, 많은 경우 반대로도 바꿀 수 있습니다. 다만 위와 같이 초기값을 정할 수 있고 갱신을 위한 코드가 짧은 경우에는 `for` 구문을, 그렇지 않은 경우에는 `while` 구문을 사용해야 코드가 깔끔해집니다.

### 배열의 순회

ES2015가 나오기 이전까지는 `for` 구문이 배열을 순회하는 데에도 많이 사용되었습니다.

```js
const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  console.log(`배열의 ${i + 1} 번째 요소는 ${arr[i]} 입니다.`);
}
```

하지만 근래에는 배열의 `forEach` 메소드나 `for...of` 구문이 더 많이 쓰이는 편입니다.

```js
const arr = [1, 2, 3, 4, 5];

arr.forEach((item, index) => {
  console.log(`배열의 ${index + 1} 번째 요소는 ${item} 입니다.`);
})
```

```js
const arr = [1, 2, 3, 4, 5];

for (let item of arr) {
  console.log(`현재 요소는 ${item} 입니다.`);
}
```

`for...of` 구문에 대해서는 [Iterable](./260-iteration.md) 챕터에서 자세히 다룹니다.

## `break`, `continue`

간혹 루프를 도중에 멈추거나, 남은 코드를 건너뛰어버리고 루프의 다음 번 차례로 넘어가야 할 필요가 있습니다. 이 때 사용되는 구문이 `break`와 `continue` 입니다.

```js
alert('퀴즈를 시작합니다.');
while (true) {
  const answer = prompt('빨강의 보색은 무엇일까요?');
  if (answer === '초록') {
    alert('정답입니다! 🎉');
    break; // 루프를 종료하고 다음 코드로 넘어감
  } else {
    alert('틀렸습니다! 다시 시도해보세요.');
  }
}
alert('퀴즈가 끝났습니다.');
```

```js
for (let i = 1; i < 100; i++) {
  console.log(`현재 숫자는 ${i} 입니다.`);
  if (i % 7 !== 0) {
    continue; // 루프의 나머지 코드를 건너뜀
  }
  console.log(`${i}는 7의 배수입니다.`);
}
```

## 함수를 즉시 종료하기

`continue`와 `break`가 루프의 나머지 코드를 건너뛰는 효과를 갖는 것과 유사하게, `return`과 `throw`는 함수의 나머지 코드를 건너뛰고 함수를 즉시 종료시키는 결과를 낳습니다.

### `return`

`return`

```js
function translateColor(english) {
  switch (english) {
    case 'red': return '빨강색';
    case 'blue': return '파랑색';
    case 'purple':
    case 'violet': return '보라색';
    default: return '일치하는 색깔이 없습니다.';
  }
}
```

### `throw`

```js
function translateColor(english) {
  switch (english) {
    case 'red': return '빨강색';
    case 'blue': return '파랑색';
    case 'purple':
    case 'violet': return '보라색';
    default: throw new Error('일치하는 색깔이 없습니다.');
  }
}
```

`throw` 구문은 코드의 실행을 중단시키고 에러를 발생시키는 동작을 합니다. 이에 대해서는 [예외 처리](./290-exception.md) 챕터에서 자세히 다룹니다.

[^1]: 일치 여부는 strict equality, 즉 `===` 연산자와 같은 방식에 의해 결정됩니다. ([명세](http://www.ecma-international.org/ecma-262/5.1/#sec-12.11))
