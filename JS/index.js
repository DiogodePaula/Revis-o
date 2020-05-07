document.getElementById("btnResultado").onclick = adicionar;

const lista = [];

function adicionar(){
    const pessoa = {
        nome: document.getElementById("name").value,
        altura: document.getElementById("altu").value,
        sexo: document.getElementById("gen").value,
    }

    if(document.getElementById("name").value = ""){
        alert("Preencha todos os campos por favor!").break;
    } else if(document.getElementById("altu").value = ""){
        alert("Preencha todos os campos por favor!").break;
    } else if(document.getElementById("gen").value = ""){
        alert("Preencha o campo gênero por favor!").break;
    }

    lista.push(pessoa);

}