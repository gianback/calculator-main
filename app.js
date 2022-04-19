import { setTheme1,setTheme2,setTheme3 } from "./theme.js";

//referencias html
const d = document;

let resultTop =  d.querySelector('.result-prev');
let result =  d.querySelector('.result');
let id = 1;
/* if(result.textContent.length < 1){
    result.textContent = '0'
} */

d.addEventListener('click', e => {
    if(e.target.matches('.number')){
        if(result.textContent == '0'){
            if(e.target.textContent === '.'){
                result.textContent = '0' + e.target.textContent;
            }else{
                result.textContent = e.target.textContent;
            }
        }else{
            if(e.target.textContent === '.'){
                if(/\./.test(result.textContent) === false && result.textContent[result.textContent.length - 1] !== '-'){
                    result.textContent +=  e.target.textContent;
                    
                }
            }else{
                result.textContent += e.target.textContent;
               
            }
        }
        
    }

    if(e.target.matches('.sign')){
        if(result.textContent === '0' && result.textContent[0] !== '-'
        && resultTop.textContent[resultTop.textContent.length - 1] !== '-'
        && resultTop.textContent[resultTop.textContent.length - 1] !== '+'
        && resultTop.textContent[resultTop.textContent.length - 1] !== '*'
        && resultTop.textContent[resultTop.textContent.length - 1] !== '/'){
            result.textContent = e.target.textContent
         
          
        }
         else if(result.textContent !== '0' && 
         result.textContent[result.textContent.length - 1] !== '.' 
         && result.textContent[result.textContent.length - 1] !== '-'
         && result.textContent[result.textContent.length - 1] !== '+'
         && result.textContent[result.textContent.length - 1] !== '*'
         && result.textContent[result.textContent.length - 1] !== '/' ){
            resultTop.textContent += result.textContent + e.target.textContent;
            result.textContent = 0 ;
          
        }
    }
    if(e.target.matches('#equals-btn')){
        if(resultTop.textContent[resultTop.textContent.length - 1] === '*' ||  resultTop.textContent[resultTop.textContent.length -1] === '/'){
            resultTop.textContent+= '1';
            result.textContent = eval(resultTop.textContent);
            resultTop.textContent = '';
        }else{
            resultTop.textContent += result.textContent;
            result.textContent = eval(resultTop.textContent);
            resultTop.textContent = '';
           
            
        }
    }

    if(e.target.matches('#reset-btn')){
        resultTop.textContent = ''
        result.textContent = '0'
    }
    if(e.target.matches('#del-btn')){
        if(result.textContent !== '0'){
            if(result.textContent.substring(0,result.textContent.length - 1) === ''){
                result.textContent = '0';
            }else{
                result.textContent = result.textContent.substring(0,result.textContent.length - 1)
            }
        }
    }

    if(e.target.matches('.ball-container') || e.target.matches('.ball')){
        id++;
        switch(id){
            case 2:
                setTheme2();
                break;
            case 3:
                setTheme3();
                break;
            case 4:
                id = 1;
                setTheme1();
                break;
        }
    }
})















































/* 
let variables = ['',''];
let id = 0;
let operacion = '';

const reset = () =>{
    variables = ['',''];
    operacion = '';
    id = 0;
    refreshScreen()
} */
/* const calcular =()=> {
    let res = eval(variables[0] + operacion + variables[1]);
    operacion = '';
    variables[0] = res;
    variables[1] = '';
    id = 0;
    refreshScreen()
    variables[0] = '';
  
} */
/* const refreshScreen = () => {
    if(variables[id] === ''){
        botValue.innerText = '0';
    }else{
        botValue.innerText = variables[id];
    }
} */
/* d.addEventListener('click', e => {
    if(e.target.matches('.number')){
   
        const regexp = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/;
        if(regexp.test(variables[id]+e.target.textContent)){
            variables[id] += e.target.textContent;
          
            refreshScreen();
        }
    }
    if(e.target.matches('.sign')){
        if(variables[0] === '' && botValue.textContent !== 0){
            variables[0] = botValue.textContent;
        }
        id++;
        switch(e.target.textContent){
            case '+':
            case '-':
            case '*':
            case '/':
             operacion = e.target.textContent;

        }
   
        botValue.textContent = 0;
    }

    if(e.target.matches('#equals-btn')){
        calcular()
    }
    if(e.target.matches('#reset-btn')){
        reset()
    }
})
 */







//variables
/* 
let variables = ['',''];
let operator = '';
let id = 0;

const reset = () =>{
    variables = ['',''];
    operator = '';
    id = 0;
    refreshScreen()
}

const refreshScreen = () => {
    if(variables[id] === ''){
        botValue.innerText = '0';
    }else{
        botValue.innerText = variables[id];
    }
}
const calcular = () => {
    let res = eval(variables[0] + operator + variables[1]);
    operator = '';
    variables[0] = res;
    variables[1] = '';
    id = 0;
    refreshScreen()
    variables[0] = '';
}
d.addEventListener('click', (e) => {
    if(e.target.matches('#reset-btn')){
        reset()
    }
    if(e.target.matches('.number')){
        const regexp = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/;
        if(regexp.test(variables[id]+e.target.textContent)){
            variables[id] += e.target.textContent;
            refreshScreen();
        }
    }
    if(e.target.matches('#del-btn')){
        if(variables[id].length > 0){
            variables[id] = variables[id].substring(0,variables[id].length -1)
            refreshScreen()
        }
    }


    if(e.target.matches('.sign')){
        if(variables[0] === '' && botValue.textContent !== '0'){
            variables[0] = botValue.textContent;
        }
        id++;
        switch(e.target.textContent){
            case '+':
            case '-':
            case '*':
                operator = e.target.textContent
            case '/':

        }
       
    }
    if(e.target.matches('#equals-btn')){
        calcular()
    }
})

 */