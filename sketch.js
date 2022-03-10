let oscSps = [];
let bounceBalls = [];

function setup() {
	createCanvas (400, 400);

	for (var i = 0; i < 12; i++) {
		oscSps[i] = new oscSp(i);
	}
	


}

function mousePressed() {
	let r = random(-5, 5);
	let b = new bounceBall(mouseX, mouseY, r, r);
	bounceBalls.push(b);
}


function draw() {
	background (0);
	translate (width/2, height/2);

	for (var i = 0; i < oscSps.length; i++) {
		oscSps[i].move();
		oscSps[i].display();
	}

	for (var i = 0; i < bounceBalls.length; i++) {
		bounceBalls[i].move();
		bounceBalls[i].display();
	}


}


class oscSp {
	constructor(whichSp) {
		this.whichSp = whichSp;
		this.oscx;
		this.oscy;
		this.dx;
		this.dy;
		this.oscspeed = 0;

	}

	move() {
		if (this.whichSp == 0) {
			this.oscx = 195;
			this.oscy = 0;
		} else if (this.whichSp == 1) {
			this.oscx = (sqrt(3)/2)*195;
			this.oscy = (1/2)*-195;
		} else if (this.whichSp == 2) {
			this.oscx = (1/2)*195;
			this.oscy = (sqrt(3)/2)*-195;
		} else if (this.whichSp == 3) {
			this.oscx = 0;
			this.oscy = -195;
		} else if (this.whichSp == 4) {
			this.oscx = (-1/2)*195;
			this.oscy = (sqrt(3)/2)*-195;
		} else if (this.whichSp == 5) {
			this.oscx = (sqrt(3)/2)*-195;
			this.oscy = (1/2)*-195;
		} else if (this.whichSp == 6) {
			this.oscx = -195;
			this.oscy = 0;
		} else if (this.whichSp == 7) {
			this.oscx = (sqrt(3)/2)*-195;
			this.oscy = (1/2)*195;
		} else if (this.whichSp == 8) {
			this.oscx = (-1/2)*195;
			this.oscy = (sqrt(3)/2)*195;
		} else if (this.whichSp == 9) {
			this.oscx = 0;
			this.oscy = 195;
		} else if (this.whichSp == 10) {
			this.oscx = (1/2)*195;
			this.oscy = (sqrt(3)/2)*195;
		} else if (this.whichSp == 11) {
			this.oscx = (sqrt(3)/2)*195;
			this.oscy = (1/2)*195;
		}
		this.oscspeed += 0.01;
		this.dx = map(sin(this.oscspeed), -1, 1, 0, this.oscx);
		this.dy = map(sin(this.oscspeed), -1, 1, 0, this.oscy);
	}
	

	display() {
		noStroke ();
		ellipse (this.dx, this.dy, 10, 10);
	}


}



class bounceBall {
	constructor(x, y , xSpeed, ySpeed){
		this.bounceX = x;
		this.bounceY = y;
		this.bounceSpeedX = xSpeed;
		this.bounceSpeedY = ySpeed;
	}

	move() {
		this.bounceX += this.bounceSpeedX;
		if (this.bounceX < -200 || this.bounceX > 200) {
			this.bounceSpeedX *= -1;
		}

		this.bounceY += this.bounceSpeedY;
		if (this.bounceY < -200 || this.bounceY > 200) {
			this.bounceSpeedY *= -1;
		}
	}

	display() {
		circle(this.bounceX, this.bounceY, 10);
		//print(this.bounceX + ', ' + this.bounceY);
	}
}