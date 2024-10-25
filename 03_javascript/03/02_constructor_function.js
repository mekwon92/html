// 생성자 함수
// 여러 개의 객체를 만들 때 사용하는 함수
// new 키워드와 함께 호출하여 새로운 객체를 생성
// 초기화할 속성이나 메소드를 정의

function Student(no, name, kor, eng, mat){
    this.no = no; //외부접근을 위해 this를 붙임
    this.name = name;
    this.kor = kor;
    this.eng = eng;
    this.mat = mat;

    //전역변수, 지역변수, this구분
    this.total = function() {
        return this.kor+this.eng+this.mat;
    }
    this.avg = function() {
        return this.total() / 3;
    }
    this.toString = function() {
        return `이름 : ${this.name}, 총점 : ${this.total()}, 평균 : ${this.avg()}`;
    }
}

students = [];

student1 = new Student(1, "권1", 100, 90, 80);
students.push(student1);
students.push(new Student(2, "권2", 30, 40, 50));


for(i of students){
    console.log(i);
}

for(let i = 0; i < students.length; i++){
    console.log(students[i]);   
}

console.log(students[0].total());


//캡슐화하는 방법인데 완전한 캡슐화도 아니라 사용 잘 안됨

function Student2(no, name, kor, eng, mat) {
    let _no = no;
    //외부에서 접근 불가. private와 같은 역할
    // _를 통해 내부에서 사용한다는 걸 알려줌(잘 사용되지않음)
    
    this.setNo = function(no){
        _no = no;  
    } 
    this.getNo = function(){
        return _no; //this없으면 전역변수
    }
    this.name = name;
    this.kor = kor;
    this.eng = eng;
    this.mat = mat;
}

const c1 = new Student2(4, "이재용", 100, 60, 60);
console.log(c1.getNo());
c1.setNo(10);
console.log(c1.getNo());

console.log(c1.no); //undefined
console.log(c1._no); //undefined