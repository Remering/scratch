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
              <v-text-field
                  :rules="usernameRules"
                  :value="username"
                  @input="setUsername"
                  class="headline"
                  color="orange"
                  counter="18"
                  v-if="edit"
              >

              </v-text-field>

              <v-list-item-title
                  class="headline"
                  v-else
              >
                {{username}}
              </v-list-item-title>

            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-subtitle>邮箱</v-list-item-subtitle>
              <v-text-field
                  :rules="emailRules"
                  :value="email"
                  @input="setEmail"
                  class="headline"
                  color="orange"
                  v-if="edit"
              >

              </v-text-field>
              <v-list-item-title
                  class="headline"
                  v-else
              >
                {{email}}
              </v-list-item-title>


            </v-list-item-content>
          </v-list>

        </v-list-item>

        <v-list-item-action class="justify-end">
          <v-btn
              @click="startEdit"
              class="orange--text"
              outlined
              right
              v-if="!edit"
          >编辑资料
          </v-btn>
          <v-btn
              @click="endEdit"
              color="orange"
              dark
              right
              v-else
          >完成编辑
          </v-btn>
        </v-list-item-action>
      </v-list>
    </v-card>
    <avatar-upload-dialog></avatar-upload-dialog>
  </v-container>

</template>

<script>
  import {AVATAR_UPLOAD_DIALOG_NAMESPACE, USER_NAMESPACE} from '@/store';
  import AvatarUploadDialog from '@/components/AvatarUploadDialog';
  import {mapMutations, mapState} from 'vuex';

  const stateNames = [
    'avatarUrl',
    'username',
    'role',
    'email',
  ];
  const propNames = stateNames.map(name => name.substring(0, 1).toUpperCase() + name.substring(1));
  export default {
    name: 'ProfilePage',
    components: {AvatarUploadDialog},
    data: () => ({
      edit: false,
      openDialog: false,
      usernameRules: [
        username => !!username || '用户名不能为空',
        username => username.length <= 18 || '用户名不能超过18个字符',
      ],
      emailRules: [
        email => !!email || '邮箱不能为空',
        email => /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(email) || '邮箱格式不正确',
      ],
    }),
    computed: {
      ...mapState(USER_NAMESPACE, stateNames)
    },

    methods: {
      ...mapMutations(USER_NAMESPACE, [
        'setUsername',
        'setEmail',
      ]),
      ...mapMutations(AVATAR_UPLOAD_DIALOG_NAMESPACE, [
        'open'
      ]),
      startEdit() {
        this.edit = true;
      },
      endEdit() {
        propNames.forEach(propName => this.$store.dispatch(`${USER_NAMESPACE}/update`, propName));
        this.edit = false;
      },
    }
  };
</script>

<style scoped>

</style>