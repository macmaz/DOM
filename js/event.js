function klikHeader(){
    console.log('Kliknałeś header');
}

function alarm(event) {
    event.preventDefault(); //blokuje domysla akcje czyli przeniesienie linku
    console.log('Kliknieto link');
}

var secondLink = document.getElementsByTagName('a')[1];
secondLink.onclick = alarm;

document.getElementById('title-header').onclick = klikHeader;


var par = document.getElementsByTagName('p')[0];

par.addEventListener( 'click', klikHeader );
