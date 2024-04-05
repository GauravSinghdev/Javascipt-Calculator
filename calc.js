const iTxt = document.getElementById("p2");

let count = 0;

function clean()
{
    // console.log("click");
    iTxt.innerHTML = "0";
    count = 0;
}

function bck()
{
    const string = iTxt.innerHTML;
    let a = string.split("");
    a.pop();
    a = a.join("");
    iTxt.innerHTML = `${a}`
    if(a=="")
    iTxt.innerHTML = "0";
}

const btns = document.querySelectorAll(".btn");;

console.log(btns.length);

for(let i=0;i<btns.length;i++)
{
    // iTxt.innerHTML = "";
    btns[i].addEventListener("click", (e) =>{

        if(count==0) 
        {
            iTxt.innerHTML = "";
            count++;
        }
        console.log("clicking")
    let ele = e.currentTarget.innerHTML;

    console.log(ele);
    let cstr = iTxt.innerHTML;

    cstr += ele;

    iTxt.innerHTML = cstr;
    })
}

function parse(s)  {
    return Function(`'use strict'; return (${s})`)();
  }

function solve()
{
    const exp = iTxt.innerHTML;
try{
  if(!isNaN(parse(exp)))
  {
    console.log(parse(exp));
    iTxt.innerHTML = `${parse(exp)}`;
  }
  
  else
  {
    console.log("invalid1");
    return;
  } 
}
catch(e){
  console.log("invalid");
  return;
}
}


function mult()
{
    let p = iTxt.innerHTML;
    p += "*";
    iTxt.innerHTML = `${p}`
}






