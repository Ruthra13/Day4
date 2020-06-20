// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20,
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true,
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let $patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty == false) {
    $patty.style.display = "inherit";
  } else {
    $patty.style.display = "none";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  // let $cheese = document.getElementById("#cheese");
  // if (state.cheese == false) {
  let $cheese = document.querySelector("#cheese");
  if (state.Cheese == false) {
    $cheese.style.display = "inherit";
  } else {
    $cheese.style.display = "none";
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let $tomat = document.querySelector("#tomato");
  if (state.Tomatoes == false) {
    $tomat.style.display = "inherit";
  } else {
    $tomat.style.display = "none";
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let $oni = document.querySelector("#onion");
  if (state.Onions == false) {
    $oni.style.display = "inherit";
  } else {
    $oni.style.display = "none";
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let $letuce = document.querySelector("#lettuce");
  if (state.Lettuce == false) {
    $letuce.style.display = "inherit";
  } else {
    $letuce.style.display = "none";
  }
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderPatty();
};



// var btnContainer = document.getElementById("button-container");
// var btns = btnContainer.getElementsByClassName("button");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function () {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }
// var elems = document.querySelectorAll(".active");
//   [].forEach.call(elems, function(el) {
//     el.classList.remove("active");
//   });
//   e.target.className = "active";


// Trial 2 - Setup event listener for the cheese button

document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderCheese();
};

// Trial 2 - Setup event listener for the tomatoes button

document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderTomatoes();
};

// Trial 2 - Setup event listener for the onion button

document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderOnions();
};

// Trial 2 - Setup event listener for the lettuce button

document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderLettuce();
};


//Challenge 1 - Add/Remove the class active to the buttons based on state

// const $butt1 = document.querySelector(".btn-patty");
// const $butt2 = document.querySelector(".btn-cheese");
// const $butt3 = document.querySelector(".btn-tomatoes");
// const $butt4 = document.querySelector(".btn-onions");
// const $butt5 = document.querySelector(".btn-lettuce");

// $butt1.onclick = () => {
//   if (state.patty == false) {
//     $butt1.toggleClass("inactive");
//   } else {
//     $butt1.toggleClass("active");
//   }
// };

// $butt2.onclick = () => {
//   if (state.Cheese == false) {
//     $butt2.toggleClass("inactive");
//   } else {
//     $butt2.toggleClass("active");
//   }
// };

// $butt3.onclick = () => {
//   if (state.Tomatoes == false) {
//     $butt3.toggleClass("inactive");
//   } else {
//     $butt3.toggleClass("active");
//   }
// };

// $butt4.onclick = () => {
//   if (state.Onions == false) {
//     $butt4.toggleClass("inactive");
//   } else {
//     $butt4.toggleClass("active");
//   }
// };

// $butt5.onclick = () => {
//   if (state.Lettuce == false) {
//     $butt5.toggleClass("inactive");
//   } else {
//     $butt5.toggleClass("active");
//   }
// };

//Challenge 2 - Render only the items selected in the ingredients board based on the state

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients