fetch("https://reqres.in/api/users", {
  method: "post",
  headers: { "content-type": "application/json" },
  body: JSON.stringify({ name: "user1" }),
})
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log("Error"));

//GET
fetch("https://reqres.in/api/users/1")
  .then((res) => {
    return res.json(); // it's promis function so need the next then.
  })
  .then((data) => console.log(data))
  .catch((error) => console.log("Error"));
