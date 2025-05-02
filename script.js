var contas = [usuario1, usuario2, usuario3, usuario4, usuario5];
var senhas = [usuario1.senha, usuario2.senha, usuario3.senha, usuario4.senha, usuario5.senha];

// Login
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('username').value;
        const senha = document.getElementById('senha').value;

        const result = window.userDatabase.loginUser(email, senha);
        
        if (result.success) {
            // Armazena a sessão do usuário
            sessionStorage.setItem('currentUser', JSON.stringify(result.user));
            // Redireciona para a página inicial ou dashboard
            window.location.href = 'index.html';
        } else {
            alert(result.message);
            // Verifica se existem usuários no banco de dados
           
}});
}

const usuarios = JSON.parse(localStorage.getItem('usuario')) || [];
if (usuarios.length === 0) {
    alert('Nenhum usuário cadastrado no sistema. Por favor, cadastre-se primeiro.');
}


// Cadastro
const signupForm = document.getElementById('signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const userData = {
            nome: document.getElementById('nome').value,
            sobrenome: document.getElementById('sobrenome').value,
            email: document.getElementById('email').value,
            senha: document.getElementById('senha').value,
            cpf: document.getElementById('cpf').value,
            cep: document.getElementById('cep').value,
            numero: document.getElementById('numero').value,
            estado: document.getElementById('estado').value,
            cidade: document.getElementById('cidade').value,
            bairro: document.getElementById('bairro').value,
            rua: document.getElementById('rua').value,
            sexo: document.querySelector('input[nome="sexo"]:checked')?.value
        };

        const result = window.userDatabase.registerUser(userData);
        
        if (result.success) {
            alert(result.message);
            window.location.href = 'login.html';
        } else {
            alert(result.message);
        }
    });
}

