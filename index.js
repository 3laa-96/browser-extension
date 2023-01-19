// Defined variables
let myLeads = [];
const inputEl = document.getElementById("input-el");
const saveBtn = document.getElementById("save-btn");
const tabBtn = document.getElementById("tab-btn");
const deleteAllBtn = document.getElementById("delete-all");
const savedText = document.getElementById("saved-text");

// Rendering out saved links/leads
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("savedLinks"));
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render();
}

// Save Button
saveBtn.addEventListener("click", function save() {
  if (inputEl.value) {
    inputEl.placeholder = "";
    document.getElementById("input-el").style.border = "solid 1px black";
    myLeads.push(inputEl.value);
    render();
    inputEl.value = "";
    localStorage.setItem("savedLinks", JSON.stringify(myLeads));
  } else {
    inputEl.placeholder = "No input detected !";
    document.getElementById("input-el").style.border = "solid 1px red";
  }
});

// Save Tab Button
tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("savedLinks", JSON.stringify(myLeads));
    render();
  });
});

// Delete all button
deleteAllBtn.addEventListener("click", function deleteLocalStorage() {
  if (savedText) {
    savedText.innerHTML = "";
    localStorage.clear();
    myLeads = [];
  }
});

// Render text function
function render() {
  savedText.innerHTML = "";
  myLeads.forEach(function (link) {
    const li = document.createElement("li");
    li.innerHTML = `<a href="https://${link}" target="_blank">${link}</a>`;
    savedText.appendChild(li);
  });
}
