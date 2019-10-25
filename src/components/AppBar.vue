<template>
    <v-app-bar absolute app color="orange" dark temporary>
        <v-app-bar-nav-icon @click="switchDrawer">
            <v-icon>menu</v-icon>
        </v-app-bar-nav-icon>
        <v-toolbar-title>Scratch</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field flat solo-inverted hide-details color="yellow" prepend-inner-icon="search" class="hidden-xs-only"></v-text-field>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn outlined dark x-large color="white" @click="openRegisterDialog">注册</v-btn>
            <v-btn text dark x-large color="white" @click="openLoginDialog">登录</v-btn>
        </v-toolbar-items>
    </v-app-bar>
</template>

<script>
  import {mapMutations, mapState} from 'vuex';

  const register = 'register';
  const login = 'login';
  const drawer = 'drawer';
  export default {
    name: "AppBar",
    methods: {
      ...mapMutations({
        openRegisterDialog: `${register}/open`,
        openLoginDialog: `${login}/open`,
        switchDrawer: `${drawer}/switch`,
      }),
    }
  };
</script>

<style scoped>

</style>