const OPENWEATHER_KEY = "26de8966f81bf189923d0bec25892a25";
const MAPBOX_TOKEN = "pk.eyJ1Ijoic2FydmVzaHZpdDIwMjUiLCJhIjoiY21rZ2pudjh4MDhoaDNkcW1oeWlucWdhciJ9.DSwLDwcQwnOUkvnX5zL4UA";

mapboxgl.accessToken = MAPBOX_TOKEN;

let map;
let cityMarker;

// initial map (called at load)
window.onload = () => {
  const defaultLocation = [72.8777, 19.0760]; // [lng, lat] Mumbai

  map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/dark-v11",
    center: defaultLocation,
    zoom: 10
  });
};
