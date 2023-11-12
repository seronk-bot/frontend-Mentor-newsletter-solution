const form = document.querySelector('form');
form.addEventListener('submit', e =>{
    e.preventDefault();
    const container = document.querySelector('.container');
    const container2 = document.querySelector('.container2');
    
    container.classList.add('hide');
    container2.classList.remove('hide');
    
})
const dismissBtn = document.querySelector('#dismissBtn');
dismissBtn.addEventListener('click', e =>{
    e.preventDefault();
    const container = document.querySelector('.container');
    const container2 = document.querySelector('.container2');
    
    container2.classList.add('hide');
    container.classList.remove('hide');
    
})