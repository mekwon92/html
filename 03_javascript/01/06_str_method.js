
//둘다 타입은 다르게 나오지만(number, object) 관련 메서드는 둘 다 호출 가능함
let num = 20; //typeof number
console.log(num.toFixed(2));

num = new Number(20.2341); //typeof object
console.log(num.toFixed(2));

// 함수 Number('1234');
// 생성자 함수 new Number('1234');

let str1 = 'abcd';
num = new String('ABCD');

let number = 20;
// 14[16] 10100[2]

let binaryNumber = number.toString(2); // 10100
let hexNumber = number.toString(16); // 14

console.log(binaryNumber,hexNumber);

let result = parseInt(binaryNumber, 2);
console.log(result); // 20

const str = '가나다라가나다라가나다라가나다라';

console.log(str.charAt(2),str[2]);

console.log(str.slice(1,3),str.substring(1,3),str.substr(1,3));

//replace : 자바는 다 바뀌는데 여긴 처음만나는 한글자만 바뀜
console.log(str.replace('가','마'),str.replaceAll('가','마'));

//charCodeAt(index) : java가 더 편함
// 11172 = 588 * 19 을를은는이가 처리(마지막글자의 받침 유무. 자연어처리)
let s = "";
for(let i = 0 ; i < 26; i++){
    s += String.fromCharCode(65+i);
}
console.log(s);
console.log(s.charCodeAt(0));
