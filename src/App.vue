<template>
  <v-app>
    <app-bar @sign-in="showSignInDialog" @sign-up="showSignUpDialog"></app-bar>
    <v-content>
      <register-dialog :open="signUpDialogOpen" @close="closeSignUpDialog"></register-dialog>
      <login-dialog :open="signInDialogOpen" @close="closeSignInDialog"></login-dialog>
      <snack-bar></snack-bar>
    </v-content>
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar';
import RegisterDialog from '@/components/RegisterDialog';
import LoginDialog from "@/components/LoginDialog";
import SnackBar from '@/components/SnackBar';

export default {
  name: 'App',
  components: {
    LoginDialog,
    RegisterDialog,
    AppBar,
    SnackBar,
  },
  data: () => ({
    signUpDialogOpen: false,
    signInDialogOpen: false,
  }),
  methods: {
    showSignUpDialog() {
      this.signUpDialogOpen = true;
    },
    closeSignUpDialog() {
      this.signUpDialogOpen = false;
    },
    showSignInDialog() {
      this.signInDialogOpen = true;
    },
    closeSignInDialog() {
      this.signInDialogOpen = false;
    },
  }
};
</script>
