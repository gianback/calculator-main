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

const clearTheme = () => {
    body.classList.remove('body-theme-1', 'body-theme-2','body-theme-3');
    calcHeader.classList.remove('calc-header-theme-1', 'calc-header-theme-2','calc-header-theme-3');
    ballContainer.classList.remove('ball-cont-theme-1', 'ball-cont-theme-2','ball-cont-theme-3');
    ball.classList.remove('ball-theme-1', 'ball-theme-2','ball-theme-3');
    numbInput.classList.remove('numb-input-theme-1', 'numb-input-theme-2','numb-input-theme-3');
    table.classList.remove('table-theme-1', 'table-theme-2','table-theme-3');
    keysOp.forEach(key => {
        key.classList.remove('key-theme-1','key-theme-2','key-theme-3');
    })
    btnDelete.classList.remove('rst-del-theme-1','rst-del-theme-2','rst-del-theme-3');
    btnReset.classList.remove('rst-del-theme-1','rst-del-theme-2','rst-del-theme-3');
    btnEquals.classList.remove('equals-theme-1','equals-theme-2','equals-theme-3');

}
export const setTheme1 = () => {
    clearTheme()
    body.classList.add('body-theme-1');
    calcHeader.classList.add('calc-header-theme-1');
    ballContainer.classList.add('ball-cont-theme-1');
    ball.classList.add('ball-theme-1');
    numbInput.classList.add('numb-input-theme-1');
    table.classList.add('table-theme-1');
    keysOp.forEach(key => {
        key.classList.add('key-theme-1');
    });
    btnDelete.classList.add('rst-del-theme-1');
    btnReset.classList.add('rst-del-theme-1');
    btnEquals.classList.add('equals-theme-1');
}
export const setTheme2 = () => {
    clearTheme()
    body.classList.add('body-theme-2');
    calcHeader.classList.add('calc-header-theme-2');
    ballContainer.classList.add('ball-cont-theme-2');
    ball.classList.add('ball-theme-2');
    numbInput.classList.add('numb-input-theme-2');
    table.classList.add('table-theme-2');
    keysOp.forEach(key => {
        key.classList.add('key-theme-2');
    });
    btnDelete.classList.add('rst-del-theme-2');
    btnReset.classList.add('rst-del-theme-2');
    btnEquals.classList.add('equals-theme-2');
}
export const setTheme3 = () => {
    clearTheme()
    body.classList.add('body-theme-3');
    calcHeader.classList.add('calc-header-theme-3');
    ballContainer.classList.add('ball-cont-theme-3');
    ball.classList.add('ball-theme-3');
    numbInput.classList.add('numb-input-theme-3');
    table.classList.add('table-theme-3');
    keysOp.forEach(key => {
        key.classList.add('key-theme-3');
    });
    btnDelete.classList.add('rst-del-theme-3');
    btnReset.classList.add('rst-del-theme-3');
    btnEquals.classList.add('equals-theme-3');
    
}