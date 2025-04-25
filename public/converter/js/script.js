function convert() {
    let phpValue = parseFloat(document.getElementById("display1").value);

    if (isNaN(phpValue) || phpValue <= 0) {
        alert("Please enter a valid PHP amount.");
        return;
    }

    const rates = {
        xrp: 0.0060,
        usdt: 0.017,
        doge: 0.05427,
        trx: 0.0722
    };

    let xrpValue = phpValue * rates.xrp;
    let usdtValue = phpValue * rates.usdt;
    let dogeValue = phpValue * rates.doge;
    let trxValue = phpValue * rates.trx;

    document.getElementById("display2").value = xrpValue.toFixed(4);
    document.getElementById("display3").value = usdtValue.toFixed(4);
    document.getElementById("display4").value = dogeValue.toFixed(4);
    document.getElementById("display5").value = trxValue.toFixed(4);
}

document.getElementById("convertButton").addEventListener("click", convert);
