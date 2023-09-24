"use strict"

/*window.onload = loadNote;

function init() {
        document.getElementById("btn1").addEventListener('click', newNote);
}*/

function newNote() {
        var neu = document.querySelector(".neu");
        var note = document.createElement("div");
        var h2 = document.createElement("h2");        
        var text = document.createElement("textarea");
        /*var btn1 = document.createElement("button");
        var btn2 = document.createElement("button");*/

        note.className = "note";
        h2.textContent = "Notiz";

        note.appendChild(h2);
        note.appendChild(text);
       /* note.appendChild(btn1);
        note.appendChild(btn2);*/
        neu.appendChild(note);


}


function speichern() {
        const textarea = document.getElementById("text");
        const text = textarea.value;
        localStorage.setItem("gespeicherterText", text);
}

