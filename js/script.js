// Ogni oggetto zucchina per i prossimi 2 esercizi avranno le seguenti proprietà:
// varietà
// peso
// lunghezza

// 1- Crea 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza. 
// Calcola la somma del peso di tutte le zucchine.

// 2- Crea 10 oggetti che rappresentano una zucchina. 
//  Dividi in due array separati le zucchine che misurano meno o più di 15cm.
//  Infine stampa separatamente quanto pesano i due gruppi di zucchine.

var zucchine = 
[
    {
        "varieta": "patisson",  
        "peso": 10, 
        "lunghezza":  10,    
    },

    {
        "varieta": "romanesca",  
        "peso": 7, 
        "lunghezza":  14,    
    },

    {
        "varieta": "rigata",  
        "peso": 9, 
        "lunghezza":  13,    
    },

    {
        "varieta": "striata",  
        "peso": 13, 
        "lunghezza":  18,    
    },

    {
        "varieta": "rigata",  
        "peso": 12, 
        "lunghezza":  17,    
    },

    {
        "varieta": "romanesca",  
        "peso": 5, 
        "lunghezza":  7,    
    },

    {
        "varieta": "striata",  
        "peso": 10, 
        "lunghezza":  16,    
    },

    {
        "varieta": "patisson",  
        "peso": 3, 
        "lunghezza":  5,    
    },

    {
        "varieta": "lunga",  
        "peso": 11, 
        "lunghezza":  18,    
    },

    {
        "varieta": "striata",  
        "peso": 11, 
        "lunghezza":  11,    
    },

];

//ES.1
// var somma = 0;

// for( var i=0; i < zucchine.length; i++) {
//     var thisZucchina = zucchine[i];        
//     somma = somma + thisZucchina.peso ;
//     //console.log(somma);
// }

// alert("La somma del peso di tutte le zucchine è di "+ somma +"Kg.");




//ES.2
var zucchineLunghe = [];
var sommaLunghe = 0;

var zucchineCorte = [];
var sommaCorte = 0;

for( var i=0; i < zucchine.length; i++) {
    var thisZucchina = zucchine[i];  
    
    if( thisZucchina.lunghezza < 15 ) {
        zucchineCorte.push(thisZucchina);       
        sommaCorte = sommaCorte + thisZucchina.peso;

    } else if( thisZucchina.lunghezza > 15) {
        zucchineLunghe.push(thisZucchina);
        sommaLunghe = sommaLunghe + thisZucchina.peso;
    }
}

// console.log('zucchine lunghe:', zucchineLunghe);
// console.log('zucchine corte:', zucchineCorte);

alert('Le zucchine lunghe pesano ' + sommaLunghe + 'Kg, mentre le zucchine corte pesano complessivamente ' + sommaCorte +'Kg.');

