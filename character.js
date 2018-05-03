class character {
    constructor(initializaton, enemyIncrement) {
        this.moves = initializaton.moves;
        this.hitPoints = 50;
        this.sprites = initializaton.sprites;
        this.rendStart = initializaton.render.start;
        this.rendStep = initializaton.render.step;
        this.rendHeight = initializaton.render.height;
        this.rendMax = initializaton.render.max;
        this.death = initializaton.death;
        this.enemyIncrement = enemyIncrement;
        this.identifier = Math
            .random()
            .toString();
    }

    getMove() {
        let randomMove = this.moves[Math.floor(Math.random() * this.moves.length)];
        this.renderMove(randomMove.render.start - 11, randomMove);
        return randomMove;
    }

    getTime() {
        return 1 / this.attributes.speed;
    }

    alive() {
        return this.hitPoints > 0;
    }

    renderChar(side) {
        let char = this;
        let field = document.querySelector(`.${side}-chars`);
        let charLi = document.createElement("LI");
        charLi.setAttribute("class", "char");
        field.appendChild(charLi);
        let charCanvas = document.createElement('CANVAS');
        charCanvas.setAttribute('id', char.identifier);
        charCanvas.style.width = "200px";
        charCanvas.style.height = "200px";
        charLi.appendChild(charCanvas);
        let progress = document.createElement("DIV");
        progress.setAttribute("class", "progress");
        charLi.appendChild(progress);
        let health = document.createElement("DIV");
        health.setAttribute("class", `health ${char.identifier}`);
        progress.appendChild(health);
        let charImg = new Image();
        let canvas = document.getElementById(char.identifier);
        charImg.src = char.sprites;
        let context = canvas.getContext("2d");

        charImg.onload = function () {
            context.drawImage(charImg, char.rendStart, char.rendHeight + char.enemyIncrement, 64, 64, 50, 0, 200, 200);
        };
    }

    renderMove(start, move) {
        let canvas = document.getElementById(this.identifier);
        let context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
        let image = new Image();
        image.src = this.sprites;
        let end = move.render.max;
        if (this.enemyIncrement) {
            end -= 11;
        }
        if (start !== end) {
            context.drawImage(image, start, move.render.height + this.enemyIncrement, 64, 64, 50, 0, 200, 200);
            setTimeout(() => this.renderMove((start + move.render.step), move), 50);
        } else {
            context.drawImage(image, this.rendStart, this.rendHeight + this.enemyIncrement, 64, 64, 50, 0, 200, 200);
        }
    }

    renderDeath(start) {
        let canvas = document.getElementById(this.identifier);
        let context = canvas.getContext("2d");
        let image = new Image();
        image.src = this.sprites;

        if (start <= 390) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(image, start, 1294, 64, 64, 0, 0, 200, 200);
            setTimeout(() => this.renderDeath(start + 64), 100);
        }
    }
}

export default character;