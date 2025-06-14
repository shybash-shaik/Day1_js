
function createGame(){

    const secretNumber=Math.floor(Math.random()*10)+1;

    return function guess(number){

        if(number===secretNumber){
            console.log("You guessed it!");
        }else if(number>secretNumber){
            console.log("Too high!");
        }else{
            console.log("Too low!");
        }
    }

}

const play=createGame();

play(8);
play(3);
