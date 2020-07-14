const input = document.querySelector("input");
const btn = document.querySelector("button");
const lista = document.querySelector("ul");

let sequencia = [];

btn.onclick = () => {
    sequencia = [];
    lista.innerHTML = null;
    console.log(input.value);
    console.log(sequencia);
    fibonacci(input.value);
    exibirSequencia();
    input.value = "";
};

function fibonacci(n){

    let termo1 = 0;
    let termo2 = 1;

    for(let i=0; i < n; i++){
        if(i < 2){
            sequencia.push(i);
        }else{
            let termo3 = termo1 + termo2;
            termo1 = termo2
            termo2 = termo3;
            sequencia.push(termo3);
        }
    };
};

function exibirSequencia(){
    for(let i = 0; i < sequencia.length; i++){
        const createLi = document.createElement("li");
        lista.appendChild(createLi);
        const itemL = document.querySelectorAll("li");
        itemL[i].textContent = sequencia[i];
    }
};