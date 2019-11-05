<template>
  <v-app-bar absolute app color="orange" dark fixed temporary>
    <v-toolbar-title
        @click="$router.replace('/')"
        class="headline"
    >Scratch教学在线平台
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <!--        <v-text-field-->
    <!--                class="hidden-xs-only text&#45;&#45;lighten-1 orange&#45;&#45;text"-->
    <!--                color="orange"-->
    <!--                flat-->
    <!--                hide-details-->
    <!--                prepend-inner-icon="search"-->
    <!--                solo-inverted-->
    <!--        >-->
    <!--        </v-text-field>-->

    <!--        <v-spacer></v-spacer>-->

    <v-toolbar-items v-if="loginStatus">
      <profile-dropdown-menu></profile-dropdown-menu>
    </v-toolbar-items>

    <v-toolbar-items v-else>
      <v-btn
          @click="openRegisterDialog"
          color="white"
          dark
          outlined
          x-large
      >注册
      </v-btn>

      <v-btn
          @click="openLoginDialog"
          color="white"
          dark
          text
          x-large
      >登录
      </v-btn>
        </v-toolbar-items>
    </v-app-bar>
</template>

<script>
  import {mapMutations, mapState} from 'vuex';
  import ProfileDropdownMenu from '@/components/ProfileDropdownMenu';
  import {LOGIN_NAMESPACE, REGISTER_NAMESPACE, USER_NAMESPACE} from '@/store';

  export default {
    name: "AppBar",
    components: {ProfileDropdownMenu},
    computed: {
      ...mapState(LOGIN_NAMESPACE, [
        'dialogState', 'userData'
      ]),
      ...mapState(USER_NAMESPACE, [
        'loginStatus'
      ])
    },
    methods: {
      ...mapMutations({
        openRegisterDialog: `${REGISTER_NAMESPACE}/open`,
        openLoginDialog: `${LOGIN_NAMESPACE}/open`,
      }),

    }
  };
</script>

<style scoped>

</style>