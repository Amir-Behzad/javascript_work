class Actor {
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
    }

    move(dx, dy) {
        this.x += dx;
        this.y += dy;
    }

    distanceTo(otherActor) {
        let dx = otherActor.x - this.x;
        let dy = otherActor.y - this.y;
        return Math.hypot(dx, dy);
    }    
}

class Player extends Actor {
    constructor(startX, startY) {
        super(startX, startY);
        //  100 hit points (full health) :
        this.hp = 100;
    }
}

class Enemy extends Actor {
    attack(player) {
        if (this.distanceTo(player) < 4) {
            player.hp -= 10;
            return true;
        } else {
            return false;
        }
    }
}

let player1 = new Player(0, 0);

let enemy1 = new Enemy(4, 5);
// console.log(`player1 is at the pisition: (${player1.x}, ${player1.y}). Health level: ${player1.hp}`);
// console.log(`enemy1 is at the pisition: (${enemy1.x}, ${enemy1.y}). Distance to player1: ${enemy1.distanceTo(player1)}`);
// console.log(`enemy1 attacks player1:\n${enemy1.attack(player1)}`);
// player1.move(2, 3);
// console.log(`player1 is moving...\nplayer1 is at the pisition: (${player1.x}, ${player1.y}). Health level: ${player1.hp}`);
// console.log(`enemy1 attacks player1:\n${enemy1.attack(player1)}`);
// // enemy1.attack(player1);
// console.log(`player1 is at the pisition: (${player1.x}, ${player1.y}). Health level: ${player1.hp}`);

console.log("player1 is instance of Player:");
player1 instanceof Player;
