const commissioneBackend = 20.5;
const commissioneFrontend = 15.3;
const commissioneAnalisi = 33.6;
let codiciScontoValidi = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"]
const sconto = 0.75;


function submitForm(event){
    event.preventDefault();
    let oreRichieste = document.getElementById("hoursRequest").value;
    let tipoDiLavoro = document.getElementById("typeOfWork").value;
    let codiceSconto = document.getElementById("discountCode").value;
    let flagSconto = checkSconto(codiceSconto);

}
//check codice sconto
function checkSconto(codice){
    let flagSconto = false
    for(i=0, i < codiciScontoValidi.length, i++){
        if(codice == codiciScontoValidi(i)){
            flagSconto = true;
            break
        }
    }
    return(flagSconto);
}

//Calcolo prezzo
function calcoloPrezzo(ore, commissione, dirittoSconto){
    let prezzofinale = ore*commissione;
    if(dirittoSconto){
        prezzofinale = prezzofinale*sconto;
    }
    return(prezzofinale)
}