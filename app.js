/* import { Calculadora } from "./js/class-calc.js"; */

//referencias html
const d = document;
/* const calculadora = new Calculadora(); */

let topValue = d.querySelector('.result-prev');
let botValue =  d.querySelector('.result');
let operado = false;



botValue.textContent = 0;


d.addEventListener('click', (e) => {


    if(e.target.matches('.number')){
        topValue.textContent += e.target.textContent;
        
        if(operado === false){
            if(botValue.textContent == '0'){
                botValue.textContent = e.target.textContent;
            }else{
                botValue.textContent += e.target.textContent;
            }
        }else{
            botValue.textContent = e.target.textContent
        }

        

        
    }
    if(e.target.matches('.sign')){
        if(operado === false){
            topValue.textContent += e.target.textContent;
            botValue.textContent = 0
        }else{
            topValue.textContent = botValue.textContent + e.target.textContent;
            
            botValue.textContent = 0;
        }
    }

    if(e.target.matches('.equals')){
        if(topValue.textContent[topValue.textContent.length - 1] === '0' && topValue.textContent[topValue.textContent.length - 2] === '/'){
            topValue.textContent = '';
            botValue.textContent = 'ERROR,REINICIA!'
        }else{
            botValue.textContent = eval(topValue.textContent);
            operado = true;
            topValue.textContent = '';
        }
       
    }
    

    if(e.target.matches('.delete')){
     
        if(!(botValue.textContent === '0')){
        
           const array = botValue.textContent.split('');
           array.pop()
           botValue.textContent = array.join('')
           topValue.textContent = array.join('')
           if(botValue.textContent === ''){
            botValue.textContent = 0;
           }
           
        }else{
            console.log('ga')
        }
    }

    if(e.target.matches('.reset')){
        botValue.textContent = 0;
        topValue.textContent = '';
    }
})

