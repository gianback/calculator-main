//referencias Html a cambiar de theme
const d = document;
const body  = d.querySelector('.body');
const calcHeader = d.querySelector('.calc-header');
const ballContainer = d.querySelector('.ball-container');
const ball = d.querySelector('.ball');
const numbInput = d.querySelector('.numb-input');
const table = d.querySelector('.table');
const keysOp = d.querySelectorAll('.key-op');
const btnDelete = d.getElementById('del-btn');
const btnReset = d.getElementById('reset-btn');
const btnEquals = d.getElementById('equals-btn');
export const setTheme1 = () => {
    body.classList.replace('body-theme-3','body-theme-1');
    calcHeader.classList.replace('calc-header-theme-3','calc-header-theme-1');
    ballContainer.classList.replace('ball-cont-theme-3','ball-cont-theme-1');
    ball.classList.replace('ball-theme-3','ball-theme-1');
    numbInput.classList.replace('numb-input-theme-3','numb-input-theme-1');
    table.classList.replace('table-theme-3','table-theme-1');
    keysOp.forEach(key => {
        key.classList.replace('key-theme-3','key-theme-1');
    })
    btnDelete.classList.replace('rst-del-theme-3','rst-del-theme-1');
    btnReset.classList.replace('rst-del-theme-3','rst-del-theme-1');
    btnEquals.classList.replace('equals-theme-3','equals-theme-1');
}
export const setTheme2 = () => {
    body.classList.replace('body-theme-1','body-theme-2');
    calcHeader.classList.replace('calc-header-theme-1','calc-header-theme-2');
    ballContainer.classList.replace('ball-cont-theme-1','ball-cont-theme-2');
    ball.classList.replace('ball-theme-1','ball-theme-2');
    numbInput.classList.replace('numb-input-theme-1','numb-input-theme-2');
    table.classList.replace('table-theme-1','table-theme-2');
    keysOp.forEach(key => {
        key.classList.replace('key-theme-1','key-theme-2');
    })
    
    btnDelete.classList.replace('rst-del-theme-1','rst-del-theme-2');
    btnReset.classList.replace('rst-del-theme-1','rst-del-theme-2');
    btnEquals.classList.replace('equals-theme-1','equals-theme-2');
}
export const setTheme3 = () => {
    body.classList.replace('body-theme-2','body-theme-3');
    calcHeader.classList.replace('calc-header-theme-2','calc-header-theme-3');
    ballContainer.classList.replace('ball-cont-theme-2','ball-cont-theme-3');
    ball.classList.replace('ball-theme-2','ball-theme-3');
    numbInput.classList.replace('numb-input-theme-2','numb-input-theme-3');
    table.classList.replace('table-theme-2','table-theme-3');
    keysOp.forEach(key => {
        key.classList.replace('key-theme-2','key-theme-3');
    })
    btnDelete.classList.replace('rst-del-theme-2','rst-del-theme-3');
    btnReset.classList.replace('rst-del-theme-2','rst-del-theme-3');
    btnEquals.classList.replace('equals-theme-2','equals-theme-3');
    
}