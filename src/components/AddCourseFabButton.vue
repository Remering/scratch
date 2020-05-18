<template>
  <v-btn
      @click="$router.push('/course_upload')"
      absolute
      bottom
      color="amber"
      dark
      fab
      fixed
      id="add-btn"
      right
      v-if="role && $route.path !== '/course_upload'"
      x-large
  >
    <v-icon>add</v-icon>
  </v-btn>
</template>

<script>
  import {mapState} from 'vuex';
  import {ACCOUNT_NAMESPACE} from '@/global';

  export default {
    name: 'AddCourseFabButton',

    computed: {
      ...mapState(ACCOUNT_NAMESPACE, [
        'role',
      ]),
    }
  };
</script>

<style scoped>
  #add-btn {
    margin: 48px 48px;
  }
</style>