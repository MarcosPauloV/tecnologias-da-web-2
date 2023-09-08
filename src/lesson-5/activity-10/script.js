function calcGraus (){
    let a = parseFloat(document.getElementById("a").value)
    document.getElementById("visor").textContent = "O valor em °F é: " + ((a * 9/5) + 32)
}