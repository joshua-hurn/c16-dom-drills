document.addEventListener("DOMContentLoaded", function () {
    // create a div and add class
    const newDiv = document.createElement("div");
    newDiv.className = "header-container";

    // create an h1 and text node
    const newH1 = document.createElement("h1");
    newH1.className = "h1";
    const h1TextNode = document.createTextNode("This is an h1!");

    const newH2 = document.createElement("h2");
    newH2.classList.add("h2");
    console.log(newH2.className); // "h2"
    newH2.textContent = "This is an h2!";

    const newH3 = document.createElement("h3");
    newH3.className = "h3";
    const h3TextNode = document.createTextNode("This is an h3!");

    const newH4 = document.createElement("h4");
    newH4.className = "h4";
    const h4TextNode = document.createTextNode("This is an h4!");

    const newH5 = document.createElement("h5");
    newH5.className = "h5";
    const h5TextNode = document.createTextNode("This is an h5!");

    const newH6 = document.createElement("h6");
    newH6.className = "h6";
    const h6TextNode = document.createTextNode("This is an h6!");

    newH1.appendChild(h1TextNode);
    newH3.appendChild(h3TextNode);
    newH4.appendChild(h4TextNode);
    newH5.appendChild(h5TextNode);
    newH6.appendChild(h6TextNode);

    newH1.addEventListener("click", setRandomColor);
    newH2.addEventListener("click", setRandomColor);
    newH3.addEventListener("click", setRandomColor);
    newH4.addEventListener("click", setRandomColor);
    newH5.addEventListener("click", setRandomColor);
    newH6.addEventListener("click", setRandomColor);

    newDiv.appendChild(newH1);
    newDiv.appendChild(newH2);
    newDiv.appendChild(newH3);
    newDiv.appendChild(newH4);
    newDiv.appendChild(newH5);
    newDiv.appendChild(newH6);

    document.body.appendChild(newDiv);

    const colorArr = [
        "black",
        "pink",
        "purple",
        "gold",
        "goldenrod",
        "red",
        "blue",
        "yellow"
    ];

    const listItemButton = document.querySelector(".list-button");
    let listCount = 0;

    listItemButton.addEventListener("click", function () {
        const newLi = document.createElement("li");
        listCount++
        newLi.textContent = "This is list item " + listCount;
        newLi.addEventListener("click", setRandomColor);
        newLi.addEventListener("dblclick", function () {
            this.remove();
        });

        document.body.appendChild(newLi);
    });

    function setRandomColor(event) {
        const randomNum = Math.floor(Math.random() * colorArr.length);
        event.target.style.color = colorArr[randomNum];
    }
});
