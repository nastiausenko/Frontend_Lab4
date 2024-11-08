const seventhElement = document.getElementById("seventhElement");
const eighthElement = document.querySelector("#eighthElement");
let isSeventhElementClicked = false;
let isEighthElementClicked = false;

const swapColors = (element1, element2) => {
    const tempBgColor = element1.style.backgroundColor;
    const tempColor = element1.style.color;
    element1.style.backgroundColor = element2.style.backgroundColor;
    element1.style.color = element2.style.color;
    element2.style.backgroundColor = tempBgColor;
    element2.style.color = tempColor;
}

const setInitialColors = (element, bgColor, textColor) => {
    element.style.backgroundColor = bgColor;
    element.style.color = textColor;
}

seventhElement.addEventListener("click", () => {
    if (isSeventhElementClicked) {
        swapColors(seventhElement, eighthElement);
    } else {
        setInitialColors(seventhElement, "#C9E9D2", "#133E87");
        isSeventhElementClicked = true;
    }
});

eighthElement.addEventListener("click", () => {
    if (isEighthElementClicked) {
        swapColors(eighthElement, seventhElement);
    } else {
        setInitialColors(eighthElement, "#FFE3E3", "#121481");
        isEighthElementClicked = true;
    }
});

const addButton = document.getElementById("addButton");
const zoomInButton = document.getElementById("zoomInButton");
const zoomOutButton = document.getElementById("zoomOutButton");
const deleteButton = document.getElementById("deleteButton");
const imageContainer = document.getElementById("images");
const imageElement = imageContainer.querySelector(".image");
const image = imageContainer.querySelector("img");

const updateAddButtonStyle = () => {
    if (imageContainer.contains(imageElement)) {
        addButton.disabled = true; 
    } else {
        addButton.disabled = false; 
    }
};

updateAddButtonStyle();

addButton.addEventListener("click", () => {
    if (!imageContainer.contains(imageElement)) {
        image.style.width = "auto";
        imageContainer.appendChild(imageElement);
        updateAddButtonStyle(); 
    }
});

zoomInButton.addEventListener("click", () => {
    const currentWidth = image.clientWidth;
    image.style.width = currentWidth + 100 + "px";
});

zoomOutButton.addEventListener("click", () => {
    const currentWidth = image.clientWidth;
    image.style.width = currentWidth - 100 + "px";
});

deleteButton.addEventListener("click", () => {
    if (imageContainer.contains(imageElement)) {
        imageElement.remove();
        updateAddButtonStyle();
    }
});
