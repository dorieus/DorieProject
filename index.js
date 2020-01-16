"use strict";
const film = {};

film.name = "Deadpool";
film.description =
  "A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life. Wade Wilson is a small-time mercenary. He meets Vanessa and falls in love. Life is idyllic until one day he is diagnosed with terminal cancer.";
film.genre = "Action, Adventure, Comedy";
film.year = 2016;
film.director = "Tim Miller";
film.writers = "Rhett Reese, Paul Wernick";
film.actors = "Ryan Reynolds, Morena Baccarin, T.J. Miller";
film.rate = 8.0;
film.watch = confirm(`Have you watched ${film.name}?`);

if (film.watch) {
  alert("Chimichanga!");
} else {
  alert("Bang-Bang!");
}

function getRecommendation() {
  const newRating = (function ask() {
    const n = prompt(`Rate the movie from 1 to 5 ${film.name}`);
    return isNaN(n) || +n > 5 || +n < 1 ? ask() : +n;
  })();
  film.rate = newRating;
  if (newRating === 1) alert("Don't watch it!");
  else if (newRating === 2) alert("It is boring");
  else if (newRating === 3) alert("I will not watch it again");
  else if (newRating === 4) alert("It is good movie");
  else if (newRating === 5) alert("It is the best movie I have ever watched!");
}
function play () {
let i = 0;
while (i < 12) {
  console.log( i );
  i++;
  if (i==5) {
    console.log ("Kawabanga"); }
}
}
