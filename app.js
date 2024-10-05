const scrollTop = document.querySelectorAll('.scroll');
scrollTop.forEach(toTop => {
    toTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
        })
    })
});


const removeActiveItem = function() {
    menus.forEach(menu => {
        menu.style.color = 'rgb(115, 117, 125)';
    })
}

const menus = document.querySelectorAll('.icons');
menus.forEach(menu => {
    menu.addEventListener('click', function() {
        removeActiveItem();
        menu.style.color = 'blue';
    })
});

const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');
const forth = document.querySelector('.forth');
// const earn = document.querySelector('.earn');
// const earn = document.querySelector('.earn');
const menu = document.querySelector('.menu');
const switch1 = document.querySelector('.switch');
const earn = document.querySelector('.earn');
const more = document.querySelector('.more');
const home = document.querySelector('.home');


home.addEventListener('click', function(){    
    second.style.display = 'none';
    first.style.display = 'block';
    third.style.display = 'none';
    forth.style.display = 'none';
    products.style.display = 'none';
    second.style.display = 'none';

})

// earns
earn.addEventListener('click', function(){    
    second.style.display = 'block';
    first.style.display = 'none';
    third.style.display = 'none';
    forth.style.display = 'none';
    products.style.display = 'block';
    second.style.display = 'none';

})
// this is under earns ( products)

const products = document.querySelector('.product');
const importaTant = document.querySelector('.second-top');
const pro = document.querySelectorAll('.promax');
const return1 = document.querySelectorAll('.return');
pro.forEach(promax => {
    promax.addEventListener('click', function(){
        products.style.display = 'block';
        second.style.display = 'none';
        first.style.display = 'none';
        third.style.display = 'none';
        forth.style.display = 'none';
        
    })
});

return1.forEach(retur => {
    retur.addEventListener('click', function(){
        products.style.display = 'none';
        second.style.display = 'block';
        first.style.display = 'none';
        third.style.display = 'none';
        forth.style.display = 'none';
    })
});




// home
home.addEventListener('click', function(){
    first.style.display = 'block';
    third.style.display = 'none';
    forth.style.display = 'none';
    second.style.display = 'none';
    products.style.display = 'none';
    second.style.display = 'none';

})

// switch

switch1.addEventListener('click', function(){
    first.style.display = 'none';
    third.style.display = 'block';
    forth.style.display = 'none';
    second.style.display = 'none';
    products.style.display = 'none';
    second.style.display = 'none';

})

// more
more.addEventListener('click', function(){
    first.style.display = 'none';
    third.style.display = 'none';
    forth.style.display = 'block';
    second.style.display = 'none';
    products.style.display = 'none';
    second.style.display = 'none';

})

// for the portfolio

const removePort = function() {
    pot.forEach(port => {
        port.style.background = '#F6F7F8';
        port.style.color = '#c1c2c7';
    })
}

const pot = document.querySelectorAll('.potcon');
pot.forEach(port => {
    port.addEventListener('click', function(){
        removePort();
        port.style.background = '#fff';
        port.style.color = '#5A41F5';
        port.style.fontWeight = '600';
    })
});


// for the nav text changes
// const removeTog = function() {
//     togs.forEach(tog => {
//         tog.classList.remove('sec-active');
        
//     })
// }

// const togs = document.querySelectorAll('.toggle');
// togs.forEach(tog => {
//     tog.addEventListener('click', function(){
//         removeTog();
//         const togger = tog.classList.add('sec-active');
//         togger();
//     })     
//  });

