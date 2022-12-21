// Defined variables
let myLeads = [];
const savedText = document.getElementById("saved-text");
const inputEl = document.getElementById("input-el");
const saveBtn = document.getElementById("save-btn");
saveBtn.addEventListener("click", function save() {
  myLeads.push(inputEl.value);
  myLeads.forEach(function () {
    const element = document.createElement("li");
    element.innerText = myLeads;
    savedText.appendChild(element);
    myLeads.shift();
  });
});
