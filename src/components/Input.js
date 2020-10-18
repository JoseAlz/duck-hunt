
export default class Input {
    constructor(game, canvas) {
        canvas.addEventListener("mousedown", (event) => {
            let rect = canvas.getBoundingClientRect();
            this.mouseX = event.clientX - rect.left;
            this.mouseY = event.clientY - rect.top;


            if (game.canShoot && this.limitShoot) {
                this.counter = 0;
                game.gameStats.shoot++;
            }
        });
        this.counter = 0;
    }

    limitClick(deltaTime) {
        this.counter += deltaTime/16;
        this.limitShoot = this.counter >= 50;
    }
}