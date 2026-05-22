// ================================
// APP.JS - SAMPLE JAVASCRIPT PROJECT
// ================================


// ---------- Console Message ----------
console.log("App.js connected successfully!");


// ---------- Change Heading ----------
function changeHeading() {
    document.getElementById("title").innerHTML =
        "Welcome to JavaScript!";
}


// ---------- Change Background Color ----------
function changeBackground() {

    const colors = [
        "#f4f4f4",
        "#dff9fb",
        "#f6e58d",
        "#ffbe76",
        "#badc58",
        "#c7ecee"
    ];

    const randomColor =
        colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor = randomColor;
}


// ---------- Show Current Time ----------
function showTime() {

    const currentTime = new Date();

    document.getElementById("time").innerHTML =
        "Current Time: " + currentTime.toLocaleTimeString();
}


// ---------- Alert Message ----------
function showAlert() {
    alert("Button clicked successfully!");
}


// ---------- Increase Counter ----------
let count = 0;

function increaseCounter() {

    count++;

    document.getElementById("counter").innerHTML =
        count;
}


// ---------- Decrease Counter ----------
function decreaseCounter() {

    count--;

    document.getElementById("counter").innerHTML =
        count;
}


// ---------- Reset Counter ----------
function resetCounter() {

    count = 0;

    document.getElementById("counter").innerHTML =
        count;
}


// ---------- Change Image ----------
function changeImage() {

    const image =
        document.getElementById("mainImage");

    image.src =
        "https://picsum.photos/400/200?random=" + Math.random();
}


// ---------- Toggle Dark Mode ----------
function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");
}


// ---------- Form Validation ----------
function validateForm() {

    const username =
        document.getElementById("username").value;

    if (username === "") {

        alert("Please enter your name!");

        return false;
    }

    alert("Form submitted successfully!");

    return true;
}


// ---------- Mouse Events ----------
function mouseOverEffect() {

    document.getElementById("hoverText").innerHTML =
        "Mouse is over the text!";
}


function mouseOutEffect() {

    document.getElementById("hoverText").innerHTML =
        "Mouse moved away!";
}


// ---------- Keyboard Event ----------
function keyPressed() {

    const inputText =
        document.getElementById("inputBox").value;

    document.getElementById("typedText").innerHTML =
        inputText;
}


// ---------- Array Example ----------
const fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Mango"
];


function showFruits() {

    let result = "";

    for (let i = 0; i < fruits.length; i++) {

        result += fruits[i] + "<br>";
    }

    document.getElementById("fruitList").innerHTML =
        result;
}


// ---------- Simple Calculator ----------
function addNumbers() {

    const num1 =
        parseInt(document.getElementById("num1").value);

    const num2 =
        parseInt(document.getElementById("num2").value);

    const total = num1 + num2;

    document.getElementById("result").innerHTML =
        "Result: " + total;
}


// ---------- Page Loaded Message ----------
window.onload = function () {

    console.log("Page loaded successfully!");
};