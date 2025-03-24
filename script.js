const activePage =window.location.pathname;
const navLinks= document.querySelectorAll('nav a').forEach(link =>{
    if(link.href.includes(`${activePage}`))
        link.classList.add('active');
})



// let iconCart =document.querySelector('.cart-icon');
// let closeCart =document.querySelector('.close');

// let body = document.querySelector('body');

// iconCart.addEventListener('click', () =>{
//     body.classList.toggle('show-cart');
// })






