var dog, happyDog, database, foodS, foodStock, dogimg, happyDogimg;
var database 

function preload()
{
	happyDogimg = loadImage('images/dogImg1.png');
  dogimg = loadImage('images/dogImg.png');
}

function setup() {
	createCanvas(1000, 500);
  database = firebase.database();
  dog = createSprite(250,250);
  dog.addImage(dogimg);
  dog.scale = 0.3;
  foodStock = database.ref('food');
  foodStock.on('value', readStock);

  feed = createButton("FEED DOGGY");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood = createButton("ADD FOOD");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
}



function draw() {  
  background('darkgreen')
  if(keyWentDown(UP_ARROW)){
    dog.addImage(happyDogimg);
    writeStock(foodS)
  }
  fill('black')
  textSize(20)
  text('Food Remaining:'+ foodS, 200, 100);
  text('Press UP_ARROW to feed doggo', 150, 50)

  drawSprites();
  //add styles here
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x = 0
  }else{
    x = x - 1
  }
  database.ref('/').update({
    food:x
  })
}



