document.getElementById('btn-submit').addEventListener("click", getHoras);

function getHoras() {
    let inputHoras = document.getElementById('input-horas').value; 
    let inputSueldo = document.getElementById('input-sueldo').value; 
    calcularHoras(inputHoras, inputSueldo);
}

function calcularHoras(inHoras, inSueldo) {

    let horaOrdinaria =  Math.round(((Number(inSueldo)/30)*28)/180);
    let valorHora = Math.round( horaOrdinaria + horaOrdinaria/2 );
    let valorFinal = valorHora*inHoras;
    var myFinal = numeral(valorFinal);
    var myHora = numeral(valorHora);
    var valorFinalPesos = myFinal.format('($0,0)');
    var valorFinalHora = myHora.format('($0,0)');
    alert(`valor hora:${valorFinalHora} total a pagar: ${valorFinalPesos}`);
}
