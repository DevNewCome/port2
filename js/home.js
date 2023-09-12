const button = document.querySelector('.comun')
const botao = document.querySelector('.banner-button')
const root = document.querySelector(':root');
const body = document.querySelector('body')
const links = document.querySelectorAll('.links')
const lis = document.querySelectorAll('li');
const btnPrev = document.querySelectorAll('.btn-preview')
const cur = document.querySelector('.cur')



links.forEach(link=>{
    link.addEventListener('click', (e) => {
         e.stopPropagation();
    })
})


botao.addEventListener('click',(e)=>{
    e.preventDefault();
    let cores = ['blue', 'red', 'yellow', 'orange'];
    
    let nextColor = Math.floor(Math.random() * cores.length);
    let color = cores[nextColor];
    button.style.color = color;
})



document.getElementById("theme").addEventListener("click", function () {

        if(body.classList.contains('light')){
           body.classList.remove('light')
           body.classList.add('dark')
        }else{
            body.classList.remove('dark');
            body.classList.add('light');
        }
  })





