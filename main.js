const commissioneBackend = 20.5;
const commissioneFrontend = 15.3;
const commissioneAnalisi = 33.6;
let codiciScontoValidi = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"]
const sconto = 0.75;
/*const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", submitForm(e){
    e.preventDefault();
})*/
    

function submitForm(event){
    event.preventeDefault();
    let oreRichieste = document.getElementById("hoursRequest").value;
    let tipoDiLavoro = document.getElementById("typeOfWork").value

}
