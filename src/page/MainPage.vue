<template>
  <v-container fluid>
    <v-row class="pa-4 flex-row" justify="space-between">
      <course-card :key="col" image-url="https://cn.bing.com/th?id=OIP._vnrtwnsI0cYy018l6rXNAHaFG&pid=Api&rs=1"
                   text="Test" title="THIS IS A TITLE" v-for="col in 5"></course-card>
    </v-row>
  </v-container>
</template>

<script>
  import CourseCard from '@/components/CourseCard';

  export default {
    name: 'MainPage',
    components: {CourseCard}
  };
</script>

<style scoped>
</style>