<template>
  <v-card @click="$router.push(`video_play/${courseUuid}`)" class="ma-auto flex" max-width="480" min-width="160">
    <v-img :src="imageUrl" aspect-ratio="1.7778" class="yellow--text align-end" max-height="270" max-width="480">
      <v-card-title>{{title}}</v-card-title>
    </v-img>
    <v-card-text>{{introduction}}</v-card-text>
  </v-card>

</template>

<script>
  export default {
    name: 'ClickableCourseCard',
    props: {
      imageUrl: {
        type: String,
        required: true,
      },
      courseUuid: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      introduction: {
        type: String,
        required: true,
      },

    },
  };
</script>

<style scoped>

</style>