
let oscSps = [];

function setup() {
	createCanvas (400, 400);
	for (var i = 0; i < 12; i++) {
		oscSps[i] = new oscSp(i);
	}

}


function draw() {
	background (0);
	translate (width/2, height/2);

	for (var i = 0; i < oscSps.length; i++) {
		oscSps[i].move();
		oscSps[i].display();
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
		
		print (whichSp);

	}

	move() {
		if (this.whichSp == 0) {
			this.oscx = 100;
			this.oscy = 0;
		} else if (this.whichSp == 1) {
			this.oscx = (sqrt(3)/2)*100;
			this.oscy = (1/2)*-100;
		} else if (this.whichSp == 2) {
			this.oscx = (1/2)*100;
			this.oscy = (sqrt(3)/2)*-100;
		} else if (this.whichSp == 3) {
			this.oscx = 0;
			this.oscy = -100;
		} else if (this.whichSp == 4) {
			this.oscx = (-1/2)*100;
			this.oscy = (sqrt(3)/2)*-100;
		} else if (this.whichSp == 5) {
			this.oscx = (sqrt(3)/2)*-100;
			this.oscy = (1/2)*-100;
		} else if (this.whichSp == 6) {
			this.oscx = -100;
			this.oscy = 0;
		} else if (this.whichSp == 7) {
			this.oscx = (sqrt(3)/2)*-100;
			this.oscy = (1/2)*100;
		} else if (this.whichSp == 8) {
			this.oscx = (-1/2)*100;
			this.oscy = (sqrt(3)/2)*100;
		} else if (this.whichSp == 9) {
			this.oscx = 0;
			this.oscy = 100;
		} else if (this.whichSp == 10) {
			this.oscx = (1/2)*100;
			this.oscy = (sqrt(3)/2)*100;
		} else if (this.whichSp == 11) {
			this.oscx = (sqrt(3)/2)*100;
			this.oscy = (1/2)*100;
		}
		this.oscspeed += 0.05;
		this.dx = map(sin(this.oscspeed), -1, 1, 0, this.oscx);
		this.dy = map(sin(this.oscspeed), -1, 1, 0, this.oscy);
	}
	

	display() {
		ellipse (this.dx, this.dy, 10, 10);
	}


}

//class explodies {


//}