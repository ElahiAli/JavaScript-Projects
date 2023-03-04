const fs = require("fs");
//create file:
//filename      data in file
fs.writeFile("test.txt", "this is an example", (err) => {
  if (err) console.log(err);
  else {
    console.log("file successfully created.");
    //filename  type    error handler
    fs.readFile("test.txt", "utf8", (err, file) => {
      if (err) console.log(err);
      else console.log(file);
    });
  }
});

// how to rename a file
fs.rename("test.txt", "test3.txt", (err) => {
  if (err) console.log(err);
  else console.log("successfully renamed the file.");
});

// how to append new date to a file
fs.appendFile("test.txt", "some new data for appending to file.", (err) => {
  if (err) console.log(err);
  else console.log("new data has been appended.");
});

// how to delete a file
fs.unlink("test.txt", (err) => {
  if (err) console.log(err);
  else console.log("file deleted.");
});
