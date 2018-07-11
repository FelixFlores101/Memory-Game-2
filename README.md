# Memory-Game-2
<div>A simple memory game where you match the cards with the icons</div>
# Motivation
<div> I enjoy simple matching memory games where there is time limit. It adds to the pressure of the game</div>
#Code Style
<div> Class style </div>
#Tech/ Framework Used
HTML, CSS, Javascript
#Features
<div> random icons, ability to start new game with randomized icons </div>
#Code Example
<div>function createTimer() {
  var totalTime = '30' //seconds 
  var timeInterval = setInterval(function() {
    if(totalTime == 0) {
      restartGame()
      clearTimeInterval(timeInterval)
    } else {
      totalTime = totalTime - 1
      let timer = document.querySelector('.timer')
      timer.innerHTML = '0:' + totalTime
      // console.log(totalTime)
    }
  }, 1000)
} </div>
#Installation
Go to Github Repository, fork code, clone down from your repo and then open html to play
#Feature Updates
Restart button, Levels?
