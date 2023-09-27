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
        let notes = document.getElementById("notes");

        let liElem = document.createElement("li");
        liElem.className = "note";

        let h2 = document.createElement("h2");
        h2.className = "h2";
        h2.textContent = title;

        let textarea = document.createElement("textarea");
        textarea.className = "content";
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

function saveNote() {
        let hElem = document.querySelector(".h2");
        let contentElem = document.querySelector(".content");
       
        let noteObj = {
                title: hElem.textContent,
                content: contentElem.value
        };

        let savedNotes = [];
        savedNotes = JSON.parse(localStorage.getItem("noteCont"));
        savedNotes.push(noteObj);

        localStorage.setItem("noteCont", JSON.stringify(savedNotes));//JSON.stringify = konvertiert JS-Objekte in JSON-Strings
}

function deleteNote() {
        let hElem = document.querySelector(".h2"); 
        let contentElem = document.querySelector(".content"); 
    
        let savedNotes = JSON.parse(localStorage.getItem("noteCont"));
    
        // Durchsuchen Sie die gespeicherten Notizen, um die zu löschende Notiz zu finden
        for (let i = 0; i < savedNotes.length; i++) {
            if (savedNotes[i].title === hElem.textContent && savedNotes[i].content === contentElem.value) {
                var indexToDelete = i;
                break; // Wir haben die zu löschende Notiz gefunden, brechen Sie die Schleife ab.
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