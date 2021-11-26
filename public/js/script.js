$(document).ready(function () {
    document.getElementById('btn-submit').addEventListener("click", getHoras);
    $('#container-results').addClass("d-none");

    function getHoras(event) {
        event.preventDefault()
        let inputHoras = document.getElementById('input-horas').value;
        let inputSueldo = document.getElementById('input-sueldo').value;

        if (inputHoras != "" & inputSueldo != "") {
            calcularHoras(inputHoras, inputSueldo);
        } else {
            alert("Error");
        }
    }

    function calcularHoras(inHoras, inSueldo) {
        let horaOrdinaria = Math.round(((Number(inSueldo) / 30) * 28) / 180);
        let valorHora = Math.round(horaOrdinaria + horaOrdinaria / 2);
        let valorFinal = valorHora * inHoras;
        let myFinal = numeral(valorFinal);
        let mySueldo = numeral(inSueldo)
        var valorFinalPesos = myFinal.format('($0,0)');
        var valorFinalSueldo = mySueldo.format('($0,0)');
        mostrarResultados(valorFinalPesos, valorFinalSueldo);
    }


    function mostrarResultados(parameter1, parameter2) {
        $('#container-inputs').fadeOut();
        setTimeout(function () {
            $('#container-results').fadeIn(2500);
            $('#container-results').removeClass("d-none");
            $('#container-results').addClass("d-flex");
            let containerNew = document.getElementById("test");
            containerNew.innerHTML += `
            <div class="d-flex flex-column align-items-around justify-content-center w-100">
                <div class="d-flex justify-content-center align-items-center">
                    <p class="show__text">Sueldo base:</p>
                    <input type="text" value="${parameter2}" class="clipboard-input">
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <p class="show__text">Horas extras:</p>
                    <input type="text" value="${parameter1}" class="clipboard-input">
                </div>
                <div class="d-flex justify-content-start mt-3">
                    <button class="btn btn-red" id="btn-atras">Volver atrás</button>
                </div>
            </div>
            `;

            document.getElementById('btn-atras').addEventListener("click", volverAtras);
        }, 500);

        setTimeout(500);
    }

    function volverAtras() {
        location.reload();
    }
});

