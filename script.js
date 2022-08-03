const hour1=document.getElementById('hour');
const min1=document.getElementById('minute');
const sec1=document.getElementById('second');
const ampm1=document.getElementById('ampm');

function uddateTime(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let am= "AM"
    h= h < 10 ? "0" + h : h ;
    m= m < 10 ? "0" + m : m ;
    s= s < 10 ? "0" + s : s ;
    if( h > 12){
      h=h-12;
      am="PM"
    }
  

    hour1.innerHTML=h;
    min1.innerHTML=m;
    sec1.innerHTML=s;
   ampm1,(innerHTML=am);

  setTimeout(()=>{
   uddateTime();
  },1000)
}

uddateTime();