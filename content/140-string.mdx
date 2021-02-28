# string 타입

문자열에 `typeof` 연산을 해보면 다음과 같은 결과가 나옵니다.

```js
typeof 'hello'; // 'string'
```

컴퓨터 분야에서는 문자의 나열(string)이라는 뜻에서 문자열을 'string'이라 부릅니다. string 타입을 통해 일반적인 텍스트 데이터를 다룰 수 있습니다. JavaScript 문자열은 내부적으로 [유니코드(Unicode)](https://ko.wikipedia.org/wiki/%EC%9C%A0%EB%8B%88%EC%BD%94%EB%93%9C)를 통해 표현됩니다.[^1]

## 문자열 리터럴

JavaScript는 문자열 값을 표현하기 위한 여러 가지 리터럴을 제공합니다.

```js
'hello'
"hello 안녕하세요"
`hello world` // template literal
```

따옴표는 표기법일 뿐, 실제 저장되는 값에 영향을 미치지는 않습니다. 예를 들어, `hello`라는 문자열을 표현하기 위 셋 중에 어떤 리터럴을 사용해도 실제 저장되는 값이 달라지지는 않습니다.[^2]

```js
'hello' === "hello"; // true
```

## 템플릿 리터럴 (Template Literal)

ES2015에서 도입된 템플릿 리터럴(template literal)은 문자열 리터럴의 일종으로, 추가적인 기능을 지원합니다. 템플릿 리터럴을 사용하려면 backtick(`)으로 문자열을 둘러싸면 됩니다.

```js
`hello world`
```

템플릿 리터럴의 내삽(interpolation) 기능을 이용하면, 문자열을 동적으로 생성하는 코드를 쉽게 작성할 수 있습니다.

```js
const name1 = 'Foo';
const name2 = 'Bar';
const sentence = `${name1} meets ${name2}!`;
console.log(sentence);

// 일반적인 문자열 리터럴로는 아래와 같이 해야 합니다.
name1 + ' meets ' + name2 + '!';
```

또한, 템플릿 리터럴을 사용하면 **여러 줄로 이루어진 문자열**을 쉽게 표현할 수 있습니다.

```js
`hello
world
hello
javascript!
`

// 일반적인 문자열 리터럴로는 아래와 같이 해야 합니다.
'hello\nworld\nhello\njavascript!\n'
```

템플릿 리터럴은 아래와 같이 특이한 형태의 함수 호출 기능을 지원하는데. 이를 'tagged template literal'이라고 합니다. 주로 다른 언어를 JavaScript와 통합할 때 사용되고, 라이브러리 제작자가 아니라면 보통은 tagged template literal을 위한 함수를 직접 제작할 일은 없습니다. 자세한 내용을 알고 싶다면 [이 문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals#Tagged_template_literals)를 참고하세요.

```js
styled.div`display: flex; border: 1px solid black;`; // styled-components
gql`query { user { name }}`; // graphql-tag
html`<title>Hello tagged template literal!</title>`; // lit-html
```

## Escape Sequence

JavaScript는 특수 문자를 문자열에 넣거나, 혹은 직접 유니코드 코드포인트를 사용해서 문자를 넣을 수 있도록 해주는 escape sequence를 제공합니다.

| 표기법 | 문자 |
| --- | --- |
| \' | 홑따옴표 |
| \" | 쌍따옴표 |
| \\\\ | 백슬래시 |
| \n | 라인 피드 |
| \r | 캐리지 리턴 |
| \t | 탭 |
| \uXXXX | 유니코드 문자 |
| \u{X...} | 유니코드 문자 |
| \\$ | 달러 |
| \\` | 백틱 |

위 escape sequence를 문자열 안에서 사용할 수 있습니다.

```js
console.log('lorem \'ipsum\''); // lorem 'ipsum'
console.log('line\nfeed'); // line(줄바꿈)feed
console.log('\uD55C\uAE00'); // 한글
console.log('\u{1F435}'); // 🐵
```

다만 리터럴을 위해 사용한 따옴표와 **다른 종류의 따옴표**들은 문자열 내에서 자유롭게 쓸 수 있으므로 굳이 escape sequence로 표기해주어야 할 필요가 없습니다.

```js
"`lorem` 'ipsum'";
'`lorem` "ipsum"';
`'lorem' "ipsum"`;
```

위 표의 라인 피드(line feed)와 캐리지 리턴(carage return)은 **개행 문자**로, 우리가 보통 엔터를 누를 때 입력되는 문자입니다. 각각을 줄여서 `LF`, `CR` 이라고 표기하고, 맥과 리눅스에서는 `LF`, 윈도우에서는 `CR+LF`가 개행문자로 사용됩니다. 개행 문자에 대해서 자세히 알아보려면 [이 링크](https://ko.wikipedia.org/wiki/%EC%83%88%EC%A4%84_%EB%AC%B8%EC%9E%90)를 참고하세요.

## 문자열과 연산자

수 타입 뿐 아니라 문자열에 대해서도 여러 가지 연산자를 쓸 수 있습니다.

```js
// 문자열 연결하기
'hello' + 'world'; // 'helloworld'

// 등호 비교
'hello' === 'hello'; // true
'hello' !== 'hello'; // false

// 유니코드 코드포인트 비교. 앞에서부터 한 글자씩 차례대로 비교합니다.
'a' < 'b'; // true
'aaa' < 'abc'; // true
'a' < 'Z'; // false
'한글' < '한국어'; // false
'2' < '10'; // false

// 문자열을 배열로 바꾸기
[...'hello']; // ['h', 'e', 'l', 'l', 'o']
```

위에서 알 수 있는 것처럼 유니코드 코드포인트 비교는 사전순 비교가 아니므로 주의해야 합니다. 사전순 비교를 하려면 `localeCompare` 메소드를 사용하세요.

```js
'b'.localeCompare('a'); // 1
'b'.localeCompare('b'); // 0
'b'.localeCompare('z'); // -1
'b'.localeCompare('Z'); // -1
'가나다'.localeCompare('마바사'); // -1
```

## 속성 및 메소드

number 타입과 마찬가지로 string 타입도 래퍼 객체의 속성과 메소드를 사용할 수 있습니다. 아래는 자주 쓰이는 몇 개의 속성과 메소드에 대한 예제입니다. 이 밖의 내용을 확인하려면 [MDN 문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String#String_instances)를 참고하세요.

```js
// 문자열의 길이 알아내기
'hello'.length; // 5

// 여러 문자열 연결하기
'hello'.concat('fun', 'javascript'); // 'hellofunjavascript'

// 특정 문자열을 반복하는 새 문자열 생성하기
'*'.repeat(3); // '***'

// 특정 문자열이 포함되어 있는지 확인하기
'hello javascript'.includes('hello'); // true
'hello javascript'.startsWith('he'); // true
'hello javascript'.endsWith('ript'); // true
'hello javascript'.indexOf('java'); // 6

// 문자열의 특정 부분을 바꾼 새 문자열 생성하기
'hello javascript'.replace('java', 'type'); // 'hello typescript'

// 문자열의 일부를 잘라낸 새 문자열 생성하기
'hello'.slice(2, 4); // 'll'

// 좌우 공백문자를 제거한 새 문자열 생성하기
'   hello  '.trim(); // 'hello'
'   hello  '.trimLeft(); // 'hello  '
'   hello  '.trimRight(); // '   hello'

// 좌우 공백문자를 추가한 새 문자열 생성하기
'hello'.padStart(8); // '   hello'
'hello'.padEnd(8); // 'hello   '

// 문자열을 특정 문자를 기준으로 잘라 새 배열 생성하기
'hello!fun!javavscript'.split('!'); // ['hello', 'fun', 'javascript']
'hello'.split(''); // ['h', 'e', 'l', 'l', 'o']

// 모든 문자를 소문자, 혹은 대문자로 변환한 새 문자열 생성하기
'Hello JavaScript'.toLowerCase(); // 'hello javascript'
'Hello JavaScript'.toUpperCase(); // 'HELLO JAVASCRIPT'
```

[^1]: 정확히 말하면, 문자열은 JavaScript 내부적으로 UTF-16 형식으로 인코딩된 값으로 다뤄집니다. ([명세](https://tc39.github.io/ecma262/#sec-ecmascript-language-types-string-type))
[^2]: 그렇다고 해서 따옴표를 마구잡이로 섞어 쓰는 게 좋은 것은 아니며, 꼭 필요한 경우가 아니라면 코드의 일관성을 위해 한 가지 종류의 따옴표만을 사용하는 것이 좋습니다. 주로 홑따옴표(`'`)가 널리 사용됩니다.
