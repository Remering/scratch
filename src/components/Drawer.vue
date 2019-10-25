<template>
    <v-navigation-drawer
            :value="open"
            @close="close"
            class="orange lighten-1"
            stateless>
        <v-list dark>
            <v-list-item
                    :key="item.title"
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
    </v-navigation-drawer>
</template>

<script>
  import {mapMutations, mapState} from 'vuex';

  const namespace = 'drawer';
  export default {
    name: 'Drawer',
    data() {
      return {
        listItems: [
          {
            icon: 'message',
            title: '消息中心',
          },
          {
            icon: 'history',
            title: '历史记录',
          },
          {
            icon: 'settings',
            title: '设置',
          },
          {
            icon: 'feedback',
            title: '反馈',
          }
        ]
      };
    },
    computed: {
      ...mapState(namespace, [
        'open',
      ]),
    },
    methods: {
      ...mapMutations(namespace, [
        'close',
      ]),
    },
  };
</script>

<style scoped>

</style>