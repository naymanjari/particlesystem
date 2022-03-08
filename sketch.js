let oscSps;


function setup() {
	createCanvas (400, 400);
	oscSps = new oscSp();

}


function draw() {
	background (0);
	translate (width/2, height/2);
	
	oscSps.move(1);
	oscSps.display();

}


class oscSp {
	constructor() {
		this.whichSp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
		this.oscx = 0;
		this.oscy = 0;
		this.oscspeed = 0.05;
		this.dx = 0;
		this.dy = 0;
		
	

	}

	move(whichSp) {
		if (whichSp[0]) {
			this.oscx = 100;
			this.oscy = 0;
		} else if (whichSp[1]) {
			this.oscx = (sqrt(3)/2)*100;
			this.oscy = (1/2)*-100;
		} else if (whichSp[2]) {
			this.oscx = (1/2)*100;
			this.oscy = (sqrt(3)/2)*-100;
		} else if (whichSp[3]) {
			this.oscx = 0;
			this.oscy = -100;
		} else if (whichSp[4]) {
			this.oscx = (-1/2)*100;
			this.oscy = (sqrt(3)/2)*-100;
		} else if (whichSp[5]) {
			this.oscx = (sqrt(3)/2)*-100;
			this.oscy = (1/2)*-100;
		} else if (whichSp[6]) {
			this.oscx = -100;
			this.oscy = 0;
		} else if (whichSp[7]) {
			this.oscx = (sqrt(3)/2)*-100;
			this.oscy = (1/2)*100;
		} else if (whichSp[8]) {
			this.oscx = (-1/2)*100;
			this.oscy = (sqrt(3)/2)*100;
		} else if (whichSp[9]) {
			this.oscx = 0;
			this.oscy = 100;
		} else if (whichSp[10]) {
			this.oscx = (1/2)*100;
			this.oscy = (sqrt(3)/2)*100;
		}
		this.dx = map(sin(this.oscspeed), -1, 1, 0, this.oscx);
		this.dy = map(sin(this.oscspeed), -1, 1, 0, this.oscy);
	}
	

	display() {
		ellipse (this.dx, this.dy, 10, 10);
	}


}

//class bounceSp {


//}