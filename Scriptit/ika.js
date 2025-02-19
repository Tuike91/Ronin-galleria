function ika() {
    // Hakee käyttäjän antaman luvun
    let luku = document.getElementById('luku').value;
    let kerrottava = 7; // Kiinteästi 7
    let tulos;

    // Tarkistetaan, onko luku väliltä 1-20
    if (luku >= 1 && luku <= 20) {
        // Lasketaan tulos
        tulos = luku * kerrottava;

        // Muodostetaan HTML-tulos
        tulos = "<p>Koirasi ikä ihmisen iässä on " + tulos + " vuotta! </p>";
    } else {
        // Virheilmoitus
        tulos = "<p>Anna luku väliltä 1-20!</p>";
    }

    // Korvataan sivulla div-elementin sisältö tuloksella
    document.getElementById('ika').innerHTML = tulos;
}




