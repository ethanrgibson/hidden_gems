<script>


import mapboxgl from 'mapbox-gl';
// mapboxgl.accessToken = "pk.eyJ1IjoidHVtb3Jyb3ctMSIsImEiOiJjbTh4a3Z3Y2EwNGg4Mm1wdnh4bnE3MTN6In0.AFnTksEBZZGvITj0KOLcDg";

export default {
  name: 'MapComponent',
  data() {
    return {
      map: null,
      accessToken: 'pk.eyJ1IjoidHVtb3Jyb3ctMSIsImEiOiJjbTh4a3Z3Y2EwNGg4Mm1wdnh4bnE3MTN6In0.AFnTksEBZZGvITj0KOLcDg'
    };
  },
  mounted() {
    mapboxgl.accessToken = this.accessToken;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-74.5, 40],
      zoom: 9
    });

    this.map.on('click', (e) => {
      console.log('Map clicked at:', e.lngLat);
      // Handle click event
    });

    this.map.on('moveend', () => {
      console.log('Map moved to:', this.map.getCenter());
      // Handle move event
    });
  },
  // beforeDestroy() {
  //    if (this.map) {
  //     this.map.remove();
  //   }
  // }
};
</script>



<template>

  <div id="map" style="height:400px;">

  </div>



</template>


<style lang="scss" scoped></style>