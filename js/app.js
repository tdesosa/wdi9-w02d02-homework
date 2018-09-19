// console.log("finish and go home!");

// You are going to create a simple card game in which a player
// will be able to battle the autoplayer. 
// The game will deal 3 cards (each of which has a damage value) 
// to the player and three cards to the autoplayer. 
// The player will choose a card, and the computer will randomly choose a card, 
// and whichever's card has the highest value will win the point. 
// A round is finished once this has happened three times.

game = {
    deck: 
    [
        {
          name: "Bulbasaur",
          damage: 60
        }, {
          name: "Caterpie",
          damage: 40
        }, {
          name: "Charmander",
          damage: 60
        }, {
          name: "Clefairy",
          damage: 50
        }, {
          name: "Jigglypuff",
          damage: 60
        }, {
          name: "Mankey",
          damage: 30
        }, {
          name: "Meowth",
          damage: 60
        }, {
          name: "Nidoran - female",
          damage: 60
        }, {
          name: "Nidoran - male",
          damage: 50
        }, {
          name: "Oddish",
          damage: 40
        }, {
          name: "Pidgey",
          damage: 50
        }, {
          name: "Pikachu",
          damage: 50
        }, {
          name: "Poliwag",
          damage: 50
        }, {
          name: "Psyduck",
          damage: 60
        }, {
          name: "Rattata",
          damage: 30
        }, {
          name: "Squirtle",
          damage: 60
        }, {
          name: "Vulpix",
          damage: 50
        }, {
          name: "Weedle", 
          damage: 40
        }
      ],
    player: {
        name: "Ash",
        hand: [],
        pointsWon: 0,
    },
    computer: {
        name: "Gary",
        hand: [],
        pointsWon: 0,
    },
    dealACard(cardPlayer){
        let randomIndex = Math.floor(Math.random() * this.deck.length);
        let cardToDeal = game.deck.splice(randomIndex, 1)[0];
        cardPlayer.hand.push(cardToDeal);
    },
    startGame(){
        for(let i = 0; i < 3; i++){
            this.dealACard(game.player);
            console.log(`${game.player.name} has this card ${this.cardToDeal}`);
            this.dealACard(game.computer);
            console.log(`${game.computer.name} has this card`);
        }
        this.battle();
    },
    battle(){
        let playerCard = this.player.hand.pop();
        let computerCard = this.computer.hand.pop();
        if(playerCard.damage > computerCard.damage){
            this.player.points ++
            console.log("PLAYER WON THIS BATTLE");
        } else if(playerCard.damage === computerCard.damage) {
            console.log("TIE GAME")
        } else {
            this.computer.points++
            console.log("COMPUTER WON THIS BATTLE")
        }

    },

    //deal a card function
    //function to start the game which will deal a hand to player and computer
}
game.startGame();

