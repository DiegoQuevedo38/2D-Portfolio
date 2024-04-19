// Functions 
export function displayDialogue(text, onDisplayEnd) {
    const dialogueUI = document.getElementById("textbox-container");
    const dialogue = document.getElementById("dialogue");

    dialogueUI.style.display = "block";

    let index = 0;
    let currentText = "";
    const intervalRef = setInterval(() => {
        if(index < text.length) {
            currentText += text[index];
            dialogue.innerHTML = currentText;
            index++;
            return;
        }

        clearInterval(intervalRef);
    }, 5);

    const closeBtn = document.getElementById("close");

    function onCloseBtn() {
        onDisplayEnd();
        dialogueUI.style.display = "none";
        dialogue.innerHTML = "";
        clearInterval(intervalRef);
        closeBtn.removeEventListener("click", onCloseBtn);
    }

    closeBtn.addEventListener("click", onCloseBtn);

    // Agregar la funcionalidad para avanzar al siguiente diálogo al hacer clic
    dialogueUI.addEventListener("click", () => {
        if (index < text.length) {
            clearInterval(intervalRef);
            index = text.length;
            dialogue.innerHTML = text;
        } else {
            clearInterval(intervalRef);
        }
    });
}

/* export function displayDialogue(text, onDisplayEnd) {
    const dialogueUI = document.getElementById("textbox-container");
    const dialogue = document.getElementById("dialogue");

    dialogueUI.style.display = "block";

    let index = 0;
    let currentText = "";
    const intervalRef = setInterval(() => {
        if(index < text.length) {
            currentText += text[index];
            dialogue.innerHTML = currentText;
            index++;
            return;
        }

        clearInterval(intervalRef)
    }, 5)

    const closeBtn = document.getElementById("close");

    function onCloseBtn() {
        onDisplayEnd();
        dialogueUI.style.display = "none";
        dialogue.innerHTML = "";
        clearInterval(intervalRef);
        closeBtn.removeEventListener("click", onCloseBtn)
    }

    closeBtn.addEventListener("click", onCloseBtn)
} */

export function setCamScale(k) {
    const resizeFactor = k.width() / k.height();
    if (resizeFactor < 1){
        k.camScale(k.vec2(1));
        return
    } 
    k.camScale(k.vec2(1.5))
}


