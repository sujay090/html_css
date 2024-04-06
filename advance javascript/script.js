// call back function

let mathoperation=(x,y,add)=>{
  return add(x,y);
}

let add=(x,y)=>{  // this is callback function
 return x+y;
}

console.log(mathoperation(3,3,add)) // this is called higher order function 