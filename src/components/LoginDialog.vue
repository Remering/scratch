<template>
  <v-dialog max-width="480" persistent v-model="dialogState.open">
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
              :rules="usernameRules"
              :value="userData.account"
              @input="setAccount"
              color="orange"
              label="邮箱"
          >
          </v-text-field>

          <v-text-field
              :rules="passwordRules"
              :value="userData.password"
              @input="setPassword"
              color="orange"
              label="密码"
              type="password"
          >
          </v-text-field>
          <v-btn
              @click="login"
              block
              color="orange"
              dark
              x-large
          >登录
          </v-btn>
          <div class="heading" id="to-register">
            还没有账号？
            <v-btn
                @click="toRegister"
                class="heading"
                color="blue"
                link
                text
            >注册一个

            </v-btn>

          </div>

        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>

  import {mapActions, mapMutations, mapState} from 'vuex';
  import {LOGIN_NAMESPACE, REGISTER_NAMESPACE, SNACKBAR_NAMESPACE} from '@/global';

  export default {
    name: "LoginDialog",
    data: () => ({
      usernameRules: [
        username => !!username || "用户名不能为空",
      ],
      passwordRules: [
        password => !!password || '密码不能为空',
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
        'setAccount',
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
      },
      toRegister() {
        this.$store.commit(`${LOGIN_NAMESPACE}/close`);
        this.$store.commit(`${REGISTER_NAMESPACE}/open`);
      },
    },
  };
</script>

<style scoped>
  #to-register {
    display: flex;
    align-items: baseline;
  }
</style>