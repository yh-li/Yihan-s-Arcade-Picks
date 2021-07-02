var games = ['dicee', 'simon', 'drum-kit'];
var gameHTMLs = games.map(game => game.concat('.html'));
console.log(gameHTMLs);
var randomGameID = Math.floor(Math.random() * 3);
//assign the random link with a game
$(".random-game").attr("href", gameHTMLs[randomGameID]);
console.log(randomGameID);
console.log(gameHTMLs[randomGameID]);
//and give the image
var imgFolder = "./public/img/games/"
$("#random").attr("src", imgFolder.concat("random.png"));
games.forEach(game => {
    $("#".concat(game)).attr("src", imgFolder.concat(game,".png"));
})