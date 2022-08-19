const characters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "{",
    "[",
    "}",
    "]",
    ",",
    "|",
    ":",
    ";",
    "<",
    ">",
    ".",
    "?",
    "/",
];
let result = [];
let passwordLgth = "";
let regPassEl = document.querySelector("#reg-pass");
let firstPasswordEl = document.querySelector("#first-password");
let secondPasswordEl = document.querySelector("#second-password");
let passwordLengthEl = document.querySelector("#password-length");
let generateEl = document.querySelector("#generate");

passwordLengthEl.addEventListener("change", function () {
    passwordLgth = passwordLengthEl.value;

    for (let i = 0; i < passwordLgth.length; i++) {
        if (isNaN(parseInt(passwordLgth[i], 10))) {
            passwordLgth = "";
        } else {
            passwordLgth = passwordLengthEl.value;
        }
    }
    console.log(parseInt(passwordLgth, 10));
});

function generatePassword() {
    let pass1 = "";
    let pass2 = "";
    if (parseInt(passwordLgth, 10) >= 1) {
        for (let i = 0; i < parseInt(passwordLgth, 10); i++) {
            let randomNumber = Math.floor(Math.random() * characters.length);
            pass1 = pass1 + characters[randomNumber];
            randomNumber = Math.floor(Math.random() * characters.length);
            pass2 = pass2 + characters[randomNumber];
        }
        return [pass1, pass2];
    } else if (passwordLgth == "") {
        for (let i = 0; i < 15; i++) {
            let randomNumber = Math.floor(Math.random() * characters.length);
            pass1 = pass1 + characters[randomNumber];
            randomNumber = Math.floor(Math.random() * characters.length);
            pass2 = pass2 + characters[randomNumber];
        }
        return [pass1, pass2];
    } else if (passwordLgth.indexOf("")) {
        alert(" length must be a number");
    }
}

generateEl.addEventListener("click", function () {
    result = generatePassword();
    firstPasswordEl.textContent = result[0];
    secondPasswordEl.textContent = result[1];
});

firstPasswordEl.onclick = function () {
    document.execCommand("copy");
};
firstPasswordEl.addEventListener("copy", function (event) {
    event.preventDefault();
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", firstPasswordEl.textContent);
        console.log(event.clipboardData.getData("text"));
    }
});
secondPasswordEl.onclick = function () {
    document.execCommand("copy");
};
secondPasswordEl.addEventListener("copy", function (event) {
    event.preventDefault();
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", secondPasswordEl.textContent);
        console.log(event.clipboardData.getData("text"));
    }
});
