/*

Consegna:
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco

Attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

In seguito l'utente clicca su una cella:

se il numero è presente nella lista dei numeri generati
- abbiamo calpestato una bomba
- la cella si colora di rosso e la partita termina.

Altrimenti
- la cella cliccata si colora di azzurro
- l'utente può continuare a cliccare sulle altre celle.

La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).

Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- ifficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

Consigli del giorno:
- Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
- Pensiamo prima al codice senza fare funzioni, poi facendo refactoring implementiamo la funzione corrispondente.
- Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
- Eventuali validazioni e controlli possiamo farli anche in un secondo momento.

*/

/*

Tools:
- const / let
- querySelector / getElementById
- addEvenetListener
- Math (.ceil .floor .random)
- innerHtml / createElement / insertAjacentHTML
- for / while
- classList
- if / else
- function

*/

//creare il markup con un container al quale inseriremo in un secondo momento la griglia
//creo un pulsante nel markup che tramite un selettore seleziono in js
const buttonPlay = document.querySelector('.btn_play');

//creo una variabile che richiami il nodo dellea DOM in cui stampare la grigli
let containerEl = document.querySelector('.container');

//selezionare l'input della modalità nella DOM e salvarlo in una variabile
const buttonSelect = document.querySelector('.btn_select');

//creo la variabile della modalità
let mode = 'easy_mode'

//creo la variabile del numero massimo delle celle
let cellNumber = 0;
const numberArray = [cellNumber - cellNumber + 1];


//creare un eventListenere che richiami il nodo nella DOM del bottone che stampi la griglia
buttonPlay.addEventListener('click', function () {

    //Bonus:

    if (buttonSelect.value === 'easy') {
        console.log(buttonSelect.value);
        cellNumber = 100;
        mode = 'easy_mode'

    } else if (buttonSelect.value === 'normal') {
        console.log(buttonSelect.value);
        cellNumber = 81;
        mode = 'normal_mode'

    } else if (buttonSelect.value === 'hard') {
        console.log(buttonSelect.value);
        cellNumber = 49;
        mode = 'hard_mode'

    }

    //cancellare gli eventuali elementi già presenti nell'elemento in DOM in cui inserire la griglia
    containerEl.innerHTML = ``;

    //creo un ciclo che stampi n volte la cella + il numero generato nel'array creato per i numeri
    for (let i = 0; i < cellNumber; i++) {
        let cellMarkup = `<div class="cell ${mode} ">${numberArray[i]}</div>`;
        //console.log(cellMarkup);

        //lo stesso ciclo deve generare grazie al suo indice un numero incrementale tante volte quante sono le celle
        let number = i + 1 + 1;
        //console.log(number);
        numberArray.push(number);

        containerEl.insertAdjacentHTML("beforeend", cellMarkup);

    }

    //seleziono il nodo nella DOM del markup creato(celle)
    const cellEl = document.querySelectorAll(".cell")


    //creo un ciclo per ciclare tra le celle create con l'eventListener del buttonPlay
    for (let j = 0; j < cellEl.length; j++) {
        const cellSelected = cellEl[j];


        //nel ciclo uso un eventListener che aggiunga o tolga la classe stilizzata in css che attiva o disattiva la casella
        cellSelected.addEventListener('click', function () {
            cellSelected.classList.toggle('bg_active')

            //loggo il numero corrispondente alla cella in console
            console.log(`Hai cliccato il numero:`, numberArray[j]);

        })

    }

})
