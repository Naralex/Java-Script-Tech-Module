class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = parts;
        let quality = Number(parts.engine * parts.power);
        this.parts.quality = quality;
        this.fuel = fuel;
        this.drive = function (a) {
            this.fuel = this.fuel - a;
            return this.fuel;
        }
    }
}
function f() {
    let parts = {engine: 6, power: 100};
    let vehicle = new Vehicle('a', 'b', parts, 200);
    vehicle.drive(100);
    console.log(vehicle.fuel);
    console.log(vehicle.parts.quality);

}
f();
