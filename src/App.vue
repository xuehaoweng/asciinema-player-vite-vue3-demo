<template>
  <asciinema-player startAt="0:00" poster="0:00" speed="1" :fontSize="12" :src="data_url"  theme="tango"/>
  <div id="demo"></div>
</template>
<script lang="ts">
import AsciinemaPlayer from "./components/asciinema-player.vue";
import { ref, defineComponent, onMounted } from "vue";
export default defineComponent({
  components: {
    AsciinemaPlayer,
  },
  setup() {
    const data_url =
      "https://e61id1-bucket-demo.oss.laf.run/record.cast";

    return {
      data_url,
    };
  },
});
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
