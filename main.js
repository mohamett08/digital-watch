//clock
//variable
const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('min');
const secondHand = document.getElementById('sec');

//functions
function setTime(){

    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds()/60;
    const minuteRatio =(secondRatio + currentDate.getMinutes())/60;
    const hourRatio = (minuteRatio + currentDate.getHours()) /12;

    setRotaion(secondHand,secondRatio);
    setRotaion(minuteHand,minuteRatio);
    setRotaion(hourHand,hourRatio);
}
    

function setRotaion(element, rotationRatio){
    element.style.setProperty('--wareeg', rotationRatio * 360);
}
 setTime();
 setInterval(setTime,1000)

//buttons
//button-variable
const btnOne = document.getElementById('btn1')
const btnTwo = document.getElementById('btn2')
const btnThree = document.getElementById('btn3')
const btnFour = document.getElementById('btn4')
const clock = document.querySelector('.clock')
const buttons =document.querySelectorAll('.button')

//changing node list to an array
const buttonsAray = Array.from(buttons);
const colors = ['#fad490','#f19292','#edf0f2','#ffe100']
console.log(colors)
//button-functions
function changeToOrange(){
    clock.style.background = colors[0];
}
function changeToRed(){
    clock.style.background = colors[1];
}
function changeToGray(){
    clock.style.background = colors[2];
}
function changeToYellow(){
    clock.style.background = colors[3];
}

//evenlistners
buttonsAray[0].addEventListener('click',changeToOrange);
buttonsAray[1].addEventListener('click',changeToRed);
buttonsAray[2].addEventListener('click',changeToGray);
buttonsAray[3].addEventListener('click',changeToYellow);
