# 함수형 프로그래밍

이번 챕터에서는 JavaScript 함수의 기능을 활용해 구현할 수 있는 몇 가지 함수형 프로그래밍(functional programming) 기법에 대해 다룹니다.

## 고차 함수 (Higher-order Function)

**함수를 인수로 받는 함수**, 또는 **함수를 반환하는 함수**를 일러 **고차 함수(higher-order function)**라고 합니다.

```js
// 함수를 인수로 받는 함수
function func2(f) {
  f();
}

// 함수를 반환하는 함수
function func1() {
  return function() {};
}
```

예를 들어, 함수를 인수로 받는 `Array`의 많은 메소드들(`forEach`, `map`, `reduce`, `filter`, `sort`, `every`, `some`, `find` 등)은 고차 함수입니다.

다른 함수의 인수로 넘겨지는 함수를 **콜백(callback)**이라고 부르기도 합니다.

## 클로저 (Closure)

보통의 경우, 안쪽 스코프에서 정의된 변수는 바깥 스코프에서 접근할 수 없습니다.

```js
function func1(x) {
  return x;
}

func1(1);
// 더 이상 변수 `x`에 접근할 수 있는 방법이 없습니다.
```

```js
for (let i = 0; i < 10; i++) {
  console.log(i);
}
// 더 이상 변수 `i`에 접근할 수 있는 방법이 없습니다.
```

그런데, **안쪽 스코프에서 만들어진 함수에서 바깥 스코프의 변수를 사용하고 있다면**, 이 함수를 통해서 변수를 계속 사용할 수 있습니다. 심지어 **바깥 스코프에 해당하는 코드의 실행이 끝난 뒤라도** 말이죠.

```js
function func1(x) {
  // 여기서 반환되는 함수는 바깥 스코프에 있는 변수 `x`를 사용하고 있습니다.
  return function () {
    return x;
  }
}

const func2 = func1(1);

// `func1`의 실행은 끝났지만, `func2`를 통해서 변수 `x`를 사용할 수 있습니다.
console.log(func2()); // 1
```

```js
const arr = [];

for (let i = 0; i < 10; i++) {
  // 여기서 만들어진 함수는 바깥 스코프에 있는 변수 `i`를 사용하고 있습니다.
  arr.push(function() {
    return i;
  });
}

// for 루프의 실행은 끝났지만, 루프 안에서 만들어진 함수가 배열에 저장되어 있습니다.
// 배열 안에 들어있는 함수를 통해, 해당 함수가 만들어진 시점의 변수 `i`를 사용할 수 있습니다.
console.log(arr[2]()); // 2
console.log(arr[5]()); // 5
```

위와 같이, 바깥 스코프에 있는 변수를 가져다 사용하는 **함수**와, 변수가 저장되는 **저장소**를 **클로저(closure)**라고 부릅니다.

클로저의 성질을 통해 고차 함수를 흥미로운 방식으로 활용할 수 있습니다.

```js
// 고차 함수의 인수로 함수를 넘길 때, 해당 함수에서 바깥 스코프에 있는 변수를 사용할 수 있습니다.
const people = [
  {name: '윤아준', age: 19},
  {name: '신하경', age: 20}
]

function peopleOlderThan(people, threshold) {
  return people.filter(person => person.age > threshold);
}

peopleOlderThan(people, 19); // [ { name: '신하경', age: 20 } ]
```

```js
// 특정한 방식으로 동작하는 함수를 만들어내는 고차 함수를 작성할 수 있습니다.
function makeAdder(x) {
  return function (y) {
    return x + y;
  }
}

[1, 2, 3].map(makeAdder(2)); // [3, 4, 5]
```

때때로 클로저의 성질은 **데이터를 숨기고 정해진 방법을 통해서만 데이터에 접근할 수 있도록 제한**을 두는 데 활용되기도 합니다.[^1]

```js
function makeCounter(x = 1) {
  return function() {
    return x++;
  }
}
// `x`를 직접 변경할 수 있는 방법이 없습니다!

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

```js
function personFactory(initialAge) {
  let age = initialAge;
  return {
    getOlder() {
      age++;
    },
    getAge() {
      return age;
    }
  };
}
// `age`를 직접 변경할 수 있는 방법이 없습니다!
```

근래의 JavaScript 디버거는 클로저에 어떤 값이 들어있는지를 보여주는 기능을 포함하고 있습니다. 한 번 확인해보세요.

## 화살표 함수와 고차 함수

화살표 함수 문법을 이용하면, 적은 양의 코드만 사용해서 고차 함수를 만들 수 있습니다.

```js
const makeAdder = x => y => x + y;

const add2 = makeAdder(2);
add2(3); // 5
```

```js
const makeCounter = (x = 1) => () => x++;

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

## 재귀 함수 (Recursive Function)

함수 내부에서 **자기 자신을 호출하는 함수**를 **재귀 함수(recursive function)**라고 부릅니다.

```js
function func() {
  func();
}
```

### 루프와 재귀 함수

대부분의 루프는 재귀함수를 통해 다시 구현될 수 있습니다. 아래 예제를 통해 `for` 루프의 **초기값-조건-갱신**이 재귀 함수로 어떻게 구현될 수 있는지 살펴보세요.

```js
// 루프로 구현된 팩토리얼
function factorialLoop(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// 재귀 함수로 구현된 팩토리얼
function factorialRec(n) {
  return n <= 1 ? 1 : n * factorialRec(n - 1);
}
```

```js
// 루프로 구현된 피보나치 수
function fiboLoop(n) {
  let x = 0;
  let y = 1;
  for (let i = 0; i < n; i++) {
    [x, y] = [y, x + y];
  }
  return x;
}

// 재귀 함수로 구현된 피보나치 수
function fiboRec(n) {
  return (
    n < 1 ? 0 :
    n === 1 ? 1 :
    fiboRec(n - 1) + fiboRec(n - 2)
  );
}
```

위에서 볼 수 있듯이, 재귀 함수를 사용하면 루프를 사용했을 때보다 **코드의 의미가 명확해지고 코드의 길이를 줄일 수 있다**는 장점이 있습니다.

### 분할 정복 (Divide and Conquer)

분할 정복(divide and conquer)은 **문제를 작은 부분 문제로 나누어서 푼 뒤, 그 결과를 합치는 식**으로 알고리즘을 작성하는 기법이며, 재귀 함수가 활용되는 대표적인 사례입니다. 바로 위의 `fiboRec` 역시 분할 정복의 일종이라 할 수 있습니다.

분할 정복 기법을 활용하는 알고리즘 중 대표적인 예로 **병합 정렬(merge sort)**을 들 수 있습니다.

```js
function mergeSort(arr) {
  // 입력된 배열의 길이가 1 이하이면 더 이상 재귀 호출을 하지 않습니다.
  if (arr.length <= 1) return arr;

  // 배열을 절반으로 잘라 두 개의 작은 배열로 분할하고,
  // 두 작은 배열에 대해 재귀 호출을 수행합니다.
  const slicer = Math.floor(arr.length / 2);
  const arr1 = mergeSort(arr.slice(0, slicer));
  const arr2 = mergeSort(arr.slice(slicer));

  // `arr1`, `arr2`는 **이미 정렬되어있는 상태**이므로,
  // 이 성질을 이용해 두 배열을 **정렬되어있는 큰 배열**로 합칠 수 있습니다.
  const newArr = [];
  for (let i = 0, j = 0; i < arr1.length || j < arr2.length; ) {
    if (arr1[i] == undefined || arr1[i] > arr2[j]) {
      newArr.push(arr2[j]);
      j++;
    } else {
      newArr.push(arr1[i]);
      i++;
    }
  }

  // 큰 배열을 반환합니다.
  return newArr;
}
```

중첩 루프를 사용해 구현한 **선택 정렬**과, 분할 정복을 통해 구현한 **병합 정렬** 간의 속도 차이를 [직접 확인](https://repl.it/@seungha/mergeSortAndSelectionSort)해보세요.

### 주의할 점

재귀 함수는 알고리즘을 간결하고 명확하게 서술할 수 있게 해 주지만, 사용할 때 주의해야 할 점이 몇 가지 있습니다.

재귀 함수가 실행되는 동안에는 **종료되지 않은 함수**가 아주 많이 생기게 되므로, 코드의 실행 속도가 느려지거나 컴퓨터 메모리에 큰 부담을 줄 수 있습니다. 이 때문에 대부분의 JavaScript 구동 환경에서는 **특정 깊이 이상의 재귀 호출이 일어날 수 없도록 제한**을 두고 있습니다. Chrome 브라우저의 경우 대약 10000번 정도의 재귀 호출이 일어나면 아래와 같은 에러를 발생시킵니다.[^2]

```js
factorialRec(20000); // RangeError: Maximum call stack size exceeded
```

재귀 호출에 대한 제한 때문에 원하는 작업을 수행할 수 없게 됐다면, 재귀 함수 대신 **루프 혹은 스택(stack)**을 사용해서 코드를 재작성해보세요.

또한, 주의하지 않으면 쓸데없는 재귀 호출이 아주 많이 일어나게 될 수 있습니다. 위의 피보나치 수를 구하는 예제에서, 100 번째 피보나치 수를 구하기 위해 `fiboRec(100)`을 호출하면, `fiboRec(90)`는 89번, `fiboRec(80)`은 10946번, `fiboRec(70)`은 1346269번... 이런 식으로 **같은 인수에 대한 호출이 쓸데없이 많이 일어나게 됩니다.** 더군다나 `fiboRec` 함수는 재귀 호출이 깊이가 깊어질 수록 같은 호출 횟수가 기하급수적으로 증가하게 되므로, 인수의 크기가 조금만 커져도 답을 구할 수 없을 정도로 함수의 실행 시간이 길어지게 됩니다.

사실 `fiboRec(70)`을 한 번 호출했다면 우리는 이미 **그 답을 알고 있으므로 다시 계산할 필요가 없습니다.** 그래서, 일단 한 번 구해놓은 답은 별도의 저장소에 기억하고, 후에 같은 인수로 함수가 호출되면 이전에 계산해놓았던 답을 바로 반환하는 식으로 재귀 함수를 작성할 수 있습니다. 이런 방식을 통해 함수의 호출 횟수를 극단적으로 줄일 수 있습니다. 이런 기법을 **메모이제이션(memoization)**이라고 부릅니다.[^3]

위의 `fiboRec` 함수를 메모이제이션 기법을 통해 아래와 같이 재작성할 수 있습니다.[^4]

```js
const fiboRecMemoized = (() => {
  // 계산 결과를 저장하는 저장소를 만듭니다.
  const memo = new Map();

  const fiboRec = n => {
    // 만약에 이전에 같은 인수로 계산한 적이 있다면
    // 해당 결과를 바로 반환합니다.
    let result = memo.get(n);
    if (result != undefined) return result;

    result = (
      n < 1 ? 0 :
      n === 1 ? 1 :
      fiboRec(n - 1) + fiboRec(n - 2)
    );

    // 계산 결과를 저장소에 저장한 후 반환합니다.
    memo.set(n, result);
    return result;
  }

  return fiboRec;
})();
```

[여기](https://repl.it/@seungha/fiboRecMemoized)에서 메모이제이션 적용 전과 적용 후의 실행 속도를 비교해보세요.

[^1]: 클래스 필드를 클래스 외부에서는 사용할 수 없도록 만들어주는 [private class field](https://github.com/tc39/proposal-class-fields#private-fields) 기능이 곧 ECMAScript 명세에 추가될 예정입니다.
[^2]: 이 제한을 뛰어넘을 수 있게 해주는 'tail call optimisation'이라는 기능이 ES2015 명세에 포함되었지만, 사파리 외에는 아직 이 기능을 구현한 브라우저가 없는 상태입니다.
[^3]: 단, 메모이제이션 기법은 '반환값이 오로지 주어진 인수에 의해서만 결정되는 함수'에 대해서만 적용할 수 있습니다. 이와 같은 함수를 순수 함수(pure function)라고 부릅니다.
[^4]: `fiboRecMemoized`를 만들 때, 클로저에 `memo`라는 저장소를 숨기기 위해서 화살표 함수 리터럴을 통해 함수를 만든 후 이 함수를 바로 호출했습니다. 이렇게 함수 리터럴을 바로 호출하는 기법을 IIFE(Immediately Invoked Function Expression) 혹은 '즉시 호출 함수 표현식'이라고 부릅니다. 이전에는 전역 스코프를 오염시키지 않고 변수를 선언하려는 목적에서 IIFE가 널리 사용되었지만, CommonJS 혹은 ES2015 모듈이 같은 역할을 해 줄 수 있기 때문에 최근에는 IIFE가 자주 사용되지는 않습니다.
