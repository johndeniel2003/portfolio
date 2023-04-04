let container = document.querySelector('#aboutMeContainer');
let btnDown = document.querySelector('#buttonDown');
let btnUp = document.querySelector('#buttonUp');
let currentRotate = 45;
let rotate = 90;


//THIS CODE IF FOR THE DARKMODE
let content = document.getElementsByTagName('body')[0];
let sun = document.querySelector('#sun');
let isDoubleClicked = false;
let moon = document.querySelector('#moon');

let darkMode = document.getElementById('dark-change');
darkMode.addEventListener('click', function () {
    darkMode.classList.toggle('active');
    content.classList.toggle('night');
    if (isDoubleClicked === false) {
        sun.style.transform = "translateX(0px)";

        sun.style.display = "block";
        moon.style.transform = "translateX(-8px)";


        setTimeout(() => {
            moon.style.display = "none";
        }, 350);


        isDoubleClicked = true;
    } else {
        moon.style.transform = "translateX(0px)";

        sun.style.transform = "translateX(8px)";


        setTimeout(() => {
            sun.style.display = "none";
        }, 300);


        moon.style.display = "block";
        isDoubleClicked = false;
    }
})

//THIS CODE IS FOR RESPONSIVE NAVBAR

let close = document.querySelector('#close');
let show = document.querySelector('#show');
let dropdown = document.querySelector('#dropdown');


show.addEventListener('click', () => {
    dropdown.classList.toggle('activeDropdown');
    show.style.display = " none";
    close.style.display = "block";
});

close.addEventListener('click', () => {
    dropdown.classList.remove('activeDropdown');
    show.style.display = " block";
    close.style.display = "none";
});




// SEND MESSAGE
const sendBtn = document.querySelector('#send');
let message = document.querySelector('#message');

sendBtn.addEventListener('click', () => {
    window.alert(`YOUR MESSAGE "${message.value}" SENT TO JOHNDENIEL2003@GMAIL.COM`);
    message.value = "";

})


//NAVBAR AREA
const nav = document.querySelector('#nav');
const ul = document.querySelector('#ul');

window.addEventListener('scroll', () => {
    nav.classList.toggle('active', window.scrollY > 0);
})


//TESTEMONIAL AREA

const slide = document.querySelector('.slide-box');
const up = document.querySelector('#up');
const down = document.querySelector('#down');
let scrollUp = 0;
let scrollDown;

up.addEventListener('click', () => {


    if (scrollUp <= -500) {

    } else {
        scrollUp -= 100;
        slide.style.top = `${scrollUp}%`;
    }
})

down.addEventListener('click', () => {
    if (scrollUp >= 0) {

    } else {
        scrollUp += 100;
        slide.style.top = `${scrollUp}%`;
    }
})


//PRE LOADING
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('#loader').classList.toggle('loading-hidden');

    }, 400)
})
