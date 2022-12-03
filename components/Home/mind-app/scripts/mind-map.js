document.getElementById("btn").addEventListener("click",myfun);
let cont = document.getElementById('left');
 var max=Infinity;
 var count =0;
let arr=[];
function myfun(){
   count++;
   if(count>max){
      return;
 }
 let div1=document.createElement("div");
   div1.setAttribute("class","flex")

 let line=document.createElement("div");
 line.setAttribute("class","hr")

 let input = document.createElement('input');
 input.placeholder = 'Type something';
 input.setAttribute("id","inp")
 div1.append(line,input);
 cont.append(div1)
 arr.push(cont)
//   console.log(arr)
 
}



 document.getElementById("btn1").addEventListener("click",myfunc);
 let conta = document.getElementById('right');
 var max1=Infinity;
 var count1 =0;

function myfunc(){
   count1++;
   if(count>max1){
      return;
 }
 let div1=document.createElement("div");
   div1.setAttribute("class","flex")

 let div=document.createElement("div");
 div.setAttribute("class","hr")

let input = document.createElement('input');
input.placeholder = 'Type something';
input.setAttribute("id","inp")
input.onclick=function(){
   dis()
}
div1.append(div,input)
conta.append(div1);
}

 function undo(){
   arr.pop()
  window.location.href="./mind-map.html";
  Style.color="white";
}

function credit(){
  window.location.href="./credit.html"
}

function share(){
  let cont=document.getElementById("prabhat");

  if(cont.style.display=="block"){
    cont.style.display="none";
  }else{
    cont.style.display="block";
  }
}