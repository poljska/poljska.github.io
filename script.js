function greet() {
    window.alert("Hey!");
}

function init() {
    document.getElementById("dom1").src = "images/flower2.png";

    let dom2images = document.getElementById("dom2").getElementsByTagName("img");
    dom2images[1].src = "images/flower2.png";
    dom2images[3].src = "images/flower2.png";

    document.getElementById("dom3").innerHTML = "<p>Your are great!</p>";

    let dom4image = document.createElement("img");
    dom4image.src = "images/flower1.png";
    dom4image.classList = "bgimg";
    document.getElementById("dom4").appendChild(dom4image);
}