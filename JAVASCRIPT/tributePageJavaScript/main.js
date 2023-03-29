
//THIS CODE IF FOR PLAYING VIDEO WHEN HOVER
let box = document.querySelectorAll('#box');
let video = document.getElementById('video');
let overlayImg = document.querySelectorAll('#img');
let playIcon = document.querySelector('#icon');

video.pause();

box.forEach(boxes => {
    boxes.addEventListener('mouseover', () => {
        video.play();
        event.preventDefault();
    });
})

box.forEach(boxes => {
    boxes.addEventListener('mouseout', () => {
        video.pause();
        event.preventDefault();
    });
})
