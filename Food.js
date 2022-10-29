var milkBottle, milkBottleImg
var database

function preload() {
    milkBottleImg = loadImage('images/Milk (1).png');
}
class Food{
    constructor (foodStock, lastFed) {
        this.foodStock = foodStock; 
        this.lastFed = lastFed;
    }

    getFoodstock(){
       foodStock =  this.database.ref(food.val())
    }

    upateFoodStock(){
        foodStock = this.database.update(food.val())

    }

    deductFood(){
        foodStock = this.database.ref(food.val() = food.val() - 1)
    }

    display(){

    }
}
