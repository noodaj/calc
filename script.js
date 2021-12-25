let a = ''
let b = ''
let curOperator = null

const screen = document.getElementById('cur')
const last = document.getElementById('last')
const getOp = document.getElementById('operator')
const equal = document.getElementById('equals')
const clear = document.querySelector('.clear')
const del = document.querySelector('.delete')

let button = document.querySelectorAll('.buttons')
button.forEach(btn => btn.addEventListener('click', () => display(btn.textContent)))

let operators = document.querySelectorAll('.buttonsOp')
operators.forEach(operator => operator.addEventListener('click', () => operation(operator.textContent)))

equal.addEventListener('click', equals)
clear.addEventListener('click', clearScreen)
del.addEventListener('click', deleteNum)

let sum = (a,b) => a + b
let dif = (a,b) => a - b
let product = (a,b) => a * b
let div = (a,b) => a / b

let operate = (operator, a , b) =>{
    a = Number(a)
    b = Number(b)
    switch(operator){
        case '+':
            return sum(a,b)
        case '-':
            return dif(a,b)
        case '*':
            return product(a,b)
        case '/':
            if(b === 0)
                return null
            else 
                return div(a,b)
    }
}

function operation(operator){
    if(curOperator !== null){
        equals()
    }
    a = screen.textContent
    curOperator = operator
    last.textContent = `${a} ${curOperator}`
    resetScreen()
}

function equals(){
    if(curOperator === null){
        return
    }

    b = screen.textContent
    if(curOperator === '/' && b === '0'){
        alert("Cannot divide by 0")
        return
    }

    last.textContent = `${a} ${curOperator} ${b} = `
    screen.textContent = operate(curOperator, a, b)
    curOperator = null
}

function resetScreen(){
    screen.textContent = ''
}

function display(number){
    if(screen.textContent === '0'){
        resetScreen()
    }
    screen.textContent += number;
}

function clearScreen(){
    last.textContent = ''
    screen.textContent = '0'
    a = ''
    b = ''
    curOperator = null
}

function deleteNum(){
    let str = screen.textContent
    let newStr = str.slice(0,-1)
    screen.textContent = newStr
}