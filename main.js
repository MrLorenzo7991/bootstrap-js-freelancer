const commissioneBackend = 20.5;
const commissioneFrontend = 15.3;
const commissioneAnalisi = 33.6;
let codiciScontoValidi = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"]
const sconto = 0.75;


function submitForm(event){
    event.preventDefault();
    let oreRichieste = parseInt(document.getElementById("hoursRequest").value);
    let tipoLavoro = document.getElementById("typeOfWork").value;
    let codiceSconto = document.getElementById("discountCode").value;
    let flagSconto = checkSconto(codiceSconto);
    let commissione = calcoloCommissione(tipoLavoro);
    let prezzofinale = calcoloPrezzo(oreRichieste, commissione , flagSconto).toFixed(2);
    document.getElementById("prezzoFinale").innerHTML = "Il prezzo finale è di: " + prezzofinale + "&euro;";
}
//Calcolo commissioni tipo di lavoro
function calcoloCommissione(tipoDiLavoro){
    let commissione = 20.5;
    switch(tipoDiLavoro){
        case "frontend":
            commissione = 15.3;
            break;    
        case "projectAnalisys":
            commissione = 33.6;
            break;
    }
    return(commissione);
}

//check codice sconto
function checkSconto(codice){
    let flagSconto = false
    for(i=0; i < codiciScontoValidi.length; i++){
        if(codice == codiciScontoValidi[i]){
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
    } else {
        alert("Il codice sconto inserito non è valido o è già stato usato, non verrà applicato nessuno sconto.")
    }
    return(prezzofinale)
}

