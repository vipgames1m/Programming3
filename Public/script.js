var matrix = []
var side = 20;
var xotArr = [];
var eatArr = [];
var gishatichArr = [];
var gishatichkerArr = [];


var erk = 50;
var bar = 50;
var grasscount = 80;
var eatcount = 50;
var gishcount = 30;
var gishkercount = 20;
var jur = 80;




function setup() {
    for (var i = 0; i < erk; ++i) {
        matrix.push([]);
        for (var j = 0; j < bar; ++j) {
            matrix[i][j] = 0;
        }
    }


    c = 0;
    while (c < grasscount) {
        var x = Math.floor(random(0, erk));
        var y = Math.floor(random(0, bar));
        if (matrix[x][y] == 0) {
            matrix[x][y] = 1;
            c++
        }
    }

    c = 0;
    while (c < eatcount) {
        var x = Math.floor(random(0, erk));
        var y = Math.floor(random(0, bar));
        if (matrix[x][y] == 0) {
            matrix[x][y] = 2;
            c++
        }
    }

    c = 0;
    while (c < gishcount) {
        var x = Math.floor(random(0, erk));
        var y = Math.floor(random(0, bar));
        if (matrix[x][y] == 0) {
            matrix[x][y] = 3;
            c++
        }
    }


    c = 0;
    while (c < gishkercount) {
        var x = Math.floor(random(0, erk));
        var y = Math.floor(random(0, bar));
        if (matrix[x][y] == 0) {
            matrix[x][y] = 4;
            c++
        }
    }

    c = 0;
    while (c < jur) {
        var x = Math.floor(random(0, erk));
        var y = Math.floor(random(0, bar));
        if (matrix[x][y] == 0) {
            matrix[x][y] = 5;
            c++
        }
    }


    noStroke()
    frameRate(80);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#0F0E0E');


    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 2) {
                var eatgrass = new Eatgrass(j, i, 2);
                eatArr.push(eatgrass);
            } else if (matrix[i][j] == 1) {
                var grass = new Grass(j, i, 1);
                xotArr.push(grass);

            }
            else if (matrix[i][j] == 3) {
                var gishatich = new Gishatich(j, i, 3);
                gishatichArr.push(gishatich);

            }
            else if (matrix[i][j] == 4) {
                var gishatich = new Gishatichaker(j, i, 4);
                gishatichArr.push(gishatich);

            }
            else if (matrix[i][j] == 5) {
                var Jur = new Jur(j, i, 5);
                JurArr.push(Jur);

            }
        }
    }


}

function draw() {
    background('#acacac');

    for (var i in JurArr) {
        JurArr[i].mul();
    }
    for (var i in xotArr) {
        xotArr[i].mul();
    }

    for (var i in eatArr) {
        eatArr[i].eat();
    }

    for (var i in gishatichArr) {
        gishatichArr[i].eat();
    }

    if (gishatichArr.length > 30) {
        for (var i in gishatichkerArr) {
            gishatichkerArr[i].eat();
        }

    }
    function exanak() {
        if (frameCount %40>=0 && frameCount %40<10) {
            console.log(1);
            for (var i = 0; i < matrix.length; i++) {
                for (var j = 0; j < matrix[i].length; j++) {
                    if (matrix[i][j] == 1) {
                        fill("white");
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 2) {
                        fill("#e2d25c");
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 0) {
                        fill('#acacac');
                        rect(j * side, i * side, side, side);
                    }
                    else if (matrix[i][j] == 3) {
                        fill('black');
                        rect(j * side, i * side, side, side);
                    }
                    else if (matrix[i][j] == 4 && gishatichArr.length > 30) {
                        fill('#cc3300  ');
                        ellipse(j * side, i * side, side, side);
                    }
                    else if (matrix[i][j] == 5) {
                        fill("black");
                        ellipse(j * side, i * side, side, side);
                    }

                }
            }

        }
        else if (frameCount %40>=10 && frameCount %40<20) {
            console.log(2);
            for (var i = 0; i < matrix.length; i++) {
                for (var j = 0; j < matrix[i].length; j++) {
                    if (matrix[i][j] == 1) {
                        fill("#66bb51");
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 2) {
                        fill("#ec9526");
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 0) {
                        fill('#acacac');
                        rect(j * side, i * side, side, side);
                    }
                    else if (matrix[i][j] == 3) {
                        fill('#0F0E0E  ');
                        rect(j * side, i * side, side, side);
                    }
                    else if (matrix[i][j] == 4 && gishatichArr.length > 30) {
                        fill('#cc3300  ');
                        ellipse(j * side, i * side, side, side);
                    }

                }
            }
        }
        else if (frameCount %40>=20 && frameCount %40<30) {
            console.log(3);
            for (var i = 0; i < matrix.length; i++) {
                for (var j = 0; j < matrix[i].length; j++) {
                    if (matrix[i][j] == 1) {
                        fill("green");
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 2) {
                        fill("orange");
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 0) {
                        fill('#acacac');
                        rect(j * side, i * side, side, side);
                    }
                    else if (matrix[i][j] == 3) {
                        fill('#0F0E0E  ');
                        rect(j * side, i * side, side, side);
                    }
                    else if (matrix[i][j] == 4 && gishatichArr.length > 30) {
                        fill('#cc3300  ');
                        ellipse(j * side, i * side, side, side);
                    }

                }
            }
        }
        else if (frameCount %40>=30 && frameCount %40<=39) {
            console.log(4);
            for (var i = 0; i < matrix.length; i++) {
                for (var j = 0; j < matrix[i].length; j++) {
                    if (matrix[i][j] == 1) {
                        fill("#a2c82c");
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 2) {
                        fill("#cd6616");
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 0) {
                        fill('#acacac');
                        rect(j * side, i * side, side, side);
                    }
                    else if (matrix[i][j] == 3) {
                        fill('#0F0E0E  ');
                        rect(j * side, i * side, side, side);
                    }
                    else if (matrix[i][j] == 4 && gishatichArr.length > 30) {
                        fill('#cc3300  ');
                        ellipse(j * side, i * side, side, side);
                    }

                }
            }
        }
    }
    exanak();

}


