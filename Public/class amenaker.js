
//գիշատիչակեր
class Gishatichaker extends Mayrakan{
    constructor(x, y, ind) {
        super(x,y,ind)
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

        var emptyCord = this.getDirections(1 || 2 || 3 || 5);

        var cord = random(emptyCord);

        if (cord) {
            this.multiply++;

            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;


            for (var i in  gishatichArr) {
                if (x ==  gishatichArr[i].x && y == gishatichArr[i].y) {
                   gishatichArr.splice(i, 1);
                }
            }
            if (this.multiply == 1) {
                this.mul()
                this.multiply = 0;
            }

        } else {
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
            if (this.x ==gishatichakerArr[i].x && this.y == gishatichakerArr[i].y) {
               gishatichakerArr.splice(i, 1);                       
            }
        }
    }



}
