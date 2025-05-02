// Função para carregar os usuários na tabela
function carregarUsuarios() {
    const usuarios = JSON.parse(localStorage.getItem('usuario')) || [];
    const tbody = document.querySelector('#users-table tbody');
    
    // Limpa a tabela
    tbody.innerHTML = '';
    
    if (usuarios.length === 0) {
        const tr = document.createElement('tr');
        tr.innerHTML = '<td colspan="6" class="no-data">Nenhum usuário cadastrado</td>';
        tbody.appendChild(tr);
        return;
    }
    
    // Adiciona cada usuário à tabela
    usuarios.forEach(usuario => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${usuario.nome}</td>
            <td>${usuario.sobrenome}</td>
            <td>${usuario.email}</td>
            <td>${usuario.cpf}</td>
            <td>${usuario.sexo || '-'}</td>
            <td>${usuario.endereco.cidade}</td>
        `;
        tbody.appendChild(tr);
    });
}

// Carrega os usuários quando a página for carregada
document.addEventListener('DOMContentLoaded', carregarUsuarios); 