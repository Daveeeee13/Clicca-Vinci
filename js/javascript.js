var numerocelle;
var numeroestratto;

function sorteggiaNumero(min, max){
    numeroestratto=Math.round(Math.random()*(max-min)+min);
    console.log("Cella vincente: "+numeroestratto);  
}

function creaTabella(){
    numerocelle=document.getElementById("ncelle").value;
    console.log("Numero di celle: "+numerocelle)

    tabella=document.createElement("table");
    tabella.setAttribute("id", "tabella");
    document.getElementById("contenitore").appendChild(tabella);

    tabella.style.border = "1px solid";
    tabella.style.borderCollapse="collapse";

    var tr = document.createElement("tr");
        tr.setAttribute("id", "trtab");
        tabella.appendChild(tr);

    for(i=0; i<numerocelle; i++){
        var td= document.createElement("td");
        var testo = document.createTextNode(i+1);

        td.setAttribute("id", i);
        td.setAttribute("onclick", "clickcella(id);")

            td.style.border="1px solid";
            td.style.height="3em";
            td.style.width="3em";
            td.style.backgroundColor='white';

            td.appendChild(testo);
            tabella.appendChild(td);
    }

    sorteggiaNumero(0, numerocelle);



}

function clickcella(idpassato){
    distanza=0;
    vinto=false;    //variabile di controllo altrimenti anche se vincevo mi faceva l'ultimo if
    var numeroconv=(parseInt(idpassato, 10)+1); //trasformo il numero da stringa a numero con il parse, sennò non posso incrementarlo di 1. 
                                                //Lo incremento perché l'array va dalla pos 0 e quindi al momento dell'indovinare dovrei partire da una posizione in meno. Inoltre creerebbe problemi agli estremi della tabella
    
    var cella=document.getElementById(idpassato);
    console.log(idpassato);
    
    if(numeroconv==numeroestratto){      
        cella.style.backgroundColor="yellow";
        alert("Hai indovinato, complimenti!");
    }else if(numeroconv>numeroestratto){
            distanza=numeroconv-numeroestratto;
        
    }else if(numeroconv<numeroestratto){
        distanza=numeroestratto-numeroconv;
    }

    console.log("Distanza: "+distanza);

    if(distanza>=10){
        cella.style.backgroundColor="blue";
    }else if(distanza<10 && distanza>5){
        cella.style.backgroundColor="red";
    }else if(distanza<=5 && distanza!=0){
        cella.style.backgroundColor="orange";
    }
}
