<template>
  <v-card class="flex ma-4" max-width="480">
    <v-img :src="imageUrl" aspect-ratio="1.7778" class="white--text align-end" max-height="270" max-width="480">
      <v-card-title>{{title}}</v-card-title>
    </v-img>
    <v-card-text>{{text}}</v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: 'CourseCard',
    props: {
      imageUrl: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
    }
  };
</script>

<style scoped>

</style>