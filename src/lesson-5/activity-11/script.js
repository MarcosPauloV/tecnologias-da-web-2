function calc (){
    let a = parseInt(document.getElementById("a").value)
    let b = parseInt(document.getElementById("b").value)
    let c = parseFloat(document.getElementById("c").value)

    let res1 = Math.pow(a, 2) * (b/2)
    let res2 = (a * 3) + c
    let res3 = Math.pow(c, 3)

    document.getElementById("visor1").textContent = "O produto do dobro do primeiro com metade do segundo é: " + res1
    document.getElementById("visor2").textContent = "A soma do triplo do primeiro com o terceiro é: " + res2
    document.getElementById("visor3").textContent = "O terceiro elevado ao cubo é: " + res3
}