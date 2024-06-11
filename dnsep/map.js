////// INITIALIZE MAP //////
var map = L.map("map", {
  scrollWheelZoom: true,
  zoomControl: false,
  fullscreenControl: false,
}).setView([49.902265, 2.293257], 16);

L.tileLayer(
  "https://api.mapbox.com/styles/v1/saposabio/clx30c88401iy01pcfyn192wh/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2Fwb3NhYmlvIiwiYSI6ImNsdjEwaG1nazAxd2Yyam9kOWhsdTQ4ODEifQ.Awd34FiKdiMfxG7IZoqTEw",
  {
    attribution:
      '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>',
    tileSize: 512,
    maxZoom: 19,
    zoomOffset: -1,
  }
).addTo(map);

// when you click on the map
var popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at:<br>" + e.latlng.toString())
    .openOn(map);
}
map.on("click", onMapClick);

var iconEsad = L.icon({
  iconUrl: "assets/icons/esad.svg",
  iconSize: [50, 50],
  iconAnchor: [25, 25],
});

L.marker([49.90227, 2.293251], { icon: iconEsad, riseOnHover: true }).addTo(
  map
);
