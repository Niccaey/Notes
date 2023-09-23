"use strict"

function speichern() {
        const textarea = document.getElementById("text");
        const text = textarea.value;
        localStorage.setItem("gespeicherterText", text);
}

window.onload = function() {
        const textarea = document.getElementById("text");
        const gespeicherterText = localStorage.getItem("gespeicherterText");

        if (gespeicherterText) {
            textarea.value = gespeicherterText;
        }
}
 
function loeschen() {
        const textarea = document.getElementById("text");
        localStorage.removeItem("gespeicherterText");
        textarea.value = "";
}

function newNote() {
        let newNote = document.createElement('div');
        newNote.classList.add('note');
    
        newNote.innerHTML = 
            <div class="inhalt">
                <h2>Note</h2>
                <textarea id="text"></textarea>
                <button id="btn1" onclick="speichern()">Speichern</button>
                <button id="btn2" onclick="loeschen()">Löschen</button>
            </div>;
    }