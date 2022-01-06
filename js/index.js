var dadoServico = [
    {
        'id': 'id',
        'servico': 'nome',
        'arquivo': 'arquivo',
        'descricao': 'descricao'
    }
];

function adicionarServico() {
  let id = document.getElementById('id').value;
  let nome = document.getElementById('servico').value;
  let arquivo = document.getElementById('arquivo').value;
  let descricao = document.getElementById('descricao').value;

  if (nome.length > 0 && descricao.length > 2 && arquivo.length > 5) {
    
    dadoServico.push({
      'id': id,
      'servico': nome,
      'arquivo': arquivo,
      'descricao': descricao
    })

    const newCourse = document.createElement('tr')
    newCourse.innerHTML = `
    <td>${nome}</td>
    <td> <img class="img-course img-fluid table-img" src="${arquivo}" alt=""></td>
    <td class="descrip-course">${descricao}</td>
    <td class="btn-action"><button class="btn btn-secondary btn-edit" data-toggle="modal" data-target="#exampleModalCenter" onclick="editar(${id})">EDIT</button> <button class="btn btn-danger btn-delete" onclick="excluir(${id})">DELETE</button></td>
    `
    newCourse.setAttribute('id', `${id}`);
    document.getElementById('container-body').appendChild(newCourse);
    document.getElementById('modalForm').reset()
  } else {
    window.alert('Estão faltando dados para inserir o serviço novo!')
  }
}

function editar(id) {
  let btnAdd = document.getElementById('envio');
  let btnEditar = document.getElementById('editar');

  btnAdd.classList.add('invisible');
  btnEditar.classList.remove('invisible')

  for(let i = 0; i < dadoServico.length; i++) {        
    if (dadoServico[i]['id'] == id){
        document.getElementById('id').value = dadoServico[i]['id'];
        document.getElementById('servico').value = dadoServico[i]['servico'];
        document.getElementById('arquivo').value = dadoServico[i]['arquivo'];
        document.getElementById('descricao').value = dadoServico[i]['descricao'];
        return
    }    
} 
}


function confirmarEditar() {
  let btnAdd = document.getElementById('envio');
  let btnEditar = document.getElementById('editar');
  let atualizaCurso = document.getElementById('id').value

  btnAdd.classList.remove('invisible');
  btnEditar.classList.add('invisible');

  excluir(atualizaCurso);
  adicionarServico();
}

function excluir(id) {
  document.getElementById(id).remove();
    for(let i = 0; i < dadoServico.length; i++) {        
        if (dadoServico[i]['id'] == id){
            dadoServico.splice(i, 1);
        }        
    }
}
