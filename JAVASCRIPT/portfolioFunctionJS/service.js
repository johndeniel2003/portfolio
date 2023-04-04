const showLeftDeniel = document.querySelector('#left-deniel')
const showRightDeniel = document.querySelector('#right-deniel');
const showLeftPaes = document.querySelector('#left-paes');
const showRightPaes = document.querySelector('#right-paes');
const showLeftarbin = document.querySelector('#left-arbin')
const showRightarbin = document.querySelector('#right-arbin');


const denielIcon = document.querySelector('#deniel-slider-icon');
const paesIcon = document.querySelector('#paes-slider-icon');
const arbinIcon = document.querySelector('#arbin-slider-icons');


const deniel_section = document.querySelector('#deniel-section');
const slider = document.querySelector('#deniel-slider');

const arbin_section = document.querySelector('#arbin-Section');
const arbin_slider = document.querySelector('#arbin-slider');


const paes_section = document.querySelector('#paes-section');
const paes_slider = document.querySelector('#paes-slider');

let denielScroll = 0;
let paesScroll = 0;
let arbinScroll = 0;
let deniel;
let currentActive;



console.log(window.innerWidth);



//DEFAULT ACTIVE
currentActive = deniel;

if (currentActive === deniel) {
    deniel_section.classList.toggle('activeDeniel');
    denielActive();
}


//DETERMINE WHO IS ACTIVE
paes_section.addEventListener('click', () => {

    slider.style.display = 'none';
    arbin_slider.style.display = 'none';
    deniel_section.classList.remove('activeDeniel');
    arbin_section.classList.remove('activeArbin');


    paes_slider.style.display = 'flex';
    paes_section.classList.toggle('activePaes');

    showLeftDeniel.style.zIndex = '-1';
    showRightDeniel.style.zIndex = '-1';
    showLeftarbin.style.zIndex = '-1';
    showRightarbin.style.zIndex = '-1';

    showLeftPaes.style.zIndex = '1400';
    showRightPaes.style.zIndex = '1400';

    paesActive();
})


deniel_section.addEventListener('click', () => {

    paes_slider.style.display = 'none';
    arbin_slider.style.display = 'none';
    paes_section.classList.remove('activePaes');
    arbin_section.classList.remove('activeArbin');

    slider.style.display = 'flex';
    deniel_section.classList.toggle('activeDeniel');


    showLeftPaes.style.zIndex = '-1';
    showRightPaes.style.zIndex = '-1';
    showLeftarbin.style.zIndex = '-1';
    showRightarbin.style.zIndex = '-1';

    showLeftDeniel.style.zIndex = '1400';
    showRightDeniel.style.zIndex = '1400';


    denielActive();
})


arbin_section.addEventListener('click', () => {

    paes_slider.style.display = 'none';
    slider.style.display = 'none';
    deniel_section.classList.remove('activeDeniel');
    paes_section.classList.remove('activePaes');


    arbin_slider.style.display = 'flex';
    arbin_section.classList.toggle('activeArbin');

    showLeftPaes.style.zIndex = '-1';
    showRightPaes.style.zIndex = '-1';
    showLeftDeniel.style.zIndex = '-1';
    showRightDeniel.style.zIndex = '-1';

    showLeftarbin.style.zIndex = '1400';
    showRightarbin.style.zIndex = '1400';


    arbinActive();
})



//DETERMINING ENDS


//ALL THE FUNCTIONS
function denielActive() {

    paes_slider.style.display = 'none';

    showRightDeniel.addEventListener('click', () => {
        if (window.innerWidth <= 1289) {
            if (denielScroll <= -200) {

            } else {
                denielScroll -= 50;
                slider.style.left = `${denielScroll}%`;
            }
        } else {
            if (denielScroll <= -100) {

            } else {
                denielScroll -= 50;
                slider.style.left = `${denielScroll}%`;
            }
        }
    })

    showLeftDeniel.addEventListener('click', () => {
        if (denielScroll >= 0) {

        } else {
            denielScroll += 50;
            slider.style.left = `${denielScroll}%`;
        }
    })
}


function arbinActive() {

    showRightarbin.addEventListener('click', () => {
        if (window.innerWidth <= 1289) {
            if (arbinScroll <= -200) {

            } else {
                arbinScroll -= 50;
                arbin_slider.style.left = `${arbinScroll}%`;
            }
        } else {
            if (arbinScroll <= -100) {

            } else {
                arbinScroll -= 50;
                arbin_slider.style.left = `${arbinScroll}%`;
            }
        }
    })

    showLeftarbin.addEventListener('click', () => {
        if (arbinScroll >= 0) {

        } else {
            arbinScroll += 50;
            arbin_slider.style.left = `${arbinScroll}%`;
        }
    })
}




function paesActive() {

    showRightPaes.addEventListener('click', () => {
        if (window.innerWidth <= 1289) {
            if (paesScroll <= -150) {

            } else {
                paesScroll -= 50;
                paes_slider.style.left = `${paesScroll}%`;
            }
        } else {
            if (paesScroll <= -100) {

            } else {
                paesScroll -= 50;
                paes_slider.style.left = `${paesScroll}%`;
            }
        }
    })

    showLeftPaes.addEventListener('click', () => {
        if (paesScroll >= 0) {

        } else {
            paesScroll += 50;
            paes_slider.style.left = `${paesScroll}%`;
        }
    })
}
