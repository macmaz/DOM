console.log(document);
console.log(document.documentElement);
console.log(document.body);

var parFirst = document.getElementById('parFirst');
console.log(parFirst);


var linki = document.getElementsByClassName('superlink');
console.log(linki);


var linkiPoTagu = document.getElementsByTagName('a');
console.log(linkiPoTagu);

var divPoId = document.getSelection('#parSecond');
console.log(divPoId);

var linkiPoSelektorze = document.querySelectorAll('.superlink');
console.log(linkiPoSelektorze);

linkiPoSelektorze.forEach(function(selektor,index) {
    console.log(selektor.outerHTML);
      console.log("*****************");
    console.log(selektor.innerHTML);
});

