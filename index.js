"use strict"

window.onload = laden();

function newNote() {

        var titel = window.prompt("Füge einen Titel für deine Notiz ein.", ""); //Var erstellt um darin Ü zu speichern
        //var notiz = window.prompt("Füge den Inhalt deiner Notiz ein.", "");
        var note = document.getElementById("notes"); //Var erstellt, damit "Children" angehängt werden können
        var noteElem = document.createElement("div");
        var h2 = document.createElement("h2");       
        var textarea = document.createElement("textarea");
        var btn2 = document.createElement("button");
        var btn3 = document.createElement("button");
        var br = document.createElement("br");

        btn2.id = "btn2";
        btn3.id = "btn3";

        noteElem.className = "note"; //CSS ".note" hinzugefügt
        h2.className = "h2"; //CSS ".h2" hinzugefügt
        h2.textContent = titel;
        textarea.className = "text";
        //textarea.textContent = notiz;
        btn2.textContent = "+";
        btn3.textContent = "loeschen";

        btn2.setAttribute("onclick", "speichern()");
        //btn3.addEventListener("click", loeschen); 

        note.appendChild(noteElem);
        noteElem.appendChild(h2);
        noteElem.appendChild(textarea);
        noteElem.appendChild(br);
        noteElem.appendChild(btn2);
        noteElem.appendChild(btn3);
}

function speichern() {
        var elem1 = document.querySelector(".h2");
        var elem2 = document.querySelector(".text");

        var notizObj = {
                h2: elem1.textContent,
                text: elem2.value
        };

        localStorage.setItem("notiz", JSON.stringify(notizObj));//JSON.stringify = konvertiert JS-Objekte in JSON-Strings
}

function laden() {
        var elem2 = document.getElementsByClassName("notes");
        var elem1 = localStorage.getItem("notiz");

        if(elem1) {
               elem2.value = JSON.parse(elem1);
        }
}
