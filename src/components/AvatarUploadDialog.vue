<template>
  <v-dialog :value="isOpen" @close="close" max-width="480" persistent>
    <v-card>
      <v-card-title class="justify-space-between">
        <span class="headline">上传头像</span>
        <v-btn @click="close" icon>
          <v-icon>close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-file-input
              :rules="avatarRules"
              accept="image/png, image/jpeg, image/jpg"
              autofocus
              color="orange"
              placeholder="选择需要上传的头像"
              prepend-icon="camera"
              show-size
              v-model="file"
          >
          </v-file-input>
          <v-btn @click="upload" block color="orange" dark>
            上传
          </v-btn>
        </v-form>
      </v-card-text>

    </v-card>
  </v-dialog>
</template>

<script>
  import {AVATAR_UPLOAD_DIALOG_NAMESPACE, USER_NAMESPACE} from '@/store';
  import {mapActions, mapMutations, mapState} from 'vuex';

  export default {
    name: 'AvatarUploadDialog',

    data() {
      return {
        file: undefined,
        avatarRules: [
          avatar => !!avatar || '文件不能为空',
          avatar => avatar.size <= 2 * 10e6 || '头像文件必须小于2 MB!',
        ]
      };
    },
    computed: mapState(AVATAR_UPLOAD_DIALOG_NAMESPACE, [
      'isOpen'
    ]),
    methods: {
      ...mapActions(USER_NAMESPACE, {
        uploadAvatar: 'upload'
      }),
      ...mapMutations(AVATAR_UPLOAD_DIALOG_NAMESPACE, [
        'close'
      ]),
      upload() {
        if (this.$refs.form.validate()) {
          // eslint-disable-next-line no-console
          console.log(this.file);
          this.uploadAvatar(this.file);
        }
      }
    }
  };
</script>

<style scoped>

</style>