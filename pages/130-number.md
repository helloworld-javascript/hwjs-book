# number 타입

## number 타입 리터럴

number 타입 리터럴에는 다음과 같은 것들이 있습니다.

```js
7; // 정수 리터럴
2.5; // 부동 소수점 리터럴
0b111; // 2진수 리터럴 (binary literal)
0o777; // 8진수 리터럴 (octal literal)
0xf5; // 16진수 리터럴 (hexademical literal)
10_000 // 숫자 구분 기호 (Numeric Separators)
```

2진수, 16진수 정수 리터럴은 표기법일 뿐, 내부적으로는 10진수 정수와 같은 형태로 다루어집니다.
예를 들어 `0x4d`는 `0b1001101` 혹은 `77`과 완전히 같은 값입니다.

```js
0x4d === 77; // true
0b1001101 === 77; // true
```

숫자 구분 기호 (Numeric Separators) 역시 프로그래머가 숫자를 가독성있게 읽기 위한 표기법일 뿐, 값은 10진수 형태로 저장됩니다. 달러에서 1000 단위로 구분 기호 `,`를 사용하는 것 처럼 `_`로 구분하는 것이 대표적인 예입니다. 숫자 구분 기호 (Numeric Separators)는 ES2021에 포함된 문법으로 [특정 브라우저 버전](https://caniuse.com/?search=Numeric%20Separators)에서만 사용할 수 있습니다.

```js
10_000 // 10000
25_125.00 // 25125

// n진수 리터럴에도 사용할 수 있습니다.
0b01010110_00111000 // 22072
```

모든 number 타입 리터럴에 대해 `typeof` 연산을 해보면 `'number'`라는 결과가 나옵니다.

```js
typeof 1; // 'number'
typeof 0x4d; // 'number'
typeof 10_000 // 'number'
```

## 정수인지 실수인지 판별하기

다른 많은 프로그래밍 언어와는 다르게, JavaScript는 정수와 실수를 별도의 타입으로 다루지 않습니다. 다만 어떤 수가 정수인지, 혹은 실수인지를 판별할 수는 있고, 이를 위해 `Number.isInteger` 메소드를 사용합니다.

```js
Number.isInteger(1); // true
Number.isInteger(0.1); // false
```

## number 타입에 대한 연산

number 타입에 대해 아래와 같은 연산자(operator)를 사용해 연산을 할 수 있습니다.

```js
// 산술 연산 (arithmetic operators)
1 + 2; // 더하기
3 - 4; // 빼기
5 * 6; // 곱하기
7 / 8; // 실수 나누기
14 % 3; // 나머지
2 ** 3; // 거듭제곱

// 비교 연산 (comparison operators)
1 < 2; // 작다
3 > 4; // 크다
5 <= 5; // 작거나 같다
6 >= 7; // 크거나 같다
8 === 8; // 같다
8 !== 9; // 같지 않다

// 증가/감소 연산 (incresement/decreasement operators)
let a = 1; ++a; // 연산결과는 2, a는 2
let b = 1; b++; // 연산결과는 1, b는 2
let c = 1; --c; // 연산결과는 0, c는 0
let d = 1; d--; // 연산결과는 1, d는 0

// 할당 연산 (assignment operators)
// x에 1을 더한 후 다시 x에 할당하기. 결과적으로 x에는 1이 저장됩니다.
let x = 0;
x += 1;

// `+=` 연산은 아래 연산과 완전히 같은 동작을 합니다.
x = x + 1;

// 덧셈 뿐 아니라 다른 모든 산술 연산자에 대해 할당 연산을 할 수 있습니다.
x -= 1;
x *= 2;
x /= 3;
x %= 4;
x **= 5;
```

## 연산자 우선순위 (Operator Precedence)

한 구문에 여러 개의 연산자를 이어서 쓴 경우, 어떤 연산자는 먼저 계산되고 어떤 연산자는 나중에 계산됩니다. 이는 연산자 우선순위(operator precedence)에 의해 결정됩니다. 자세한 내용은 [MDN 링크](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/%EC%97%B0%EC%82%B0%EC%9E%90_%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84)를 참고해주세요.

```js
3 + 4 * 5; // 23
```

## 부동 소수점 (Floating Point) vs 고정 소수점 (Fixed Point)

[REPL](https://repl.it/languages/babel)에서 아래 식을 계산해봅시다.

```js
0.1 + 0.2;
```

놀라셨나요? 컴퓨터는 소수를 2진수를 이용해 저장하기 때문에, 위의 예제처럼 컴퓨터는 10진수 소수를 정확히 다룰 수 없습니다. 사실 우리가 코드 상에서 `0.1`이라는 값을 사용한다고 해도, 컴퓨터의 내부에서 다루어지는 `0.1`이라는 값에는 어느 정도의 오차가 존재합니다. 이 오차를 반올림 오차(rounding error)라고 합니다.

컴퓨터로 소수를 표현하는 방식으로 [IEEE 754](https://ko.wikipedia.org/wiki/IEEE_754)라는 표준이 널리 사용됩니다. 이 표준을 대부분의 프로그래밍 언어가 따르고 있어서 다른 프로그래밍 언어에서도 반올림 오차가 존재합니다.

그러면 사람들은 왜 이런 오차를 그냥 놔두는 것일까요? 이는 **계산 상의 효율성**을 위한 것입니다. 컴퓨터의 저장용량은 한정되어 있고 내부적으로 0과 1밖에 다룰 수 없으므로, 이런 제약 아래에서 10진수 소수를 아주 빠르게 계산하기 위해서 컴퓨터 설계자들이 이런 선택을 한 것입니다. 원주율과 같은 무한소수를 정말로 오차없이 다루려면 무한한 저장용량과 무한한 계산 성능이 필요하겠죠?

이러한 오차는 정수에서도 확인할 수 있습니다. 자바스크립트는 정수도 실수와 똑같은 방식(부동소수점)으로 처리하기 때문에 큰 정수에 대해서 다음과 같은 표현 및 연산의 오차를 보입니다.

```js
10000000000000001 + 10000000000000002 // 20000000000000000
12345678901234567890 // 12345678901234567000
```

만약 금융 분야와 같이 조금의 오차도 허용되지 않는 분야라면, 이런 오차가 큰 문제가 될 수 있습니다. 이 때에는 전용 라이브러리를 사용해서 문제를 해결할 수 있습니다만, 역시 자릿수 제한이나 연산 상의 제약이 존재하고, 무엇보다도 연산 속도가 느립니다. 그래도 정확도 면에서는 내장 실수 연산을 사용하는 것보다는 훨씬 낫죠.

실수 연산을 하는 프로그램을 만들 때에는, 본인이 어떤 유형의 실수 연산을 필요로 하는지 미리 파악한 후, 어느 쪽을 선택할 지 결정해야 합니다. 내장 실수 연산으로는 부족하다는 결론을 내렸을 때에는, `decimal` 혹은 `big integer` 등의 키워드로 검색해서 관련 라이브러리를 찾아보세요. [이 링크](https://runkit.com/embed/iw9fpzeivj7g)에서 `bignumber.js` 라이브러리 예제를 확인해보세요.

만약 실수가 아닌 아주 큰 정수만 다루어도 된다면 ES2020에 포함된 BigInt Literal을 사용할 수 있습니다. 다만 최신 문법이기 때문에 [특정 브라우저 버전](https://caniuse.com/?search=Bigint)에서만 사용할 수 있습니다.

```js
12345678901234567890n // 12345678901234567890n
BigInt(12345678901234567890) // 12345678901234567890n

10000000000000001n + 10000000000000002n // 20000000000000003n

// Bigint는 "bigint" 타입이므로 "number"타입과 연산할 수 없습니다.
typeof 10000n // "bigint"
10000 + 10000n // Uncaught TypeError: Cannot mix BigInt and other types
```

반올림 오차에 대한 자세한 내용을 알고 싶다면 [이 문서](http://floating-point-gui.de/basic/)를 읽어보세요.

## number 타입의 특이한 값들

다음 값들도 모두 number 타입에 속합니다.

```js
NaN
-0
Infinity
-Infinity
```

`NaN`과 `Infinity` 역시 [IEEE 754](https://ko.wikipedia.org/wiki/IEEE_754) 표준에 정의되어 있는 값들입니다.

### NaN

`NaN`은 **'Not a Number'**의 약자로, 계산 불가능한 연산의 결과값을 나타내기 위해 사용됩니다.

```js
0 / 0; // NaN
1 * 'hello'; // NaN
```

`NaN`은 JavaScript의 값들 중 유일하게 **자기 자신과 같지 않은 값**입니다. 따라서 어떤 값이 `NaN`인지 판별하기 위해서는 일반적인 비교 연산자를 사용하면 안 되고, 대신 `Number.isNaN` 또는 `Object.is` 함수를 사용해야 합니다.

```js
const thisIsNan = NaN;

// 주의! 이렇게 하면 안 됩니다.
thisIsNan === NaN; // false

// 이렇게 해야 합니다.
Number.isNaN(thisIsNan); // true
Object.is(thisIsNan, NaN); // true
```

### -0

JavaScript에서 `0`과 `-0`은 별개의 값이지만, 비교 연산을 해보면 결과값이 `true`로 나옵니다. 즉, 거의 모든 경우에 `0`과 같은 값으로 간주됩니다.

```js
0 === -0; // true
1 * -0; // -0
1 + -0; // 1
```

그러나 몇몇 예외가 존재합니다. `Object.is` 함수는 `0`과 `-0`을 다른 값으로 취급합니다.

```js
Object.is(0, -0); // false
```

그리고 0이 아닌 어떤 수를 `0` 혹은 `-0`으로 나눌 때에도 결과값이 다릅니다.

```js
1 / 0; // Infinity
1 / -0; // -Infinity
```

### Infinity

JavaScript는 **무한대**를 나타내기 위한 값인 `Infinity`를 내장하고 있으며, 아래와 같이 동작합니다.

```js
1 / Infinity; // 0
1 / -Infinity; // -0
```

어떤 값이 `Infinity`인지 아닌지 판별하려면, `Number.isFinite` 메소드를 사용하세요. 비슷한 기능의 `isFinite`라는 전역 함수도 존재하긴 하지만, 동작이 미묘하게 다르므로 ES2015에 추가된 `Number.isFinite`를 사용하시는 걸 추천합니다.

```js
Number.isFinite(1); // true
Number.isFinite(Infinity); // false
Number.isFinite('1'); // false
isFinite('1'); // true - `isFinite`는 문자열을 숫자로 변환합니다.
```

## parseInt, parseFloat

문자열을 number 타입으로 바꾸기 위해 `parseInt` 혹은 `parseFloat` 함수를 사용할 수 있습니다.

```js
parseInt('123'); // 123
parseInt('110', 2); // 6 (문자열을 2진수로 간주한다.)
parseFloat('12.345'); // 12.345
parseInt('hello'); // NaN
```

## 다른 타입과의 연산

JavaScript는 number 타입과 다른 타입 간의 연산도 허용하지만, 그 결과가 별로 우아하지는 않습니다.

```js
1 + null; // null
1 * '1'; // NaN
1 + '1'; // '11'
1 - '1'; // 0
```

보시다시피, 피연산자로 어떤 타입의 값이 오느냐, 어떤 연산자를 사용하느냐에 따라 결과값의 타입이 달라집니다. 이런 부분은 JavaScript가 **"일관적이지 않다"**고 비난받는 부분이기도 합니다. 일관적이지 않은 연산을 사용한 코드는, 코드의 의도를 이해하기 어렵기 때문에 좋지 않은 코드로 평가됩니다. 따라서 **number 타입과 다른 타입의 연산은 웬만하면 피하는 것이 좋습니다.**

특히 `prompt`나 `input` 태그 등을 통해 사용자로부터 입력받은 데이터는 `undefined` 혹은 문자열일 가능성이 높습니다. 이런 경우에는 **수 연산을 하기 전에** 모든 피연산자를 확실히 number 타입으로 만들어주는 것이 좋은 습관입니다.

```js
const input = prompt('정수를 입력하세요');
const num = parseInt(input);
if (Number.isNaN(num)) {
  alert('정수가 아닙니다.');
} else {
  const result = num * 2; // 안심하고 연산을 할 수 있습니다.
  alert(`${num}의 두 배는 ${result} 입니다.`);
}
```

## Math 객체

JavaScript에 내장된 `Math` 객체에는 수 연산을 위한 많은 메소드와 상수들이 내장되어 있습니다.

```js
// 상수
Math.E // 자연상수 (2.71...)
Math.PI // 원주율 (3.14...)

// 삼각함수, 로그함수, 지수함수
Math.sin // 사인
Math.cos // 코사인
Math.tan // 탄젠트
Math.log // 밑을 자연상수로 하는 로그함수
Math.exp // 밑을 자연상수로 하는 지수함수
Math.sqrt // 제곱근

// 절대값, 올림, 내림, 반올림, 소수점 아래 잘라내기
Math.abs // 절댓값
Math.ceil // 올림
Math.floor // 내림
Math.round // 반올림
Math.trunc // 소수점 아래 잘라내기

// 최대값, 최소값
Math.max
Math.min

// 랜덤
Math.random
...
```

위 메소드와 상수들을 이용해 여러 가지 계산을 시험해보세요.

```js
Math.cos(Math.PI); // -1
Math.log(Math.E); // 1
Math.round(0.5); // 1
Math.random(); // 0과 1 사이의 값이 임의로 반환됩니다.
Math.max(1, 2, 3, 4, 5); // 5
```

# number 타입의 메소드

number 타입은 객체가 아니지만, 마치 객체처럼 메소드를 사용할 수 있습니다. 이는 JavaScript가 **래퍼 객체(wrapper object)**라는 기능을 제공하기 때문인데, 이에 대해서는 [값 더 알아보기](./220-value-in-depth.md) 챕터에서 자세히 다룹니다.

```js
(12345).toString(); // '12345'
(12345).toLocaleString(); // '12,345'
(1.2345).toFixed(2); // '1.23'
```
