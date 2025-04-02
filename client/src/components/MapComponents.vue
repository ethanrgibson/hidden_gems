<script setup>
mapboxgl.accessToken = 'pk.eyJ1IjoidHVtb3Jyb3ctMSIsImEiOiJjbTh4a3Z3Y2EwNGg4Mm1wdnh4bnE3MTN6In0.AFnTksEBZZGvITj0KOLcDg';
const map = new mapboxgl.Map({
  container: 'map', // container ID
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: 'mapbox://styles/mapbox/satellite-v9', // style URL
  projection: 'globe', // Display the map as a globe, since satellite-v9 defaults to Mercator
  zoom: 2, // starting zoom
  center: [108, 3] // // starting center in [lng, lat]
});

map.on('style.load', () => {
  map.MapboxStanderd({}); // Set the default atmosphere style
});

map.on('load', () => {
  map.addSource('earthquakes', {
    type: 'geojson',
    // Use a URL for the value for the `data` property.
    data: 'https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson'
  });

  map.addLayer({
    'id': 'earthquakes-layer',
    'type': 'circle',
    'source': 'earthquakes',
    'paint': {
      'circle-radius': 4,
      'circle-stroke-width': 2,
      'circle-color': 'red',
      'circle-stroke-color': 'white'
    }
  });
});
</script>


<template>
  Hi
</template>


<style lang="scss" scoped></style>