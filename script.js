// 1. Crea una funzione che controlli due numeri interi. Ritorna `true` se uno dei due è 50 o se la somma dei due è 50. 
console.log('Esercizio 1')
// Definizione della funzione arrow che accetta due parametri
let controlla = (num1, num2) => {
    // Controllo se uno dei due numeri è 50 o se la loro somma è 50
    if (num1 === 50 || num2 === 50 || num1 + num2 === 50) {
        return true; // Se una delle condizioni è vera, ritorna true
    }
    return false; // Altrimenti ritorna false
}

// Test della funzione con i valori 49 e 50
console.log(controlla(49, 50));

// Esercizio 2: Funzione che rimuove un carattere da una stringa data una posizione
console.log('Esercizio 2')

// Definizione delle variabili di test
let stringa = 'Corsa';
let posizione = 2;

// Definizione della funzione arrow che accetta stringa e posizione come parametri
let rimuovi = (stringa, posizione) => {
    // Concatena la parte di stringa prima della posizione con la parte dopo la posizione
    return stringa.slice(0, posizione) + stringa.slice(posizione + 1)
}

// Test della funzione
console.log(rimuovi(stringa, posizione));

// 3. Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. Ritorna `true` se rispecchiano queste condizioni, altrimenti ritorna `false`.
console.log('Esercizio 3')
// Definizione della funzione arrow che accetta due numeri come parametri
let controlla2 = (num3, num4) => {
    // Controlla se entrambi i numeri sono tra 40-60 o 70-100
    if ((num3 >= 40 && num3 <= 60) || (num3 >= 70 && num3 <= 100) && (num4 >= 40 && num4 <= 60) || (num4 >= 70 && num4 <= 100)) {
        return true; // Se le condizioni sono vere, ritorna true
    }
    return false // Altrimenti ritorna false
}
console.log(controlla2(100, 200));

// Esercizio 4: Funzione che controlla se una città inizia con "Los" o "New"
console.log('Esercizio 4')

// Definizione della funzione arrow che accetta il nome della città come parametro
let nomeCitta = (nome) => {
    primeTre = nome.toLowerCase(); // Converte il nome in minuscolo
    primeTre = primeTre.slice(0, 3); // Prende i primi tre caratteri

    // Controlla se i primi tre caratteri sono "los" o "new"
    if (primeTre === 'los' || primeTre === 'new') {
        return nome; // Se vero, ritorna il nome originale
    }
    return false // Altrimenti ritorna false
}
console.log(nomeCitta('Los Angeles'));

// Esercizio 5: Funzione che somma tutti gli elementi di un array
console.log('Esercizio 5')

// Definizione dell'array di test
let array = [1, 2, 3, 4, 5];

// Definizione della funzione di callback per reduce
let somma = (accumulatore, valoreCorrente) => {
    return accumulatore + valoreCorrente // Somma l'accumulatore con il valore corrente
}

// Usa reduce per sommare tutti gli elementi
console.log(array.reduce(somma));

// Esercizio 6: Funzione che controlla se un array NON contiene 1 o 3
console.log('Esercizio 6')

// Definizione dell'array di test
let array2 = [1, 2, 3, 4, 5];

// Definizione della funzione arrow
let controlla3 = () => {
    // Usa includes per verificare la presenza di 1 o 3
    if (array2.includes(1) || array2.includes(3)) {
        return false; // Se trova 1 o 3, ritorna false
    }
    return true // Altrimenti ritorna true
}

console.log(controlla3())

/* 7. Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro. 
Angolo acuto: meno di 90° ⇒ ritorna “acuto”
Angolo ottuso: tra i 90° e i 180° gradi ⇒ ritorna “ottuso”
Angolo retto: 90° ⇒ ritorna “retto”
Angolo piatto: 180° ⇒ ritorna “piatto” 
 */
console.log('Esercizio 7')

// Definizione della funzione arrow che accetta i gradi come parametro
let angolo = (gradi) => {
    if (gradi < 90) {
        return 'acuto'; // Angolo minore di 90°
    } else if (gradi === 90) {
        return 'retto'; // Angolo di 90°
    } else if (gradi < 180) {
        return 'ottuso'; // Angolo tra 90° e 180°
    } else if (gradi === 180) {
        return 'piatto'; // Angolo di 180°
    }
}

console.log(angolo(90));

// Esercizio 8: Funzione che crea un acronimo da una frase
console.log('Esercizio 8')

// Definizione della frase di test
let frase = "Fabbrica Italiana Automobili Torino";

// Definizione della funzione arrow
let acronimo = () => {
    let parole = frase.split(' ') // Divide la frase in un array di parole
    let estraiAcronimo = '' // Inizializza la stringa per l'acronimo
    // Per ogni parola nell'array
    parole.forEach(parola => {
        // Aggiunge la prima lettera di ogni parola all'acronimo
        estraiAcronimo = estraiAcronimo + parola[0]
    })
    return estraiAcronimo // Ritorna l'acronimo completo
}

console.log(acronimo())

// ESERCIZI EXTRA

// Extra 1: Funzione che trova il carattere più usato in una stringa
console.log('Extra 1')

// Definizione della funzione arrow che accetta una stringa come parametro
let caratterePiuUsato = (stringa) => {
    let gruppoCaratteri = {} // Oggetto per contare le occorrenze
    // Ciclo su ogni carattere della stringa
    for (let i = 0; i < stringa.length; i++) {
        // Se il carattere esiste già, incrementa il contatore
        if (gruppoCaratteri[stringa[i]]) {
            gruppoCaratteri[stringa[i]]++
        } else {
            // Altrimenti inizializza il contatore a 1
            gruppoCaratteri[stringa[i]] = 1
        }
    }

    let caratterePiuUsato = '' // Variabile per il carattere più frequente
    let max = 0 // Contatore per il massimo numero di occorrenze
    // Ciclo su ogni carattere nell'oggetto
    for (const carattere in gruppoCaratteri) {
        // Se trova un carattere con più occorrenze
        if (gruppoCaratteri[carattere] > max) {
            max = gruppoCaratteri[carattere] // Aggiorna il massimo
            caratterePiuUsato = carattere // Aggiorna il carattere più usato
        }
    }
    return caratterePiuUsato // Ritorna il carattere più frequente
}

console.log(caratterePiuUsato('carattere'))

// Extra 2: Funzione che controlla se due stringhe sono anagrammi
console.log('Extra 2')

// Definizione della funzione arrow che accetta due stringhe come parametri
let controllaAnagrami = (stringa1, stringa2) => {
    // Pulisce e ordina la prima stringa
    let stringaPulita1 = stringa1.toLowerCase().replaceAll(' ', '').split('').sort().join('')
    // Pulisce e ordina la seconda stringa
    let stringaPulita2 = stringa2.toLowerCase().replaceAll(' ', '').split('').sort().join('')

    // console.log(stringaPulita1)
    // console.log(stringaPulita2)

    // Se le lunghezze sono diverse, non sono anagrammi
    if (stringaPulita1.length !== stringaPulita2.length) {
        return false
    }

    // Confronta carattere per carattere
    for (let i = 0; i < stringaPulita1.length; i++) {
        if (stringaPulita1[i] !== stringaPulita2[i]) {
            return false // Se trova una differenza, non sono anagrammi
        }
    }
    return true // Se arriva qui, sono anagrammi
}

// console.log(controllaAnagrami('anna', 'nana'))

// 3. Partendo da una lista di possibili anagrammi e da una parola (entrambi passati come parametri), fai una funzione che ritorni un nuovo array contenente tutti gli anagrammi corretti della parola data.
console.log('Extra 3')

let listaPossibiliAnagrammi = ['carenti', 'incerta', 'espatrio']
let parola = 'cartine'

let trovaAnagrammi = (parolaConfronto, listaParole) => {
    return listaParole.filter(parolaCorrente => controllaAnagrami(parolaConfronto, parolaCorrente))
}

console.log(trovaAnagrammi(parola, listaPossibiliAnagrammi))

// 4. Partendo da una stringa passata come parametro, ritorna `true` se la stringa è palindroma o `false` se non lo è.

console.log('Extra 4')
let stringaPalindroma = (stringa) => {
    return stringa === stringa.split('').reverse().join('')
}

console.log(stringaPalindroma('anna'))

// 5. Partendo da un numero intero (dai parametri) ritorna un numero che contenga le stesse cifre, ma in ordine contrario. Es. 189 ⇒ 981

console.log('Extra 5')
let inversioneNumero = (num) => {
    return parseInt(num.toString().split('').reverse().join(''))

}

console.log(inversioneNumero(189))

/* 6. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “scala” creata con il carattere “#” e avente X scalini.*/
console.log('Extra 6')

let scala = (x) => {
    // Ciclo esterno: i va da 1 fino a x
    // Per esempio, se x = 4, i assumerà i valori 1, 2, 3, 4
    for (let i = 1; i <= x; i++) {
        // Ad ogni iterazione, inizializziamo una stringa vuota
        let scalino = '';

        // Ciclo interno: j va da 1 fino al valore attuale di i
        // Se i = 1 → j farà 1 iterazione
        // Se i = 2 → j farà 2 iterazioni
        // Se i = 3 → j farà 3 iterazioni
        // Se i = 4 → j farà 4 iterazioni
        for (let j = 1; j <= i; j++) {
            // Ad ogni iterazione del ciclo interno
            // aggiungiamo un '#' alla stringa scalino
            scalino += '#';
        }
        // Dopo il ciclo interno, stampiamo lo scalino completato
        console.log(scalino);
    }
}
scala(5)

// 7. Crea una funzione che, data una stringa come parametro, ritorni la stessa stringa, ma al contrario. Es. “Ciao” ****⇒ “oaiC”

console.log('Extra 7')
let inversioneStringa = (stringa) => {
    return stringa.split('').reverse().join('')
}

console.log(inversioneStringa('Ciao'))

// 8. Crea una funzione che accetti un array e un numero Y come parametro. Dividi l’array in sotto-array aventi lunghezza Y.

console.log('Extra 8')
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let y = 3

let divisioneArray = (array, y) => {
    let arrayFinale = []
    for (let i = 0; i < array.length; i += y) {
        arrayFinale.push(array.slice(i, i + y))
    }
    return arrayFinale
}

/* Spiegazione:

1. Input:
   - array: l'array di partenza da dividere (es: [1, 2, 3, 4, 5, 6, 7, 8, 9])
   - y: la dimensione desiderata dei sotto-array (es: 3)

2. Processo:
   - Viene creato un array vuoto (arrayFinale) che conterrà i sotto-array
   - Il ciclo for parte da 0 e incrementa di y ad ogni iterazione
   - Ad ogni iterazione, slice(i, i+y) estrae una porzione dell'array originale
   - Questa porzione viene aggiunta all'arrayFinale

3. Esempio di esecuzione con array=[1,2,3,4,5,6,7,8,9] e y=3:
   Prima iterazione (i=0):  slice(0,3) → [1,2,3]    arrayFinale=[[1,2,3]]
   Seconda iterazione (i=3): slice(3,6) → [4,5,6]    arrayFinale=[[1,2,3],[4,5,6]]
   Terza iterazione (i=6):  slice(6,9) → [7,8,9]    arrayFinale=[[1,2,3],[4,5,6],[7,8,9]]

4. Note:
   - Se la lunghezza dell'array non è divisibile per y, l'ultimo sotto-array sarà più corto
   - slice() non modifica l'array originale ma crea una nuova copia
*/

console.log(divisioneArray(array1, y))

/* 9. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “piramide” create con il carattere “#” e avente X strati.*/
console.log('Extra 9')
let piramide = (x) => {
    // Ciclo principale: i rappresenta il numero della riga (da 1 a x)
    for (let i = 1; i <= x; i++) {
        // Controlliamo se i è dispari (es: 1, 3, 5)
        if (i % 2 !== 0) {
            // Inizializziamo una stringa vuota per questa riga
            let livello = ''

            // PRIMO CICLO: Aggiunta degli spazi
            // Se x = 5 e i = 1: aggiungeremo 4 spazi (5-1) / 2 = 2
            // Se x = 5 e i = 3: aggiungeremo 2 spazi (5-3) / 2 = 1
            // Se x = 5 e i = 5: aggiungeremo 0 spazi (5-5) / 2 = 0
            for (let s = 0; s < ((x - i) / 2); s++) {
                livello += ' '
            }

            // SECONDO CICLO: Aggiunta dei cancelletti
            // Se i = 1: aggiungeremo 1 #
            // Se i = 3: aggiungeremo 3 #
            // Se i = 5: aggiungeremo 5 #
            for (let j = 1; j <= i; j++) {
                livello += '#'
            }

            // Stampiamo la riga completata
            console.log(livello)
        }
    }
}
piramide(5)

/* 10. Scrivi una funzione che accetti un intero N e ritorni una matrice a spirale NxN: */

console.log('Extra 10')
let matriceSpirale = (n) => {
    // Creiamo una matrice vuota NxN
    let matrice = [];
    for (let i = 0; i < n; i++) {
        let riga = [];
        for (let j = 0; j < n; j++) {
            riga.push(0);
        }
        matrice.push(riga);
    }

    let valore = 1;  // Valore da inserire
    let inizio = 0;  // Indice iniziale
    let fine = n - 1;  // Indice finale

    while (valore <= n * n) {
        // Dall'alto verso destra
        for (let i = inizio; i <= fine; i++) {
            matrice[inizio][i] = valore++;
        }

        // Dall'alto verso il basso
        for (let i = inizio + 1; i <= fine; i++) {
            matrice[i][fine] = valore++;
        }

        // Da destra verso sinistra
        for (let i = fine - 1; i >= inizio; i--) {
            matrice[fine][i] = valore++;
        }

        // Dal basso verso l'alto
        for (let i = fine - 1; i > inizio; i--) {
            matrice[i][inizio] = valore++;
        }

        inizio++;
        fine--;
    }

    return matrice;
}

console.log(matriceSpirale(3));
