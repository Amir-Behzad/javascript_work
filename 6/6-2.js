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

class Follower extends Actor {
    constructor(startX, startY, player) {
        super(startX, startY);
        this.player = player;
    }

    follow() {
        this.x = this.player.x;
        this.y = this.player.y;
    }
}

player_lead = new Actor(3, 3);
console.log(`player_lead is at: ${player_lead.x}, ${player_lead.y}`)
player_follow = new Follower(2, 1);
console.log(`player_follow is at: ${player_follow.x}, ${player_follow.y}`)
player_follow.player = player_lead;
console.log(`player_follow is following player_lead ...`);
player_follow.follow();
console.log(`player_follow is at: ${player_follow.x}, ${player_follow.y}`)
