// Girdi ve çıktı alanını seç
const input = document.getElementById("result");
// Temizleme butonu
const clearButton = document.getElementById("clearButton");
// Eşittir butonu
const equals = document.getElementById("equals");
// Bütün butonları tek tek seçmek terine tablo gövdesini seçtim
const tbody = document.getElementById("tbody");


// Event'leri takip et
eventListeners();

function eventListeners() {
    // Input alanını temizle
    clearButton.addEventListener("click", clear);
    // Hesap makinesinde basılan işlemleri yerine getir
    tbody.addEventListener("click", captureClick);
    // Eşittire basıldığında sonucu getir
    equals.addEventListener("click", calculate);
}

// input alanını sıfırla
function clear() {
    input.value = "";
}

// işlem yapılan butonu tanı ve buna göre işlem yap
function captureClick(e) {
    switch (e.target.value) {
        case "0":
            // input alanına basılan sayıyı gir
            input.value += "0";
            break;
        case "1":
            input.value += "1";
            break;
        case "2":
            input.value += "2";
            break;
        case "3":
            input.value += "3";
            break;
        case "4":
            input.value += "4";
            break;
        case "5":
            input.value += "5";
            break;
        case "6":
            input.value += "6";
            break;
        case "7":
            input.value += "7";
            break;
        case "8":
            input.value += "8";
            break;
        case "9":
            input.value += "9";
            break;
        case "+":
            input.value += "+";
            break;
        case "-":
            input.value += "-";
            break;
        case "*":
            input.value += "*";
            break;
        case "/":
            input.value += "/";
            break;
        case ".":
            input.value += ".";
            break;
    }
}

// Eşittire basıldığında input alanında olan işlemi gerçekleştir ve sonucu ekrana bas
function calculate() {

    let result = stringToCalculator(input.value)
    input.value = result;


}

// input alanında string olarak yer alan ifadeyi sayısala çevirip işlemi yap
function stringToCalculator(fn) {
    return new Function('return ' + fn)();
}