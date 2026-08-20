let plass = 0;

function leggTilItem(item, tomt){
    if (plass > 8){
        alert("Sekken er full!")
    }
    if (tomt.innerHTML !== ""){
        switch (plass){
            case 0:
                document.getElementById('rute0').innerHTML = item;
                tomt.innerHTML = "";
                plass++;
                break;
            case 1:
                document.getElementById('rute1').innerHTML = item;
                tomt.innerHTML = "";
                plass++;
                break;
            case 2:
                document.getElementById('rute2').innerHTML = item;
                tomt.innerHTML = "";
                plass++;
                break;
            case 3:
                document.getElementById('rute3').innerHTML = item;
                tomt.innerHTML = "";
                plass++;
                break;
            case 4:
                document.getElementById('rute4').innerHTML = item;
                tomt.innerHTML = "";
                plass++;
                break;
            case 5:
                document.getElementById('rute5').innerHTML = item;
                tomt.innerHTML = "";
                plass++;
                break;
            case 6:
                document.getElementById('rute6').innerHTML = item;
                tomt.innerHTML = "";
                plass++;
                break;
            case 7:
                document.getElementById('rute7').innerHTML = item;
                tomt.innerHTML = "";
                plass++;
                break;
            case 8:
                document.getElementById('rute8').innerHTML = item;
                tomt.innerHTML = "";
                plass++;
                break;
        }
    }

    
}

function tømSekk(){
    let sekkItems = document.querySelectorAll('#myInventory *');
        for (let item of sekkItems){
            item.innerHTML = "";
        }
    plass = 0;
}

function erDuKlar(){
    if (plass < 9){
        alert("Det er ennå plass i sekken!")
    } 
}

