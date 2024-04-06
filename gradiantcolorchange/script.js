var btn1=document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");
 function newcolor(){
let hexnum="0123456789abcdef";
let color="#";
for(let i=0;i<6;i++){
  color+=hexnum[Math.floor(Math.random()*16)];
}
return color;
 };

 function newcolor1(){
  let hexnum1="0123456789abcdef";
  let color1="#";
  for(let i=0;i<6;i++){
    color1+=hexnum1[Math.floor(Math.random()*16)];
  }
  return color1;
   };

   let colorHandel = ()=>{
    let rgb2=newcolor1();
    let rgb1=newcolor();
    // console.log(rgb1);
    document.body.style.backgroundImage=`linear-gradient(to right,${rgb1},${rgb2})`;
    document.querySelector("#para").textContent=`background-image:linear-gradient(to right,${rgb1},${rgb2})`
    btn1.textContent=`${rgb1}`
    btn2.textContent=`${rgb2}`

   }
   let colorHandel2 = ()=>{
    let rgb3=newcolor();
    let rgb2=newcolor1();
    // console.log(rgb2);
    document.body.style.backgroundImage=`linear-gradient(to right,${rgb2},${rgb3})`;
    document.querySelector("#para").textContent=`background-image:linear-gradient(to right,${rgb2},${rgb3})`
    btn1.textContent=`${rgb2}`
    btn2.textContent=`${rgb3}`
   }

   document.querySelector("#para").addEventListener("click",function(){
    navigator.clipboard.writeText(para.textContent);
    alert("copy complete");
   })

btn1.addEventListener("click",colorHandel);
btn2.addEventListener("click",colorHandel2);

