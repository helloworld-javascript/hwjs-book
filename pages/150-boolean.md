# boolean 타입

boolean 타입에 해당하는 값은 `true`, `false` 두 가지 밖에 없습니다. 이 값들을 '진리값'이라고 부릅니다. 프로그래밍에서의 진리값은 어떤 조건이 참인지 거짓인지를 나타내기 위해 사용됩니다.

```js
1 < 2; // true
1 > 2; // false
3 === 3; // true
3 !== 3; // false
Number.isFinite(Infinity); // false
Number.isNaN(NaN); // true
'hello'.includes('ll'); // true
```

## 논리 연산자

JavaScript는 진리값에 대한 여러 연산을 지원합니다.

```js
// 논리 부정 (logical NOT)
!true; // false
!false; // true

// 논리합 (logical OR)
true || true; // true
true || false; // true
false || true; // true
false || false; // false

// 논리곱 (logical AND)
true && true; // true
true && false; // false
false && true; // false
false && false; // false

// 삼항 연산자 (ternary operator)
true ? 1 : 2; // 1
false ? 1 : 2; // 2
```

## 연산자 우선순위 (Operator Precedence)

한 구문에 여러 개의 연산자를 이어서 쓴 경우, 어떤 연산자는 먼저 계산되고 어떤 연산자는 나중에 계산됩니다. 이는 연산자 우선순위(operator precedence)에 의해 결정됩니다. 자세한 내용은 [MDN 링크](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/%EC%97%B0%EC%82%B0%EC%9E%90_%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84)를 참고해주세요.

```js
true || true && false; // true
(true || true) && false; // false
true || false && false; // true
(true || false) && false; // false
```

## 논리 연산의 여러 가지 법칙

논리 연산에는 여러 가지 법칙이 있습니다. 프로그래밍을 하며 논리 연산을 할 일이 많기 때문에, 이 법칙들을 알아두면 도움이 됩니다. 각 법칙이 성립하는 이유를 잘 생각해 보세요. 경우의 수를 모두 생각해보거나, 벤 다이어그램을 그려보세요.[^1]

```js
// a, b, c가 **모두 boolean 타입**이라고 할 때, 다음 식의 결과값은 a, b, c의 값과 관계 없이 모두 true 입니다.

// 이중 부정
!!a === a;

// 교환 법칙
a || b === b || a;
a && b === b && a;

// 결합 법칙
(a || b) || c === a || (b || c);
(a && b) && c === a && (b && c);

// 분배 법칙
a || (b && c) === (a || b) && (a || c);
a && (b || c) === (a && b) || (a && c);

// 흡수 법칙
a && (a || b) === a;
a || (a && b) === a;

// 드 모르간의 법칙
!(a || b) === !a && !b;
!(a && b) === !a || !b;

// 그 밖에...
a || true === true;
a || false === a;
a && true === a;
a && false === false;

a || !a === true;
a && !a === false;

a || a === a;
a && a === a;
```

## truthy & falsy

JavaScript에서는 boolean 타입이 와야 하는 자리에 다른 타입의 값이 와도 에러가 나지 않고 실행됩니다.

```js
if (1) {
  console.log('이 코드는 실행됩니다.');
}

if (0) {
  console.log('이 코드는 실행되지 않습니다.');
}
```

이렇게 어떤 값들은 `true`로, 어떤 값들은 `false`로 취급되는데, 전자를 **truthy**, 후자를 **falsy**라고 부릅니다. JavaScript에서는 아래의 값들은 모두 falsy이고, 이를 제외한 모든 값들은 truthy입니다.

- `false`
- `null`
- `undefined`
- `0`
- `NaN`
- `''`

truthy와 falsy를 활용하면 짧은 코드를 작성할 수 있지만, 코드의 의미가 불분명해지거나 논리적으로 놓치는 부분이 생길 수 있기 때문에 주의해서 사용해야 합니다.

## 다른 타입의 값을 진리값으로 변환하기

어떤 값을 명시적으로 boolean 타입으로 변환해야 할 때가 있는데, 그 때에는 두 가지 방법을 사용할 수 있습니다.

```js
!!'hello'; // true
Boolean('hello'); // true
```

부정 연산자(`!`) 뒤의 값이 truthy이면 `false`, falsy이면 `true`를 반환하는 성질을 이용해서 이중 부정을 통해 값을 boolean 타입으로 변환할 수 있습니다. 혹은 `Boolean` 함수를 사용해도 됩니다. 전자가 간편하기 때문에 많이 사용되는 편입니다.

[^1]: `!`은 여집합, `||`는 합집합, `&&`는 교집합, `true`는 전체집합, `false`는 공집합으로 생각하면 됩니다.
