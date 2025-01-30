let start = null
let end = null
let pass = null

function calcular(){
    let start = Number(document.getElementById("inicio").value)
    let end = Number(document.getElementById("fim").value)
    let pass = Number(document.getElementById("passo").value)
    if (isNaN(start) || isNaN(end) || isNaN(pass)){
        alert("ERROR")
    }
    else{
        alert("DEU CERTO")
    }
}