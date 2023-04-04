//ACTIVITY AREA RESPONSIVE

const question = document.querySelectorAll('#question-i');
question.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.classList.add('fa-bounce')
    })

    icon.addEventListener('mouseout', () => {
        icon.classList.remove('fa-bounce')
    })
})

//DENIEL'S ACTIVTIY
const denielActivity = {

    //RESUME
    activityNum1: document.querySelector(`#denielAct1`),
    iconOpen: document.querySelector(`#denielOpenResume`),
    iconClose: document.querySelector(`#denielCloseResume`),

    //TRIBUTE PAGE
    actityNum2: document.querySelector('#denielAct2'),
    openTribute: document.querySelector('#denielOpenTribute'),
    closeTribute: document.querySelector('#denielCloseTribute'),

    //ASSETS USED
    top_active: '-40%',
    top: '5%',
}

denielActivity.openTribute.addEventListener('click', () => {
    denielActivity.openTribute.style.top = `${denielActivity.top_active}`;
    setTimeout(() => {
        denielActivity.actityNum2.classList.toggle('active-responsive-info');
    }, 120)

})


denielActivity.closeTribute.addEventListener('click', () => {
    denielActivity.openTribute.style.top = `${denielActivity.top}`;
    setTimeout(() => {
        denielActivity.actityNum2.classList.remove('active-responsive-info');
    }, 120)

})



denielActivity.iconOpen.addEventListener('click', () => {
    denielActivity.iconOpen.style.top = `${denielActivity.top_active}`;
    setTimeout(() => {
        denielActivity.activityNum1.classList.toggle('active-responsive-info');
    }, 120)


})

denielActivity.iconClose.addEventListener('click', () => {
    denielActivity.iconOpen.style.top = `${denielActivity.top}`;
    setTimeout(() => {
        denielActivity.activityNum1.classList.remove('active-responsive-info');
    }, 120)

})

//DENIEL'S ACTIVITY ENDS

//PAES ACTIVITY AREA

const paesActivity = {
    //RESUME
    activtyResume: document.querySelector('#paesResume'),
    paesOpen: document.querySelector('#paesOpenResume'),
    paesClose: document.querySelector('#paesCloseResume'),


    //TRIBUTE
    activtyTribute: document.querySelector('#paesTribute'),
    paesOpenTribute: document.querySelector('#paesOpenTribute'),
    paesCloseTribute: document.querySelector('#paesCloseTribute')
}

paesActivity.paesOpenTribute.addEventListener('click', () => {
    paesActivity.paesOpenTribute.style.top = `${denielActivity.top_active}`;
    setTimeout(() => {
        paesActivity.activtyTribute.classList.toggle('active-responsive-info');
    }, 120)

})

paesActivity.paesCloseTribute.addEventListener('click', () => {
    paesActivity.paesOpenTribute.style.top = `${denielActivity.top}`;
    setTimeout(() => {
        paesActivity.activtyTribute.classList.remove('active-responsive-info');
    }, 120)

})




paesActivity.paesOpen.addEventListener('click', () => {
    paesActivity.paesOpen.style.top = `${denielActivity.top_active}`;
    setTimeout(() => {
        paesActivity.activtyResume.classList.toggle('active-responsive-info');
    }, 120)

})

paesActivity.paesClose.addEventListener('click', () => {
    paesActivity.paesOpen.style.top = `${denielActivity.top}`;
    setTimeout(() => {
        paesActivity.activtyResume.classList.remove('active-responsive-info');
    }, 120)

})
//PAES ACTIVITY ENDS

//ARBIN'S ACTIVITY AREA

const arbinActivity = {

    //RESUME
    arbinResume: document.querySelector('#arbinResume'),
    arbinResumeOpen: document.querySelector('#arbinOpenResume'),
    arbinResumeClose: document.querySelector('#arbinCloseResume'),

    //TRIBUTE
    arbinTribute: document.querySelector('#arbinTribute'),
    arbinTributeOpen: document.querySelector('#arbinOpenTribute'),
    arbinTributeClose: document.querySelector('#arbinCloseTribute')
}

arbinActivity.arbinTributeOpen.addEventListener('click', () => {
    arbinActivity.arbinTributeOpen.style.top = `${denielActivity.top_active}`;
    setTimeout(() => {
        arbinActivity.arbinTribute.classList.toggle('active-responsive-info');
    }, 120)

})


arbinActivity.arbinTributeClose.addEventListener('click', () => {
    arbinActivity.arbinTributeOpen.style.top = `${denielActivity.top}`;
    setTimeout(() => {
        arbinActivity.arbinTribute.classList.remove('active-responsive-info');
    }, 120)

})



arbinActivity.arbinResumeOpen.addEventListener('click', () => {
    arbinActivity.arbinResumeOpen.style.top = `${denielActivity.top_active}`;
    setTimeout(() => {
        arbinActivity.arbinResume.classList.toggle('active-responsive-info');
    }, 120)

})

arbinActivity.arbinResumeClose.addEventListener('click', () => {
    arbinActivity.arbinResumeOpen.style.top = `${denielActivity.top}`;
    setTimeout(() => {
        arbinActivity.arbinResume.classList.remove('active-responsive-info');
    }, 120)

})
