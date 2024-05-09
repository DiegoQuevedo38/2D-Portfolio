// Functions 

export function displayDialogue(text, onDisplayEnd) {
    const dialogueUI = document.getElementById("textbox-container");
    const dialogue = document.getElementById("dialogue");

    dialogueUI.style.display = "block";

    let index = 0;
    let currentText = "";
    let intervalRef;
    
    function displayNextLetter() {
        const currentPart = text[index];
        if (currentText !== currentPart){
               currentText += currentPart[currentText.length];
                dialogue.innerHTML = currentText;
                return;
        } 
        completeText();
    }

    intervalRef = setInterval(displayNextLetter, 5);

    const closeBtn = document.getElementById("close");

    function onCloseBtn() {
        onDisplayEnd();
        dialogueUI.style.display = "none";
        dialogue.innerHTML = "";
        clearInterval(intervalRef);
        currentText = "";
        index = 0;
        closeBtn.removeEventListener("click", onCloseBtn);
        dialogueUI.removeEventListener("click", completeText);
    }
    
    function completeText() {
        clearInterval(intervalRef);
        if (index < text.length){
            let currentText = text[index];
            dialogue.innerHTML = currentText;
            index ++
            return
        } 
        return onCloseBtn();
    }

    dialogueUI.addEventListener("click", completeText);

    closeBtn.addEventListener("click", onCloseBtn);

}

export function setCamScale(k) {
    const resizeFactor = k.width() / k.height();
    if (resizeFactor < 1){
        k.camScale(k.vec2(1));
        return
    } 
    k.camScale(k.vec2(1.5))
}


