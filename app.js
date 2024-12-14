function qaytarilmaganElementniToping(massiv) {
    return massiv.find(el => massiv.indexOf(el) === massiv.lastIndexOf(el));
}



function massivElementlariniOzgartirish(massiv) {
    return massiv.map(el => (el > 0 ? -el : Math.abs(el)));
}

function harBirElementniKvadratQilish(massiv) {
    return massiv.map(el => el ** 2);
}

function kopMartaUchraganlarniOlibTashlash(massiv) {
    return massiv.filter(el => massiv.indexOf(el) === massiv.lastIndexOf(el));
}

function bolinmaydiganElementlarSoni(massiv, n) {
    return massiv.filter(el => el % n !== 0).length;
}

function juftElementlarIndekslariniTopish(massiv) {
    return massiv.reduce((indekslar, el, idx) => {
        if (el % 2 === 0) indekslar.push(idx);
        return indekslar;
    }, []);
}

function engKattaElementniOchirish(massiv) {
    const engKatta = Math.max(...massiv);
    return massiv.filter(el => el !== engKatta);
}

function massivniTeskariTartibdaChiqarish(massiv) {
    return [...massiv].reverse();
}

function runFunction(funcId) {
    const massivInput = document.getElementById("massiv").value;
    const massiv = massivInput.split(",").map(Number); // Massivni sonlarga aylantirish
    const n = parseInt(document.getElementById("n").value) || 1; // N qiymati

    let natija;
    switch (funcId) {
        case 1:
            natija = qaytarilmaganElementniToping(massiv);
            break;
        case 2:
            natija = massivElementlariniOzgartirish(massiv);
            break;
        case 3:
            natija = harBirElementniKvadratQilish(massiv);
            break;
        case 4:
            natija = kopMartaUchraganlarniOlibTashlash(massiv);
            break;
        case 5:
            natija = bolinmaydiganElementlarSoni(massiv, n);
            break;
        case 6:
            natija = juftElementlarIndekslariniTopish(massiv);
            break;
        case 7:
            natija = engKattaElementniOchirish(massiv);
            break;
        case 8:
            natija = massivniTeskariTartibdaChiqarish(massiv);
            break;
        default:
            natija = "Notog'ri funksiyani tanladingiz.";
    }

    document.getElementById("natija").textContent = `Natija: ${JSON.stringify(natija)}`;
}
