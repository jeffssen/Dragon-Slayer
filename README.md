# Dragon-Slayer
# A JavaScript game.

var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while (slaying) {
    if (youHit == 1) {
        console.log("You hit the dragon!”);
        totalDamage += damageThisRound;
    
    if (totalDamage >= 4) {
        console.log("You defeated the dragon!”);
    }
    }
    else {
        console.log("Oh no, the dragon burned you!”);
    }
    slaying = false;
}


