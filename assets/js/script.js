/* Random Advertisement */
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

/*BUSINESS PAGE*/
 
 const galleryItems=document.querySelector(".gallery-items").children;
 const prev=document.querySelector(".prev");
 const next=document.querySelector(".next");
 const page=document.querySelector(".page-num");
 const maxItem=8;
 let index=1;
  
  const pagination=Math.ceil(galleryItems.length/maxItem);
  console.log(pagination)

  prev.addEventListener("click",function(){
    index--;
    check();
    showItems();
  })
  next.addEventListener("click",function(){
    index++;
    check();
    showItems();  
  })

  function check(){
     if(index==pagination){
      next.classList.add("disabled");
     }
     else{
       next.classList.remove("disabled"); 
     }

     if(index==1){
      prev.classList.add("disabled");
     }
     else{
       prev.classList.remove("disabled"); 
     }
  }

  function showItems() {
     for(let i=0;i<galleryItems.length; i++){
      galleryItems[i].classList.remove("show");
      galleryItems[i].classList.add("hide");


        if(i>=(index*maxItem)-maxItem && i<index*maxItem){
        // if i greater than and equal to (index*maxItem)-maxItem;
        // means  (1*8)-8=0 if index=2 then (2*8)-8=8
          galleryItems[i].classList.remove("hide");
          galleryItems[i].classList.add("show");
        }
        page.innerHTML=index;
     }

      
  }

  window.onload=function(){
    showItems();
    check();
  }













	