function Car(manufacture, color,user) {
    this.manufacture = manufacture;
    this.color = color;
    this.enginesActive = false;
    this.user = user;
}

Car.prototype.startEngines = function () {
    console.log('Mobil dinyalakan...');
    this.enginesActive = true;
};

Car.prototype.info = function () {
    console.log("Manufacture: " + this.manufacture);
    console.log("Color: " + this.color);
    console.log("Engines: " + (this.enginesActive ? "Active" : "Inactive"));
    console.log(`Mobil ini Dimiliki Oleh bos ` + this.user);
}


var johnCar = new Car("Honda", "Red","naufal");
johnCar.startEngines();
johnCar.info();

/* output:
Mobil dinyalakan...
Manufacture: Honda
Color: Red
Engines: Active
*/

























