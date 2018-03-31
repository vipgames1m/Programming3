var matrix = []
var side = 20;
var xotArr = [];
var eatArr = [];
var gishatichArr = [];
var gishatichakerArr = [];
var JurArr = [];


var erk = 50;
var bar = 50;
var grasscount = 50;
var eatcount = 50;
var gishcount = 30;
var gishatichakercount = 20;
var jurcount = 80;


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
    while (c < gishatichakercount) {
        var x = Math.floor(random(0, erk));
        var y = Math.floor(random(0, bar));
        if (matrix[x][y] == 0) {
            matrix[x][y] = 4;
            c++
        }
    }

    c = 0;
    while (c < jurcount) {
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
                var gishatichaker = new Gishatichaker(j, i, 4);
                gishatichakerArr.push(gishatichaker);

            }
            else if (matrix[i][j] == 5) {
                var jur = new Jur(j, i, 5);
                JurArr.push(jur);

            }
        }
    }


}

function draw() {
    background('#acacac');
    if (frameCount % 40 >= 0 && frameCount % 40 < 10) {

    }
    else {
        for (var i in JurArr) {
            JurArr[i].mul();
        }
    }
    for (var i in xotArr) {
        xotArr[i].mul();
        xotArr[i].eat();
    }

    for (var i in eatArr) {
        eatArr[i].eat();
    }

    for (var i in gishatichArr) {
        gishatichArr[i].eat();
    }

    if (frameCount % 1000 >= 100) {
        console.log("mtav");
        for (var i in gishatichakerArr) {
            gishatichakerArr[i].eat();
        }

    }
    function exanak() {
        var exanaktext = document.getElementById("exanaktext");
        if (frameCount % 40 >= 0 && frameCount % 40 < 10) {
            exanaktext.innerText = "Dzmer";
            exanaktext.style.color = "blue";
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
                    else if (matrix[i][j] == 4 && frameCount % 1000 >= 100) {
                        fill('#cc3300  ');
                        rect(j * side, i * side, side, side);
                    }
                    else if (matrix[i][j] == 5) {
                        fill("#13A4DE");
                        rect(j * side, i * side, side, side);
                    }

                }
            }

        }
        else if (frameCount % 40 >= 10 && frameCount % 40 < 20) {
            exanaktext.innerText = "Garun";
            exanaktext.style.color = "#66bb51";
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
                    else if (matrix[i][j] == 4 && frameCount % 1000 >= 100) {
                        fill('#cc3300  ');
                        rect(j * side, i * side, side, side);
                    }
                    else if (matrix[i][j] == 5) {
                        fill("blue");
                        rect(j * side, i * side, side, side);
                    }
                }
            }
        }
        else if (frameCount % 40 >= 20 && frameCount % 40 < 30) {
            exanaktext.innerText = "Amar";
            exanaktext.style.color = "green";
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
                    else if (matrix[i][j] == 4 && frameCount % 1000 >= 100) {
                        fill('#cc3300  ');
                        rect(j * side, i * side, side, side);
                    }
                    else if (matrix[i][j] == 5) {
                        fill("blue");
                        rect(j * side, i * side, side, side);
                    }
                }
            }
        }
        else if (frameCount % 40 >= 30 && frameCount % 40 <= 39) {
            exanaktext.innerText = "Asun";
            exanaktext.style.color = "#a2c82c";
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
                    else if (matrix[i][j] == 4 && frameCount % 1000 >= 100) {
                        fill('#cc3300  ');
                        rect(j * side, i * side, side, side);
                    }
                    else if (matrix[i][j] == 5) {
                        fill("blue");
                        rect(j * side, i * side, side, side);
                    }

                }
            }
        }
    }
    exanak();

}


