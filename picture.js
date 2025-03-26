let currentSlides=0;
let slides=document.querySelectorAll(".slide");
let prevBtn=document.querySelector(".prev");
let nextBtn=document.querySelector(".next")

function next(){
    let nextSlides=(currentSlides+1)%slides.length;
    slides[currentSlides].style.display="none";
    slides[nextSlides].style.display="block";
   currentSlides=nextSlides;
}
nextBtn.addEventListener("click",next);

prevBtn.addEventListener("click", ()=>{
    let prevSlides = currentSlides == 0?slides.length-1:currentSlides-1;
    slides[currentSlides].style.display="none";
    slides[prevSlides].style.display="block";
    currentSlides=prevSlides;
})

setInterval(next,5000)