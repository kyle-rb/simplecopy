var node = document.createElement("DIV");
node.style.position = "fixed"; // doesn't interact with the DOM
node.style.color = "rgba(0,0,0,0)"; // transparent
node.innerHTML = copyText;

function simpleCopy(copyText, callback) {
    document.body.appendChild(node);
    var selectStatus = selectText(node);
    var copyStatus = document.execCommand("copy", false, null); // copies currently selected text
    document.body.removeChild(node);
    callback(selectStatus && copyStatus);
}

function selectText(node) {
    var range, selection;
    if (document.body.createTextRange) { // if the browser supports this old thing
        range = document.body.createTextRange(); // create a text range
        range.moveToElementText(node);
        range.select();
        return true;
    }
    else if (window.getSelection) { // if the browser supports the newer thing (most of the time)
        selection = window.getSelection(); // get a selection object
        range = document.createRange(); // create a blank range object
        range.selectNodeContents(node);
        selection.removeAllRanges(); // clear any current range from the selection
        selection.addRange(range); // select the contents of the range
        return true;
    }
    else {
        return false;
    }
}
