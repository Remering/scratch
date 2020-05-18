<template>
  <v-container>
    <v-card>
      <v-card-text>
        <v-form>
          <span class="headline">请输入您的反馈:</span>
          <v-textarea :value="feedbackText" class="headline" color="orange"></v-textarea>
          <v-btn @click="submit" block color="orange" dark x-large>提交</v-btn>
        </v-form>
      </v-card-text>

    </v-card>
  </v-container>
</template>

<script>
  import {SNACKBAR_NAMESPACE} from '@/global';

  export default {
    name: 'FeedBackPage',
    data() {
      return {
        feedbackText: '',
      };
    },
    methods: {
      submit() {
        this.feedbackText = '';
        this.$store.dispatch(`${SNACKBAR_NAMESPACE}/showSuccess`, '我们已收到您的反馈');
      }
    }

  };
</script>

<style scoped>

</style>