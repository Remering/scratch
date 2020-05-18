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
  import {mapState} from 'vuex';
  import AddCourseFabButton from '@/components/AddCourseFabButton';
  import {ACCOUNT_NAMESPACE, COURSES_NAMESPACE, LOGIN_NAMESPACE} from '@/global';

  export default {
    name: 'App',
    components: {
      AddCourseFabButton,
      LoginDialog,
      RegisterDialog,
      AppBar,
      SnackBar,
    },
    computed: mapState(ACCOUNT_NAMESPACE, [
      'role'
    ]),
    beforeMount() {
      this.$store.dispatch(`${COURSES_NAMESPACE}/fetchCourse`);
      if (this.$store.state[ACCOUNT_NAMESPACE].loginStatus) return;
      const token = localStorage.getItem('scratch-jwt-token');
      if (token) {
        this.$store.commit(`${ACCOUNT_NAMESPACE}/setToken`, token);
        this.$store.dispatch(`${ACCOUNT_NAMESPACE}/fetchProfile`);
      } else {
        this.$store.commit(`${LOGIN_NAMESPACE}/open`);
      }
    }
  };
</script>
<style scoped>

</style>