let calc = function(){

    let scrin = document.querySelector('.scrin');
    let btn = document.querySelector('.buttons');
    let sign = document.querySelectorAll('.sign');
    let c = document.querySelector('.c');
    let plmn = document.querySelector('.plus-minus');
    let pers = document.querySelector('.persent');
    let equals = document.querySelector('.equals');

    let num1 = '';
    let num2 = '';
    let sgn = '';

    let clean = function() {
        num1 = '';
        num2 = '';
        sgn = '';
        scrin.textContent = null;
    }

    c.addEventListener('click',clean);

    let plus_minus = function() {
        num1 = num1 * (-1);
        scrin.textContent = num1;
    }

    let calculator = function(){
        if (sgn == '+') {
            num1 = +num1 + +num2;
            scrin.textContent = '';
            scrin.textContent = num1;

        }else if (sgn == '-') {
            num1 = num1 - num2;
            scrin.textContent = '';
            scrin.textContent = num1;

        }else if (sgn == '/') {

            num1 = num1 / num2;
            scrin.textContent = '';
            scrin.textContent = num1;
            
        }else if(sgn == '*') {
            num1 = num1 * num2;
            scrin.textContent = '';
            scrin.textContent = num1;
        }
    }
    

    btn.addEventListener('click', function(event){

        if(event.target.classList.contains('equals') || event.target.classList.contains('c') ||!event.target.classList.contains('btn') ||  event.target.classList.contains('sign')) return;

        let value = event.target.textContent;
        console.log(value)

        if (num2 =='' && sgn == ''){
            num1 += value;
            scrin.textContent = num1;
        }else if (num1 != '' && num2 != ''){
            num2 = value;
            scrin.textContent = num2;
        }else {
            num2 += value;
            scrin.textContent = num2;
        }
        return;
    })

    sign.forEach(function(elem){
        elem.addEventListener('click', function(event){
            if(event.target.classList.contains('equals') || event.target.classList.contains('c') ||!event.target.classList.contains('btn') ||  event.target.classList.contains('number')) return;

            let value = event.target.textContent;

            if (num1 != '' && num2 != ''){
                calculator();
                sgn = value;
                scrin.textContent = sgn;
                scrin.textContent = num1;
            }else {
                sgn = value;
                scrin.textContent = sgn;
                return;
            }
        })
    })

    equals.addEventListener('click', function(event){
        if(!event.target.classList.contains('btn') || event.target.classList.contains('btn c') || event.target.classList.contains('number') || event.target.classList.contains('sign')) return;

        let value = event.target.textContent;

        if (value == '=') {
            if (num2 == '') {
                num2 = num1;
            }
            calculator();
            num2 = null;
            scrin.textContent = num1;
        }

    })

    plmn.addEventListener('click', plus_minus);  

}