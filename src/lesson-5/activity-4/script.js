function avgCalc (){
    let a = parseFloat(document.getElementById("a").value)
    let b = parseFloat(document.getElementById("b").value)
    let c = parseFloat(document.getElementById("c").value)
    let d = parseFloat(document.getElementById("d").value)
    
    document.getElementById("visor").textContent = "A media dos valores inseridos foi: " + ((a+b+c+d)/4)
}