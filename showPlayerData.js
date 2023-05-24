enemiesMade = 0;


function updatePlayerData(){
  
  
let dataToShow = "Friends MADE: "+ enemiesMade;


io.writeIntoElement(dataToShow,"playerData")

}