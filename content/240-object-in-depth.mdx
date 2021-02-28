# 객체 더 알아보기

## 객체 자신의 속성 (Own Property)

속성 접근자(property accessor)를 통해 객체의 속성에 접근할 때, **객체 자신이 갖고 있는 속성(own property)**이 반환될 수도 있고, 혹은 프로토타입으로부터 **상속받은 속성(inherited property)**이 반환될 수도 있습니다. `in` 연산자 역시 마찬가지입니다. `in` 연산자와 속성 접근자를 가지고는 이 둘을 구분할 수 없습니다.

```js
// 객체 `obj`는 프로토타입의 `inheritedProp` 속성을 상속받습니다.
const obj = Object.create({inheritedProp: 'inheritedProp'});
// 객체 `obj`에 직접 `ownProp` 속성을 만들어주었습니다.
obj.ownProp = 'ownProp';

console.log(obj.inheritedProp); // inheritedProp
console.log(obj.ownProp); // ownProp
console.log(obj.constructor); // [Function: Object]

console.log('inheritedProp' in obj); // true
console.log('ownProp' in obj); // true
console.log('constructor' in obj); // true
```

이 때, **객체 자신이** 특정 속성을 가지고 있는지를 확인하기 위해 `Object.prototype.hasOwnProperty` 메소드를 사용할 수 있습니다.

```js
const obj = Object.create({inheritedProp: 'inheritedProp'});
obj.ownProp = 'ownProp';

console.log(obj.hasOwnProperty('inheritedProp')); // false
console.log(obj.hasOwnProperty('ownProp')); // true
console.log(obj.hasOwnProperty('constructor')); // false
```

## 데이터 속성(Data Property)의 부수속성(Property Attribute)

앞서 `delete` 연산자를 통해 객체의 속성을 지울 수 있다는 것을 배웠습니다.

```js
const obj = {prop: 1};
delete obj.prop; // true
obj.prop; // undefined;
```

하지만, 객체의 속성을 항상 삭제할 수 있는 것은 아닙니다. 내장 객체 중에 어떤 속성은 `delete` 연산자를 통해 삭제하려고 해도 삭제가 되지 않는 것이 있습니다.

```js
delete Math.PI; // false
Math.PI; // 3.141592653589793
```

이처럼, JavaScript에서는 **각 속성마다 동작 방식이 다를 수 있습니다.** 이에 대한 정보는 **속성의 부수속성(property attribute)**이라고 불리는 곳에 숨겨져 있습니다.

객체의 부수속성을 알아보려면, `Object.getOwnPropertyDescriptor`라는 정적 메소드를 사용해 부수속성을 나타내는 객체를 얻을 수 있습니다. 이 객체를 일러 **속성 기술자(property descriptor)**라고 부릅니다.

```js
const obj = {prop: 1};

Object.getOwnPropertyDescriptor(obj, 'prop');
// { value: 1, writable: true, enumerable: true, configurable: true }

Object.getOwnPropertyDescriptor(Math, 'PI');
// { value: 3.141592653589793, writable: false, enumerable: false, configurable: false }
```

이처럼 **'데이터 속성(data property)'**에 대한 속성 기술자는 네 가지 속성을 갖습니다.

- `value`: 속성에 어떤 값이 저장되어 있는지를 나타냅니다.
- `writable`: 변경할 수 있는 속성인지를 나타냅니다.
- `enumerable`: 열거 가능한 속성인지를 나타냅니다.
- `configurable`: 부수속성을 변경하거나 속성을 삭제할 수 있는지를 나타냅니다.

위 코드 예제에서 얻은 속성 기술자를 살펴보면, `obj.prop`의 `configurable` 부수속성은 `true`이고 `Math.PI`의 `configurable` 부수속성은 `false` 입니다. 이 때문에 `Math.PI`를 삭제하려고 해도 삭제가 되지 않았던 것입니다.

두 속성의 `writable` 부수속성에도 차이가 있습니다. `Math.PI`는 속성의 값을 변경하려고 해도 변경이 되지 않습니다.

```js
Math.PI = 10;
Math.PI; // 3.141592653589793
```

`enumerable` 부수속성이 `false`이면 이 속성을 열거 불가능한 속성이 됩니다. 속성의 열거에 대해서는 잠시 뒤에 알아보겠습니다.

어떤 객체의 전체 속성에 대한 속성 기술자를 얻어오려면, `Object.getOwnPropertyDescriptors` 정적 메소드를 사용하면 됩니다.

```js
Object.getOwnPropertyDescriptors(Math);
// ...
```

참고로, 엄격 모드가 아닐 때에는 `writable: false`, `configurable: false`인 속성을 변경하거나 삭제하려고 해도 에러가 나지 않고 그냥 무시되지만, 엄격 모드일 때에는 에러가 발생합니다.

```js
function func1() {
  delete Math.PI;
}

function func2() {
  'use strict';
  delete Math.PI;
}

func1(); // 에러가 나지 않습니다.
func2(); // TypeError: Cannot delete property 'PI' of #<Object>
```

## 속성 기술자를 통해 객체의 속성 정의하기

속성 기술자는 속성의 부수속성을 얻어올 때에만 사용하는 것이 아닙니다. 우리가 직접 속성 기술자를 가지고 속성을 정의할 수도 있습니다. 프로토타입 상속을 위해 사용했던 `Object.create` 정적 메소드는, 사실 두 번째 인수로 속성 기술자 객체를 받습니다.

```js
const obj = Object.create(Object.prototype, {
  prop: {
    value: 1,
    writable: false,
    enumerable: true,
    configurable: false
  },
  another: {
    value: 2
  }
});

console.log(obj); // {prop: 1}

obj.prop = 2;
console.log(obj.prop); // 1

delete obj.prop;
console.log(obj.prop); // 1
```

속성 기술자에 `writable`, `enumerable`, `configurable` 속성을 주지 않으면, 해당 부수속성은 모두 `false`로 취급됩니다. 위 예제의 `another` 속성을 시험해보세요.

`Object.create` 외에, `Object.defineProperty` 혹은 `Object.defineProperties` 정적 메소드를 사용해서 이미 만들어진 객체에 대한 속성을 정의할 수도 있습니다.

```js
const obj = {};
Object.defineProperty(obj, 'prop', {
  value: 1,
  writable: false,
  enumerable: true,
  configurable: false
});
```

## 접근자 속성(Accessor Property)과 그 부수속성

접근자 속성의 필요성을 설명하기 위해, 화폐를 다루면서 환전 기능이 있는 프로그램을 짜야 한다고 가정해보겠습니다.

아래와 같이 '원' 단위와 '달러' 단위를 저장하는 객체를 만들 수 있을 것입니다.

```js
const money = {
  won: 1086,
  dollar: 1
};
```

하지만 위의 코드에는 문제가 있습니다. `won` 속성이 변경되었을 때 `dollar` 속성까지 자동으로 변경되지 않으므로, 둘 사이의 동기화가 깨지게 됩니다.

```js
money.won += 1086;

// 2172원이 되었지만, 2달러로 변경되지 않았습니다.
money.dollar; // 1
```

이를 해결하기 위해, 객체에는 `_won` 속성을 저장하고 달러 단위가 필요할 때는 원 단위로부터 계산해내도록 **일일이 메소드를 두는 방법**을 사용할 수 있습니다.[^1]
```js
function Money(won = 0) {
  Object.defineProperty(this, '_won', {
    value: won,
    writable: true
  }); // enumerable: false, configurable: false
}

// 원 단위 값을 가져오는 메소드
Money.prototype.getWon = function() {
  return this._won;
};

// 원 단위 값을 저장하는 메소드
Money.prototype.setWon = function(amount) {
  this._won = amount;
};

// 달러 단위 값을 가져오는 메소드
Money.prototype.getDollar = function() {
  return this._won / 1086;
};

// 달러 단위 값을 저장하는 메소드
Money.prototype.setDollar = function(amount) {
  this._won = amount * 1086;
};

const m = new Money();

m.setWon(1086);
m.getDollar(); // 1

m.setDollar(2);
m.getWon(); // 2172
```

이제 원하던대로 두 단위 사이의 동기화가 잘 유지되지만, **코드가 꽤 길어졌습니다.** 특히, 속성을 사용하기 위해 **매번 메소드를 호출해야 하는** 것이 조금 불편하게 느껴집니다.

Getter와 setter 기능을 사용해서, 위와 같은 코드를 조금 더 깔끔하게 작성할 수 있습니다. 먼저 간단한 예제를 통해 살펴보겠습니다.

```js
const obj = {

  // 메소드 이름 앞에 `get`을 써주면, 이 메소드는 getter 메소드가 됩니다.
  get prop() {
    console.log('getter가 호출되었습니다.');
    return this._hidden;
  },
  
  // 메소드 이름 앞에 `set`을 써주면, 이 메소드는 setter 메소드가 됩니다.
  set prop(arg) {
    console.log('setter가 호출되었습니다.');
    this._hidden = arg;
  }
}

// `set prop` 메소드가 `1`을 인수로 해서 호출됩니다.
obj.prop = 1;

// `get prop` 메소드가 호출되고 해당 메소드의 반환값을 읽어옵니다.
obj.prop; // 1

Object.getOwnPropertyDescriptors(obj);
// {
//   prop: {
//     get: [Function: get],
//     set: [Function: set],
//     enumerable: true,
//     configurable: true
//   },
//   ...
// }
```

`obj` 객체 리터럴 안에서 함수 앞에 `get`과 `set` 키워드를 사용했습니다. 이 두 함수는 각각 `prop`이라는 속성의 getter와 setter가 됩니다. **getter는 속성을 읽어올 때, setter는 속성을 변경할 때 호출됩니다.**

이렇게 getter와 setter가 정의된 속성을 **접근자 속성(accessor property)**이라고 합니다. 접근자 속성에 대한 속성 기술자는 네 가지 속성을 갖습니다.

- `get`: getter 함수
- `set`: setter 함수
- `enumerable`: 열거 가능한 속성인지를 나타냅니다.
- `configurable`: 부수속성을 변경하거나 속성을 삭제할 수 있는지를 나타냅니다.

데이터 속성의 속성 기술자와 비교해보면 `value`와 `writable`이 빠진 대신에 `get`, `set`이 포함되어 있습니다.

이제 위 `Money` 생성자 예제를 접근자 속성을 통해 재작성해 보겠습니다. 접근자 속성 역시 속성 기술자를 통해 정의할 수 있습니다.

```js
function Money(won) {
  this._won = won;
}

// `Object.defineProperties` 정적 메소드를 사용해서
// 속성 기술자를 통해 특정 객체의 여러 속성을 한꺼번에 정의할 수 있습니다.
Object.defineProperties(Money.prototype, {
  // `Money.prototype` 객체에 `won` 이라는 속성을 정의합니다.
  won: {
    get: function() {
      return this._won;
    },
    set: function(arg) {
      this._won = arg;
    }
  },
  // `Money.prototype` 객체에 `dollar` 라는 속성을 정의합니다.
  dollar: {
    get: function() {
      return this._won / 1086;
    },
    set: function(arg) {
      this._won = arg * 1086;
    }
  }
});

const w = new Money(1086);

w.won += 1086;
console.log(w.dollar); // 2

w.dollar += 1;
console.log(w.won); // 3258
```

`Money` 생성자를 사용하는 쪽의 코드가 훨씬 더 알아보기 쉬워졌고, 덧셈 할당 연산자(`+=`)을 사용할 수도 있게 되었습니다.

## 객체의 속성 열거하기

앞에서 속성의 부수속성 중에 `enumerable`이라는 것이 있다는 것을 살펴봤습니다. 이 부수속성은 **객체의 속성을 열거할 때에** 그 결과에 영향을 미칩니다.

객체의 속성을 열거할 때에 사용할 수 있는 방법에는 여러 가지가 있습니다.

- `Object.keys` - **객체 자신의 속성** 중 **열거 가능한(enumerable) 속성**의 이름을 배열로 반환합니다.
- `Object.values` - **객체 자신의 속성** 중 **열거 가능한(enumerable) 속성**의 속성 값을 배열로 반환합니다.
- `Object.entries` - **객체 자신의 속성** 중 **열거 가능한(enumerable) 속성**의 이름과 값을 배열로 반환합니다.
- `Object.getOwnPropertyNames` - **객체 자신의 모든 속성**의 이름을 배열로 반환합니다. 열거 불가능한 속성도 포함합니다.
- `for...in` 구문 - **객체 자신의 속성** 및 **상속받은 속성** 중 **열거 가능한(enumerable) 속성**의 이름을 배열로 반환합니다.


대개의 경우 `Object.keys`를 사용하면 되지만, 상속받은 속성까지 열거하고 싶을 때는 `for...in`을, 열거 불가능한 속성도 열거하고 싶을 때는 `Object.getOwnPropertyNames`를 사용하세요.

```js
const obj = {
  a: 1,
  b: 2
};

Object.keys(obj); // ['a', 'b']
```

## 얕은 복사(Shallow Copy) & 깊은 복사(Deep Copy)

`Object.assign` 정적 메소드는 인수로 받은 객체들의 **모든 열거 가능한 속성**을 **대상 객체에 복사**합니다.

```js
const obj = {};
Object.assign(obj, {a: 1}, {b: 2});

console.log(obj); // { a: 1, b: 2 }
```

`Object.assign`은 객체를 복제하는 수단으로도 사용됩니다.

```js
const obj = {
  a: 1,
  b: 2
};

// 빈 객체를 대상으로 `Object.assign`을 사용하면, 객체를 간단히 복제할 수 있습니다.
const obj2 = Object.assign({}, obj);
console.log(obj2); // { a: 1, b: 2 }
```

다만, 여기서 주의해야 할 점이 있습니다. 객체가 중첩되어 있다면, **내부에 있는 객체는 복제되지 않습니다.** `Object.assign`을 통해 속성이 값이 복사될 때, 실제로 복사되는 것은 중첩된 객체가 아니라 그에 대한 **참조**이기 때문입니다.

```js
const obj = {
  innerObj: {
    a: 1,
    b: 2
  }
};

const obj2 = Object.assign({}, obj);

// `innerObj`는 복제되지 않았습니다.
obj.innerObj === obj2.innerObj;
obj.innerObj.a = 3;
obj2.innerObj.a; // 3
```

프로그래밍 분야에서는 중첩된 자료구조까지 모두 복사하는 것을 가지고 **깊은 복사(deep copy)**라고 합니다. JavaScript에는 깊은 복사를 위한 기능이 내장되어 있기 않기 때문에, 직접 구현을 해서 사용해야 합니다. 그런데 깊을 복사를 할 때 고려해야 할 것들이 많아서 (순환참조, 프로토타입, 열거 불가능한 속성, getter/setter 등) 정말로 직접 구현하기는 어렵고, [관련 라이브러리](https://www.npmjs.com/package/clone)를 사용하는 것을 추천합니다.

비슷한 객체의 복제가 빈번하게 이루어져야 하는 경우에는 [Immutable.js](https://facebook.github.io/immutable-js/)와 같은 라이브러리의 사용도 고려해 보시길 바랍니다.

## Object.preventExtensions

JavaScript는 특정 객체에 더 이상 속성을 추가하지 못하도록 막아버리는 기능을 제공합니다.

```js
const obj = {};

// 객체에 속성이 추가되는 것을 막습니다.
Object.preventExtensions(obj);

function func() {
  'use strict';
  obj.a = 1;
}

func(); // TypeError: Cannot add property a, object is not extensible
```

JavaScript의 모든 객체에는 `[[Extensible]]`이라는 숨겨진 속성이 있습니다. 이 속성의 기본값은 `true`인데, 이 값이 `false`가 되면 해당 객체에 속성을 추가하는 것이 불가능해집니다. `Object.preventExtensions` 정적 메소드는 `[[Extensible]]` 속성을 `false`로 바꿔주는 역할을 합니다. **즉, 객체에 속성을 추가하는 것이 불가능해집니다.**

객체의 `[[Extensible]]` 속성 값은 `Object.isExtensible` 정적 메소드를 통해 알아볼 수 있습니다.

```js
const obj = {};
Object.isExtensible(obj); // true
Object.preventExtensions(obj);
Object.isExtensible(obj); // false
```

`Object` 생성자의 정적 메소드 중에 `[[Extensible]]` 속성을 바꿔버리는 메소드가 두 개 더 있습니다.

- `Object.seal` - 인수로 들어온 객체의 `[[Extensible]]` 속성을 `false`로 바꾸고, 객체 자신의 속성을 모두 `configurable: false` 상태로 바꿉니다. **즉, 객체에 속성을 추가하거나, 이미 존재하는 속성을 삭제하는 것이 불가능해집니다.**
- `Object.freeze` - 인수로 들어온 객체의 `[[Extensible]]` 속성을 `false`로 바꾸고, 객체 자신의 속성을 모두 `configurable: false, writable: false` 상태로 바꿉니다. **즉, 객체에 속성을 추가하거나, 이미 존재하는 속성을 변경/삭제하는 것이 불가능해집니다.**

아래의 표는 앞에서 다뤘던 세 정적 메소드를 호출한 뒤에 객체가 어떻게 변하는지를 나타냅니다. O는 가능, X는 불가능을 나타냅니다.

| 메소드 | 속성 추가 | 속성 읽기 | 속성 변경 | 속성 삭제 및 재정의 |
|---|---|---|---|---|
| `Object.preventExtensions` | X | O | O | O |
| `Object.seal` | X | O | O | X |
| `Object.freeze` | X | O | X | X |

객체에 `Object.seal` 혹은 `Object.freeze`가 호출되었는지를 확인하기 위해 다음 메소드를 사용할 수 있습니다. 단, 객체에 대해 `Object.seal` 혹은 `Object.freeze`가 호출된 적이 없더라도 아래 조건만 충족하면 이 메소드들은 `true`를 반환할 수 있습니다.

- `Object.isSealed` - 객체가 확장 불가능하고 객체 자신의 모든 속성에 대한 부수속성이 `configurable: false`에 해당하면 `true`를 반환합니다. 아니면 `false`를 반환합니다.
- `Object.isFrozen` - 객체가 확장 불가능하고 객체 자신의 모든 속성에 대한 부수속성이 `configurable: false, writable: false`에 해당하면 `true`를 반환합니다. 아니면 `false`를 반환합니다.

[^1]: 코드 예제에서 볼 수 있는 것처럼, 숨기고 싶은 속성의 이름을 언더스코어(`_`)로 시작하도록 짓는 관례가 널리 사용됩니다.
