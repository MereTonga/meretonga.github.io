// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Sayfa tamamen yüklendiğinde çalışacak kod
    console.log('Script.js başarıyla yüklendi!');

    const myButton = document.getElementById('myButton');
    if (myButton) {
        myButton.addEventListener('click', function() {
            alert('Butona tıkladın! JavaScript çalışıyor.');
        });
    }
});
