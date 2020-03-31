class Elevator {
  _direction = "up";
  _floors = [];
  _currentFloor = 0;
  passedFloors = [];

  constructor(data) {
    if (data) {
      Object.assign(this, data);
    }
  }

  get direction() {
    return this._direction;
  }

  set direction(value) {
    if (value !== "up" && value !== "down")
      return console.error("direction can only be up or down");

    this._direction = value;
  }

  get floors() {
    return this._floors;
  }

  set floors(value) {
    if (!Array.isArray(value)) return console.error("value is not an array");
    if (value.some(isNaN))
      return console.error("array can only contain numbers");
    if (!value.length) return console.error("can not be empty array");
    this._floors = value.sort();
    this.currentFloor = this._floors[0];
  }

  get currentFloor() {
    return this._currentFloor;
  }

  set currentFloor(value) {
    if (value === this.currentFloor)
      return console.error("current floor equal to goto floor");
    if (isNaN(value)) return console.error("floor can only be a number");
    if (!this.floors.includes(value))
      return console.error("this number is not in array of floors");
    this._currentFloor = value;
  }

  createPassedFloors = data => {
    let {
      floors,
      currentFloor,
      goToFloor,
      direction,
      passedFloors,
      done
    } = data;

    if (done) {
      return passedFloors;
    }
    if (direction == "up") currentFloor++;
    if (direction == "down") currentFloor--;
    passedFloors.push(currentFloor);

    if (currentFloor === goToFloor) done = true;

    this.createPassedFloors({
      floors,
      currentFloor,
      goToFloor,
      direction,
      passedFloors,
      done
    });
    return passedFloors;
  };

  goToFloor = floor => {
    if (!floor || isNaN(floor))
      return console.error("floor is not a valid number");
    if (floor > this.currentFloor) this.direction = "up";
    if (floor < this.currentFloor) this.direction = "down";

    this.passedFloors = this.createPassedFloors({
      floors: this.floors,
      currentFloor: this.currentFloor,
      goToFloor: floor,
      direction: this.direction,
      passedFloors: [this.currentFloor],
      done: false
    });
    // console.log("passed floors", this.passedFloors);
    this.currentFloor = floor;
  };
}

const elevator = new Elevator({
  floors: [0, 1, 2, 3, 4, 5, 6],
  currentFloor: 6
});
elevator.goToFloor(2);
// elevator.direction = "down";
console.log(elevator);

module.exports = Elevator;
