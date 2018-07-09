


// // this array will hold all the cards
// let card = document.getElementsByClassName("card");
// let cards = [...card];
// console.log(cards);
// // this loop will add event listeners to each card

// for(var i =0; i< cards.length; i++ ){

//   cards[i].addEventListener("click",displayCard);
// };

// // toggles open and show class to display cards

// var displayCard = function (){
//   this.classList.toggle("open");
//   this.classList.toggle("show");
//   this.classList.toggle("disabled");
// }

// // Fisher-Yates shuffle 

// function shuffle(array){
//   var currentIndex =  array.length, temporaryValue, randomIndex;

//   while(currentIndex !==0){
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -=1;
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }
//   return array;
// }

// //this is for the cards in the game. the startGame function will shuffle all cards
// // and display each card


// const deck = document.querySelector(".deck");
// function startGame(){
//    var shuffledCards = shuffle(cards);
//    for (var i= 0; i < shuffledCards.length; i++){
//       [].forEach.call(shuffledCards, function(item){
//          deck.appendChild(item);
//       });
//    }
// }

// window.onload = startGame();

// const cardsArray =["A","B","C","D","E","F","G"];

// // Grab the div with an id of root
// const game = document.getElementById('game');


let gameContainer = document.getElementById('game')
let cardAmt = 16
// this is my main function that initializes the game
function createCards(amountOfCards) {   // this is the initial function to set up the game
  for(let i = 0; i < amountOfCards; i+=1 ) {  // we have a for loop for the amount of cards. we need pass in the amount of cards. It has to know how many cards to create.
    let card = document.createElement('div')  // we created a div element each time the function ran
    let icon = document.createElement('i')  // we had to attach the icon to it. we created an icon along with each card.
    icon.className=   getRandomIcon() // we're setting the icons classname equal to a function called get randomIcon  getRandomIcon() = means we're calling a function
    card.className = 'card'  // we're setting cards class name to card so it can have the same styles as the rest of the cards
    card.appendChild(icon)  // now we're appending each icon to each card element
    gameContainer.appendChild(card)  // now we're appending each card to the gameContainer element

    // cover the cards so they are hidden
    let cover = document.createElement('div') // we created a div element each time the cover function ran. each game needs to covered in order to be revealed to the user when clicked
    cover.className = 'cover'  // we set covers className to cover so it can have the appropriate style
    card.appendChild(cover)  //
  }
}

function checkCards() {
  let cards = document.getElementsByClassName('card')
  for(let i=0;  i < cards.length;i+=1) {
    let picks = 0
    if(cards[i].classList.contains('picked')) {
      picks++
      console.log(picks)
    }
    if(picks > 2) {
      alert('you cant click more than 2')
    }
  }
}
function addEventToCards() {
  let cards = document.getElementsByClassName('card')

  for(let i=0; i < cards.length; i+=1) {
    cards[i].addEventListener('click', function() {
      if(!cards[i].classList.contains('picked')) {
        revealCard(cards[i])
      }
    })
  }
}

//find out which cards match after the deck is generated
let cardIcons = []
let duplicates = []

function getMatchingCards() {
  let cards = document.getElementsByClassName('card')
  for(let i=0; i < cards.length; i++) {
      if(cardIcons.includes(cards[i].children[0].className)) {
        let newObj = {}
        newObj.icon = cards[i].children[0].className
        duplicates.push(cards[i].children[0].className)
        
      } else {
        cardIcons.push(cards[i].children[0].className)
      }


  }
}

getMatchingCards()
// reveal the card that is being clicked
let pick = []
function revealCard(element) {
  element.classList.add('picked')
  element.children[1].style.display = 'none'
  let pickObj = {
    element: element,
    icon: element.children[0].className,
  }
  pick.push(pickObj)
  if(pick[0].icon !== pick[1].icon) {   //work on pick[0].=== pick [1]
    hideCard(pick[0].element)
    hideCard(pick[1].element)
    pick = []
    // hideCard(pick[1].element)
  }
  else if(pick[0].icon == pick[1].icon) {  // play with the &&&
    // user is correct
    deleteCardFromDeck(pick[0].element, function() {
      // alert('nice job beating the time')
    });
    deleteCardFromDeck(pick[1].element, function() {
      alert('You beat the clock!')
      restartGame()
    });
    pick = [];
  }
}

function deleteCardFromDeck(card, callback) {
  setTimeout(function() {
    card.style.opacity = 0;

  }, 200),
  card.classList.add('hidden')
  if(duplicates.length == 0) {
    return callback()
  } else {
    duplicates.splice(duplicates.indexOf(card.children[0].className), 1)
    console.log(duplicates)
  }
}



function hideCard(card) {
  setTimeout(function() {
    card.children[1].style.display = 'block';
    card.classList.remove('picked')
  }, 800);
}

function getRandomIcon() {
  let faIcons = [
    'fa fa-search',
    'fab fa-apple',
    'fa fa-archway',
    'fa fa-angry',
    'fa fa-ambulance',
    'fab fa-adn'
  ]
  let randomIcon = Math.floor(Math.random() * faIcons.length)
  return faIcons[randomIcon]


}

function startGame() {
  createCards(cardAmt)   // createCards what did we pass into it? we are calling the function createCards. we're gonna pass in an amount of cards
  addEventToCards()
  createTimer()
  getMatchingCards()
 
}


// create the timer
function createTimer() {
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
}

function clearTimeInterval(interval) {
  clearInterval(interval)
}

function removeGame() {
  gameContainer.innerHTML = ''

}

function restartGame() {
  let restart = confirm('Game Over, Restart?')
  if(restart) {
    removeGame()
    setTimeout(function() {
      startGame()
    }, 200)
  }
}

startGame()
// try an empty array and push clicks into it

