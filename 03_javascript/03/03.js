// foreach, map, filfer 3가지는 무조건 외우기  엄청많이쓰는 형태임!
// https://armadillo-dev.github.io/es6/javascript/array-methods/

// filter(predicate) : 주어진 조건에 따라 필터링하여 새로운 배열을 생성
// map(callbackfn) : 배열의 각 요소를 변환하여 새로운 배열을 생성
// foreach(callbackfn) : 배열의 각 요소에 대해 주어진 함수를 실행

const arr = [10,20,30,40,50];

console.log(arr.filter(x => x % 20 != 0)); // [10, 30, 50]
arr.filter(x => x % 20 != 0).forEach(x=>console.log(x));

// 10, 30, 50 만 출력
function f(x) {
    return x % 20 != 0;
}

function f2(x) {
    console.log(x);
}
arr.filter(f).forEach(f2);

// 10, 90, 250 출력
function f3(x) {
    return x ** 2 / 10;
}
arr.filter(f).map(f3).forEach(f2);

console.log(arr.filter(x => x % 20 != 0));

//stream
arr.filter(x => x % 20 != 0).map(x => x ** 2 / 10).forEach(x => console.log(x));

//익명함수
arr
.filter(function(x) {
    return x % 20 != 0
})
.map(function(x) {
    return x ** 2 / 10
})
.forEach(function(x) {
    console.log(x); 
})

// reduce?는 차원을 줄이는... 몽고db에서 많이 씀
// accumulator 누산 (sum과 같은)...

const arr2 = [1,2,3,4,5];
const result = arr2.reduce(function(acc, cur) {
    console.log(acc);
    return acc+cur;
}, 0);

console.log(result);


// 전체 배열 원소의 합계 값을 구한다.
const arr3 = [1, 2, 3]
const sum = arr3.reduce((acc, curr) => acc + curr, 0) // 6

// 계정(account)을 순회하면서 성별(gender)로 그루핑 하는 작업을 수행한다.
const accounts = [
  { id: 'armadillo1', age: 27, gender: 'male' },
  { id: 'armadillo2', age: 33, gender: 'male' },
  { id: 'armadillo3', age: 21, gender: 'female' },
  { id: 'armadillo4', age: 40, gender: 'female' },
  { id: 'armadillo5', age: 13, gender: 'female' },
]
const groupByGender = accounts.reduce((acc, curr) => {
  const key = curr.gender
  if (!acc.hasOwnProperty(key)) {
    acc[key] = []
  }
  acc[key].push(curr)
  return acc
}, {})

console.log(groupByGender) // { male: [...], female: [...] }

//링크에 find도 있음