

let btn_Val = document.querySelectorAll('.get');
let inp = document.querySelector('#inpget');
let result = document.querySelector('#result');
let clear = document.querySelector('#clear');
let back = document.querySelector('#back');


Array.from(btn_Val).forEach((button)=>{
    button.addEventListener('click',(e)=>{
    inp.value = inp.value.concat(e.target.value); 

})

})

result.addEventListener('click',()=>{
    inp.value = eval(inp.value);
})

clear.addEventListener('click',()=>{
    inp.value = inp.value = "";
})

back.addEventListener('click',()=>{
    inp.value = inp.value.slice(0,-1);
})

