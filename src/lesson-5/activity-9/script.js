function calcGraus (){
    let a = parseFloat(document.getElementById("a").value)
    document.getElementById("visor").textContent = "O valor em °C é: " + ((5 / 9) * (a - 32))
}