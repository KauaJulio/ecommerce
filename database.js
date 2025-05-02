// Banco de dados simples em memória para usuários
let usuario = JSON.parse(localStorage.getItem('usuario')) || [];

// Função para salvar os usuários no localStorage
function salvarUsuario() {
    localStorage.setItem('usuario', JSON.stringify(usuario));
}

// Função para registrar um novo usuário
function registrarUsuario(userData) {
    // Verifica se o usuário já existe
    if (usuario.some(usuario => usuario.email === userData.email)) {
        return { seucesso: false, mensagem: 'Este email já está cadastrado' };
    }

    // Cria um novo objeto de usuário
    const novoUsuario = {
        id: Date.now().toString(),
        nome: userData.nome,
        sobrenome: userData.sobrenome,
        email: userData.email,
        senha: userData.senha,
        cpf: userData.cpf,
        endereco: {
            cep: userData.cep,
            numero: userData.numero,
            estado: userData.estado,
            cidade: userData.cidade,
            bairro: userData.bairro,
            rua: userData.rua
        },
        sexo: userData.sexo
    };

    // Adiciona o usuário ao banco de dados
    usuario.push(novoUsuario);
    salvarUsuario();

    return { sucesso: true, mensagem: 'Cadastro realizado com sucesso!' };
}

// Function to authenticate user
function loginUser(email, senha) {
    const usuario = usuario.find(u => u.email === email && u.senha === senha);
    
    if (usuario) {
        return { sucesso: true, usuario: { ...usuario, senha: undefined } };
    }
    
    return { sucesso: false, mensagem: 'Email ou senha incorretos' };
}

// Export functions
window.userDatabase = {
    registrarUsuario,
    loginUser
}; 