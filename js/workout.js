//Zadanie 1

function ustawTlo(){

document.getElementById("one").style.backgroundColor = "red";

document.getElementById("two").style.backgroundColor = "yellow";

}

document.getElementById('background').onclick = ustawTlo;

// Zadanie 2

function pobierzImie(event) {
    
    event.preventDefault();
    
    var inputs = document.getElementsByTagName('input');
    var i = 0;
    while ( i < inputs.length){
        if(inputs[i].type == 'text'){
        console.log(inputs[i].value);
        }
        i++;
    }
}

// Zadanie 3

