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
    </v-list>
  </v-menu>

</template>

<script>
  import {mapState} from 'vuex';
  import {USER_NAMESPACE} from '@/store';
  import {EXIT, FEEDBACK, PERSON} from '@/route';

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
          {
            icon: EXIT,
            title: '退出登录'
          }

        ]
      };
    },
    computed: {
      ...mapState(USER_NAMESPACE, [
        'username', 'avatarUrl', 'role',
      ])
    }
  };
</script>

<style scoped>

</style>