window.addEventListener("scroll", reveal);

function reveal() {
    let reveal = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveal.length; i++) {
        let windowheight = window.innerHeight;
        let revealtop = reveal[i].getBoundingClientRect().top;
        let revaelpoint = 50;
        if (revealtop < windowheight - revaelpoint) {
            reveal[i].classList.add("active");
        }
        else {
            reveal[i].classList.remove("active");
        }
    }
}

let counter = 1;
setInterval(() => {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 5) {
        counter = 1;
    }
}, 5000);

// let hamburger = document.getElementById("three-line");
// let menulist = document.querySelector(".center ul")
// let cross = document.getElementById("cross");
// hamburger.addEventListener("click", function(){
//     hamburger.classList.remove("fa-bars");
//     console.log("this is click");
//     menulist.classList.add("active")

// })
// cross.addEventListener("click", function () {
//     hamburger.classList.add("fa-bars")
//     console.log("this is click");
//     menulist.classList.remove("active")

// })


let hamberger = document.getElementById("click");
let cross = document.getElementById("click1")
let menulist = document.querySelector(".center ul");
hamberger.addEventListener("click", function () {
    menulist.classList.add("active");
})
cross.addEventListener("click", function () {
    menulist.classList.remove("active");
})