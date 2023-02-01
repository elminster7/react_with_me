class Person {
    name = 'Max';
    call = () => {};
};

/* construction functions anyone? */
const myPerson = new Person();
    myPerson.call();

console.log(myPerson.name);

/* @extends 란?
 * - 클래스 확장.
 * 객체 란? 
 * - 이름과 값으로 구성된 프로퍼티의 정렬되지 않은 집합.
 * property 란? 
 * - 객체 안에 선언된 이름과 값으로 이루어진 쌍.
 * 메소드 란?
 * - 프로퍼티 값으로 함수가 온 경우를 메소드라 함.
 * contruct(생성자) ?
 * - 정해진 키밸류를 가진 객체를 편리하게 생성할 수 있게 도와주는 기계같은 역할
 */

/* 예제)  */

class Human
{
    constructor() {
        this.gender = 'male';
    }
    printGender() {
        console.log(this.gender);
    }
}

/*  |  Person1 에 extends 를 하면 Human 의 내용을 확장 할 수 있다.
 *  v
 */
class Person1 extends Human{
    constructor() {
        this.name = 'Max';
    }
    printMyName() {
        console.log(this.name);
    }
}

const person = new Person1();
person.printMyName();