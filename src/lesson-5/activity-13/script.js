function calc (){
    let a = parseFloat(document.getElementById("a").value)
    let b = parseFloat(document.getElementById("b").value)

    let salary = a * b;
    let inss =  salary * 0.08;
    let ir = salary * 0.11;
    let sindicated = salary * 0.05;
    let salarioLiquido = (salary - inss - ir - sindicated);

    document.getElementById("visor1").textContent = "+ Salário Bruto : R$ " + salary
    document.getElementById("visor2").textContent = "- IR (11%) : R$ " + ir
    document.getElementById("visor3").textContent = "- INSS (8%) : R$ "+ inss
    document.getElementById("visor4").textContent = "- Sindicato ( 5%) : R$ " + sindicated
    document.getElementById("visor5").textContent = "= Salário Liquido : R$ " + salarioLiquido
}