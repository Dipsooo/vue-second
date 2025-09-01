<template>
  <div class="map-container">
    <GMapMap
      :center="center"
      :zoom="15"
      style="width: 300px; height: 200px;"
    >
      <GMapMarker :position="center" />
    </GMapMap>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const center = ref({ lat: 27.7172, lng: 85.3240 }); // Example: Kathmandu

    return { center };
  },
});
</script>

<style scoped>
.map-container {
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
}
</style>