// Functions 
/* export function displayDialogue(text, onDisplayEnd) {
    const dialogueUI = document.getElementById("textbox-container");
    const dialogue = document.getElementById("dialogue");

    dialogueUI.style.display = "block";

    let index = 0;
    let currentText = "";
    let intervalRef;

    function displayNextLetter() {
        if (index <= text.length) {
            const currentPart = text[index];
            if (currentText.length < currentPart.length) {
                currentText += currentPart[currentText.length];
                dialogue.innerHTML = currentText;
                return;
            }
            clearInterval(intervalRef);
        } else {
            clearInterval(intervalRef);
        }
    }

    intervalRef = setInterval(displayNextLetter, 5);

    const closeBtn = document.getElementById("close");

    function onCloseBtn() {
        onDisplayEnd();
        dialogueUI.style.display = "none";
        dialogue.innerHTML = "";
        clearInterval(intervalRef);
        currentText = "";
        closeBtn.removeEventListener("click", onCloseBtn);
    }

    closeBtn.addEventListener("click", onCloseBtn);

    dialogueUI.addEventListener("click", () => {
        if (index < text.length) {
            clearInterval(intervalRef);
            index++;
            currentText = "";
            intervalRef = setInterval(displayNextLetter, 5);
        } else {
            intervalRef = setInterval(displayNextLetter, 5);
        }
    });
} */

export function displayDialogue(text, onDisplayEnd) {
    const dialogueUI = document.getElementById("textbox-container");
    const dialogue = document.getElementById("dialogue");

    dialogueUI.style.display = "block";

    let index = 0;
    let currentText = "";
    let intervalRef;

    function displayNextLetter() {
        if (index < text.length) {
            const currentPart = text[index];
            if (currentText !== currentPart) {
                currentText += currentPart[currentText.length];
                dialogue.innerHTML = currentText;
                return;
            } 
            clearInterval(intervalRef);
        } else {
            clearInterval(intervalRef);
        }
    }

    intervalRef = setInterval(displayNextLetter, 5);

    const closeBtn = document.getElementById("close");

    function onCloseBtn() {
        onDisplayEnd();
        dialogueUI.style.display = "none";
        dialogue.innerHTML = "";
        clearInterval(intervalRef);
        currentText = "";
        closeBtn.removeEventListener("click", onCloseBtn);
    }

    closeBtn.addEventListener("click", onCloseBtn);

    dialogueUI.addEventListener("click", () => {
        if (currentText !== text[index]) {
            currentText = text[index];
            dialogue.innerHTML = currentText;
            if (index == text.length){
                onCloseBtn()
            } 
        } 
            clearInterval(intervalRef);
            index++;
            currentText = "";
    });
}

export function setCamScale(k) {
    const resizeFactor = k.width() / k.height();
    if (resizeFactor < 1){
        k.camScale(k.vec2(1));
        return
    } 
    k.camScale(k.vec2(1.5))
}


