const button= document.querySelector('.button')
const laugh= document.querySelector('.laugh')

const pic='./img/laugh.png'
const pic2='./img/stare.png'
const audio=new Audio('./sound/laugh.mp3')

button.addEventListener('click',()=>{
    laugh.src=pic;
    audio.play()
})

audio.addEventListener('ended',()=>{
    laugh.src=pic2
    button.disable=false
})