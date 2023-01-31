//chrome://extensions/

let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

// working with localStorage:
// localStorage.setItem(key,value)
// localStorage.getItem(key)
// localStorage.clear();

const leadFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
if (leadFromLocalStorage) {
  myLeads = leadFromLocalStorage;
  render(myLeads);
}

function render(leads) {
  let listItem = "";
  for (let i = 0; i < leads.length; i++) {
    listItem += `
      <li>
        <a target='_black' href='${leads[i]}'>
          ${leads[i]}
        </a>
      </li>`;

    // other way:
    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)
  }

  ulEl.innerHTML = listItem; //innerHTML should be out of the loop for better performance.
}

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  myValue = JSON.stringify(myLeads);
  localStorage.setItem("myLeads", myValue);
  render(myLeads);

  console.log(localStorage.getItem("myLeads"));
});

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});
