const btnAdd = document.querySelector('.btn-add');
const abrirModal = document.querySelector('.fundo-modal');
let btnFecharModal = document.querySelector('.btn-cancel');
let btnSalvar = document.querySelector('.btn-save');

btnAdd.addEventListener('click', (e) => {
    e.preventDefault();
    abrirModal.classList.remove('invisible')
})

function fecharModal() {
    btnFecharModal.addEventListener('click', (e) => {
        e.preventDefault();
        abrirModal.classList.add('invisible');
        limparInputsCriacao();
    })
};

fecharModal();

const limparInputsCriacao = () => {
    document.querySelector('.form-modal').reset();
}