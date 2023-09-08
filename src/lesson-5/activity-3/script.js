function sumCalc (){
    let a = parseFloat(document.getElementById("a").value)
    let b = parseFloat(document.getElementById("b").value)
    
    document.getElementById("visor").textContent = "A soma dos valores inseridos foi: " + (a+b)
}