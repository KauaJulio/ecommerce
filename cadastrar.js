// criar um array de usuários
let usuarios = []
if(salvaNome.trim().length<3 || salvaSenha.trim().length<3){
    document.querySelector('#btn').disabled = true
}else{
    document.querySelector('#btn').disabled = false
}
// verifico se existe o local storage
if(localStorage.getItem('usuarios')){
    // sobrescrevo o array de objetos, caso haja algum no local storage (antes, converto para objeto novamente)
    usuarios = JSON.parse(localStorage.getItem('usuarios'))
}
// criar uma função para cadastrar
function cadastrar(){
    // capturar o valor do input do nome e senha
    let salvaNome = document.getElementById('nome').value
    let salvaSenha = document.getElementById('senha').value

    // criar um objeto com o(s) valores do(s) input(s)
    let usuario = {
        nome: salvaNome.toLowerCase(),
        senha: salvaSenha
    }
    let achou = usuarios.filter((elemento)=>{
        return elemento.nome === salvaNome
    })
    console.log(achou)
    if(achou.length>0){
        alert("Usuário já existente")
    }else{
        // inserir o novo usuário como último elemento do array usuários
        alert("Usuário cadastrado com sucesso")
        usuarios.push(usuario)
        // converte o array de objetos para stringify e adiciona no local storage
        localStorage.setItem('usuarios',JSON.stringify(usuarios))
        location.href = './login/login.html'
    }
    
}

function caracteres(){
    // pegar os valores do input nome e senha
    let salvaNome = document.getElementById('nome').value
    let salvaSenha = document.getElementById('senha').value
    // avisar que ele precisa escrever mais caracteres
    if(salvaNome.trim().length>2){
        document.getElementsByClassName('aviso')[0].innerHTML = ""
    }else{
        document.getElementsByClassName('aviso')[0].innerHTML = "mínimo de 3 caracteres"
    }
    if(salvaSenha.trim().length>2){
        document.getElementsByClassName('aviso')[1].innerHTML = ""
    }else{
        document.getElementsByClassName('aviso')[1].innerHTML = "mínimo de 3 caracteres"
    }
    // desabilitar ou habilitar o botão a partir dos caracteres da senha e do nome
    if(salvaNome.trim().length<3 || salvaSenha.trim().length<3){
        document.querySelector('#btn').disabled = true
    }else{
        document.querySelector('#btn').disabled = false
    }
}