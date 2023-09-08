function mToCm (){
    let a = parseFloat(document.getElementById("a").value)
    
    document.getElementById("visor").textContent = "O valor em centimetros é: " + ((a*100))
}