<template>
  <v-app>
    <app-bar @sign-in="showSignInDialog" @sign-up="showSignUpDialog"></app-bar>
    <v-content>
      <sign-up-dialog :open="signUpDialogOpen" @close="closeSignUpDialog"></sign-up-dialog>
      <sign-in-dialog :open="signInDialogOpen" @close="closeSignInDialog"></sign-in-dialog>
    </v-content>
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar";
import SignUpDialog from "@/components/SignUpDialog";
import SignInDialog from "@/components/SignInDialog";

export default {
  name: 'App',
  components: {
    SignInDialog,
    SignUpDialog,
    AppBar,
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
