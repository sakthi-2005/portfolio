const menu_dropdown= document.getElementsByClassName("menu_dropdown");
const home=document.querySelector(".home");

document.getElementById("menu").addEventListener("click",()=>{

   if(menu_dropdown[0].style.display=="block"){
    menu_dropdown[0].style.display="none"
    menu_dropdown[0].style.opacity="0"
   }
   else{
    menu_dropdown[0].style.display="block"
    menu_dropdown[0].style.opacity="1"
   }
})
let scroll=()=>{
   let top=window.scrollY;
   let offset=home.offsetTop;
   let height=home.offsetHeight-150;
   let bottom=top + window.innerHeight;
   console.log(offset+height);
   console.log(bottom);
   if(top< offset+height && bottom> offset+150){
      home.classList.add('animation');
   }
   else{
      home.classList.remove('animation');
   }
}
scroll();
window.onscroll=()=>{
   scroll();   
}