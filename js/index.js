const btnAdd = document.querySelector('.btn-add');
const abrirModal = document.querySelector('.fundo-modal');
const btnFecharModal = document.querySelector('.btn-cancel');
const btnSalvar = document.querySelector('.btn-save');

btnAdd.addEventListener('click', (e) => {
    e.preventDefault();
    abrirModal.classList.remove('invisible')
})

btnFecharModal.addEventListener('click', (e) => {
    e.preventDefault();
    abrirModal.classList.add('invisible');
    limparInputsCriacao();
    })

const limparInputsCriacao = () => document.querySelector('.form-modal').reset();    