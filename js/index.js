//Função que ativa ao enviar o formulário adicionando um serviço novo
function adicionarServico() {
  let nome = document.getElementById('servico').value;
  let arquivo = document.getElementById('arquivo').value;
  let descricao = document.getElementById('descricao').value;

  // Condicional para impedir de criar um serviço em branco
  if (nome.length > 0 && descricao.length > 2 && arquivo.length > 5) {
    
    //Criação do serviço na tabela
    const newCourse = document.createElement('tr')
    newCourse.innerHTML = `
    <td>${nome}</td>
    <td> <img class="img-course img-fluid table-img" src="${arquivo}" alt=""></td>
    <td class="descrip-course">${descricao}</td>
    <td class="btn-action"><button class="btn btn-secondary btn-edit">EDIT</button> <button class="btn btn-danger btn-delete" onclick="excluir(${nome})">DELETE</button></td>
    `
    newCourse.setAttribute('id', `${nome}`);
    document.getElementById('container-body').appendChild(newCourse);

    //Nesta etapa forneço um valor em branco para apagar todos os campos ao enviar
    document.getElementById('modalform').reset()
  } else {
    window.alert('Estão faltando dados para inserir o serviço novo!')
  }
}

const excluir = (id) => { 
  document.getElementById('container-body').removeChild(id);
}
