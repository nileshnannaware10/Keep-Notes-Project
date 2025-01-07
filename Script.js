document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const noteText = document.getElementById("note-text");
  const addNoteButton = document.getElementById("add-note");
  const notesContainer = document.getElementById("notes-container");

  // Load theme preference from localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
      document.body.classList.add("dark");
  }

  // Toggle theme
  themeToggle.addEventListener("click", () => {
      if (document.body.classList.contains("dark")) {
          document.body.classList.remove("dark");
          localStorage.setItem("theme", "");
      } else {
          document.body.classList.add("dark");
          localStorage.setItem("theme", "dark");
      }
  });

  // Add Note
  addNoteButton.addEventListener("click", () => {
      const text = noteText.value.trim();
      if (text) {
          const note = document.createElement("div");
          note.classList.add("note");
          note.innerHTML = `
              <p>${text}</p>
              <button class="delete-note">X</button>
          `;

          // Add delete functionality
          note.querySelector(".delete-note").addEventListener("click", () => {
              notesContainer.removeChild(note);
          });

          notesContainer.appendChild(note);
          noteText.value = "";
      } else {
          alert("Please write something before adding a note.");
      }
  });
});
