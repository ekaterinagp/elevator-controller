const Elevator = require("./elevator");
const Building = require("./building");

const building = new Building();
const elevator1 = new Elevator({
  floors: [0, 1, 2, 3, 4, 5, 6],
  currentFloor: 2,
  id: 1
});

const elevator2 = new Elevator({
  floors: [0, 1, 2, 3, 4, 5, 6],
  currentFloor: 0,
  id: 2
});

building.elevators = [elevator1, elevator2];
let elevatorToSend = building.getCloserElevator(3, building.elevators);
elevatorToSend.goToFloor(3);

console.log(JSON.stringify(elevatorToSend));
// console.log(JSON.stringify(building));
