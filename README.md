# elevator-controller

Elevator controller is a simple JavaScript application, which allows to control multiple elevators by few commands.

## Installation

clone repository and then run npm

```bash
npm i
```

## Usage

Application controls from main.js by, for example, node

```node
node main.js
```

Main.js contains execution logic, where building and multiple elevators can be created

```javascript
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
```

Main.js adds elevators to the building and recieves a closest to the floor elevator (from building.js) and send it to needed floor

```javascript
elevatorToSend.goToFloor(3);
```

## Tests

Tests are created in Jest and can be found in a root folder: `building.test.js` and `elevator.test.js`. Test can be run by

```bash
npm run test
```

## Source code

### class Elevator

Elevator posses such properties as id, directon, floors, currentFloor and also currently passedFloors. It can change direction, move to given floor, save recently passed floors on the way to its last destination and it changes direction when it reaches the top and the bottom.

```javascript
class Elevator {
  id = null;
  _direction = "up";
  _floors = [];
  _currentFloor = 0;
  passedFloors = [];
}
```

### class Building

Class Building posses array of elevators and get the closest elevator when it is needed.
