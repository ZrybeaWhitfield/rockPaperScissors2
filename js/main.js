document.querySelectorAll("img").forEach(e => e.addEventListener("click", selectImg))

let userChoice
function selectImg(){
  console.log(event.target.getAttribute("value"));
  userChoice = event.target.getAttribute("value")

  fetch(`/api?userChoice=${userChoice}`)
  .then(response => response.json())
  .then((data) => {
    console.log(data)
  })

}



function randomizeCP(){
  let ranNum = Math.random()
    if(ranNum <= .8){
      computerChoice = "rock"
    }else if(ranNum <= .6){
      computerChoice = "paper"
    }else if(ranNum <= .4){
      computerChoice = "scissors"
    }else if(ranNum <= .2){
      computerChoice = "lizard"
    }else{
      computerChoice = "spock"
    }
    return computerChoice
}// end randomize function

//function to compare userChoice and computer choice

function findWinner(userChoice){
  if(userChoice === computerChoice){
    console.log("It's a tie");
  }else if ((userChoice === "rock" && computerChoice === "scissors") || (userChoice === "rock" && computerChoice === "lizard") || (userChoice === "paper" && computerChoice === "rock") || (userChoice === "paper" && computerChoice === "spock") || (userChoice === "scissors" && computerChoice === "paper") || (userChoice === "scissors" && computerChoice === "lizard") || (userChoice === "spock" && computerChoice === "scissors") || (userChoice === "spock" && computerChoice === "rock") || (userChoice === "lizard" && computerChoice === "paper") || (userChoice === "lizard" && computerChoice === "spock")) {
    console.log("Player wins!");
  }
}else{
  console.log("player loses");
}

//event listener to select player's choice (r, p, sc, sp, l)
// randomize computer choice- server.js
// compare player choice w/ computer choice -server.js
// place result of comparison in the dom- main.js




// class MakeGame{
//   constructor(playerPerson, playerCPU){
//     this.playerPerson = playerPerson
//     this.playerCPU = playerCpu
//   }
//
//   placesResultToDom(){
//       //conditonal logic
//   }
//
// }
