var simplecopy = function() { // make a closure so we don't pollute the namespace
    var node = document.createElement("DIV");
    node.style.position = "fixed"; // doesn't interact with the DOM
    node.style.color = "rgba(0,0,0,0)"; // transparent
    node.innerText = copyText;

    function simplecopy(copyText, callback) {
        document.body.appendChild(node);
        var selectStatus = selectText(node);
        var copyStatus = document.execCommand("copy", false, null); // copy currently selected text
        document.body.removeChild(node);
        return selectStatus && copyStatus;
    }

    function selectText(node) {
        var range, selection;
        if (document.body.createTextRange) { // if the browser supports this old method
            range = document.body.createTextRange(); // create a text range
            range.moveToElementText(node);
            range.select();
            return true;
        }
        else if (window.getSelection) { // if the browser supports the newer method
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
    return simplecopy;
}();
