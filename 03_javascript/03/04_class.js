//생성자함수 : 프로토타입으로 재정의 해야함
//class : 메서드가 자동으로 프로토타입이 됨 es6
//class의 메서드는 객체 기본요소로 확인 불가능함

//class보다 생성자 함수를 많이 씀

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
console.log(student.getName); //말똥이
student.setName = '소똥이';
console.log(student.getName); //소똥이

console.log(student.no); // 1
student.no = 2;
console.log(student.no); // 2


console.log(student); // Student { _no: 2, name: '소똥이', score: 100 }
console.log(student.toString()); //학번 : 2

for(let i in student){
    console.log(i, student[i]);   
}
// _no 2
// name 소똥이
// score 100