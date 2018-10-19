
const DIRECTION_UP = 1;
const DIRECTION_RIGHT = 2;
const DIRECTION_DOWN = 3;
const DIRECTION_LEFT = 4;


function Snake(x,y,direction) {
	this.x = x;
	this.y = y;
	this.speed = 10;
	this.direction = direction; 
	this.speedX = 1;
	this.speedY = 0;

	this.getX = function(x) {
		return this.x;
	}; 

	this.getY = function(y) {
		return this.y;
	};

 

	// this.dir = function(x,y) {
	// 	this.xspeed = x;
	// 	this.yspeed = y;
	// }

	this.render = function(canvas) {
		var context = canvas.getContext('2d');
		context.clearRect(0,0,canvas.width,canvas.height);
		context.beginPath();
		context.fillStyle = "black";
		context.fillRect(this.x,this.y,20,20);
		context.fill();
	}

	this.moveRight = function() {
		this.x +=  this.speed;
		if (this.x >= 480) {
			this.x = 480;
		}
		this.render(canvas);
	}; 
	this.moveLeft = function() {
		this.x -= this.speed;
		if (this.x <= 0) {
			this.x = 0;
		}
		this.render(canvas);
	}; 
	this.moveUp = function() {
		this.y -= this.speed;
		if (this.y <= 0) {
			this.y = 0;
		}
		this.render(canvas);
	}; 
	this.moveDown = function() {
		this.y += this.speed;
		if (this.y >= 480) {
			this.y = 480;
		}
		this.render(canvas);
	}; 
};



 // this.move = function () {
 //        switch (this.direction){
 //            case DIRECTION_UP:
 //                snake.moveUp();
 //                break;
 //            case DIRECTION_DOWN:
 //                snake.moveDown();
 //                break;
 //            case DIRECTION_RIGHT:
 //                snake.moveRight();
 //                break;
 //            case DIRECTION_LEFT:
 //                snake.moveLeft();
 //                break;
 //        }
 //    };

function move (event) {
	if (event.which === 39) {
		snake.moveRight();
	} else if (event.which === 37) {
		snake.moveLeft();
	} else if (event.which === 38) {
		snake.moveUp();
	} else if (event.which === 40) {
		snake.moveDown();
	} else if (event.which === 68) {
		snake.moveRight();
	} else if (event.which === 65) {
		snake.moveLeft();
	} else if (event.which === 87) {
		snake.moveUp();
	} else if (event.which === 83) {
		snake.moveDown();
	}
};
var snake = new Snake(50,50);
var canvas = document.getElementById('myCanvas');
snake.render(canvas);

// // điều kiện để con rắn ăn food dài ra
// function createFood() {
// for (var i = 0; i <= canvas.width - cellSize; i+=cellSize) {
// 	snake.push(i);
	
// 	}
// }


//Tạo food
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var cellSize = 20;
var x = Math.random() * canvas.width;
var y = Math.random() * canvas.height;
var foodRadius = 10;
// var x = Math.random() * window.innerWidth;
// var y = Math.random() * window.innerHeight;
// var foodX = [];
// var foodY = [];
var food = {
	x: 0, 
	y: 0
};

// điều kiện để con rắn ăn food dài ra
// for (var i = 0; i <= canvas.width - cellSize; i+=cellSize) {
// 	foodX.push(i);
// 	foodY.push(i);
// }



// function createFood() {
// 	food.x = foodX[Math.floor(Math.random() * foodX.length)];
// 	food.y = foodY[Math.floor(Math.random() * foodY.length)];

	
// }

// function drawFood() {
// 	drawSquare(food.x, food.y, "red");
// }
function draw() {
  //context.clearRect(0, 0,500, 500);
    // createFood();
    theFood();
  }

setInterval(draw, 10);

function theFood() {
	
	drawCirc(x,y,foodRadius,"#9ACD32");


}

// function draw() {
//   ctx.clearRect(0, 0,500, 500);
//     createFood();
//   }

function drawCirc(x, y, rad, color) {
    context.beginPath();
    context.arc(x, y, rad, 0, Math.PI * 2);
    context.fillStyle = color;
    context.fill();
    // context.closePath();
};


// var canvas = document.getElementById('myCanvas');
// var context = canvas.getContext('2d');
// var x = 50;
// var y = 50;
// this.render = function(canvas) {
// 		var context = canvas.getContext('2d');
// 		context.clearRect(0,0,canvas.width,canvas.height);
// 		context.beginPath();
// 		context.fillStyle = color;
// 		context.fillRect(this.x,this.y,20,20);
// 		context.fill();
// 	}


// var canvas = document.getElementById('myCanvas');


// function theSnake() {
	
// 	drawCirc(x,y,foodRadius,"#9ACD32");



