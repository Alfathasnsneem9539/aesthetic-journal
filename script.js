const saveBtn = document.getElementById("saveBtn");
const journalInput = document.getElementById("journalInput");
const moodSelect = document.getElementById("moodSelect");
const entriesDiv = document.getElementById("entries");

// Load saved entries from localStorage
let entries = JSON.parse(localStorage.getItem("journalEntries")) || [];
renderEntries();

saveBtn.addEventListener("click", () => {
  const text = journalInput.value.trim();
  const mood = moodSelect.value;

  if (text === "") return alert("Please write something!");

  const newEntry = {
    mood,
    text,
    date: new Date().toLocaleString()
  };

  entries.unshift(newEntry); // add to top
  localStorage.setItem("journalEntries", JSON.stringify(entries));

  journalInput.value = "";
  renderEntries();
});

function renderEntries() {
  entriesDiv.innerHTML = "";
  entries.forEach(entry => {
    const div = document.createElement("div");
    div.className = "entry";
    div.innerHTML = `
      <p>${entry.mood} ${entry.text}</p>
      <small>${entry.date}</small>
    `;
    entriesDiv.appendChild(div);
  });
}
