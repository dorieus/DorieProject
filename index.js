"use strict";
const film = {};
film.name = "Deadpool";
film.description = "A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life. Wade Wilson is a small-time mercenary. He meets Vanessa and falls in love. Life is idyllic until one day he is diagnosed with terminal cancer.";
film.genre = "Action, Adventure, Comedy";
film.year = 2016;
film.director = "Tim Miller";
film.writers = "Rhett Reese, Paul Wernick";
film.actors = "Ryan Reynolds, Morena Baccarin, T.J. Miller";
film.rate = 8.0;
if (confirm (`Have you watched ${film.name}?`)) {
    alert ("Chimichanga!")
    } else {
alert ("Bang-Bang!")
    }
   