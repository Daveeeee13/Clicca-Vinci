var numerocelle;
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
        var testo = document.createTextNode("");

        td.setAttribute("id", "Td"+i);
        td.setAttribute("onclick", "clickcella(this);")

            td.style.border="1px solid";
            td.style.height="3em";
            td.style.width="3em";
            td.style.backgroundColor='white';

            td.appendChild(testo);
            tabella.appendChild(td);
    }



}