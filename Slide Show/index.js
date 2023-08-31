const slideshowElements = document.querySelectorAll(".slideshow-element");
console.log(slideshowElements);

let countElement = 1;

setInterval(() => {
    countElement ++;
    let currentElement = document.querySelector(".current");
    console.log(currentElement);
    currentElement.classList.remove("current");

    if(countElement > slideshowElements.length){
        slideshowElements[0].classList.add("current");
        countElement = 1;
    }else{
        currentElement.nextElementSibling.classList.add("current");
    }



}, 3000);