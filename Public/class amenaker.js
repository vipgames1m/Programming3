
//գիշատիչակեր
class Gishatichaker extends Mayrakan {
    constructor(x, y, ind) {
        super(x, y, ind)
        this.energy = 50;

    }

    move() {
        var emptyCord = this.getDirections(0);
        var cord = random(emptyCord);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
        }

    }


    eat() {

        var emptyCord1 = this.getDirections(1);
        var emptyCord2 = this.getDirections(2);
        var emptyCord3 = this.getDirections(3);
        var emptyCord5 = this.getDirections(5);
        var cord1 = random(emptyCord1);
        var cord2 = random(emptyCord2);
        var cord3 = random(emptyCord3);
        var cord5 = random(emptyCord5);

        if (cord1) {
            this.multiply++;

            var x = cord1[0];
            var y = cord1[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;


            for (var i in gishatichArr) {
                if (x == gishatichArr[i].x && y == gishatichArr[i].y) {
                    gishatichArr.splice(i, 1);
                }
            }
            if (this.multiply == 1) {
                this.mul()
                this.multiply = 0;
            }

        }
        else if (cord2) {
            this.multiply++;

            var x = cord2[0];
            var y = cord2[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;


            for (var i in gishatichArr) {
                if (x == gishatichArr[i].x && y == gishatichArr[i].y) {
                    gishatichArr.splice(i, 1);
                }
            }
            if (this.multiply == 1) {
                this.mul()
                this.multiply = 0;
            }

        }
        else if (cord3) {
            this.multiply++;

            var x = cord3[0];
            var y = cord3[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;


            for (var i in gishatichArr) {
                if (x == gishatichArr[i].x && y == gishatichArr[i].y) {
                    gishatichArr.splice(i, 1);
                }
            }
            if (this.multiply == 1) {
                this.mul()
                this.multiply = 0;
            }

        }
        else if (cord5) {
            this.multiply++;

            var x = cord5[0];
            var y = cord5[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;


            for (var i in gishatichArr) {
                if (x == gishatichArr[i].x && y == gishatichArr[i].y) {
                    gishatichArr.splice(i, 1);
                }
            }
            if (this.multiply == 1) {
                this.mul()
                this.multiply = 0;
            }

        }
        else {
            this.move();
            this.energy--;
            if (this.energy < 5) {
                this.die();
                //this.energy = 10;
            }
        }
    }
    mul() {
        var emptyCord = this.getDirections(0);

        var cord = random(emptyCord);
        if (cord) {
            var x = cord[0];
            var y = cord[1];

            this.multiply++;

            var norgishatichaker = new Gishatichaker(x, y, this.index);
            gishatichakerArr.push(norgishatichaker);

            matrix[y][x] = 4;
            this.multiply = 0;
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in gishatichakerArr) {
            if (this.x == gishatichakerArr[i].x && this.y == gishatichakerArr[i].y) {
                gishatichakerArr.splice(i, 1);
            }
        }
    }



}
