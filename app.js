/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
 
*/  
var scores, roundScore,activePlayer,gamePlaying,enteredValue;
init();

var prevdice;

document.querySelector('.btn-roll').addEventListener('click',function(){ 
    if(gamePlaying){
    
    //random number generate for dice
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    //dice image change
    var dicedom1 = document.querySelector('.dice');
    var dicedom2 = document.querySelector('.dice1');
        
    dicedom1.style.display = 'block';
    dicedom1.src ='dice-'+dice1+'.png';
        
    dicedom2.style.display = 'block';
    dicedom2.src ='dice-'+dice2+'.png';
    
    
    
    //game logic 
    
   if(dice1 !== 1 && dice2 !== 1){
    roundScore += dice1 + dice2;
    document.querySelector('#current-'+ activePlayer).textContent = roundScore;
    }
    
    }else{
        nextPlayer();
    } 
 }
    
);


document.querySelector('.btn-hold').addEventListener('click',function(){
    if (gamePlaying){
    scores[activePlayer] += roundScore;
    
    document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
    
    if (scores[activePlayer] >=enteredValue){
        document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
        gamePlaying = false;
        
   hidedice();
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-'+ activePlayer + '-panel').classList.remove('active');
    }
    else{
        nextPlayer();
    }
}
});

function nextPlayer(){
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;     
        roundScore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        hidedice();
};

document.querySelector('.btn-new').addEventListener('click',init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    enteredValue = prompt('Enter the score',"100");
    
    
hidedice();
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
};

function sixes(){
    scores[activePlayer]=0
     document.querySelector('#score-'+ activePlayer).textContent = '0'; 
}

function hidedice(){
    document.querySelector('.dice').style.display='none';
    document.querySelector('.dice1').style.display='none';
}

