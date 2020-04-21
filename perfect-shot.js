const moves = ["north", "north", "west", "west", "north", "east", "north"];

const finalPosition = function (moves) {
  let finalPosition = [0, 0];
  for (let move of moves) {
    if (move === "north") {
      finalPosition[1]++;
    } else if (move === "south") {
      finalPosition[1]--;
    } else if (move === "east") {
      finalPosition[0]++;
    } else if (move === "west") {
      finalPosition[0]--;
    }
  }
  console.log(finalPosition);
};

finalPosition(moves);
