# 객체 (Object)

객체는 JavaScript라는 언어만이 가지고 있는 특징의 기초를 이루는 자료형으로, **많은 기능**을 내장하고 있습니다.

## 객체 리터럴 (Object Literal)

객체는 한꺼번에 여러 값을 담을 수 있는 **통(container)**[^1]과 같은 **자료구조(data structure)**입니다. 객체 안에는 **이름-값 쌍(name-value pair)**이 저장되는데, 이를 객체의 **속성(property)**이라고 합니다.

아래와 같이 객체 리터럴(object literal)을 이용해서 객체를 생성할 수 있습니다. 중괄호 안에 직접 이름-값 쌍을 적어주면 됩니다.

```js
const person = {
  name: '윤아준', // 속성 이름 - 'name', 속성 값 - '윤아준'
  age: 19, // 속성 이름 - 'age', 속성 값 - 19
  'languages': ['Korean', 'English'], // 속성 이름 - 'languages', 속성 값 - 배열
  '한국 나이': 20 // 속성 이름 - '한국 나이', 속성 값 - 20
};
```

위에서 `person` 변수에 할당된 객체에는 네 개의 속성이 저장되었습니다. `'languages'`와 `'한국 나이'`와 같이 속성 이름 부분에 문자열을 써도 상관없습니다만, `'한국 나이'`에 들어간 공백과 같이 **식별자에 허용되지 않는 문자가 들어간 속성 이름**을 정의할 때는 **반드시 문자열 표기를 사용**해야 합니다.[^2]

객체 리터럴을 이용해 속성을 지정할 때, 아래와 같이 이미 정의된 변수의 이름을 그대로 속성의 값으로 사용할 수도 있습니다.

```js
const name = '윤아준'

const person = {
  name: name,
  age: 19,
  // ...
};
```

위 코드를 아래와 같이 줄여 쓸 수도 있습니다.

```js
const name = '윤아준'

const person = {
  name, // `name: name`과 똑같이 동작합니다.
  age: 19,
  // ...
};
```

아래와 같이 대괄호를 사용해서 다른 변수에 저장된 문자열을 그대로 속성의 이름으로 쓰는 것도 가능합니다.

```js
const propName = 'prop';

const obj = {
  [propName]: 1
};

obj.prop; // 1
```

## 점 표기법, 대괄호 표기법

아래와 같이 **속성 접근자(property accessor)**를 이용해 이미 생성된 객체의 속성을 지정해줄 수도 있습니다.

```js
const person = {}; // 빈 객체

// 점 표기법 (Dot notation)
person.name = '윤아준';
person.age = 19;
person.languages = ['Korean', 'English'];
```

위에서는 객체 리터럴을 이용해 빈 객체를 생성해 준 뒤, **점 표기법**을 통해 속성을 갱신해주었습니다. 그러나, JavaScript에서 식별자로 허용되지 않는 문자가 들어간 속성 이름을 사용해야 하는 경우에는 반드시 **대괄호 표기법**을 사용해야 합니다.

```js
// 대괄호 표기법 (Bracket notation)
person['한국 나이'] = 20;
```

위와 같은 경우가 아니라면, **주로 점 표기법이 많이 사용되는 편입니다**. 이 교재에서도 특별한 이유가 없는 한 점 표기법을 사용하겠습니다.

## 객체 다루기

속성 접근자, `delete` 연산자, `in` 연산자 등을 이용해서 객체에 대한 정보를 읽고 쓸 수 있습니다.

```js
const person = {
  name: '윤아준',
  age: 19,
  languages: ['Korean', 'English']
};

// 속성 읽기
person.name; // '윤아준'
person.age; // 19
persion.languages[0] // 'Korean'

// 속성 쓰기
person.name = '신하경';
person.age = 20;

// 새 속성 추가하기
person.address = '서울특별시 강남구 신사동';

// 속성 삭제하기
delete person.address;

// 속성이 객체에 존재하는지 확인하기
'name' in person; // true
'phoneNumber' in person; // false
```

## 메소드 (Method)

객체의 속성값으로 **함수**를 지정할 수도 있습니다.

```js
const person = {
  greet: function() {
    return 'hello';
  }
};

person.greet(); // 'hello';
```

위와 같이 **어떤 객체의 속성으로 접근해서 사용하는 함수**를 **메소드(method)**라고 부릅니다. 아래와 같이, 객체 리터럴 안에서 특별한 표기법을 사용해 메소드를 정의할 수도 있습니다.

```js
// 위 예제와 완전히 똑같이 동작합니다.
const person = {
  greet() {
    return 'hello';
  }
};

person.greet(); // 'hello';
```

메소드를 지정하기 위해 조금 더 효율적인 방법을 사용할 수도 있는데, 아래 **프로토타입** 섹션에서 자세히 다룹니다.

## this

다른 함수들과 달리 '메소드'라는 특별한 이름을 사용하는 이유는, 메소드가 다른 함수들과는 다르게 특별히 취급되기 때문입니다. `this` 키워드를 사용하면, 메소드 호출 시에 해당 메소드를 갖고 있는 객체에 접근할 수 있습니다.

```js
const person = {
  name: '윤아준',
  age: 19,
  introduce() {
    // `this`를 사용해서 객체의 속성에 접근함
    return `안녕하세요, 제 이름은 ${this.name}입니다. 제 나이는 ${this.age}살 입니다.`
  },
  getOlder() {
    // `this`를 사용해서 객체의 속성을 갱신함
    this.age++;
  }
};

person.introduce(); // '안녕하세요, 제 이름은 윤아준입니다. 제 나이는 19살 입니다.'
person.getOlder(); // undefined
person.introduce(); // '안녕하세요, 제 이름은 윤아준입니다. 제 나이는 20살 입니다.'
```

메소드를 사용하면, **데이터**와, 그 데이터와 관련된 **동작**을 **객체라는 하나의 단위로 묶어서 다룰 수 있습니다.** 이것이 함수 대신 메소드를 사용하는 핵심적인 이유입니다.

여기서 주의할 점이 있습니다. `function` 키워드를 통해 정의된 함수 내부의 `this` 키워드가 **실제로 무엇을 가리킬 것인가**는, 메소드가 어떻게 **정의**되는가에 의해 결정되는 것이 아니라 메소드가 어떻게 **사용**되는가에 의해 결정됩니다. 예를 들어 보겠습니다.

```js
function introduce() {
  return `안녕하세요, 제 이름은 ${this.name}입니다.`;
}

const person1 = {
  name: '윤아준',
  introduce
};

const person2 = {
  name: '신하경',
  introduce
};

person1.introduce(); // 안녕하세요, 제 이름은 운아준입니다.
person2.introduce(); // 안녕하세요, 제 이름은 신하경입니다.
```

이렇게 `introduce`라는 함수가 객체 외부에서 정의되었고, `person1`과 `person2`에서 재사용되었는데도 불구하고 메소드가 잘 동작했습니다. 즉, 같은 함수임에도 불구하고 **어떤 객체의 메소드로 사용되느냐에 따라 메소드 내부의 `this`가 가리키는 객체가 달라질 수 있다**는 것입니다.

다만, **화살표 함수**는 `this` 키워드를 전혀 다르게 취급하기 때문에 위와 같은 방식으로는 메소드로 사용될 수 없습니다. 또한, `function` 키워드를 통해 정의된 메소드가 항상 위와 같은 방식으로 `this`를 취급하는 것은 아닙니다. 특별한 방법을 통해 아예 `this`를 우리가 원하는 객체로 바꿔버릴 수도 있습니다. 이에 대해서는 [함수 더 알아보기](./230-function-in-depth.md) 챕터에서 자세히 알아보겠습니다.

## 프로토타입 (Prototype)

우리가 쓰는 대부분의 프로그램들은 아주 많은 수의 비슷한 객체를 만들어냅니다.

- 스프레트시트의 **셀**
- 슈팅 게임에서의 **총알**
- DOM API의 **[HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)**

이 객체들은 아마도 **각각 다른 속성**을 가지고 있을 것입니다.

- 셀 안에 들어있는 **데이터**
- 총알의 **현재 위치**
- HTMLElement의 **[인라인 스타일](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style)**

그렇지만, 그 수가 아무리 많더라도 **공통으로 사용하는 속성과 메소드**들이 있을 것입니다.

- 셀의 내용을 **편집하는 메소드**
- 총알의 **모양**
- 특정 HTMLElement에 키보드 포커스를 맞추는 메소드인 **[focus](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus)**

위와 같이 수많은 객체가 공통으로 사용하는 속성과 메소드를 **중복해서 저장**하는 것은 컴퓨터의 아까운 저장 공간을 낭비하는 일일 것입니다. 예를 들어, 아래와 같이 객체를 생성하면 모든 객체에 똑같은 `introduce` 메소드가 저장되어 객체 1000개마다 별개의 함수, 즉 총 1000개의 함수가 생성됩니다.

```js
// 사람을 나타내는 객체를 생성하는 팩토리 함수
function personFactory(name) {
  return {
    name,
    introduce: function() {
      return `안녕하세요, 제 이름은 ${this.name}입니다.`;
    }
  };
}

const people = [];

for (let i = 0; i < 1000; i++) {
  people.push(personFactory('윤아준'))
}

people[0].introduce === people[1].introduce // false
```

JavaScript에서는 이렇게 객체 간에 공유되어야 하는 속성과 메소드를, 프로토타입(prototype)이라는 기능을 이용해서 효율적으로 저장할 수 있습니다. 어떤 객체에 프로토타입을 지정하면, 프로토타입의 속성을 해당 객체에서 **재사용**할 수 있습니다. 객체의 프로토타입을 지정하는 방법에는 여러가지가 있는데, 가장 쉬운 방법은 `Object.create` 함수를 이용하는 것입니다.[^3]

```js
const personPrototype = {
  introduce: function() {
    return `안녕하세요, 제 이름은 ${this.name}입니다.`;
  }
};

const person1 = Object.create(personPrototype); // 새 객체를 생성하고 프로토타입을 지정함
person1.name = '윤아준';

const person2 = Object.create(personPrototype);
person2.name = '신하경';

person1.introduce(); // 안녕하세요, 제 이름은 윤아준입니다.
person2.introduce(); // 안녕하세요, 제 이름은 신하경입니다.

person1.introduce === person2.introduce; // true
```

이렇게 프로토타입 기능을 이용해 한 객체에서 다른 객체의 기능을 가져와 사용하는 것을 **프로토타입 상속(prototype inheritance)**이라고 합니다. 위와 같은 경우는 **"`personPrototype`은 `person1`의 프로토타입이다."**, **"`person1` 객체는 `personPrototype` 객체를 상속받았다"**고 표현합니다. 프로토타입 상속은 다른 언어에서는 흔히 찾아볼 수 없는 JavaScript의 특징적인 기능입니다.[^4]

### 프로토타입 읽고 쓰기[^5]

어떤 객체의 프로토타입을 읽어오기 위해 `Object.getPrototypeOf` 함수를 사용할 수 있습니다. 또한 `Object.setPrototypeOf` 함수를 통해 이미 생성된 객체의 프로토타입을 변경할 수 있지만, 객체가 생성된 이후에 프로토타입을 변경하는 작업은 굉장히 느리므로 **이 기능의 사용은 피하는 것이 좋습니다.**

```js
const parent = {
  familyName: '윤'
};
const child = Object.create(parent);

Object.getPrototypeOf(child) === parent; // true

const newParent = {
  familyName: '신'
};
Object.setPrototypeOf(child, newParent);
Object.getPrototypeOf(child) === parent; // false
```

객체 리터럴을 통해 생성된 객체의 프로토타입에는 자동으로 `Object.prototype`이 지정됩니다.

```js
const obj = {};
Object.getPrototypeOf(obj) === Object.prototype; // true
```

### 프로토타입 체인 (Prototype Chain)

프로토타입 상속을 받은 객체가 실제로 어떻게 생겼는지를 확인해보겠습니다.

```js
const parent = {
  a: 1
};
const child = {
  b: 2
};
Object.setPrototypeOf(child, parent);
console.log(child); // { 'b': 2 }
```

그러니까 `child` 객체에는 `a` 속성이 없습니다! 그런데 `child` 객체의 `a` 속성을 출력해보면, 아래와 같은 결과가 나옵니다.

```js
console.log(child.a); // 1
```

도대체 어떻게 된 일일까요? 사실, `child.a`과 같이 JavaScript 객체의 속성에 접근하면, JavaScript 엔진은 `child` 객체의 속성만 확인하는 것이 아니라 **프로토타입 객체의 속성까지 확인**합니다. 그래서 프로토타입에 해당 이름을 갖는 속성이 있다면 그 속성의 값을 반환합니다.

만약에 프로토타입 객체에도 해당 이름의 속성이 없으면 어떻게 될까요? 여기서 짚고 넘어가야 할 것은 **프로토타입 객체도 객체**라는 것입니다. 즉, **프로토타입 객체의 프로토타입 객체**가 있을 수 있다는 말이죠. 이렇게 계속 이어져 있는 프로토타입의 연쇄를 프로토타입 체인(prototype chain)이라 부릅니다.

위의 예제에서, 만약에 `child` 객체의 프로토타입에도 `a` 속성이 없다면 JavaScript 엔진은 프로토타입의 프로토타입까지 확인합니다. 여기서도 발견하지 못하면 프로토타입의 프로토타입의 프로토타입... 이렇게 **더 이상 남아있는 프로토타입이 없을 때까지 확인**해보고, 그래도 찾지 못하면 그때서야 속성값으로 `undefined`를 반환합니다. 즉, JavaScript 엔진은 **속성 접근자를 통해 어떤 객체의 속성을 확인할 때 프로토타입 체인을 전부 확인**합니다. 예를 들어 보겠습니다.

```js
const obj1 = {
  a: 1
};

const obj2 = {
  b: 2
};

const obj3 = {
  c: 3
};

// `obj3 -> obj2 -> obj1` 과 같이 상속
Object.setPrototypeOf(obj2, obj1);
Object.setPrototypeOf(obj3, obj2);

console.log(obj3.a); // `obj3`의 프로토타입의 프로토타입에 존재하는 속성 `a`의 값을 출력
console.log(obj3.b); // `obj3`의 프로토타입에 존재하는 속성 `b`의 값을 출력
console.log(obj3.c); // `obj3`에 존재하는 속성 `c`의 값을 출력
```

프로토타입 체인은 눈에 명확히 보이지는 않지만, 객체의 속성에 접근할 때마다 탐색됩니다. 따라서 프로토타입 체인의 깊이가 너무 깊으면 속성의 읽기 속도에 영향을 미치므로 주의해야 합니다.

어떤 객체가 다른 객체의 프로토타입 체인에 존재하는지 확인하기 위해서 `Object.prototype.isPrototypeOf` 메소드를 사용할 수 있습니다.

```js
obj1.isPrototypeOf(obj3); // true
obj2.isPrototypeOf(obj3); // true
```

### 프로토타입 체인의 끝

위의 설명에서 **'속성에 접근할 때 더이상 프로토타입이 없을 때까지 프로토타입 체인을 확인한다'**고 했는데, 프로토타입이 더 이상 없다는 게 무슨 뜻일까요?

JavaScript에서는 객체의 프로토타입으로 **객체 또는 null** 이외의 값을 지정할 수 없습니다. 지정하려고 하면 에러가 나거나, 무시됩니다.

```js
Object.create(1); // Uncaught TypeError: Object prototype may only be an Object or null
```

그리고 `Object.prototype`의 프로토타입을 확인해보면 `null`이 나옵니다!

```js
Object.getPrototypeOf(Object.prototype); // null
```

위의 사실들을 종합해보면, 프로토타입 체인을 따라가다 보면 언젠가는 `null`을 만난다는 결론에 도달하게 됩니다.[^6] 프로토타입을 명시적으로 `null`로 지정하지 않아도, 언젠가는 `Object.prototype`, 즉 프로토타입이 `null`인 객체를 만나게 됩니다. 이 때에 프로토타입 체인을 확인하는 과정이 끝나는 것입니다.

### 속성 가리기 (Property Shadowing)

프로토타입 체인의 동작 방식에 의하면, 가장 먼저 만나는 속성의 값을 불러오게 됩니다. 아래 예제를 통해 확인해봅시다.

```js
const parent = {
  prop: 1
};

const child = {
  prop: 2
};

Object.setPrototypeOf(child, parent); // `child`의 프로토타입을 `parent`로 재설정합니다.

child.prop; // 2
```

위와 같이 `parent`에 같은 이름의 속성이 있음에도 불구하고, `child.prop`에 접근하면 프로토타입 체인에서 가장 빨리 만나는 값이 불러와집니다. 이렇게 프로토타입 체인의 상위에 있는 속성이 하위 속성에 의해 가려지는 현상을 **속성 가리기(property shadowing)**라고 합니다.

그렇다면 `child`를 통해 `parent`의 속성을 변경하거나 삭제할 수 있을까요?

```js
const parent = {
  prop: '😝'
};

const child = Object.create(parent);

// 프로토타입 객체의 속성을 간접적으로 삭제하는 것은 불가능합니다.
delete child.prop;
parent.prop; // '😝'

// 프로토타입 객체의 속성을 간접적으로 변경하는 것은 불가능합니다.
child.prop = '💀';
parent.prop; // '😝'
child.prop; // '💀'
```

위와 같이, 어떤 객체의 속성을 변경하거나 속성을 삭제하는 작업은 그 객체의 프로토타입에 아무런 영향을 미치지 않습니다. **그저 프로토타입의 속성을 읽어올 수 있을 뿐**입니다.

## 생성자 (Constructor)

이제까지는 객체를 생성하기 위해 객체 리터럴 또는 `Object.create` 함수를 사용했습니다. 하지만 이것 말고도 한 가지 방법이 더 있는데, 바로 `new` 키워드를 이용하는 것입니다.

```js
const obj = new Object();
```

위 문장은 `new` 키워드가 붙었다는 것 말고는 **함수 호출** 문법과 비슷하게 생겼는데, 사실...

```js
typeof Object; // 'function'
```

`Object`는 함수입니다! 이렇게 객체를 만들 때 `new` 키워드와 함께 사용하는 함수를 가지고 생성자(constructor)라고 부릅니다.

### 생성자 정의하기

JavaScript에서는 `Object` 뿐만 아니라, 내장된 많은 생성자들이 있고, 심지어 프로그래머가 직접 생성자를 만들 수도 있습니다. 여기서 `this` 키워드가 한 번 더 등장합니다.

```js
// 생성자 정의
function Person(name) {
  this.name = name;
}

// 생성자를 통한 객체 생성
const person1 = new Person('윤아준');
```

위에서 `function` 구문을 통해 `Person`이라는 생성자를 정의하고, 생성자 안에서는 `this` 키워드를 사용해서 **새로 만들어질 객체의 속성을 지정**해 주었습니다. `new` 키워드를 사용해서 객체를 생성하는 순간에 생성자 안에 있는 코드가 실행되어 객체의 속성이 지정되는 것입니다.

**생성자의 이름**으로는 식별자로 사용할 수 있는 것이면 뭐든지 사용할 수 있지만, 변수와는 다르게 **대문자로 시작**하게끔 짓는 것이 널리 사용되는 관례입니다.

### 인스턴스 (Instance)

생성자를 통해 생성된 객체를 그 생성자의 **인스턴스(instance)**라고 합니다. 위의 예제에서는 `person1`이 `Person`의 인스턴스입니다. `instanceof` 연산자를 사용하면, 객체가 특정 생성자의 인스턴스가 맞는지를 확인할 수 있습니다.[^7]

```js
person1 instanceof Person; // true
```

객체 리터럴을 통해 생성된 객체는 `Object`의 인스턴스입니다.

```js
const obj = {};
obj instanceof Object; // true
```

### 생성자와 프로토타입

생성자와 관련해서 알아야 할 것이 더 있습니다. 바로 생성자의 `prototype` 속성입니다. 생성자를 통해 만들어낸 객체의 **프로토타입**에는 **생성자의 `prototype` 속성에 저장되어 있는 객체**가 **자동으로 지정됩니다.**

```js
Object.getPrototypeOf(person1) === Person.prototype; // true
```

그런데 좀 이상한 점이 있습니다. 우리는 `Person.prototype`에 객체를 저장한 적이 없습니다. 심지어 `Person`은 함수인데도 불구하고 속성을 갖고 있습니다! 어떻게 된 일일까요?

먼저, JavaScript에서는 **함수도 특별한 형태의 객체입니다.** 이에 대해서는 [함수 더 알아보기](./230-function-in-depth.md) 챕터에서 자세히 다룹니다.

그리고, JavaScript에서는 `function` 구문을 통해 함수를 정의할 때 **함수의 `prototype` 속성에 객체가 자동으로 생성되어 저장됩니다.**

```js
function Person() {
  // ...
}
typeof Person.prototype; // 'object'
```

### constructor

생성자의 `prototype` 속성에 자동 생성되는 객체에는 `constructor`라는 특별한 속성이 들어있습니다. 이 속성에는 생성자 자신이 저장됩니다.

```js
function Person() {
  // ...
}
Person.prototype.constructor === Person; // true
```

이를 통해, 어떤 객체가 어떤 생성자로부터 생성되었는지를 `constructor` 속성을 통해 알아낼 수 있습니다.

```js
function Person() {
  // ...
}
const person = new Person();
person.constructor === Person;
```

### 팩토리 함수의 재작성

수고하셨습니다! 이제 생성자를 사용할 준비를 마쳤습니다. 생성자를 이용해서 상단의 `personFactory` 함수를 다시 작성해보겠습니다.

```js
// 사람을 나타내는 객체를 생성하는 팩토리 함수
function Person(name) {
  this.name = name;
}
Person.prototype.introduce = function() {
  return `안녕하세요, 제 이름은 ${this.name}입니다.`;
};

const person = new Person('윤아준');

person.introduce(); // '안녕하세요, 제 이름은 윤아준입니다.'
```

## 정적 메소드 (Static Method)

JavaScript의 함수는 객체이기도 하다는 사실을 앞에서 언급했습니다. 생성자의 속성에 직접 지정된 메소드를 가지고 정적 메소드(static method)라고 합니다. 우리가 이제까지 유용하게 사용했던 `Number.isNaN`, `Object.getPropertyOf` 등의 함수들은 모두 정적 메소드입니다. 정적 메소드는 특정 인스턴스에 대한 작업이 아니라, 해당 생성자와 관련된 일반적인 작업을 정의하고 싶을 때 사용됩니다.

다음과 같이 정적 메소드를 정의할 수 있습니다.

```js
// 생성자의 속성에 함수를 직접 할당합니다.
Person.compareAge = function(person1, person2) {
  if (person1.age < person2.age) {
    return '첫 번째 사람의 나이가 더 많습니다.';
  } else if (person1.age === person2.age) {
    return '두 사람의 나이가 같습니다.';
  } else {
    return '두 번째 사람의 나이가 더 많습니다.';
  }
}
```

[^1]: 다른 언어에서 HashMap, Dictionary 등으로 불리는 자료 구조와 유사하다고 할 수 있습니다.
[^2]: 한글은 JavaScript의 식별자로 사용할 수 있습니다만, 권장되지는 않습니다.
[^3]: `Object.create` 함수에는 프로토타입을 지정하는 것 말고도 다른 기능이 있는데, 이에 대해서는 [객체 더 알아보기](./240-object-in-depth.md) 챕터에서 자세히 다룹니다.
[^4]: Common Lisp, Self 등의 몇몇 Lisp 방언과 Lua 등이 프로토타입 상속을 내장하고 있지만, 대부분의 유명한 범용 프로그래밍 언어는 프로토타입 상속과 같은 기능을 내장하고 있지 않습니다.
[^5]: 객체의 `__proto__` 속성을 통해서도 프로토타입을 조작할 수 있지만, 이 기능은 `Object.getPrototypeOf`, `Object.setPrototypeOf`에 의해 대체되었습니다.
[^6]: 'a의 프로토타입을 b로, b의 프로토타입을 a로 지정'하면 어떻게 될 지 궁금하다고요? 최신 JavaScript 엔진에서는 순환하는 프로토타입 체인을 만들 수 없도록 제한하고 있습니다. 한 번 시험해보세요: `a = {}; b = {}; Object.setPrototypeOf(a, b); Object.setPrototypeOf(b, a);`
[^7]: `instanceof` 연산자는 **생성자의 `prototype` 속성**이 **객체의 프로토타입 체인에 등장하는지**를 검사합니다. 그래서, 특별한 경우가 아니라면 생성자를 통해 생성된 객체는 `Object` 생성자의 인스턴스이기도 합니다.
