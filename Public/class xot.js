//խոտի կլասը
class Grass extends Mayrakan {
   
    eat() {
        var emptyCord = this.getDirections(5);

        var cord = random(emptyCord);

        if (cord) {
            console.log("kerav")
            this.multiply++;

            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;


            for (var i in JurArr) {
                if (x == JurArr[i].x && y == JurArr[i].y) {
                    JurArr.splice(i, 1);
                }
            }
            if (this.multiply == 2) {
                this.mul()
                this.multiply = 0;
            }

        } 
    }

    mul() {
        this.multiply++;
        if (this.multiply == 2) {
            var emptyCord = this.getDirections(0);

            var cord = random(emptyCord);
            if (cord) {
                var x = cord[0];
                var y = cord[1];

                var norXot = new Grass(x, y, this.index);
                xotArr.push(norXot);

                matrix[y][x] = 1;
                this.multiply = 0;
            }
        }
    }



}
