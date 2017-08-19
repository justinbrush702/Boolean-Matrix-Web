// Function to make getting coordinate values easier
var getCoordinate = function (pos) {
  return maze[pos.x][pos.y];
}

// Function to make updating coordinates easier
var updateCoordinate = function (pos, value) {
  maze[pos.x][pos.y] = value;
}

// Space to the right of the given position
var rightSpace = function (pos) {
  return {
    x: pos.x + 1,
    y: pos.y
  }
};

// Space to the left of the given position
var leftSpace = function (pos) {
  return {
    x: pos.x - 1,
    y: pos.y
  }
};

// Space above the given position
var upSpace = function (pos) {
  return {
    x: pos.x,
    y: pos.y - 1
  }
};

// Space below the given position
var downSpace = function (pos) {
  return {
    x: pos.x,
    y: pos.y + 1
  }
};

// Retrieves neighbors (legitimate or not) for given position
var findNeighbors = function (pos) {
  var potentialSpots = [];
  potentialSpots.push(rightSpace(pos));
  potentialSpots.push(downSpace(pos));
  potentialSpots.push(leftSpace(pos));
  potentialSpots.push(upSpace(pos));
  return potentialSpots;
};
