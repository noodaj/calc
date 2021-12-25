let reset = false;

const screen = document.getElementById('cur')
let button = document.querySelectorAll('.buttons')
button.forEach(btn => btn.addEventListener('click', () => display(btn.textContent)))

let sum = (a,b) => a + b;
let dif = (a,b) => a - b;
let product = (a,b) => a * b;
let div = (a,b) => a / b;

let operate = (operator, a , b) =>{
    a = Number(a)
    b = Number(b)
    switch(operator){
        case '+':
            sum(a,b)
            break
        case '-':
            dif(a,b)
        case '*':
            product(a,b)
        case '/':
            div(a,b)
    }
}

function resetScreen(){
    screen.textContent = ''
    reset = false;
}

function display(number){
    if(screen.textContent === '0'){
        resetScreen();
    }
    screen.textContent += number;
}
