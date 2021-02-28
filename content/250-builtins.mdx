# 내장 객체 및 생성자

이 챕터에서는 JavaScript에 내장되어 있는 유용한 객체 및 생성자에 대해서 다룹니다.

## JSON

프로그래밍을 하다 보면 '프로그래밍 언어에서 사용하는 자료구조'를 보조기억장치에 **저장**하거나, 혹은 네트워크를 통해 **전송**해야 할 일이 생깁니다. 이 때 자료구조를 **그대로** 저장/전송할 수는 없으니, 저장/전송 가능한 형태로 변환하는 절차가 필요합니다. 이 절차를 일러 **직렬화(serialization)**라고 합니다. 반대로, 직렬화된 데이터를 프로그래밍 언어에서 다시 사용할 수 있도록 변환해주는 절차를 **역직렬화(deserialization)**라고 합니다.

**JSON(JavaScript Object Notation)**은 웹의 세계에서는 가장 많이 사용되는 직렬화 형식입니다. 그 이름이 말해주듯이, **JavaScript 객체와 유사한 표기법**을 사용하는 **텍스트**를 통해 복잡한 자료구조를 나타냅니다.

```json
{
  "key": "value",
  "arr": [1, 2, 3],
  "nullProp": null
}
```

JSON은 언어에 관계없이 사용할 수 있는 직렬화 형식이고, 실제로 많은 프로그래밍 언어들이 JSON 관련 기능을 내장하고 있습니다.

JavaScript 역시 JSON 관련 기능을 내장하고 있습니다. 같은 이름의 `JSON` 내장 객체의 메소드를 통해 직렬화와 역직렬화를 할 수 있습니다.

```js
// `JSON.stringify`로 직렬화를 할 수 있습니다.
JSON.stringify({
  key: 'value',
  arr: [1, 2, 3],
  nullProp: null,
  undefinedProp: undefined // 값이 `undefined`인 속성은 직렬화 과정에서 제외됩니다.
}); // '{"key":"value","arr":[1,2,3],"nullProp":null}'

// `JSON.parse`로 역직렬화를 할 수 있습니다.
JSON.parse('{"key":"value","arr":[1,2,3],"nullProp":null}');
```

`JSON.stringify`, `JSON.parse`의 자세한 사용법은 MDN 문서를 참고하세요.

JSON을 직접 편집해야 할 때는 **JSON이 JavaScript가 아니라는 사실에 주의하세요.**

- 속성 이름은 꼭 쌍따옴표를 둘러주어야 합니다.
- `Map`, `Set`, `Date`, `Error`, `RegExp`, `Function`, `Promise`와 같이 특별한 동작방식을 가지는 객체들을 제대로 표현할 수 없습니다.
- `undefined`, `NaN`, `Infinity`과 같은 값을 표현할 수 없습니다.
- 주석을 쓸 수 없습니다.

## Date

JavaScript에는 날짜과 시각을 다루기 위한 `Date` 생성자가 내장되어 있습니다. 이를 사용하기 위해서 일단 아래의 개념들을 알아둘 필요가 있습니다.

- **협정 세계시 (UTC)** - 지구 상의 여러 지역에서는 **시간대(timezone)**와 **일광 절약 시간제(DST)**에 따라 서로 다른 시각을 사용합니다. 이 때문에 발생하는 혼동을 피하기 위해 **위치 및 DST의 사용 여부와 상관 없이 같은 기준으로** 시각을 다룰 필요가 있는데, 이 때 사용되는 것이 협정 세계시(UTC)입니다. UTC가 만들어지기 이전에는 **그리니치 평균시(GMT)**라는 용어가 널리 쓰였습니다. 또한 조금씩 느려지는 지구 자전 속도에 맞추기 위해 UTC에는 가끔씩 **윤초(leap second)**가 추가되기도 합니다.
- **유닉스 시간** - 컴퓨터에서는 시간 데이터를 편하게 다루기 위해서 유닉스 시간이라는 특별한 단위를 사용합니다. 유닉스 시간은 UTC 기준 1970년 1월 1일 0시 0분 0초부터 경과한 시간을 초 단위의 정수로 나타냅니다. 예를 들어, 한국 시간대의 `2017-12-10 12:26:11`라는 시간을 유닉스 시간으로 나타내면 `1512876371`이 됩니다. 유닉스 시간은 POSIX 시간 또는 **Epoch 시간**이라는 이름으로 불리기도 합니다.

### Date 객체의 생성

`Date` 생성자는 아래와 같은 방법으로 사용할 수 있습니다.

- `new Date()` - **현재 시각**을 나타내는 Date 객체를 반환합니다.
- `new Date(value)` - `value`가 정수인 경우, 이를 **밀리초 단위**의 유닉스 시간으로 간주해서 이에 해당하는 Date 객체를 반환합니다. `value`가 문자열인 경우, 이 문자열이 나타내는 Date 객체를 반환합니다.
- `new Date(year, month, day, hour, minutes, seconds, milliseconds)` - 년, 월, 일, 시, 분, 초, 밀리초를 **직접 입력**해서 Date 객체를 생성할 수도 있습니다. '월' 부분은 0부터 11까지의 값을 가집니다. 월 이후의 인수는 생략가능하고, 인수를 생략하면 '일'은 1로, 나머지는 모두 0으로 지정됩니다.

`Date` 객체를 생성하고 난 뒤에는, 해당 객체가 나타내는 년, 월, 일, 시, 분, 초, 밀리초를 가져오거나 변경할 수 있습니다. [MDN 문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date)의 메소드 목록을 참고하세요.

### 문자열로 변환하기

`Date` 객체가 나타내는 시각을 여러 가지 방법으로 문자열로 변환할 수도 있습니다.

```js
const now = new Date();
console.log(now.toString()); // Sun Dec 10 2017 12:49:31 GMT+0900 (KST)
console.log(now.toLocaleString()); // 2017. 12. 10. 오후 12:49:31
console.log(now.toDateString()); // Sun Dec 10 2017
console.log(now.toTimeString()); // 12:49:31 GMT+0900 (KST)
console.log(now.toISOString()); // 2017-12-10T03:49:31.145Z
console.log(now.toUTCString()); // Sun, 10 Dec 2017 03:49:31 GMT
```

### 시간 간격 측정하기

`-` 연산자를 사용해서 두 `Date` 객체 사이의 시간 간격이 얼마나 되는지를 밀리초 단위로 측정할 수 있습니다.

```js
const start = new Date();
alert('시간이 가고 있습니다...');
const end = new Date();
alert(`${end - start} 밀리초 만큼의 시간이 경과되었습니다.`);
```

### 라이브러리 사용하기

JavaScript에 내장되어 있는 `Date` 객체는 컴퓨터에서 시간 데이터를 다루기 위한 기본적인 기능들을 제공하지만, 실제 서비스에서 사용하기에는 부족한 점이 많습니다. 이 때문에, 실무에서는 [moment.js](https://momentjs.com/) 혹은 [date-fns](https://date-fns.org/)와 같은 별도의 라이브러리를 사용하는 경우가 많습니다. [이 링크](https://runkit.com/seungha-kim/moment-example)에서 가장 널리 사용되는 시간 관련 라이브러리인 moment.js를 시험해보세요.

```js
const moment = require("moment")
moment.locale('ko');

const now = moment();
console.log(now.format("dddd, MMMM Do YYYY, h:mm:ss a")); // 일요일, 12월 10일 2017, 1:02:42 오후
console.log(now.subtract(7, 'days').calendar()); // 2017.12.03
console.log(moment("20120101", "YYYYMMDD").fromNow()); // 6년 전
```

## Symbol

심볼은 ES2015에서 도입된 새로운 원시 타입입니다.

`Symbol` 내장 함수를 통해 새 심볼을 생성할 수 있습니다.

```js
const sym = Symbol();
console.log(typeof sym); // symbol
console.log(sym); // Symbol()
```

`Symbol` 함수에 문자열을 넘겨서, 해당 심볼에 대한 설명을 포함한 심볼을 생성할 수 있습니다. 이 때 넘겨지는 문자열은 그저 심볼의 설명일 뿐이므로, 심볼의 비교 연산에 영향을 주지 않습니다. 즉, 어떤 문자열이 인수열에 들어오는 지와 상관없이 **새로 생성된 심볼은 다른 모든 심볼과 다른 것으로 취급됩니다.**

```js
console.log(Symbol('my symbol')); // Symbol(my symbol)
console.log(Symbol('my symbol') === Symbol('my symbol')); // false
console.log(Symbol() === Symbol()); // false
```

**심볼은 객체의 속성 키로 사용하기 위해 만들어졌습니다.** 아래와 같이 대괄호 표기법을 통해 심볼을 객체의 속성 키로 사용할 수 있습니다.

```js
const mySymbol = Symbol('my symbol');

const obj = {
  [mySymbol]: 'hello'
};

console.log(obj); // { [Symbol(my symbol)]: 'hello' }
```

**내장 심볼(well-known symbol)**을 객체의 속성 키로 사용하면, 특정 상황에서의 객체의 동작 방식을 마음대로 바꿀 수 있습니다.

- `Symbol.hasInstance` - 객체가 `instanceof` 연산자의 피연산자로 왔을 때의 동작을 바꿉니다.
- `Symbol.isConcatSpreadable` - 객체가 `Array.prototype.concat` 메소드의 인수로 넘겨질 때의 동작을 바꿉니다.
- `Symbol.iterator` - 객체가 `for...of` 구문을 통해 사용될 때의 동작 방식을 바꿉니다.
- `Symbol.match` - 객체가 `String.prototype.match` 메소드의 인수로 넘겨질 때의 동작을 바꿉니다.
- `Symbol.replace` - 객체가 `String.prototype.replace` 메소드의 인수로 넘겨질 때의 동작을 바꿉니다.
- `Symbol.search` - 객체가 `String.prototype.search` 메소드의 인수로 넘겨질 때의 동작을 바꿉니다.
- `Symbol.species` - `Array.prototype`을 상속받은 객체에 대해 `Array.prototype.map` 등의 메소드를 호출할 때, 반환되는 객체의 생성자를 지정합니다.
- `Symbol.split` - 객체가 `String.prototype.split` 메소드의 인수로 넘겨질 때의 동작을 바꿉니다.
- `Symbol.toPrimitive` - 객체가 원시 타입의 값으로 변환되어야 할 때, 정확이 어떤 값으로 변환되어야 하는 지를 지정합니다.
- `Symbol.toStringTag` - `Object.prototype.toString()` 메소드를 객체에 대해 직접 호출할 때의 동작을 바꿉니다.
- `Symbol.unscopable` - `with` 블록 안에서 어떤 속성을 참조할 수 있는 지를 지정합니다.

이 중 `Symbol.iterator` 내장 심볼의 기능에 대해서는 [Iterable](./260-iteration.md) 챕터에서 자세히 다룹니다. 나머지 심볼에 대해 자세히 알아보려면 [MDN 문서](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)를 참고하세요.

## Map

ES2015에서 도입된 `Map` 생성자는 객체와 유사하게 **키-값 쌍(key-value pair)**을 저장할 수 있는 새로운 자료구조를 제공합니다.

```js
const m = new Map();

m.set('hello', 'world');
console.log(m.get('hello')); // 'world'
console.log(m.has('hello')); // true

m.delete('hello');
console.log(m.get('hello')); // undefined
console.log(m.has('hello')); // false
```

`Map`으로 생성된 객체는, 일반적인 객체와 비교했을 때 아래와 같은 차이점을 갖습니다.

- 객체는 속성 접근자(property accessor) 문법을 통해서, `Map`은 **메소드**를 통해서 내부의 데이터를 조작합니다.
- 문자열과 심볼만이 객체의 속성 키가 될 수 있는 반면, **어떤 값이라도 `Map` 객체의 키로 사용될 수 있습니다.**
- 객체의 속성을 확인할 때는 프로토타입 체인을 확인하는 과정에 필요하지만, `Map` 객체 안에 들어있는 데이터는 **프로토타입의 영향을 받지 않습니다.**
- `Map` 객체의 `size` 속성을 통해 내부에 들어있는 **데이터의 개수**를 쉽게 알 수 있습니다.

`Map` 객체는 **데이터의 추가/삭제가 빈번하게 일어나는 경우** 일반적인 객체보다 훨씬 빠르게 동작한다는 장점이 있는 반면, JSON 등으로 **직렬화 하기 어렵다**는 특징이 있습니다. 키-값 쌍 형태의 데이터를 다루면서 속도가 중요한 경우에는 `Map`의 사용을 고려해보세요.

## Set

ES2015에서 도입된 `Set` 생성자는 **집합** 형태의 자료구조를 제공합니다. `Set` 객체 내부에 이미 존재하는 데이터를 추가하려고 하면, 이는 무시됩니다. 즉, `Set` 객체는 내부에 **중복된 데이터가 저장되는 것을 허용하지 않습니다**

```js
const s = new Set();

s.add(1);
s.add(1);
s.add(2);

console.log(s); // Set { 1, 2 }
```

**배열과 유사한 형태의 자료구조**가 필요하지만 **순서가 중요하지 않은 경우,** 그리고 **중복된 데이터의 저장을 허용하지 않아야** 할 경우, `Set`의 사용을 고려해보세요.

## 기타

이 밖에, ES2015 또는 그 이후에 추가된 여러 가지 내장 객체 및 생성자들과 그 설명을 아래에 나열합니다.

- `Proxy` - 다른 객체처럼 행세하면서, 특정한 행동에 대해서는 다른 동작방식을 보이는 새로운 객체를 만들고 싶을 때 사용합니다.
- `Reflect` - `Reflect` 객체의 메소드를 통해, JavaScript의 몇 가지 내장 기능을 메소드로서 사용할 수 있습니다.
- `Intl` - `Intl` 객체를 이용하면, 사용 중인 언어에 따라 문자열 비교, 숫자 표현 형식, 시간 표현 형식을 바꿀 수 있습니다.
- `WeakMap` - `Map` 생성자와 사용법이 같지만, 키로 사용된 값에 대한 메모리 누수를 방지할 수 있습니다.
- `WeakSet` - `Set` 생성자와 사용법이 같지만, 집합에 추가된 값에 대한 메모리 누수를 방지할 수 있습니다.
- `TypedArray` - 이진 데이터(binary data)를 다룰 수 있는 방법을 제공합니다. File API, Canvas, Fetch API 등에서 사용됩니다.
