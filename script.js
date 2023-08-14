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
}
function mostrarlivro(){
    console.log(`resultado:${biblioteca[0].ano}`)
}