<template>
  <v-menu close-on-click close-on-content-click offset-y>
    <template v-slot:activator="{ on }">
      <v-btn outlined v-on="on">
        <span>{{username}}</span>
        <v-icon></v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item
          :key="item.title"
          :to="`/${item.icon}`"
          link
          v-for="item in listItems"
      >
        <v-list-item-icon>
          <v-icon>{{item.icon}}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{item.title}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item @click="logout(routeToRoot)" link>
        <v-list-item-icon>
          <v-icon>exit_to_app</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>退出登录</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>

</template>

<script>
  import {mapActions, mapState} from 'vuex';
  import {FEEDBACK, PERSON} from '@/route';
  import {ACCOUNT_NAMESPACE} from '@/global';

  export default {
    name: 'ProfileDropdownMenu',
    data() {
      return {
        listItems: [
          {
            icon: PERSON,
            title: '个人资料',
          },
          // {
          //   icon: MESSAGE,
          //   title: '消息中心',
          // },
          // {
          //   icon: HISTORY,
          //   title: '历史记录',
          // },
          {
            icon: FEEDBACK,
            title: '反馈',
          },

        ]
      };
    },
    computed: {
      ...mapState(ACCOUNT_NAMESPACE, [
        'username', 'avatarUrl', 'role',
      ])
    },
    methods: {
      ...mapActions(ACCOUNT_NAMESPACE, [
        'logout'
      ]),
      routeToRoot() {
        this.$router.push('/');
      }
    }
  };
</script>

<style scoped>

</style>