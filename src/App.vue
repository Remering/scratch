<template>
  <v-app>
    <app-bar></app-bar>
    <v-content>
      <add-course-fab-button></add-course-fab-button>
      <register-dialog></register-dialog>
      <login-dialog></login-dialog>
      <snack-bar></snack-bar>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  import AppBar from '@/components/AppBar';
  import RegisterDialog from '@/components/RegisterDialog';
  import LoginDialog from '@/components/LoginDialog';
  import SnackBar from '@/components/SnackBar';
  import {COURSES_NAMESPACE, USER_NAMESPACE} from '@/store';
  import {mapState} from 'vuex';
  import AddCourseFabButton from '@/components/AddCourseFabButton';

  export default {
    name: 'App',
    components: {
      AddCourseFabButton,
      LoginDialog,
      RegisterDialog,
      AppBar,
      SnackBar,
    },
    computed: mapState(USER_NAMESPACE, [
      'role'
    ]),
    beforeMount() {
      this.$store.dispatch(`${COURSES_NAMESPACE}/fetchCourse`);
      if (this.$store.state.user.loginStatus) return;
      if (this.$cookies.keys().length) {
        this.$store.dispatch(`${USER_NAMESPACE}/fetchProfile`);
      }
    }
  };
</script>
<style scoped>

</style>