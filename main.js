

const hop1 = document.querySelector('.hop1');
const hop2 = document.querySelector('.hop2');
const hop3 = document.querySelector('.hop3');
const hop4 = document.querySelector('.hop4');

const div1 = document.querySelector('.div1');
const div2 = document.querySelector('.div2');
const div3 = document.querySelector('.div3');
const div4 = document.querySelector('.div4');





div1.addEventListener('click',()=>{
    if(hop1.style.background === 'red'){
     hop1.style.background = 'rgb(105, 11, 178)';
    }else{
      hop1.style.background = 'red';
    }
   })

div2.addEventListener('click',()=>{
    if(hop2.style.background === 'yellow'){
     hop2.style.background = '  rgb(130, 126, 20)';
    }else{
      hop2.style.background = 'yellow';
    }
   })

   div3.addEventListener('click',()=>{
    if(hop3.style.background === 'orange'){
     hop3.style.background = ' rgb(197, 27, 186)';
    }else{
      hop3.style.background = 'orange';
    }
   })

div4.addEventListener('click',()=>{
    if(hop4.style.background === 'green'){
     hop4.style.background = ' rgb(11, 31, 145) ';
    }else{
      hop4.style.background = 'green';
    }
   })

