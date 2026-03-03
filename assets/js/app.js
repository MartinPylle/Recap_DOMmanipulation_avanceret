// Når du er færdig med denne opgave, ser siden ca sådan her ud: https://prnt.sc/AdvNjFr_TwHA

// 1. Der skal, med brug af javascript, indsættes 1 skill mere, altså nedenstående html. Se mere i punkt 1.1 - 1.6 under
/*
    <div>
        <span>CSS:</span>
        <span>60%</span>
        <meter min="0" max="100" value="60"></meter>
    </div>
*/

// 1.1 Fang .mySkills med en egnet metode

const spanEL = document.querySelector(".mySkills");


// 1.2 Anvend document.createElement() til at skabe en <div>, to <span> og et <meter> tag
const newDiv = document.createElement("div");
const newSpan = document.createElement("span");
const newSpan1 = document.createElement("span");
const newMeter = document.createElement("meter");

// 1.3 Anvend document.textContent til at indsætte data i 2*span(se ovenfor for indhold)
newSpan.textContent = "Javascript";
newSpan1.textContent = "30%";


// 1.4 Anvend .setAttribute() til at sætte de tre attributter i meter-tagget (min, max og value)

newMeter.setAttribute("min", "0");
newMeter.setAttribute("max", "100");
newMeter.setAttribute("value", "30");

// 1.5 Anvend .append() til at indsætte <div> i .mySkills

newDiv.append(newSpan);
newDiv.append(newSpan1);
newDiv.append(newMeter);


// 1.6 Anvend .append() til at indsætte 2*span og 1*meter i <div>
spanEL.append(newDiv);

// 2. Anvend .cloneNode() til at klone den <li> med "Mit portfolio" og indsætte den to gange nedenfor (Ja, så kommer der til at stå "Mit portfolio" tre gange - pyt med det:) )

// 2.1 Fang "mit portfolio"

const myportfolioEL = document.querySelector("ul li");

// 2.2 Indsæt tre kopier
const ulEL = document.querySelector("ul");


const liClone1 = myportfolioEL.cloneNode(true);
const liClone2 = myportfolioEL.cloneNode(true);

ulEL.append(liClone1, liClone2);


// 3. I footeren er der en div med class="oval". Anvend .style-objektet til at give den følgende:
// width: 40px, height: 40px, background-color: pink, border-radius: 50%

const ovalEL = document.querySelector(".oval");
ovalEL.style.width = "40px";
ovalEL.style.height = "40px";
ovalEL.style.background = "pink";
ovalEL.style.borderRadius = "50%";


// 4. Se i dit .css dokument nederst at der er en class kaldet .niceStyling. Anvend .classList.add() til at sætte denne klasse på .oval2

const ovalEL2 = document.querySelector(".oval2");
ovalEL2.classList.add("niceStyling");