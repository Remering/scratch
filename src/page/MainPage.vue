<template>
  <v-container fluid>
    <v-row :key="row" class="pa-4 flex-row" justify="space-between" v-for="row in rows">
      <div :key="col" class="flex" v-for="col of [0, 1, 2, 3]">
        <course-card
            :image-url="unknown"
            :title="courses[(row - 1) * 4 + col].name"
            text=""
            v-if="courses[(row - 1) * 4 + col] && courses[(row - 1) * 4 + col].name">
        </course-card>

      </div>
    </v-row>
  </v-container>
</template>

<script>
  import CourseCard from '@/components/CourseCard';
  import {COURSES_NAMESPACE} from '@/store';
  import {mapGetters, mapState} from 'vuex';
  import UNKNOWN from '@/assets/unknown.png';

  export default {
    name: 'MainPage',
    components: {CourseCard},
    data() {
      return {
        unknown: UNKNOWN,
      };
    },
    computed: {
      ...mapGetters(COURSES_NAMESPACE, [
        'rows'
      ]),
      ...mapState(COURSES_NAMESPACE, [
        'courses',
      ])
    }
  };
</script>

<style scoped>
</style>