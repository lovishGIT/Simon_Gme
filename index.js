const allColours = ["green", "red", "yellow", "blue"];
let gamePattern = [];
let level = 1;
let UserPattern = [];

$(document).keydown((e) => {
  if (e.key == "A" || e.key == "a") {
    level = 1;
    gamePattern = [];
    nextSequence();
    return;
  }
});

function nextSequence() {
  var randomNum = Math.floor(Math.random() * 4);
  var randomColour = allColours[randomNum];

  $("#Title").text("Score " + level);

  gamePattern.push(randomColour);
  console.log(gamePattern);

  setTimeout(()=>{
    $("#" + randomColour).fadeOut(10).fadeIn(50);
    sound(randomColour);
  },500);

  
  UserPattern = [];
  getUserPattern();
}

function sound(randomColour) {
  let audio = new Audio("./sounds/" + randomColour + ".mp3");
  audio.play();
}

function getUserPattern() {

  
  $(".btn").click(function () {
    // console.log("i got here.");
    var btn_clicked = $(this).attr("id");
    UserPattern.push(btn_clicked);

    $(this).fadeOut(10).fadeIn(50);

    // console.log("length of user patt is: " + UserPattern.length);

    if (UserPattern.length === gamePattern.length) {
      // console.log(UserPattern);
      $(".btn").unbind();            
      checkPattern();
    }
  });
    
}

function checkPattern() {
  for (let i = 0; i < UserPattern.length; i++) {
    // console.log(`check is: ${UserPattern[i]} and ${gamePattern[i]}`);
    if (UserPattern[i] != gamePattern[i]) {
      
      game_over();
      return;
    }
  }
  level++;
  nextSequence();
}

function game_over() {
 
  console.log("game over.");
  $("#Title").text(`Game Over!\nYour Final Score is ${level-1}! Press A to try again`);
  sound("wrong");

}

// I nearly spent more than 15 days on this code and really it was amazing learning this.