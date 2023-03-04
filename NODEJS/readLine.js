const readLine = require("readline");
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let num1 = Math.floor(Math.random() * 10 + 1);
let num2 = Math.floor(Math.random() * 10 + 1);
let answer = num1 + num2;

//trim will remove white spaces
rl.question(`what is ${num1} + ${num2}?\n`, (userInput) => {
  if (userInput.trim() == answer) {
    rl.close();
  } else {
    rl.setPrompt("answer is not correct please try again.\n");
    rl.prompt();
    rl.on("line", (userInput) => {
      if (userInput.trim() == answer) {
        rl.close();
      } else {
        rl.setPrompt("answer is not correct please try again.\n");
        rl.prompt();
      }
    });
  }
});

// it doesn't need a emit because we used close method up there.
rl.on("close", () => {
  console.log("Correct!");
});
