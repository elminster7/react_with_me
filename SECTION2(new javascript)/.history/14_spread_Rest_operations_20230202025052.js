/* Spread : used to split up addray elements OR object properties
 * ex)
 * const newArray = [...oldArray, 1 ,2];
 * const newObject = {...oldObject, newProp:5};
 */

const numbers = [ 1, 2, 3 ];
const newNumbers = [...numbers, 4];

console.log(newNumbers);

const Person = {
    name: 'Max'
};

const newPerson = {
    ...Person,
    age: 28
}

console.log(newPerson);


/* Rest : userd to merge a list of function arguments into an array 
 * function sortArgs(...args) {
    return args.sort()
 }
*/
