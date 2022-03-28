const res = document.getElementById('res');
const num = document.getElementById('num');
const btnadc = document.getElementById('btnadc');
const btnlimp = document.getElementById('btnlimp');
const btnrem = document.getElementById('btnremove');

const lista = [];
//lista = Number;

function adicionar () { 
    
    lista.push(res.value);

    if (document.getElementById('num').value == '') {
        window.alert('ERRO! Preencha os campos corretamente')
        li.innerHTML = "";
        document.getElementById('num').focus();
    }
    for (let i = 1; i <= Number.length; ++i) {
        res.innerHTML += `<li>${num.value}</li>`
    }
        res.innerHTML += `<button>Remover</button>`
        //const button = document.getElementsByTagName('button')
        //button = document.addEventListener("click", remover())

      // function remover () {
       // lista.value = 0;
       // i.remove(res);
        //num.value = "";
       // document.getElementById('num').focus(); 
   // }

    num.value = "";
    document.getElementById('num').focus();
}

function limpar () {
    res.innerHTML = "" 
    document.getElementById('num').focus(); 
    num.value = "";
}


//res.innerHTML += `<button>Remover</button>`

        //const button = document.getElementsByTagName('button')
        //button = addEventListener('click', remover())

    //function remover () {
        //lista.value = 0;
        //num.value = "";
        //Number.remove(res);
        //document.getElementById('num').focus(); 
    //}
