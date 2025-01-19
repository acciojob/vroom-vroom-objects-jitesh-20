// Complete the js code
function Car(make, model) {
	getMakeModel(){
		return `${this.make} and ${this.model}`
	}
}

function SportsCar(make, model, topSpeed) extends Car {
	getTopSpeed(){
		return `${topSpeed} is the topSpeed of the Car`
	}
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
