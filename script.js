let api_key = "c48b66e069d3757d4cf733768cc4fa0a";
let difkelvin = 273.15;
let urlBase = "https://api.openweathermap.org/data/2.5/weather";

document.getElementById("botonBusqueda").addEventListener("click", () => {
  const ciudad = document.getElementById("ciudadEntrada").value;
  if (ciudad) {
    fetchDatosClima(ciudad);
  }
});

function fetchDatosClima(ciudad) {
  fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then((data) => data.json())
    .then((data) => mostrarDatosClima(data));
}

function mostrarDatosClima(data) {
  const divDatosClima = document.getElementById("datosClima");
  divDatosClima.innerHTML = "";

  const ciudadNombre = data.name;
  const paisNombre = data.sys.country;
  const temperatura = data.main.temp;
  const humedad = data.main.humidity;
  const descripcion = data.weather[0].description;
  const icono = data.weather[0].icon;

  const ciudadTitulo = document.createElement("h2");
  ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`;

  const temperaturaInfo = document.createElement("p");
  temperaturaInfo.textContent = `The temperature is: ${Math.floor(
    temperatura - difkelvin
  )}°c`;

  const humedadInfo = document.createElement("p");
  humedadInfo.textContent = `The humidity is: ${humedad}%`;

  const iconpInfo = document.createElement("img");
  iconpInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`;

  const descripcionInfo = document.createElement("p");
  descripcionInfo.textContent = `The meteorological description is: ${descripcion}`;

  divDatosClima.appendChild(ciudadTitulo);
  divDatosClima.appendChild(temperaturaInfo);
  divDatosClima.appendChild(humedadInfo);
  divDatosClima.appendChild(descripcionInfo);
  divDatosClima.appendChild(iconpInfo);
}
