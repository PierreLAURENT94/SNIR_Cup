var variateur = true;

function CalculerCO2(){
    var alimCO2 = 0;
    var alimentation = document.getElementById("alimentation").value;
    var calKg = 0;
    var alimKgCO2 = 0;
    // CO2 de l'alimentation
    switch(alimentation) {
        case "Boeuf (steak haché) • 41.43 kg CO2 eq/kg • 2400 calories/kg":
            calKg = 2400;
            alimKgCO2 = 41.43;
            break;
        case "Porc (brochette de porc) • 6.31 kg CO2 eq/kg • 1750 calories/kg":
            calKg = 1750;
            alimKgCO2 = 6.31;
            break;
        case "Poulet (filet de poulet) • 5.47 kg CO2 eq/kg • 1150 calories/kg":
            calKg = 1150;
            alimKgCO2 = 5.47;
            break;
        case "Poisson (accra de poisson) • 5.25 kg CO2 eq/kg • 2750 calories/kg":
            calKg = 2750;
            alimKgCO2 = 5.25;
            break;
        case "Blé (boulgour de blé) • 0.36 kg CO2 eq/kg • 3450 calories/kg":
            calKg = 3450;
            alimKgCO2 = 0.36;
            break;
    }
    var genre = document.getElementById("genre").value;
    if(genre == "Homme adulte • 2500 calories/jour"){
        alimCO2 = (2500/calKg)*alimKgCO2;
    }
    else{
        alimCO2 = (2000/calKg)*alimKgCO2;
    }
    var elec = document.getElementById("elec").value;
    var elecCO2 = 0;
    // CO2 de l'électricité
    switch(elec) {
        case "Normal • 14 kWh/jour":
            elecCO2 = 14 * 0.05;
            break;
        case "Faible • 8 kWh/jour":
            elecCO2 = 8 * 0.05;
            break;
        case "Importante • 20 kWh/jour":
            elecCO2 = 20 * 0.05;
            break;
    }
    // CO2 de l'électricité + CO2 de l'alimentation
    var totalCO2 = elecCO2 + alimCO2;
    console.log(alimCO2);
    console.log(elecCO2);
    console.log(totalCO2);
    document.getElementById("alimCO2").innerText = Math.round(alimCO2 * 100) / 100 + " kg CO2/jour";
    document.getElementById("elecCO2").innerText = Math.round(elecCO2 * 100) / 100 + " kg CO2/jour";
    document.getElementById("totalCO2").innerText = Math.round(totalCO2 * 100) / 100 + " kg CO2/jour";
    document.getElementById("resultat").classList.remove("animate__animated", "animate__tada", "animate__fadeInUp", "animate__heartBeat");
    if(variateur){
        document.getElementById("resultat").classList.add("animate__animated", "animate__tada");
        variateur = false;
    }
    else{
        document.getElementById("resultat").classList.add("animate__animated", "animate__heartBeat");
        variateur = true;
    }
}

function animateCSS(element, animationName) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)
    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)
    }
    node.addEventListener('animationend', handleAnimationEnd)
}