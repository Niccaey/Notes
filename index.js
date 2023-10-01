"use strict"
window.onload = loadNotes;

function loadNotes() {
        let savedNotes = JSON.parse(localStorage.getItem("noteCont"));
    
        if (savedNotes) {
                for (let i = 0; i < savedNotes.length; i++) {
                        createNote(savedNotes[i].title, savedNotes[i].content);
                }
        }
}

function createNote(title, content) {
        let notes = document.getElementById("notes")
        let liElem = document.createElement("li");
        liElem.className = "note";

        let h2 = document.createElement("h2");
        h2.className = "h2";
        h2.textContent = title;

        let textarea = document.createElement("textarea");
        textarea.className = "content";
        textarea.name="Name";
        textarea.textContent = content;


        let btn2 = document.createElement("button");
        btn2.id = "add";
        btn2.textContent = "+";
        btn2.addEventListener("click", saveNote);

        let btn3 = document.createElement("button");
        btn3.id = "delete";
        btn3.textContent = "x";
        btn3.onclick = deleteNote;

        let br = document.createElement("br");

        notes.appendChild(liElem);
        liElem.appendChild(h2);
        liElem.appendChild(textarea);
        liElem.appendChild(br);
        liElem.appendChild(btn2);
        liElem.appendChild(btn3);
}

function addNote() {
        let title = window.prompt("Füge einen Titel für deine Notiz ein.", "");
        let content = window.prompt("Füge deine Notiz ein.", "");

        if(title || content) {
                createNote(title, content);
        }
}

/*function generateId() {
        return Math.floor(Math.random()*1000+1);
}*/

function getSavedNotes() {
  let savedNotesJSON = localStorage.getItem("noteCont");
  return savedNotesJSON ? JSON.parse(savedNotesJSON) : [];
}

function isNoteAlreadySaved(newNote, savedNotes) {
  return savedNotes.some((savedNote) => {
      return savedNote.title === newNote.title && savedNote.content === newNote.content;
  });
}
    

function saveNote() {
  let hElem = document.querySelector(".h2");
  let contentElem = document.querySelector(".content");
  if (!hElem || !contentElem) {
      alert("Elemente nicht gefunden.");
      return;
  }

  let newNote = {
      title: hElem.textContent,
      content: contentElem.value,
  };

  let savedNotes = getSavedNotes();

  if (isNoteAlreadySaved(newNote, savedNotes)) {
      // Die Notiz wurde bereits gespeichert, zeige eine Info an
      alert("Diese Notiz wurde bereits gespeichert.");
  } else {
      // Die Notiz ist neu, speichere sie
      savedNotes.push(newNote);
      localStorage.setItem("noteCont", JSON.stringify(savedNotes));
      alert("Notiz erfolgreich gespeichert.");
  }
}

function deleteNote() {
        let hElem = document.querySelector(".h2"); 
        let contentElem = document.querySelector(".content"); 
    
        let savedNotes = JSON.parse(localStorage.getItem("noteCont"));
    
        // Durchsuchen Sie die gespeicherten Notizen, um die zu löschende Notiz zu finden
        for (let i = 0; i < savedNotes.length; i++) {
            if (savedNotes[i].title === hElem.textContent && savedNotes[i].content === contentElem.value) {
                var indexToDelete = i;
                break; //Die zu löschende Notiz wurde gefunde und die Schleife ab.
            }
        }
    
        // Wenn der Index zum Löschen gültig ist, entfernen Sie die Notiz aus dem Array
        if (indexToDelete !== -1) {
            savedNotes.splice(indexToDelete, 1);
            localStorage.setItem("noteCont", JSON.stringify(savedNotes));
            
            // Entfernen Sie das HTML-Element der Notiz aus dem DOM
            this.parentElement.remove();
        }
    }

    /*Beginn ServiceWorker
    function handleRegistration(registration) {
        registration.addEventListener("updatefound", function () {
          if (registration.installing) {
            const worker = registration.installing;
            worker.addEventListener("statechange", function () {
              if (worker.state === "installed") {
                handleUpdate(worker);
              }
            });
          } else if (registration.waiting) {
            const worker = registration.waiting;
            if (worker.state === "installed") {
              handleUpdate(worker);
            }
          }
        });
      }
      
      function handleUpdate(worker) {
        if (navigator.serviceWorker.controller) {
          const modal = document.getElementById("service-worker");
          const button = document.getElementById("service-worker-control");
          button.addEventListener("click", function () {
            worker.postMessage({ action: "skipWaiting" });
            modal.style.display = "none";
          });
          modal.style.display = "block";
        }
      }

      function registerServiceWorker() {
        if ("serviceWorker" in navigator) {
          let refreshing;
          navigator.serviceWorker.addEventListener("controllerchange", function () {
            if (refreshing) return;
            window.location.reload();
            refreshing = true;
          });
          navigator.serviceWorker
            .register("/notes/sw.js", { scope: "/notes/ " })
            .then((registration) => handleRegistration(registration))
            .catch((error) => console.log("Service Worker registration failed!", error));
        }
      }*/
      