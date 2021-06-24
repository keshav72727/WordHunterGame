var bg_image;
var gameState = 0;
var playerCount = 0;
var database;
var form,player,game;
var game;
var allPlayers;
var word1;
var answer;

const WORD1 = "COW BOY";

function preload(){
  bg_image = loadImage("images/Wordhunter.png");
  word1 = loadImage("images/Word1.png");
}

function setup() {
  createCanvas(1200,700);
}
function draw() {

  background(bg_image);
  drawSprites();

  if (playerCount == 2)
  {
    game.update(1);
  }

  if (gameState === 1)
  {
    clear();
    game.play();
  }

  if (gameState === 2)
  {
    game.end();
  }
}