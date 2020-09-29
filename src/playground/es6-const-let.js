var nameVar = 'Haj';
nameVar = 'Hajira';
var nameVar = 'Raheem';
console.log('NameVar:',nameVar);

let nameLet = 'Hajira';
//let nameLet = 'Raheem'; ---> error, redefinement not allowed
nameLet = 'Raheem';
console.log('NameLet:',nameLet);

const nameConst = 'Hajira';
//const nameConst = 'Raheem'; ---> error, redefinement not allowed
//nameConst = 'Raheem'; ---> error, reassignment not allowed
console.log('NameConst:',nameConst);

const fullName = 'Hajira Raheem';
let firstName;

if(fullName)
{
    firstName = fullName.split(" ")[0];
    console.log("First name printed first time", firstName);
}
console.log("First name printed second time", firstName);