let pos = 0;

function ShuffleR() {
    let screenWidth = window.innerWidth;
    let cards = document.getElementById("cards");
    if (pos <= 300) {
        if (screenWidth < 1200)
            pos += 650;
        else
            pos += 320
        cards.style.right = pos + "px";
        document.getElementById("page1").classList.remove("active");
        document.getElementById("page2").classList.add("active");
        document.getElementById("leftButton").classList.add("active");
        document.getElementById("rightButton").classList.remove("active");
    }

}
function ShuffleL() {
    let screenWidth = window.innerWidth;
    let cards = document.getElementById("cards");
    if (pos >= 300) {
        if (screenWidth < 1200)
            pos -= 650;
        else
            pos -= 320
        cards.style.right = pos + "px";
        document.getElementById("page2").classList.remove("active");
        document.getElementById("page1").classList.add("active");
        document.getElementById("leftButton").classList.remove("active");
        document.getElementById("rightButton").classList.add("active");
    }

}