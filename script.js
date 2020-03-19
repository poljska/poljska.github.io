"use strict";

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

    let dom5main = document.getElementById("dom5").getElementsByTagName("span");
    let dom5colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
    for (var i = dom5main.length - 1; i >= 0; i--) {
        dom5main[i].style.color = dom5colors[i];
    }

    var changeSrc = function(event) {
        if (event.target.src) {
            let filename = event.target.src.replace(/^.*[\\\/]/, '');
            switch (filename) {
                case "flower1.png":
                    event.target.src = "images/flower2.png";
                    break;
                case "flower2.png":
                    event.target.src = "images/flower1.png";
                    break;
            }
        }
    };
    document.getElementById("dom6").addEventListener("mouseover", changeSrc);
}