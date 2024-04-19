import kaboom from "kaboom";

export const k = kaboom({
    global: false,
    touchToMouse: true,
    canvas: document.getElementById("game")
})

// The context in which kaboom is gonna work, in this case, by click and touch for mobile