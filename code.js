// First of all we need to create some variables where we can access the elements
let ul = document.getElementById("list");
let removeAll = document.getElementById("removeAll");
let add = document.getElementById("add");

// Then we need to make some functions that manipulate the elements
add.onclick = function () {
    addLi(ul);
}

function addLi(targetUi) {
    let inputText = document.getElementById("text").value;
    let li = document.createElement("li");
    let textNode = document.createTextNode(inputText + " ");
    let removeButton = document.createElement("button");
    document.getElementById("text").value = " ";

    if (inputText.length === 0) {
        alert("Please add your to-do item");
        return false
    }

    removeButton.className = "removeMe";
    removeButton.innerHTML = "Done!";
    removeButton.setAttribute("onclick", "removeMe(this)");

    li.appendChild(textNode);
    li.appendChild(removeButton);

    targetUi.appendChild(li)
}