var arr = ["ABCD", true, 1234];
console.log(arr.length);

var arr2 = new Array(10);
console.log(arr2);
console.log(arr2[0]);

// slice (문자열 substring과 같은 역할)
var arr3 = arr.slice(1, 2); // 1 이상 인덱스 2미만 인덱스까지 자르기
var arr3 = arr.slice(1, 2, 3, 4, 5); // 파라미터 2개를 입력받지만 그 이상을 입력해도 오류가 나지 않음(무시) - overloading

console.log(arr); // 원본에 변화없음
console.log(arr3);

// split : 문자열 -> 배열
// join : 배열 -> 문자열

var str = "a-b-c-d-e"; // a/b/c/d/e로 변경
arr = str.split("-");
// arr = str.split("");
str = arr.join("/");
console.log(str);

// 자바의 배열은 소유 멤버 : length 하나만 있음
// 자바의 조인 사용 방법 : String.join(배열, 구분자)


// concat
arr = [1, 2, 3, 4, 5];
arr2 = [4, 5, 6, 7];

var arr3 = arr.concat(arr2);
console.log(arr3);

// (ES 6에 등장!) ...는 요소를 전개하는 연산자
var arr3 = [...arr, ...arr2];
console.log(arr3);
var arr3 = [0, ...arr, 10, ...arr2, 20]; //이런식으로도 활용 가능
console.log(arr3);

var arr3 = [arr, arr2];
console.log(arr3);

// toString (콤마로 구분되는 문자열)
console.log(arr3.toString());

//자바와 달리 기본자료형에도 적용이 가능함
var num = 1;
console.log(num.toString());