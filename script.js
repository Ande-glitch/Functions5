function threeSum() {
    let show = parseFloat(prompt("Skriv tre tall"))
    let showw = parseFloat(prompt("Skriv tre tall"))
    let showww = parseFloat(prompt("Skriv tre tall"))

    var results = (show+showw+showww)    
    console.log(results);
}   

// Oppgave 2

function geneTall() {
var tall1 = parseInt(Math.random()*100)
var tall2 = parseInt(Math.random()*100)
    
    if (tall1>tall2) {
        console.log(tall1 + " er større enn " + tall2);
    } else {
        console.log(tall2 + " er større enn " + tall1);
        
    }
}

// Oppgave 3

function kalkUlator() {
    let a = parseFloat(prompt("Skriv et tall"))
    let regnemåte = (prompt("Skriv et regnemåte"))
    let b = parseFloat(prompt("Skriv et tall"))

    if (regnemåte == "+") {
        console.log(a+b);
    } 
    else if (regnemåte == "-") {
        console.log(a-b);
    }
    else if (regnemåte == "*") {
        console.log(a*b);
    } 
    else if (regnemåte == "/") {
        console.log(a/b);
    }
}

// Oppgave 4

function ranDom() {
    let ment = parseInt(prompt("Skriv et tall"))
    let environ = parseInt(prompt("Skriv et tall"))

    var results = (ment, environ)
    var generate = parseInt(Math.random()*results)
    console.log(generate);
}

// Oppgave 5

function ranDam() {
    let sum = 0
    const numbers = [] // tom array for å legge tall inne i

    for (let i = 0; i < 21; i++) {
        let b = parseInt(Math.random()*i)+1 // +1 for å kvitte 0
        sum += b;
        numbers.push(b); // legger til tallene til array
    }   
    console.log("De tilfeldige tallene er " + numbers + " og summen er " + sum);
}

// Oppgave 6
let n = parseInt(Math.random()*100) // Outside of loop to not repeat RNG

function guessNum() {
    console.log(n);

    for (let i = 0; i < 10; i++) {
    let guess = parseInt(prompt("Skriv et tall"))

        if (guess === n) {
            alert("Riktig!");
            break;
        } 
        else if (guess < n) {
            alert("Tallet er høyere")
        } 
        else if (guess > n) {
            alert("Tallet er lavere")
        } 
    }
}