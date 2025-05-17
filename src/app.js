import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// this is an array of items we can use to call a 
let who = ['The dog', 'My grandma', 'The mailman', 'My bird', 'Mr,clean'];
let action = ['ate', 'peed', 'crushed', 'broke','vandalized'];
let what = ['my homework', 'my phone', 'the car',];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
//
function GetRandomNumber (min,max){
  return Math.floor(Math.random() * (max - min) + min );
}
//this function passes the items within the  any array to return random 
function getRandom(anyArray){
  let max = anyArray.length -0;
  let min = 0;
  let random = GetRandomNumber(min,max)
  return anyArray [random];
}

window.onload = function() {
  //write your code here
// #excuse selects the id assined to the <p> tag within the HTMl 
// this updats the <p> tag in the HTML with the randomly created exuses using items from the array. :) 
  document.querySelector(`#excuse`).innerHTML =  getRandom(who) + " " + getRandom(action) + " " + getRandom(what)  + " " + getRandom(when)

  console.log("Hello Rigo from the console!");
};


