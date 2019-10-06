<template>
    <v-app-bar color="orange" dark app>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>Scratch</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field flat solo-inverted hide-details color="yellow" prepend-inner-icon="search" class="hidden-xs-only"></v-text-field>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn outlined dark x-large color="white" @click="$emit('sign-up')">注册</v-btn>
            <v-btn text dark x-large color="white" @click="$emit('sign-in')">登录</v-btn>
        </v-toolbar-items>
    </v-app-bar>
</template>

<script>
  export default {
    name: "AppBar"
  };
</script>

<style scoped>

</style>