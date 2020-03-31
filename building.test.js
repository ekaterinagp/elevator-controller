import Building from "./building";
class ElevatorMock {
  constructor(currentFloor, id) {
    this.currentFloor = currentFloor;
    this.id = id;
  }
}

test("expect builsing to exist", () => {
  const building = new Building();
  expect(building).toBeTruthy();
});

test("expect array to consist of elevators", () => {
  const building = new Building();
  const elevator = new ElevatorMock();
  building.elevators = [elevator, elevator];
  expect(building.elevators.length).toBe(2);
});

test("get elevator closest to floor", () => {
  const building = new Building();
  const elevator = new ElevatorMock(4, 1);
  const elevator1 = new ElevatorMock(8, 2);
  building.elevators = [elevator, elevator1];
  let closesElevator = building.getCloserElevator(3, building.elevators);
  expect(closesElevator.id).toBe(1);
});
