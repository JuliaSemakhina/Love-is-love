let colors = ["#00FF00","#FFD700","#FF00FF","#8B008B","#000080","##FF4500","#00FA9A","#6A5ACD","#FF69B4","#87CEEB","#FF1493"];
let changeHeart = document.querySelectorAll('.heart');

function changeColor(){
	setInterval(()=> { 
       let colorRange = Math.floor(Math.random() * colors.length);
       let selectedColor = colors[colorRange];
       for(let i=0; i < changeHeart.length; i++) {
                changeHeart[i].style.background= selectedColor;
           } }, 1500);
}

changeColor();

const button = document.querySelector('.btn1');
const buttonSlow = document.querySelector('.btn2');
var duration = 4;

button.addEventListener('click', ()=> {
	duration = duration - 0.5;
	for(let i=0; i < changeHeart.length; i++) {
                changeHeart[i].style.animationDuration= `${duration}s`;
           };
})

buttonSlow.addEventListener('click', ()=> {
	duration = duration + 0.5;
	for(let i=0; i < changeHeart.length; i++) {
                changeHeart[i].style.animationDuration = `${duration}s`;
           };
})

          