function openMenu() {

    let menu = document.getElementById("menu")
    menu.classList.toggle("open-menu")

}

// input focus -----------------------


function focusBox() {
    let mailBlock = document.forms[0]
    mailBlock.style.border = "3px solid #F9B500"
    mailBlock.style.borderRadius = "5px"
}

function blurBox() {
    let mailBlock = document.forms[0]
    mailBlock.style.border = "1px solid #F9B500"
    mailBlock.style.borderRadius = "0px"
}