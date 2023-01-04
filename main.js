
// Documents
const nums = document.querySelectorAll(`[data-num]`);
const operations = document.querySelectorAll(`[data-operation]`);
const clearAll = document.querySelector(`.clear-all`);
const del = document.querySelector(`.del`);
const currentNums = document.querySelector(`.current`);
const previousNums = document.querySelector(`.previous`);
const dot = document.querySelector(`.dot`);
const equal = document.querySelector(`.equal`);

// Variables
let operation = '';
let beforeDot;
let afterDot;

currentNums.innerHTML = 0;

nums.forEach((num) => {
  num.addEventListener('click', () => {
    currentNums.innerHTML += num.innerHTML;

    beforeDot = parseFloat(currentNums.innerHTML.split('.')[0].split(',').join('')).toLocaleString('en', {maximumFractionDigits: 2});
    afterDot = currentNums.innerHTML.split('.')[1];

    if (currentNums.innerHTML.includes('.')) {
      currentNums.innerHTML = `${beforeDot}.${afterDot}`;
    }

    else if (!currentNums.innerHTML.includes('.')) {
      currentNums.innerHTML = beforeDot;  
    }
  })
})

clearAll.addEventListener('click', () => {
    currentNums.innerHTML = '0';
    previousNums.innerHTML = '';
})

del.addEventListener('click', () => {

    currentNums.innerHTML = currentNums.innerHTML.slice(0, -1);

    if (currentNums.innerHTML == '') {
      currentNums.innerHTML = 0;
    }

  if (!currentNums.innerHTML.includes('.')) {
    currentNums.innerHTML = parseFloat(currentNums.innerHTML.split(',').join('')).toLocaleString('en', {maximumFractionDigits: 2});
  }
})

operations.forEach((ope) => { 
  ope.addEventListener('click', () => {
    if (currentNums.innerHTML && previousNums.innerHTML == '') {
      previousNums.innerHTML = `${currentNums.innerHTML} ${ope.innerHTML}`;
      currentNums.innerHTML = '0';
    }

    else if (currentNums.innerHTML && previousNums.innerHTML) {
      operation = previousNums.innerHTML.slice(-1);
      parseCurrent = parseFloat(currentNums.innerHTML.split(',').join(''));
      paresPrevious = parseFloat(previousNums.innerHTML.slice(0, -2).split(',').join(''));

      (operation === '÷')? previousNums.innerHTML = `${(paresPrevious / parseCurrent).toLocaleString('en', {maximumFractionDigits: 2})} ${ope.innerHTML}`: false;
      (operation === '*')? previousNums.innerHTML = `${(paresPrevious * parseCurrent).toLocaleString('en', {maximumFractionDigits: 2})} ${ope.innerHTML}`: false;
      (operation === '+')? previousNums.innerHTML = `${(paresPrevious + parseCurrent).toLocaleString('en', {maximumFractionDigits: 2})} ${ope.innerHTML}`: false;
      (operation === '-')? previousNums.innerHTML = `${(paresPrevious - parseCurrent).toLocaleString('en', {maximumFractionDigits: 2})} ${ope.innerHTML}`: false;
      currentNums.innerHTML = '0';
    }
  })
})

dot.addEventListener('click', () => {
  if (!currentNums.innerHTML.includes(".")) {
    currentNums.innerHTML += dot.innerHTML;
  }

})

equal.addEventListener('click', () => {
  if (currentNums.innerHTML && previousNums.innerHTML) {
    operation = previousNums.innerHTML.slice(-1);
    parseCurrent = parseFloat(currentNums.innerHTML.split(',').join(''));
    paresPrevious = parseFloat(previousNums.innerHTML.slice(0, -2).split(',').join(''));

    (operation === '÷')? currentNums.innerHTML = `${(paresPrevious / parseCurrent).toLocaleString('en', {maximumFractionDigits: 2})}`: false;
    (operation === '*')? currentNums.innerHTML = `${(paresPrevious * parseCurrent).toLocaleString('en', {maximumFractionDigits: 2})}`: false;
    (operation === '+')? currentNums.innerHTML = `${(paresPrevious + parseCurrent).toLocaleString('en', {maximumFractionDigits: 2})}`: false;
    (operation === '-')? currentNums.innerHTML = `${(paresPrevious - parseCurrent).toLocaleString('en', {maximumFractionDigits: 2})}`: false;
    previousNums.innerHTML = '';  
  }
})