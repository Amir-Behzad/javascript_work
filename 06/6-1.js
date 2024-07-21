class Player {
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
    }
    
    move(dx, dy) {
        this.x += dx;
        this.y += dy;
    }
}

let player1 = new Player(0, 0);
let player2 = new Player(0, 0);

console.log(`The player1 is at the position: ${player1.x}, ${player1.y}}.`);
console.log(`The player2 is at the position: ${player2.x}, ${player2.y}}.`);

player1.move(2, -3);
player2.move(-1, 2);

console.log(`The player1 is at the position: ${player1.x}, ${player1.y}} now.`);
console.log(`The player2 is at the position: ${player2.x}, ${player2.y}} now.`);
