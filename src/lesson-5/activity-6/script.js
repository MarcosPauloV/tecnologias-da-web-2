function raioCalc (){
    let a = parseFloat(document.getElementById("a").value)
    
    document.getElementById("visor").textContent = "O valor em centimetros é: " + (Math.PI * Math.pow(a,2))
}