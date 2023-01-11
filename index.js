// defined variables
let myLeads = [];
const inputEl = document.getElementById("input-el");
const saveBtn = document.getElementById("save-btn");
const deleteAllBtn = document.getElementById("delete-all");
const savedText = document.getElementById("saved-text");

// rendering out saved links/leads
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

// delete all button
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
