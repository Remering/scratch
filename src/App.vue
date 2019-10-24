<template>
  <v-app>
    <app-bar @sign-in="showLoginDialog"></app-bar>
    <v-content>
      <register-dialog></register-dialog>
      <login-dialog></login-dialog>
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
};
</script>
x