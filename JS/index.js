document.getElementById("btnAdicionar").onclick = adicionar;
document.getElementById("btnContar").onclick = quantidadeSexo;
document.getElementById("btnPessoaMaisAlta").onclick = compararAltura;

const lista = [];
const homens = [];
const mulheres = [];

function adicionar(){

    const pessoa = {
        nome: document.getElementById("name").value,
        altura: parseFloat(document.getElementById("altu").value),
        sexo: document.getElementById("gen").value,
    }

    if(!pessoa.nome || !pessoa.sexo || !pessoa.altura){
        alert("Preencha todos os campos!");
    }
    console.log(lista);
    console.log(homens);
    console.log(mulheres);
    lista.push(pessoa);
    
}        
 
function quantidadeSexo(){ 
  
    for(let pessoa of lista){ 
        if(pessoa.sexo === "M"){
            homens.push(pessoa);
        } else {
            mulheres.push(pessoa); 
        } 
    } 
    document.getElementById("lblMasculino").innerHTML = `Existem ${homens.lenght} 
    homens nesta lista.`;
    document.getElementById("lblMasculino").innerHTML = `Existem ${mulheres.lenght} 
    mulheres nesta lista.`;
}

function compararAltura(){
    let homemMaisAlto;
    let mulherMaisAlta;

    for(let i = 1; i < homens.lenght; i++){
        if(homens[i].altura > homens[i+1].altura){
            homemMaisAlto = homens[i];
        }
    }

    for(let i = 1; i< mulheres.lenght; i++){
        if(mulheres[i].altura > mulheres [i-1].altura){
            mulherMaisAlta = mulher[i];
        }
    }

    document.getElementById("lblHomemMaisAlto").innerHTML = `${homemMaisAlto.nome} é mais alto.`;
    document,getElementById("lblMulherMaisAlta").innerHTML = `${mulherMaisAlta.nome} é a mais alta`;
}