<template>
  <v-container>
    <v-row>
      <video-player :options="options">
      </video-player>

    </v-row>
  </v-container>
</template>

<script>
  import VIDEO from '@/assets/VID_20190515_170023.mp4';

  export default {
    name: 'VideoPlayPage',
    data() {
      return {
        options: {
          sources: [
            {
              type: '',
              src: VIDEO,
            }
          ]
        }
      };
    }
  };
</script>

<style scoped>

</style>