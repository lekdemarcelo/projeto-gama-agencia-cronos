const closeModal = () => modalContainer.classList.add('invisible');
const cleanForm = () => document.getElementById('form-modal').reset();
const btnCancel = document.getElementById('btn-cancel');
const btnSave = document.getElementById('btn-save');
const modalContainer = document.getElementById('modal-container');
const btnSaveChanges = document.getElementById('btn-save-changes');

document.getElementById('btn-add').addEventListener('click', (e) => {
  e.preventDefault();
  modalContainer.classList.remove('invisible');
  btnSaveChanges.classList.add('invisible');
  btnSave.classList.remove('invisible');
  document.getElementById('btns-modal').insertBefore(btnCancel, btnSaveChanges);
  document.getElementById('btns-modal').insertBefore(btnSave, btnCancel);
  cleanForm();
})

btnCancel.addEventListener('click', (e) => {
  e.preventDefault();
  closeModal();
  cleanForm();
})

btnSaveChanges.addEventListener('click', (e) => {
  e.preventDefault();
  confirmarEditar();
})

btnSave.addEventListener('click', (e) => {
  e.preventDefault();
  adicionarServico();
})

var dadoServico = [
    {
        'id': 'id',
        'servico': 'nome',
        'arquivo': 'arquivo',
        'descricao': 'descricao'
    }
];

function adicionarServico() {
  let id = document.getElementById('add-course-id').value;
  let nome = document.getElementById('add-course-name').value;
  let arquivo = document.getElementById('add-course-img').value;
  let descricao = document.getElementById('add-course-descp').value;

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
    <td class="btn-action"><button class="btn btn-secondary btn-edit" onclick="editar(${id})">editar</button> <button class="btn btn-danger btn-delete" onclick="excluir(${id})">excluir</button></td>
    `
    newCourse.setAttribute('id', `${id}`);
    document.getElementById('container-body').appendChild(newCourse);
  } else {
    window.alert('Estão faltando dados para inserir o serviço novo!')
  }
  closeModal();
  cleanForm();
}

function editar(id) {
  modalContainer.classList.remove('invisible');
  btnSaveChanges.classList.remove('invisible');
  document.getElementById('btns-modal').insertBefore(btnSaveChanges, btnSave);
  btnSave.classList.add('invisible')
  document.getElementById('btns-modal').insertBefore(btnCancel, btnSave);

  for(let i = 0; i < dadoServico.length; i++) {        
    if (dadoServico[i]['id'] == id){
        document.getElementById('add-course-id').value = dadoServico[i]['id'];
        document.getElementById('add-course-name').value = dadoServico[i]['servico'];
        document.getElementById('add-course-img').value = dadoServico[i]['arquivo'];
        document.getElementById('add-course-descp').value = dadoServico[i]['descricao'];
    }    
} 
}


function confirmarEditar() {
  let atualizaCurso = document.getElementById('add-course-id').value

  excluir(atualizaCurso);
  adicionarServico();
  closeModal();
}

function excluir(id) {
  document.getElementById(id).remove();
    for(let i = 0; i < dadoServico.length; i++) {        
        if (dadoServico[i]['id'] == id){
            dadoServico.splice(i, 1);
        }        
    }
}
