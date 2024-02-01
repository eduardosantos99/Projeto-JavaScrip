const covertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectOne = document.querySelector(".currency-select-one")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")


    console.log(currencySelect.value)
    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 2.4
    const bitcoinToday = 211



    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)

    }
        
        if (currencySelect.value == "bitcoin") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue / bitcoinToday)
            
        }
    

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)



}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/img/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/img/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/img/libra.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/img/bitcoin.png"
    }

    convertValues()

}

function changeTreco() {
    const currencyNameOne = document.getElementById("currency-name-one")
    const currencyImageOne = document.querySelector(".currency-img-one")
    
    if (currencySelectOne.value == "dolar") {
        currencyNameOne.innerHTML = "Dólar americano"
        currencyImageOne.src = "./assets/img/dolar.png"
}

if (currencySelectOne.value == "euro") {
    currencyNameOne.innerHTML = "Euro"
    currencyImageOne.src = "./assets/img/euro.png"
}

if (currencySelectOne.value == "libra") {
    currencyNameOne.innerHTML = "Libra"
    currencyImageOne.src = "./assets/img/libra.png"
}

if (currencySelectOne.value == "bitcoin") {
    currencyNameOne.innerHTML = "Bitcoin"
    currencyImageOne.src = "./assets/img/bitcoin.png"
}

if (currencySelectOne.value == "real") {
    currencyNameOne.innerHTML = "Real Brasileiro"
    currencyImageOne.src = "./assets/img/real.png"
}

}

currencySelect.addEventListener("change", changeCurrency)
covertButton.addEventListener("click", convertValues)
currencySelectOne.addEventListener("change", changeTreco)