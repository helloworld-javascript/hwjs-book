# 모듈

최근들어 프론트엔드 프로젝트의 규모가 커짐에 따라, JavaScript 코드를 **여러 파일과 폴더에 나누어 작성**하고 **서로가 서로를 효율적으로 불러올 수 있도록** 해주는 시스템의 필요성이 절실해졌습니다. 이에 따라 모듈 시스템이 ES2015에 추가되었습니다.

ES2015 모듈은 최근에 (Chrome 61, FF 60, SF 10.1) 브라우저에서 사용할 수 있게 되었습니다. `script` 태그에 `type="module"` 어트리뷰트를 추가해주면, 이 파일은 모듈로서 동작합니다. 파일 확장자로는 대개 `mjs`가 사용됩니다.

```html
<script type="module" src="index.mjs"></script>
```

다만 모듈은 이전까지의 JavaScript 파일의 동작방식과는 다른 동작방식을 가지고 있고, 모듈이 제대로 동작하려면 [몇 가지 조건](https://jakearchibald.com/2017/es-modules-in-browsers/)을 충족시켜야 해서 사용법이 복잡하며, 구형 브라우저는 모듈을 지원하지 않는다는 문제가 있어 아직은 브라우저에 내장된 모듈 기능을 사용하는 경우가 많지 않습니다. 대신 Webpack, Parcel 등의 모듈 번들러를 통해 변환과정을 거친 뒤, 브라우저에는 일반적인 JavaScript 파일로서 불러오는 방법이 널리 사용되고 있는 추세입니다.

## 모듈이란?

ES2015 모듈은 기본적으로 JavaScript 코드를 담고 있는 **파일**입니다. 다만 일반적인 JavaScript 파일과는 다른 여러가지 차이점을 갖고 있습니다.

- `import` 혹은 `export` 구문을 사용할 수 있습니다.
- 별다른 처리를 해주지 않아도 엄격 모드(strict mode)로 동작합니다.
- 모듈의 가장 바깥쪽에서 선언된 이름은 전역 스코프가 아니라 **모듈 스코프**에서 선언됩니다.

## 모듈 스코프

모듈 내부의 가장 바깥 스코프에서 이름을 선언하더라도, 전역 스코프가 아니라 **모듈 스코프**에서 선언됩니다. 모듈 스코프에 선언된 이름은 (export 해주지 않는다면) 해당 모듈 내부에서만 접근할 수 있습니다.

```js
// variables.js

const foo = 'bar';

// 이 파일이 모듈로서 사용되고 있다면, `undefined`가 출력됩니다.
console.log(window.foo);
```

따라서 여러 모듈의 가장 바깥쪽에서 같은 이름으로 변수, 함수, 클래스를 선언하더라도, 서로 다른 스코프에서 선언되기 때문에 이름의 충돌이 생길 일이 없습니다.

## export & import

모듈 스코프에서 정의된 이름은 `export` 구문을 통해 다른 파일에서 사용할 수 있습니다. 이를 **'이름이 지정된 export'**라는 뜻에서 **named export**라 부릅니다.

```js
// variables.js
const foo = 'bar';
const spam = 'eggs';

// foo, spam을 다른 파일에서 사용할 수 있도록 export 해주었습니다.
export { foo, spam };
```

위에서 `export`된 이름을 다른 파일에서 `import` 구문을 통해 가져온 뒤 사용할 수 있습니다.

```js
// main.js

// variables 모듈에 선언된 이름을 사용하기 위해 import 해주었습니다.
import { foo, spam } from './variables.js';

console.log(foo);
console.log(spam);
```

단순히 값을 저장하고 있는 변수뿐만 아니라, 함수나 클래스도 `export`를 통해 여러 모듈에서 재사용할 수 있습니다.

```js
// functions.js

function add(x, y) {
  return x + y;
}

class Person {
  // ...
}

export { add, Person };
```

다른 모듈에 있는 이름을 사용하려면, 반드시 해당 모듈에서 **이름**을 `export` 해주어야 합니다. `export` 해주지 않은 이름을 다른 모듈에서 `import` 하면 의도대로 동작하지 않습니다. (모듈 실행 환경에 따라 에러가 날 수도 있고, 이름에 `undefined`가 들어있을 수도 있습니다.)

```js
// variables.js

const foo = 'bar'
```

```js
// main.js
import { foo } from './variables.js';

console.log(foo); // 에러가 나거나, `undefined`가 출력됨
```

## 선언과 동시에 export 하기

이름을 선언하는 구문 앞에 `export`를 붙여주면, 선언과 `export`를 한꺼번에 할 수 있습니다.

```js
// common.js
export const foo = 'bar';
export const spam = 'eggs';
export function add(x, y) {
  return x + y;
}
export class Person {
  // ...
}
```

## default export

`export default` 구문을 통해, 모듈을 대표하는 하나의 **값**을 지정하고 그 값을 다른 모듈에서 편하게 불러와서 사용할 수 있습니다. 이렇게 사용하는 값을 **default export**라고 부릅니다.

```js
// foo.js

export default 'bar';
```

`import` 구문에서 이름을 적어주는 부분에 중괄호를 생략하면, 모듈의 default export를 가져옵니다.

```js
// main.js

import foo from './foo.js'

console.log(foo); // bar
```

`export default` 뒤에는 임의의 표현식이 올 수 있습니다. 즉, 함수 표현식이나 클래스 표현식도 올 수 있습니다.

```js
// add.js

export default function (x, y) {
  return x + y;
}
```

```js
import add from './add.js';

console.log(add(1, 2)); // 3
```

`import` 구문에서 default export와 일반적인 export를 동시에 가져올 수 있습니다.

```js
// `React`라는 이름의 default export와,
// Component, Fragment라는 일반적인 export를 동시에 가져오기
import React, { Component, Fragment } from 'react';
```

## 다른 이름으로 export & import 하기

`export` 혹은 `import` 하는 이름의 뒤에 `as`를 붙여서, 다른 이름이 대신 사용되게 할 수 있습니다.

```js
const foo = 'bar';

export { foo as FOO }; // FOO 라는 이름으로 export 됩니다.
```

```js
import { Component as Comp } from 'react'; // Comp라는 이름으로 import 됩니다.
```

## 모듈 사용 시 주의할 점

이제까지 모듈 시스템의 문법을 배워봤습니다. 여기서 주의할 점이 한 가지 있습니다. `import` 구문과 `export` 구문은 모듈 간 의존 관계를 나타내는 것일 뿐, 코드를 실행시키라는 명령이 아니라는 것입니다.

- 같은 모듈을 여러 다른 모듈에서 불러와도, 모듈 내부의 코드는 단 한 번만 실행됩니다.
- `import` 구문과 `export` 구문은 모듈의 가장 바깥쪽 스코프에서만 사용할 수 있습니다.
- ECMAScript 공식 명세에는 모듈을 불러오는 방법에 대한 내용이 포함되어있지 않고, 이와 관련된 내용을 전적으로 모듈 구현체에 맡겼습니다. 따라서, 모듈을 어떤 환경에서 실행하느냐에 따라서 구체적인 로딩 순서나 동작방식이 조금씩 달라질 수 있습니다.

## ES2015 이전의 모듈들

사실 ES2015가 JavaScript 생태계에서 사용된 첫 모듈 시스템은 아닙니다. ES2015 모듈 이전에 CommonJS, AMD 등의 모듈 시스템이 있었고, 이 모듈 시스템들도 실제로 널리 사용되었던 시기가 있습니다. 다른 모듈 시스템의 특징과 역사가 궁금하시다면 [이 글](https://d2.naver.com/helloworld/12864)을 읽어보세요.
