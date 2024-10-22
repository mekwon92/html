//일반함수, 생성자함수 ?!!!!
function Student(no, name, kor, eng, mat){
    this.no = no; 
    this.name = name;
    this.kor = kor;
    this.eng = eng;
    this.mat = mat;
}
// 프로토 타입 : 공용 공간의 확장... 생성삭제가능 배열,문자열 등 커트터마이징할 때 많이 씀

// console.log(s1.total()); undefined. 파일 내에만 영향을 미친다...?
Student.prototype.total = function() {
    return this.kor+this.eng+this.mat;
}

const s1 = new Student(1, '새똥이', 100, 100, 100);
console.log(s1.total());

// list.remove(index)와 같은 역할을 하는 것을 배열에 구현할 수 있음
const arr = [1,2,3,4,5];

//splice는 배열 자체를 바꿈 cf_slice
//중간제거
// arr.splice(1, 3, 10, 20);
console.log(arr);

Array.prototype.remove = function (index) {
    this.splice(index, 1); //this와 가장 가까운 객체를 찾아가세요?
}

arr.remove(3);
console.log(arr); //js식 상속 비스무리..?

// 자주씀?
// for in         for  ~ ? :es6
//for(let/const i in obj) : i에 value가 아닌 key값이 나옴? 프로퍼티 개수만큼 돌아버림~?!
// i  ... obj[i]

for(let i in s1) {
    if(i == 'name') {
        s1[i] = '소똥이';
    }
    console.log(i,s1[i]);
}

for(let i in arr) {
    console.log(i, arr[i]);
}

for(let i in 'abcde'){
    console.log(i, 'abcde'[i]);    
}

// in operator (객체 프로퍼티 소유여부 확인 : boolean)
console.log('name' in s1);
console.log('addr' in s1);

