var slaying = true;
var youHit = Math.floor(Math.random() * 10);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 4;

while(slaying) {
    if(youHit === 1) {
        console.log("You have hit the Dragon!")
        totalDamage += damageThisRound;

        if(totalDamage >= 4) {
           console.log("You have slain the Dragon! You have won!");
           slaying = false;
        }
        else {
           youHit = Math.floor(Math.random() * 2);
        }
    }
    else {
        console.log("The Dragon has slain you!")
    }
    slaying = false;
}
