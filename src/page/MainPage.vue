<template>
  <v-container fluid>
    <v-row
        class="pa-4 flex-row"
    >
      <clickable-course-card
          :course-uuid="course.uuid"
          :image-url="course.picture"
          :introduction="course.introduction"
          :key="course.uuid"
          :title="course.name"
          class="mb-4"
          v-for="course of array"

      >
      </clickable-course-card>
    </v-row>
  </v-container>
</template>

<script>
  import {mapGetters} from 'vuex';
  import UNKNOWN from '@/assets/unknown.jpg';
  import ClickableCourseCard from '@/components/ClickableCourseCard';
  import {COURSES_NAMESPACE} from '@/global';

  export default {
    name: 'MainPage',
    components: {ClickableCourseCard},
    data() {
      return {
        unknown: UNKNOWN,
      };
    },
    computed: {
      ...mapGetters(COURSES_NAMESPACE, [
        'array', 'get',
      ]),

    }
  };
</script>

<style scoped>
</style>