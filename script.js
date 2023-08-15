let biblioteca = [];
function cadastro(nome, autor, ano) {
    var livro = {
        titulo: nome,
        autor: autor,
        ano: ano
    };
    biblioteca.push(livro)
}
function adicionar() {
    let nome = document.getElementById("nomelivro").value;
    let autor = document.getElementById("autorlivro").value;
    let ano = document.getElementById("anolivro").value;
    cadastro(nome, autor, ano);
    let resultado = document.getElementById('aparecer')
    resultado.textContent = "livro registrado";
}
function mostrarlivro() {
    for (let livro of biblioteca)
    console.log(livro);
   let mostre= [
    {titulo: "livro 1 ", autor:'autor1', ano:'ano1'}
   ]

}

function apagar(){
    biblioteca.length = 0;
}
