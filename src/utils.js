// Functions 
export function displayDialogue(text, onDisplayEnd) {
    const dialogueUI = document.getElementById("textbox-container");
    const dialogue = document.getElementById("dialogue");

    dialogueUI.style.display = "block";

    let index = 0;
    let currentText = "";
    const intervalRef = setInterval(() => {
        if (index < dialogueArray.length) {
            const currentPart = dialogueArray[index];
            if (currentText.length < currentPart.length) {
                currentText += currentPart[index];
                dialogue.innerHTML = currentText;
                return;
            }
            index++;
            currentText = "";
        } else {
            clearInterval(intervalRef);
        }
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

    dialogueUI.addEventListener("click", () => {
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


