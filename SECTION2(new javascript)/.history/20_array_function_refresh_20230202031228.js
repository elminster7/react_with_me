
/* @map() 함수는 예전 값을 새 값으로 반환한다. */
/* javascript array functions 
 */

const numbers = [ 1, 2, 3];

const doubleNumArray = numbers.map((num) => {
    return num * 2;
});

console.log(numbers);
console.log(doubleNumArray);