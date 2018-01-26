# 값 다루기

## 값과 리터럴

프로그래밍을 하며 가장 많이 하는 일은 값(value)을 다루는 것입니다.

프로그래밍 언어에서 값을 생성하는 가장 쉬운 방법은 리터럴(literal)을 사용하는 것입니다. 리터럴은 **값의 표기법**으로, 프로그래밍 언어마다 값을 표현하는 여러가지 리터럴을 가지고 있습니다.

```js
1; // 정수 리터럴
2.5; // 부동 소수점 리터럴
'hello'; // 문자열 리터럴
true; // 진리값 리터럴
```

리터럴과 연산자(operator)를 이용해 REPL에서 간단한 계산을 할 수 있습니다.

```js
1 + 2; // 3
3 * 4; // 12
'hello' + 'world'; // 'helloworld'
true || false; // true
```

여러 연산자에 대한 자세한 사용법은 이어지는 챕터에서 다룹니다.

## 변수 (Variable)

값을 한 번 생성한 뒤에 다시 쓰지 못한다면 아주 간단한 프로그램밖에 만들지 못할 것입니다. 그래서 프로그래밍 언어에는 대개 **값에 이름을 붙여서 다시 쓸 수 있게 만드는 기능**이 존재합니다. JavaScript에서는 여러 가지 방법을 통해 값에 이름을 붙일 수 있는데, 그 중에 두 가지[^1]를 여기서 다룹니다.

`let`은 변수(variable)를 선언(declare)할 때 쓰는 키워드로, ES2015에서 도입되었습니다. 변수의 사용법은 다음과 같습니다.

```js
let seven = 7;
```

위에서는 `7`이라는 값에 `seven`이라는 이름을 붙이기 위해서 다음과 같이 선언과 동시에 대입(assign)을 했습니다. 물론 변수의 선언이 끝난 이후에 대입을 하거나, 이미 값이 대입되어 있는 변수에 다른 값을 대입할 수도 있습니다.

```js
let eight;
eight = 8;
let seven = 7;
seven = 77;
seven = 777;
```

`const`는 재대입(reassign)이 불가능한 변수를 선언할 때 쓰는 키워드로, 역시 ES2015에 도입되었습니다.

```js
const myConstant = 7;
```

`const`로 변수를 선언할 때는 선언 시에 반드시 값을 대입해주어야 하며, 안 그러면 에러가 발생합니다. 또한 이미 선언된 상수에는 다른 값을 대입할 수 없습니다.

```js
const notAssigned; // Uncaught SyntaxError: Missing initializer in const declaration
```

```js
const assigned; = 1
assigned = 2; // Uncaught TypeError: Assignment to constant variable.
```

`let`과 `const` 모두 한꺼번에 여러 개의 변수를 선언하는 문법을 지원합니다.

```js
let one = 1, two = 2, nothing;
const three = 3, four = 4;
```

`let`과 `const`로 선언한 이름은 다시 선언될 수 없습니다.

```js
let seven = 7;
let seven = 77; // Uncaught SyntaxError: Identifier 'seven' has already been declared
```

## `let`과 `const` 중 무엇을 쓸 것인가?

항상 **let 보다 const**를 사용하는 것이 좋습니다. `let`을 사용하면 의도치 않게 다른 값이 대입되어 버리는 일이 생길 수 있기 때문입니다. 정말로 재대입이 필요한 경우에만 `let`을 사용하는 것이 좋은 습관입니다.

## 식별자

위에서 사용한 변수의 **이름**은 모두 식별자(Identifier)입니다. 프로그래밍 언어에서 식별자는 어떤 개체를 유일하게 식별하기 위해 사용됩니다. JavaScript 식별자는 아래와 같이 정해진 규칙에 따라 지어져야 합니다.

- 숫자, 알파벳, 달러 문자($), 언더스코어(_)가 포함될 수 있다.
- 단, 숫자로 시작되어서는 안 된다.
- 예약어는 식별자가 될 수 없다.

```js
const foo; // O
const _bar123; // O
const $; // O - jQuery가 이 식별자를 사용합니다.
const 7seven; // X
const const; // X - 예약어는 식별자가 될 수 없습니다.
```

여기서 예약어(reserved word)란 JavaScript 언어의 기능을 위해 미리 예약해둔 단어들을 말합니다. JavaScript의 예약어 목록을 [이 링크](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Lexical_grammar#Reserved_keywords_as_of_ECMAScript_6)에서 확인할 수 있습니다.

`let 패스트 = '캠퍼스'`와 같이 한글도 식별자에 포함될 수 있지만, 좋은 습관은 아닙니다.

### 식별자 이름 짓기

식별자 이름을 지을 때 JavaScript에서 널리 사용되는 관례(convention)가 있는데, 이 관례를 Camel case라고 부릅니다. 식별자에 들어가는 각 단어의 첫 글자를 대문자로 써 주는 방식입니다.

```js
// Camel case
let fastCampus;
let fooBar;
```

이와는 다르게 대문자를 사용하지 않고 단어 사이에 언더스코어(_)를 사용해서 단어를 구분해주는 관례도 있는데, 이를 Snake case라고 부릅니다. 이 관례는 JavaScript에서는 잘 사용되지 않고, Python 등의 프로그래밍 언어에서 많이 사용됩니다.

```js
// Snake case
let fast_campus;
let foo_bar;
```

이 밖에 식별자 이름을 지을 때 사용하는 다른 관례들도 있는데, 그에 대해서는 [객체](./180-object.md) 챕터에서 자세히 다룹니다.

## 타입

JavaScript를 비롯한 대부분의 프로그래밍 언어는 여러 종류의 값을 지원하는데, 이러한 **값의 종류**를 가지고 자료형(data type)이라고 부릅니다. 줄여서 **타입**이라고 부르기도 합니다.

값의 타입을 알아보기 위해 `typeof` 연산자를 사용할 수 있습니다.

```js
typeof 1; // 'number'
typeof 'hello'; // 'string'
```

이어지는 챕터에서는 JavaScript가 지원하는 여러가지 타입의 값의 사용법에 대해 다룰 것입니다.

[^1]: 독자 중에 `var` 키워드에 대해 알고 있는 분도 계실 것입니다. `var`는 `let`과 비슷한 역할을 하지만 동작하는 방식과 제약 사항이 다릅니다. 자세한 차이점은 [값 더 알아보기](./temp/220-value-in-depth.md) 챕터에서 다룹니다.
