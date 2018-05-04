rain.exports =
class Anjrev extends Creature {
    constructor(x, y, index, directions) {
        super(x, y, index, directions)
        this.energy = Math.round(Math.random() * 20);
        this.speed = 30;
        this.multiply = Math.round(Math.random() * 20);
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(Character) {
        this.stanalNorKordinatner();
        return super.yntrelVandak(Character);

    }

    sharjvel() {
        var vand = random(this.yntrelVandak(0));
        if (vand && this.multiply >= this.speed / 2) {
            this.energy--;
            matrix[this.y][this.x] = 0;
            this.x = vand[0]; this.y = vand[1];
            matrix[this.y][this.x] = 4;
        }
    }

    utel() {
        this.energy--;
        this.multiply++;
        var vand = random(this.yntrelVandak(2));
        if (vand && this.multiply >= this.speed / 4) {
            this.energy += this.speed / 2;
            matrix[this.y][this.x] = 0;
            this.x = vand[0]; this.y = vand[1];
            matrix[this.y][this.x] = 3;
            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    grassArr.splice(i, 1);
                }
            }
        }
        else this.sharjvel();
    }

    bazmanal() {
        var vand = random(this.yntrelVandak(1));
        if (vand && this.energy >= this.speed) {
            this.energy = 1;
            var newAnjrev = new Anjrev(vand[0], vand[1], 4);
            AnjrevArr.push(newAnjrev);
        }
    }

    mahanal() {
        if (this.energy <= -(this.speed / 4)) {
            matrix[this.y][this.x] = 0;
            for (var i in AnjrevArr) {
                if (AnjrevArr[i].x == this.x && AnjrevArr[i].y == this.y) {
                    AnjrevArr.splice(i, 1);
                }
            }
        }
    }
}
