<template>
  <v-card raised>
    <v-card-actions v-if="loginStatus">
      <v-text-field
          color="orange"
          prefix="向老师提问："
          prepend-inner-icon=""
          v-model="text"

      >

      </v-text-field>
      <v-btn @click="addQuestion(text)" icon>
        <v-icon>check</v-icon>
      </v-btn>
    </v-card-actions>
    <v-card-text v-else>
      登录后才能向老师提问哦
    </v-card-text>
  </v-card>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex';
  import {ACCOUNT_NAMESPACE, VIDEO_PLAY_NAMESPACE} from '@/global';

  export default {
    name: 'AddQuestion',
    computed: {
      ...mapGetters(ACCOUNT_NAMESPACE, [
        'loginStatus'
      ])
    },
    methods: {
      ...mapActions(VIDEO_PLAY_NAMESPACE, [
        'addQuestion'
      ])
    },
    data() {
      return {
        text: ''
      };
    }
  };
</script>

<style scoped>

</style>