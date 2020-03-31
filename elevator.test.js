//- Can change direction
// - Can accept a floor number
// - Can move to that floor
// - Can maintain a list of floor numbers
// - Can move through the floors
// - Can reverse direction when it reaches the top.

import Elevator from "./elevator";

test("expect elevator to exist", () => {
  const elevator = new Elevator();
  expect(elevator).toBeTruthy();
});

test("expect direction to be only up or down", () => {
  const elevator = new Elevator();
  elevator.direction = "left";
  expect(elevator.direction).toBe("up");
});

test("expect array of floors be an array", () => {
  const elevator = new Elevator();
  elevator.floors = "left";
  expect(elevator.floors).toStrictEqual([]);
});

test("expect array of floors be an array of numbers", () => {
  const elevator = new Elevator();
  elevator.floors = ["left", "right", "John"];
  expect(elevator.floors).toStrictEqual([]);
});

test("expect current floor to be a number", () => {
  const elevator = new Elevator({ floors: [0, 1, 2, 3] });
  elevator.currentFloor = "John";
  expect(elevator.currentFloor).toBe(0);
});

test("expect current floor to be in an array of floors", () => {
  const elevator = new Elevator({ floors: [0, 1, 2, 3] });
  elevator.currentFloor = 5;
  expect(elevator.currentFloor).toBe(0);
  elevator.currentFloor = 2;
  expect(elevator.currentFloor).toBe(2);
});

test("expect goToFloor change direction and floor number", () => {
  const elevator = new Elevator({ floors: [0, 1, 2, 3, 4, 5, 6] });
  elevator.currentFloor = 6;
  elevator.goToFloor(2);
  expect(elevator.currentFloor).toBe(2);
  expect(elevator.direction).toBe("down");
  expect(elevator.passedFloors).toStrictEqual([6, 5, 4, 3, 2]);
});
