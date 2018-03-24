var matrix = []
var side = 20;
var xotArr = [];
var eatArr = [];
var gishatichArr = [];
var gishatichkerArr=[];


var erk = 50;
var bar = 50;
var grasscount = 80;
var eatcount = 50;
var gishcount = 30;
var gishkercount = 20;




function setup() {
for(var i = 0; i<erk; ++i){
    matrix.push([]);
    for(var j = 0; j<bar; ++j){
        matrix[i][j]=0;
    }
}


var c = 0;
while(c<grasscount){
    var x = Math.floor(random(0,erk));
    var y = Math.floor(random(0,bar));
    if(matrix[x][y] == 0){
        matrix[x][y]=1;
        c++
    }
}

var c = 0;
while(c<eatcount){
    var x = Math.floor(random(0,erk));
    var y = Math.floor(random(0,bar));
    if(matrix[x][y] == 0){
        matrix[x][y]=2;
        c++
    }
}

var c = 0;
while(c< gishcount){
    var x = Math.floor(random(0,erk));
    var y = Math.floor(random(0,bar));
    if(matrix[x][y] == 0){
        matrix[x][y]=3;
        c++
    }
}


var c = 0;
while(c<gishkercount ){
    var x = Math.floor(random(0,erk));
    var y = Math.floor(random(0,bar));
    if(matrix[x][y] == 0){
        matrix[x][y]=4;
        c++
    }
}





    noStroke()
    frameRate(80);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');


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
        }
    }

    
}

function draw() {

    background('#acacac');
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
           else if (matrix[i][j] == 4 && gishatichArr.length>30) {
                fill('#cc3300  ');
                ellipse(j * side, i * side, side, side);
            }

        }
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

   if(gishatichArr.length>30){
        for (var i in gishatichkerArr) {
            gishatichkerArr[i].eat();
        }

   }   
    text(frameCount, width / 2, height / 2);
    
}


 