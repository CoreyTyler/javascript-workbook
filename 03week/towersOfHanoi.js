"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

//Move the top piece from startstack to the top of endstack.
function movePiece(startStack, endStack) {
  // Your code here
  let x = stacks[startStack].pop();
  stacks[endStack].push(x);
}

// If the move is legal return true.
//if the move is not legal return false.
//A Legal move is when there is at least 1 piect in the startstack and:
// 1. when the endstack is empty or
// 2. when the top piece in startstack is smaller
// then the top piece in endstack.
function isLegal(startStack, endStack) {
  let end = stacks[endStack];
  let start = stacks[startStack];
  if (end[end.length - 1] <= start[start.length - 1]) {
    return false;
  } else if ((startStack == "a" && endStack == "b") || endStack == "c") {
    return true;
  } else if ((startStack == "b" && endStack == "a") || endStack == "c") {
    return true;
  } else if ((startStack == "c" && endStack == "b") || endStack == "a") {
    return true;
  } else {
    return false;
  }
}

//If the player won return true.
//If the player did not win, return false.
//A win is then all 4 blocks are in stack B or stack C.
function checkForWin() {
  if (stacks.b.length == 4 || stacks.c.length == 4) {
    console.log("You win!");
    return true;
  } else {
    return false;
  }
}

//Takes in the user input for startStack and Endstack and
//digitally plays the round
function towersOfHanoi(startStack, endStack) {
  // Your code here
  //Check to see if the move is legal.
  //If the move is legal:
  // - move the piece.
  //Else If the move is not legal:
  // - tell them the move is not legal.
  //
  //- check if they won.
  //    - if they won, tell them they won.
  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);
    checkForWin(startStack, endStack);
  }
}

function getPrompt() {
  printStacks();
  rl.question("start stack: ", startStack => {
    rl.question("end stack: ", endStack => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === "function") {
  describe("#towersOfHanoi()", () => {
    it("should be able to move a block", () => {
      towersOfHanoi("a", "b");
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe("#isLegal()", () => {
    it("should not allow an illegal move", () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal("a", "b"), false);
    });
    it("should allow a legal move", () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal("a", "c"), true);
    });
  });
  describe("#checkForWin()", () => {
    it("should detect a win", () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
} else {
  getPrompt();
}
