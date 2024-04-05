const exchangeRate = 1.33;   //this is the exchange rate between USD and CAD dollor.

function convertCurrency() {
    //tsking the user input in usd
    let usdAmount = document.getElementById('usdAmount').value;
    //Validating the input as asked by question.
    if (!usdAmount || isNaN(usdAmount) || usdAmount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }
   
    document.getElementById('cadAmount').value = (usdAmount * exchangeRate).toFixed(3);
}
function swapCurrencies() {
    
    let usdFlag = document.querySelector('.usd-input-div .flag');
    let cadFlag = document.querySelector('.usd-input-div + .interchange-icon + .usd-input-div .flag');

   //temporarily storing the flag content
    let tempFlag = usdFlag.textContent;
    usdFlag.textContent = cadFlag.textContent;
    cadFlag.textContent = tempFlag;

 
    let usdAmount = document.getElementById('usdAmount');
    let cadAmount = document.getElementById('cadAmount');
    let tempAmount = usdAmount.value;
    //swapiing the value between CAD and USD
    usdAmount.value = cadAmount.value;
    cadAmount.value = tempAmount;
}
 