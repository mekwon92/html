//생성자함수 : 프로토타입으로 재정의 해야함
//class : 자동으로 프로토타입이 됨 es6

//class보다 함수 사용을 더 많이 함?

class Student {
    constructor(no, name, score) {
        this._no = no;
        this.name = name;
        this.score = score;
    }
    toString() {
        return `학번 : ${this._no}`
    }
    get getName() {
        return this.name;
    }
    set setName(name) {
        this.name = name;
    }
    get no() {
        return this._no;
    }
    set no(n) {
        if(n < 0){
            return;
        }
        this._no = n;
    }
}
const student = new Student(1, '말똥이', 100);
console.log(student);

//get set은 필드처럼 쓰지만 실제 구조는 메서드임
console.log(student.getName);
student.setName = '소똥이';
console.log(student.getName);

console.log(student.no);
student.no = 2;
console.log(student.no);
//프로토타입은 객체 기본요소에는 포함이 안됨... for in으로는 가능
//JS에서 필드 모듈화?는 좀 무의미하다고.....??????
console.log(student); // tostring은 안보여
console.log(student.toString());

for(let i in student){
    console.log(i);   
}

//둘다 타입은 다르게 나오지만 관련 메서드는 둘 다 호출 가능함
let num = 20; //typeof number
console.log(num.toFixed(2));

num = new Number(20.2341); //typeof object
console.log(num.toFixed(2));

// 함수 Number('1234');
// 생성자 함수 new Number('1234');

let str = 'abcd';
num = new String('ABCD');

