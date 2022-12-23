// defined variables
let myLeads = [];
const savedText = document.getElementById("saved-text");
const inputEl = document.getElementById("input-el");
const saveBtn = document.getElementById("save-btn");

// Save Button
saveBtn.addEventListener("click", function save() {
  myLeads.push(inputEl.value);
  render();
  inputEl.value = "";
});

// Render text function
function render() {
  if (inputEl.value === "") {
    // inputEl.placeholder = "No input detected !"; WIP
    alert("No input detected");
  } else {
    myLeads.forEach(function (link) {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${link}" target="_blank">${link}</a>`;
      savedText.appendChild(li);
      myLeads.pop();
    });
  }
}
