var slaying = true;
var youHit = Math.floor(Math.random() * 10);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 4;

while(slaying) {
    if(youHit === 1) {
        console.log("Yes, that was a direct hit!")
        totalDamage += damageThisRound;

        if(totalDamage >= 4) {
           console.log("You have defeated the Dragon! Well done!");
           slaying = false;
        }
        else {
           youHit = Math.floor(Math.random() * 2);
        }
    }
    else {
        console.log("Oh no! The Dragon has burned you!")
    }
    slaying = false;
}
