/// <reference types="jquery" />

$botonUSD = document.querySelector("#divisa1");
$botonEUR = document.querySelector("#divisa2");
$fecha = document.querySelector("#fecha");
$botonBuscar = document.querySelector("#buscar");


fetch("https://v6.exchangerate-api.com/v6/7ebda7de07ba838fe0729a2a/latest/USD")
  .then((respuesta) => respuesta.json())
  .then((respuestaJSON) => {
    Object.keys(respuestaJSON.conversion_rates).forEach(function (element) {
      let option = document.createElement("option");
      option.innerText = element;
      $('#divisa1').append(option);
      $('#divisa1').val("ARS")
    });
    Object.keys(respuestaJSON.conversion_rates).forEach(function (element) {
      let option = document.createElement("option");
      option.innerText = element;
      $('#divisa2').append(option);
      $('#divisa2').val("USD")
    });
  })
  .catch((error) => console.error("FALLÓ", error));
