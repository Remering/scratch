<template>
    <v-dialog v-model="dialogState.open" max-width="480" persistent>
        <v-card>
            <v-card-title class="justify-space-between">
                <span class="headline">登录</span>
                <v-btn @click="closeDialog" icon>
                    <v-icon>close</v-icon>
                </v-btn>
            </v-card-title>
            <v-card-text>
                <v-form lazy-validation ref="form">
                    <v-text-field
                            :value="userData.username"
                            @input="setUsername"
                            label="用户名或邮箱"
                            color="orange"
                            :rules="usernameRules"
                    >
                    </v-text-field>

                    <v-text-field
                            :value="userData.password"
                            @input="setPassword"
                            label="密码"
                            color="orange"
                            type="password"
                            :rules="passwordRules"
                    >
                    </v-text-field>

                    <v-btn
                            dark
                            block
                            x-large
                            color="orange"
                            @click="login"
                    >登录
                    </v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>

  import {mapActions, mapMutations, mapState} from 'vuex';
  import {LOGIN_NAMESPACE, SNACKBAR_NAMESPACE} from '@/store';

  export default {
    name: "LoginDialog",
    data: () => ({
      usernameRules: [
        username => !!username || "用户名不能为空",
      ],
      passwordRules: [
        password => !!password || "用户名不能为空",
      ],
    }),
    computed: {
      ...mapState(LOGIN_NAMESPACE, [
        'userData', 'dialogState'
      ]),
      ...mapActions(LOGIN_NAMESPACE, [

      ]),
    },
    methods: {
      ...mapActions(LOGIN_NAMESPACE, {
          sendLoginRequest: 'login',
        }),
      ...mapActions(LOGIN_NAMESPACE, [
        'clear',
      ]),
      ...mapMutations(LOGIN_NAMESPACE, [
        'setUsername',
        'setPassword',
        'close',
      ]),
      login() {
        if (this.$refs.form.validate())
          this.sendLoginRequest();
        else
          this.$store.dispatch(`${SNACKBAR_NAMESPACE}/showError`, '信息不足');
      },
      closeDialog() {
        this.close();
        this.$refs.form.resetValidation();
      }
    },
  };
</script>

<style scoped>

</style>