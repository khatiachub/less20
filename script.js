let wraper=document.querySelector('.wraperdiv');
let burger=document.querySelector('.burgerdiv');
let nav=document.getElementById('navigation')
let burgerdiv=document.querySelectorAll('.burger');
burger.addEventListener('click',function(){
    nav.classList.toggle('block');
    burgerbar();
})
function burgerbar(){
    for(var i=0; i<burgerdiv.length; i++){
        burgerdiv[0].classList.toggle('div1')
        burgerdiv[1].classList.toggle('none')
        burgerdiv[2].classList.toggle('div3')
    }
}

let accordion=document.querySelectorAll('.accordion');
for(var i=0; i<accordion.length; i++){
    accordion[i].addEventListener('click',function(){
        this.classList.toggle('active')
    })
}

