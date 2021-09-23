const initialPrice = document.querySelector("#initial-price")
const stocksQuantity = document.querySelector("#stocks-quantity")
const currentPrice = document.querySelector("#current-price")
const calculateBtn = document.querySelector("#calculate-btn")
const output = document.querySelector("#output")
const errorMessage = document.querySelector("#error-message")

function showMessage(message){
    output.innerText = message
}

function showError(message){
    errorMessage.innerText = message
}

// processing
function calculateProfitAndLoss(initial, quantity, current){
    if(initial > current){
        var loss = (initial - current) * quantity
        var lossPercentage = (loss / initial) * 100

        showMessage(`Oops! there is a loss of ${loss} and the percentage is ${lossPercentage}%`) //output
    } else if (current > initial){
        var profit = (current - initial) * quantity
        var profitPercentage = (profit / initial) * 100

        showMessage(`Dayum! there is a profit of  ${profit} and the percentage is ${profitPercentage}%`) //output
    } else{
        showMessage("No pain No gain. No gain No pain.") //output
    }
}

function errorHandling(valueOne, valueTwo, valueThree){

    if(valueOne === "" || valueTwo === "" || valueThree === ""){
        return showError("Please enter the values.")
    }
    if(valueOne%1 !== 0 || valueTwo%1 !== 0 || valueThree%1 !== 0){
        return showError("Please enter the values in numbers.")
    }
    if(valueOne <= 0 || valueTwo <= 0 || valueThree <= 0){
        return showError("Please enter the values greater than 0")
    }
    return true
}

function onclickHandler(){
    // input
    var initialpp = initialPrice.value
    var quantity = stocksQuantity.value
    var currentpp = currentPrice.value

    
    if(errorHandling(initialpp, quantity, currentpp)){
        calculateProfitAndLoss(Number(initialpp), Number(quantity), Number(currentpp))
    }
}

calculateBtn.addEventListener("click", onclickHandler)