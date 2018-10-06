/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, finalRes;










// Nacin za pristup i mjenjanje HTMLa  unutar tog IDa
// document.querySelector('#current-' + activePlayer).innerHTML = '<strong>' + dice + '</strong>';
// document.querySelector('#current-' + activePlayer).innerHTML = '<strong>' + dice + '</strong>';



// HIDING THE DICE
var diceDOM2 = document.querySelector('.dice-2');
var diceDOM1 = document.querySelector('.dice-1');
diceDOM1.style.display = 'none';
diceDOM2.style.display = 'none';

newGame();

function newGame(){
    
    activePlayer = 0;
    scores = [0,0];
    roundScore = 0;
    

    
    // get the name back to normal:
    document.querySelector('#name-0').textContent = 'player 1';
    document.querySelector('#name-1').textContent = 'player 2';
    
    
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
    //enable back buttons and kill the dice
    diceDOM1.style.display = 'none';
    diceDOM2.style.display = 'none';
    document.querySelector(".btn-roll").disabled = false;
    document.querySelector(".btn-hold").disabled = false;
    
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    
        //ask for user input
    finalRes = prompt ('What is the limit:');
};



// Funkcija NEXT PLAYER
function nextPLaya(){
    activePlayer === 0 ? activePlayer = 1  :   activePlayer = 0;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
    
        roundScore = 0;
        
    console.log('next playa')
}




var lastDice;

document.querySelector('.btn-roll').addEventListener('click',function btn(){
    //// Rolling the dice
        
       var dice_1 = Math.round(Math.random() * 5 + 1);  
       var dice_2 = Math.round(Math.random() * 5 + 1);
       
        
console.log(dice_1, dice_2);
    //Ovako se mjenja ali samo vrijednost ne mozemo mjenjat HTML code
    diceDOM1.style.display = 'block';
    diceDOM2.style.display = 'block';
    
    diceDOM1.src = 'dice-' + dice_1 + '.png';
    diceDOM2.src = 'dice-' + dice_2 + '.png';
    
    if( dice_1 !== 1 && dice_2 !== 1 ){
        // calculate the round score
        roundScore = roundScore + (dice_1 + dice_2);
        // update  UI
        console.log(roundScore);
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else{
        nextPLaya();
    }
    
    
    
    /*
      if (dice === 6 && lastDice === 6) {
            //Player looses score
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
            nextPLaya();
        } else if (dice !== 1) {
            //Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //Next player
            nextPLaya();
        }
        lastDice = dice;
        
        */
});


// BTN HOLD
document.querySelector('.btn-hold').addEventListener('click',function hld(){
    
    // add current score to global score
    scores[activePlayer] += roundScore;
    
    
    // fix visuals:
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    
    //check if player won
    
    if(scores[activePlayer] >= finalRes){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner';
        
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
         document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        document.querySelector(".btn-roll").disabled = true;
        document.querySelector(".btn-hold").disabled = true;  
    }else{
        nextPLaya();
    }
    
    
    
    
     
    

 
});


//var x = document.querySelector('#score-0').textContent;
//console.log(x);



document.querySelector('.btn-new').addEventListener('click', newGame);












































//