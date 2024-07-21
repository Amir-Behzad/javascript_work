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
