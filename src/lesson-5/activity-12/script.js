function calc (){
    let a = parseInt(document.getElementById("a").value)

    document.getElementById("visor1").textContent = "O peso ideal para homens é: " + ((72.7*a) - 58)
    document.getElementById("visor2").textContent = "O peso ideal para mulheres é: " + ((62.1*a) - 44.7)
}