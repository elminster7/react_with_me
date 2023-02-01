

/* Properties are like "variables" 
* attached to class / objects
*/

/* es6
 * constructor() {
    this.myProperty = 'value;
 }

 * ex7
 * myProperty = 'value';
 */

 /* Methods are like "functions attached to classes/ object" */
 /* 
  * ES6
  * myMethod() {...}
  * 
  * ES7
  * myMethod = () => {...}
  */

 class Human {
    genter  = 'male';

    printGender = () => {
        console.log(this.gender);
    }
 }

 class Person extends Human {
    name = 'Max';

    printName = () => {
        console.log(this.Max);
    }
 }

 