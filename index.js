// defined variables
let myLeads = [];
const savedText = document.getElementById("saved-text");
const inputEl = document.getElementById("input-el");
const saveBtn = document.getElementById("save-btn");
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("savedLinks"));

// Save Button
saveBtn.addEventListener("click", function save() {
  if (inputEl.value) {
    inputEl.placeholder = "";
    document.getElementById("input-el").style.border = "solid 1px black";
    render();
    inputEl.value = "";
    localStorage.setItem("savedLinks", JSON.stringify(myLeads));
  } else {
    inputEl.placeholder = "No input detected !";
    document.getElementById("input-el").style.border = "solid 1px red";
  }
});

// Render text function
function render() {
  myLeads.push(inputEl.value);
  let link = inputEl.value;
  const li = document.createElement("li");
  li.innerHTML = `<a href="https://${link}" target="_blank">${link}</a>`;
  savedText.appendChild(li);
}

// 6:10:10
