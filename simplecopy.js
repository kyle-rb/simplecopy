function simpleCopy(copyText) {
    var node = document.createElement("DIV");
    node.style.position = "fixed"; // doesn't interact with the DOM
    node.style.color = "rgba(0,0,0,0)"; // transparent
    node.innerHTML = copyText;
    document.body.appendChild(node);
    selectText(node);
    //document.designMode = "on"; // thought this had to be on to enable execCommand; MDN lied
    document.execCommand("copy", false, null); // copies whatever text is selected
    document.body.removeChild(node);
}

function selectText(node) {
    var range, selection;
    if (document.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(node);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(node);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}
