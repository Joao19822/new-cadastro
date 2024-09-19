//novo usuario

//representar o botão no js
var btn_registrar = document.getElementById('btn_registrar');
var login = document.getElementById('btn_login');

//clicar no botão registrar
btn_registrar.addEventListener('click', (e) => {
    e.preventDefault();

    //apresentar campos confime sua senha
    document.getElementById('area_confirma_senha').classList.remove('d-none')

    //mudar o texto do botão para cadastrar
    document.getElementById('btn_registrar').classList.add('d-none')
    document.getElementById('btn_cadastrar').classList.remove('d-none')
})

//lista_usuario
let lista_usuario = [];
let lista_logados = [];

var btn_cadastrar = document.getElementById('btn_cadastrar')

btn_cadastrar.addEventListener('click', e => {
    e.preventDefault();

    if (document.getElementById('nome_usuario').value == "") {
        document.getElementById('nome_usuario').classList.add('border')
        document.getElementById('nome_usuario').classList.add('border-danger')
        alert('preencha o nome')
    } else {
        //verificar se a senha e confirma senhao sao iguais
        if (document.getElementById('senha_usuario').value != document.getElementById
            ('confirma_senha').value) {
            alert('ops, as senhas não batem')
        } else {
            //cadastrar ué
            lista_usuario.push({
                nome: document.getElementById('nome_usuario').value,
                senha: document.getElementById('senha_usuario').value
            })
            localStorage.setItem('lista_usuario', JSON.stringify(lista_usuario))
            recuperar_usuario()
        }
    }

})


function recuperar_usuario() {
    lista_usuario = []
    let conteudo_lista = JSON.parse(localStorage.getItem('lista_usuario'))
    conteudo_lista.forEach(item => {
        lista_usuario.push({
            nome: item.nome,
            senha: item.senha
        })
    });
    recuperar_usuario()
}

function recuperar_logados() {
    lista_logados = []
    let conteudo_listado = JSON.parse(localStorage.getItem('lista_logados'))
    conteudo_listado.forEach(item => {
        lista_logados.push({
            nome: item.nome,
            senha: item.senha
        })
    });
}

login.addEventListener('click', e => {
    e.preventDefault();

    document.getElementById('area_confirma_senha').classList.add('d-none')

    if (document.getElementById('nome_usuario').value, document.getElementById('senha_usuario').value == "") {
        alert('preencha algo ae');
    } else {
        lista_logados.push({
            nome: document.getElementById('nome_usuario').value,
            senha: document.getElementById('senha_usuario').value
        })
        localStorage.setItem('lista_logados', JSON.stringify(lista_logados))
            recuperar_logados()
    }
})