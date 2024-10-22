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

const arr = [10, 20, 3, 40, 5];
// 내부적으로 문자를 비교해서 이상함...
//  숫자영역을 위한 comperator 필요...? 콜백 필요함...

arr.sort1((a,b)=>a-b); // 오름차순

arr.sort2(function(a,b) {
    return b-a;
})

console.log(arr);

//for of  : 리터러블한 것만 가능? 배열! 향상for문과 동일
//for in을 자주 씀

const multi = [
    [1,2,3,4],
    [3,4,5],
    [2,3,4]
];

for(let i in multi) {
    for(let j in multi[i]){
        console.log(multi[i][j])
    }
}


for(let sub of multi) {
    for(let value of sub){
        console.log(value);
    }
}
