const game = () => {
    let pScore = 0;
    let cScore = 0;
    
    
    //start the game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };
    //Play Match
    const playMatch = () => {
       const options = document.querySelectorAll('.options button');
       const playerHand = document.querySelector('.player-hand');
       const computerHand = document.querySelector('.computer-hand');
       const hands = document.querySelectorAll('.hands img');

       hands.forEach(hand => {
        hand.addEventListener("animationend", function() {
          this.style.animation = "";
        });
      });
       //computer options
       const computerOptions = ['rock', 'paper', 'scissors'];

       options.forEach(option => {
           option.addEventListener('click', function() {
               //computer choice
            const computerNumber = Math.floor(Math.random() *3);
            const computerChoise = computerOptions[computerNumber];
           
           setTimeout(() =>{
                //here is where we call compare hands
             compareHands(this.textContent, computerChoise);

             //update Images
             playerHand.src = `./assets/${this.textContent}.png`;
             computerHand.src = `./assets/${computerChoise}.png`;
           },2000)
             //Animation
            playerHand.style.animation = "shakePlayer 2s ease";
            computerHand.style.animation = "shakeComputer 2s ease";
           });
       });    
    };

    const updateScore = () => {
       const playerScore = document.querySelector('.player-score p');
       const computerScore = document.querySelector('.computer-score p');
       playerScore.textContent = pScore;
       computerScore.textContent = cScore;
       //resolts for console uncoment
       //console.log(pScore);
       //console.log(cScore);
    }

    const compareHands = (playerChoise, computerChoise) => {
        //update text
        const winner = document.querySelector('.winner');
        if(playerChoise === computerChoise){
            winner.textContent = 'It is a draw';
            return;
        }
        //check for rock
        if(playerChoise === 'rock'){
            if(computerChoise === 'scissors'){
                winner.textContent = 'Player wins!🏆';
                pScore++;
                updateScore();
                return;
            }else {
                winner.textContent = 'Computer Wins!😞';
                cScore++;
                updateScore();
                return;
            }
        }
        //check for paper
        if(playerChoise === 'paper'){
            if(computerChoise === 'scissors'){
                winner.textContent = 'Computer wins!😞';
                cScore++;
                updateScore();
                return;
            }else {
                winner.textContent = 'Player Wins!🏆';
                pScore++;
                updateScore();
                return;
            }
        }
        //check scissors
        if(playerChoise === 'scissors'){
            if(computerChoise === 'rock'){
                winner.textContent = 'Computer Wins!😞';
                cScore++;
                updateScore();
                return;
            }else {
                winner.textContent = 'Player Wins!🏆';
                pScore++;
                updateScore();
                return;
            }
        }
    }

    //Is call all inner function
    startGame();
    playMatch();
};

//start game function
game();