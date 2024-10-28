//모든함수는 프로토타입이 있다.
//프로토타입은 생성된 인스턴스를 통해 접근할 수 있다.
//프로토 타입 : 객체만의 공간 (js에만 있는 개념. 메서드 저장 용도)
//프로토 타입은 호이스팅대상이 아님

function Student(no, name, kor, eng, mat){
    this.no = no; 
    this.name = name;
    this.kor = kor;
    this.eng = eng;
    this.mat = mat;
}

Student.a = 10; // 정적 속성
console.log(Student.a); //10
Student.prototype.area = 20;
const student = new Student(6, '워즈니악', 90, 100, 100);
console.log(student.area); // 20
console.log(student.a); // undefined

// 생성자 함수의 프로토타입에 total이라는 메서드를 추가
Student.prototype.total = function() {
    return this.kor+this.eng+this.mat;
}

const s1 = new Student(1, '새똥이', 100, 100, 100);
console.log(s1.total()); // 300

// for(let/const i in obj) : 프로퍼티 개수만큼 반복됨
// i(속성) obj[i](속성 값)
// 프로토타입도 확인할 수 있음


for(let i in s1) {
    if(i == 'name') {
        s1[i] = '소똥이';
    }
    console.log(i,s1[i]);
}