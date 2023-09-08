function calSalary (){
    let a = parseFloat(document.getElementById("a").value)
    let b = parseFloat(document.getElementById("b").value)

    document.getElementById("visor").textContent = "O valor do salario é: " + (a*b)
}