const main = document.querySelector('.main');
const close = document.querySelector('.close');
const open = document.querySelector('.open');







open.addEventListener('click',show);
close.addEventListener('click',off);


function show()
{
    main.style.display= 'flex';
    main.style.top = '0';
}
function off(){
    main.style.top='-100%'
}