function createUserObject(fastName, LastName, age) {
  const user = {
    fastName,
    LastName,
    age,
    getYear() {
      return new Date().getFullYear() - user.age;
    },
  };
  return user;
}
/// thise is called factry function 
//   to create a many objects 

const user3=new createUserObject()
console.log(user3);
user3.fastName='sujay';

user3.LastName="pradhan"
user3.age=20; 
console.log(user3);
 const userYear=user3.getYear()
console.log( userYear);
const user1 = createUserObject("sujay","pradhan",32);
const user2 = createUserObject("souvik","manna",29)
// console.log(user1);
// console.log(user2);

 const data=user1.getYear()
//  console.log(data);

