const mainEl = document.querySelectorAll(".main");
const contEl = document.querySelectorAll(".content");

for(let x=0;x<mainEl.length; x++){
    mainEl[x].addEventListener("click",function(){
        console.log(mainEl[x].nextElementSibling);
        clearActive();
        mainEl[x].nextElementSibling.classList.add("active");
    })
}

function clearActive(){
    for(let x=0;x<contEl.length; x++){
        contEl[x].classList.remove("active");
    }
}