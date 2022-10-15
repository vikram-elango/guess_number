'use strict';
// console.log(document.querySelector('.message').textContent)
// console.log(document.querySelector('.message').textContent='Correct Number');
// document.querySelector('.number').textContent=15;
// document.querySelector('.score').textContent=20;
// console.log(document.querySelector('.guess').value=23 );


let secretnumber = Math.trunc(Math.random()*20+1);
//console.log(secretnumber);
let score =20;
let highscore=0;
let currentScore=0;
//document.querySelector('.number').textContent=secretnumber;

const displayMessage= function(message)
{
    document.querySelector('.message').textContent=message;
}
document.querySelector('.check').addEventListener('click', function () {
    const guess= Number(document.querySelector('.guess').value);
   // console.log(guess, typeof guess);

    if(!guess)
    {
        displayMessage('Not a NUMBER!');

    }else if(guess===secretnumber)
    {

        displayMessage('YOU WON!');
        document.querySelector('body').style.backgroundColor='green';
        document.querySelector('.number').style.width='30ren';
        document.querySelector('.number').textContent=secretnumber;
        currentScore=score;
 
        if(currentScore>highscore)
        {
            highscore=currentScore;
            document.querySelector('.highscore').textContent=highscore;
        }

    }
    else if(guess!=secretnumber)
    {
        if(score>0)
        {
            if(guess>secretnumber)
        {
            displayMessage('YOU ARE ABOVE!');
            score--;
            document.querySelector('.score').textContent=score;
        }
        else if(guess<secretnumber)
        {
            displayMessage('YOU ARE BELOW!');
            score--;
            document.querySelector('.score').textContent=score;
        }
        }
        else{
           displayMessage('YOU LOST THE GAME!');
            document.querySelector('body').style.backgroundColor='red';
        }
        
        
    }

    
});
document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('.message').textContent='Start guessing...';
    score=20;
    document.querySelector('.score').textContent=score;
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15ren';
    
secretnumber=Math.trunc(Math.random()*20)+1;
   // document.querySelector('.number').value=Math.trunc(Math.random()+20)+1;
    document.querySelector('.number').textContent='?';
    console.log(document.querySelector('.guess').value='');

});

document.addEventListener('keydown',function(e){
    console.log(key(e));

})
    
 