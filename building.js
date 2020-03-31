class Building {
  _elevators = [];

  constructor(data) {
    if (data) {
      Object.assign(this.data);
    }
  }

  get elevators() {
    return this._elevators;
  }

  set elevators(value) {
    if (!Array.isArray(value)) return console.error("value is not an array");
    this._elevators = value;
  }

  getCloserElevator = (floor, elevators) => {
    if (isNaN(floor)) return console.error("floor should be a number");
    elevators.forEach(elevator => {
      elevator.diff = Math.abs(elevator.currentFloor - floor);
    });
    const elevatorToSend = elevators.sort((a, b) => {
      if (a.diff > b.diff) return 1;
      return -1;
    })[0];
    console.log("to send", elevatorToSend);
    return elevatorToSend;
  };
}

module.exports = Building;
