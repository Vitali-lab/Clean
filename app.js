const buttonOrder = document.querySelector('.button-open-contsacts')


buttonOrder.addEventListener('click', ()=> {
    document.querySelector('.order-contacts').classList.toggle('order-contacts-active')

})

const formBlank = document.querySelector('.form')
const buttonOpenForm = document.querySelector('.button-open-form')
const buttonCloseForm = document.querySelector('.fa-circle-xmark')

buttonOpenForm.addEventListener('click', ()=> {
    formBlank.classList.add('active-form')
})

buttonCloseForm.addEventListener('click', ()=> {
    formBlank.classList.remove('active-form')
})


