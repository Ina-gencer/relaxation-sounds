//animation
gsap.from('h1', {y: -40,  duration:2 })  
let move = 10 
gsap.to('p', {ease: "bounce",  duration: 1, stagger: .3, delay: 1, y: function(i) {
    if(i%2 === 1) {
        return -move
    }
    else {
        return move
    }
} })   

//timer
let timerID
const buttonPlay = document.querySelector('#play'); 
buttonPlay.addEventListener("click", function() {
    timerID = setInterval(timerStory, 1000);
    document.querySelector('#player').play();
})

const buttonStop = document.querySelector('#stop'); 
buttonStop.addEventListener("click", function() {
    stopTimer()

});

const timer = 30;
let amountTime = timer * 60;

function timerStory() {
    const countdown = document.querySelector('#par');
    let minutes = Math.floor(amountTime/60);
    let seconds = amountTime%60;

    if(seconds < 10) {
        seconds = "0" + seconds;
    }
    else {
            seconds = seconds;
         }

    countdown.innerHTML = `${minutes} : ${seconds}`;
    amountTime--;

    if(amountTime < 0) {
       amountTime = 0;
       document.querySelector('#player').pause();

    }
    else{
        amountTime = amountTime;
        }
    
}

function stopTimer() {
         clearInterval(timerID);
         document.querySelector('#player').pause();
      }

   
