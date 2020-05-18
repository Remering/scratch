<template>
  <v-container>
    <v-card raised>
      <v-list>
        <v-list-item two-line>
          <v-list-item-avatar class="elevation-2" size="128" tile>
            <v-hover v-slot:default="{ hover }">
              <v-img :src="avatarUrl" @mouseover="overlay = true" aspect-ratio="1" contain>
                <v-overlay :value="hover" absolute>
                  <v-btn @click="open" text>更换头像</v-btn>
                </v-overlay>
              </v-img>
            </v-hover>
          </v-list-item-avatar>

          <v-list>
            <v-list-item-content>
              <v-list-item-subtitle>用户名</v-list-item-subtitle>

              <v-list-item-title
                  class="headline"
              >
                {{username}}
              </v-list-item-title>

            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-subtitle>邮箱</v-list-item-subtitle>

              <v-list-item-title
                  class="headline"
              >
                {{email}}
              </v-list-item-title>


            </v-list-item-content>
          </v-list>

        </v-list-item>
      </v-list>
    </v-card>
    <avatar-upload-dialog></avatar-upload-dialog>
  </v-container>

</template>

<script>
  import AvatarUploadDialog from '@/components/AvatarUploadDialog';
  import {mapMutations, mapState} from 'vuex';
  import {ACCOUNT_NAMESPACE, AVATAR_UPLOAD_DIALOG_NAMESPACE} from '@/global';

  const stateNames = [
    'avatarUrl',
    'username',
    'role',
    'email',
  ];
  export default {
    name: 'ProfilePage',
    components: {AvatarUploadDialog},
    data: () => ({
      openDialog: false,
    }),
    computed: {
      ...mapState(ACCOUNT_NAMESPACE, stateNames)
    },

    methods: {
      ...mapMutations(AVATAR_UPLOAD_DIALOG_NAMESPACE, [
        'open'
      ]),
    }
  };
</script>

<style scoped>

</style>