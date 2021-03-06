const counter = document.querySelector('#counter');
const btnDecrease = document.querySelector('#btnDecrease');
const btnReset = document.querySelector('#btnReset');
const btnIncrease = document.querySelector('#btnIncrease');
let counterNumber = 0;

btnIncrease.addEventListener('click', ()=>{
  counterNumber += 1;
  counter.textContent = counterNumber;
});

btnDecrease.addEventListener('click',()=>{
  counterNumber -= 1;
  counter.textContent = counterNumber;
});

btnReset.addEventListener('click', ()=>{
  counterNumber = 0;
  counter.textContent = counterNumber;
});