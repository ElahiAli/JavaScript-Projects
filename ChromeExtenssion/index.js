//chrome://extensions/

let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

// working with localStorage:
// localStorage.setItem(key,value)
// localStorage.getItem(key)
// localStorage.clear();

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  renderLeads();
});

function renderLeads() {
  let listItem = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItem += `
      <li>
        <a target='_black' href='${myLeads[i]}'>
          ${myLeads[i]}
        </a>
      </li>`;

    // other way:
    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)
  }

  ulEl.innerHTML = listItem; //innerHTML should be out of the loop for better performance.
}
