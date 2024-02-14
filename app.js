const display = document.getElementById("display")
const btn = document.querySelectorAll(".btn")

function appendToDispaly(input) {
    display.value += input;
}

function calculate() {
    try{
        display.value = eval(display.value);
    } catch(error){
        display.value = "error"
        disableAllbottons()
    }
    
}

function clearDisplay() {
    display.value = "";
    enableAllbottons()
}

function disableAllbottons() {
    btn.forEach(function(button){
        button.disabled = true
    }) 
}

function enableAllbottons() {
    btn.forEach(function(button){
        button.disabled = false
    }) 
}