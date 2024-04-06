const mainTodoElement=document.querySelector(".todo-lists-element");
const inputvalue=document.querySelector("#inputValue");

let addTodoList = (e)=>{
  e.preventDefault();

  const divElement=document.createElement("div");
  divElement.classList.add("main-todo-div")
  divElement.innerHTML=`<li>${inputvalue.value}</li> <button class="delet-btn">Delete</button>`;
  mainTodoElement.append(divElement);
}
  document.querySelector(".btn").addEventListener("click",(e)=>{
    e.preventDefault();
    addTodoList();


})