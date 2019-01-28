


var modal = document.getElementById("modal");
var start = document.getElementById("button");


$("#button").click(function() {
    if($("#Game").find(":selected").text() == "Maze") {
        createMaze();
    }
})



window.onclick = function(e) {
   if (e.target == modal) {
       modal.style.display = "none";
   }
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}



var c = document.getElementById("mazeCreate");
var context = c.getContext("2d");


function createMaze() {
    var img = new Image();
    
img.onload = function() {
context.drawImage(img, 0, 0, 400, 300);

object1.update();
object2.update();
};
img.src = "maze.gif";
}

function rect(x, y, width, height, color) {
this.width = width;
this.height = height;
this.x = x;
this.y = y;
this.color = color;
collisions = 1;

this.update = function() {
    this.draw();
}

this.draw = function() {
    context.beginPath();
    context.rect(this.x, this.y, this.width, this.height);
    context.fillStyle = this.color;
    context.fill();
    context.closePath();
}
}
var object1 = new rect(25, 160, 12, 12, "red");
var object2 = new rect(24, 181, 15, 15, "white");
var clearObject = new rect(2, 155, 12, 12, "white");





 function clear(x, y) {
    context.beginPath();
    context.rect(x, y, 12, 12);
    context.closePath();
    context.fillStyle = "white";
    context.fill();
} 

function collision(a, b) {
    return a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y;
    }

/* createMaze(); */

function stayCanvas(x, y) {
    var newImage = context.getImageData(x, y, 12, 12);
    var data = newImage.data;
    for (var i = 0; n = data.length, i < n; i += 4) {
        if (data[i] === 0) 
        collisions = 1
    }

}




function moveSquare(e) {
    switch (e.keyCode) {
        case 38:
        object1.y = object1.y - 10;
        clear(object1.x, object1.y + 10);
        if (object1.y < 0) {
            object1.y = 0;
        }
        stayCanvas(object1.x, object1.y);
        if (collisions == 1){
            object1.y += 10;
            console.log("yelp");
            collisions = 0;
        } 
        break;

        case 37:
        console.log("left");
        object1.x -= 10;
        clear(object1.x + 10, object1.y);

        if (object1.x < 0 && object1.y <= 500) {
            object1.x = 0;
        }

        stayCanvas(object1.x, object1.y);
        if (collisions == 1){
            object1.x += 10;
            console.log("yelp");
            collisions = 0;
        } 
        break;

        case 39:
        object1.x += 10;
        clear(object1.x - 10, object1.y);
        
        stayCanvas(object1.x, object1.y);
        if (collisions == 1){
            object1.x -= 10;
            console.log("yelp");
            collisions = 0;
        }
    
        break;

        case 40:
        object1.y += 10;
        clear(object1.x, object1.y - 10);
        if(object1.y > 288) {
            object1.y = 288;
        }
        stayCanvas(object1.x, object1.y);
        if (collisions == 1){
            object1.y -= 10;
            collisions = 0;
        }
        break;
        
    }
    object1.update();
    if (collision(object1, object2)) {
    modal.style.display = "block";
    } 
    
}

/* function moveSquare(e) {
    
    switch (e.keyCode) {
        case 38:
        y = y - 10;
        clear(x, y + 10);
        
        break;

        case 37:
        console.log("left");
        x = x - 10;
        clear(x + 10, y);
        break;

        case 39:
        x = x + 10;
        clear(x - 10, y);
        break;

        case 40:
        y = y + 10;
        clear(x, y - 10);
        break;
        
    }
    rectangle();
   
} */


window.addEventListener("keydown", moveSquare, true);