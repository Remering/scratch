<template>
  <v-dialog :value="dialogState.open" @close="close" max-width="480" persistent>
    <v-card>
      <v-card-title class="justify-space-between">
        <span class="headline">注册</span>
        <v-btn @click="closeDialog" icon>
          <v-icon>close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-form lazy-validation ref="form">
          <v-text-field
              :counter="18"
              :rules="usernameRules"
              :value="userData.username"
              @input="setUsername"
              color="orange"
              label="用户名"
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

          <v-text-field
              :rules="repeatedPasswordRules"
              :value="userData.repeatedPassword"
              @input="setRepeatedPassword"
              color="orange"
              label="重复密码"
              type="password"
          >
          </v-text-field>

          <v-text-field
              :rules="emailRules"
              :value="userData.email"
              @input="setEmail"
              color="orange"
              label="邮箱"
              type="email"
          >

          </v-text-field>

          <v-select
              :items="dialogState.roleTypes"
              :rules="roleRules"
              :value="roleString"
              @input="setRoleString"
              color="orange"
              label="类型"
          >
          </v-select>

          <v-row>
            <v-col cols="6">
              <v-text-field
                  :counter="6"
                  :rules="verificationCodeRules"
                  :value="userData.verificationCode"
                  @input="setVerificationCode"
                  color="orange"
                  label="验证码"
              >

              </v-text-field>
            </v-col>

            <v-col cols="6">
              <v-btn
                  :disabled="!emailValid"
                  @click="sendVerificationCode"
                  block
                  color="orange"
                  outlined
                  x-large
              >发送验证码
              </v-btn>
            </v-col>
          </v-row>

          <v-btn
              @click="register"
              block
              color="orange"
              dark
              x-large
          >注册
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
  import {mapActions, mapGetters, mapMutations, mapState} from 'vuex';
  import {REGISTER_NAMESPACE, SNACKBAR_NAMESPACE} from '@/global';

  export default {
    name: 'RegisterDialog',
    computed: {
      ...mapState(REGISTER_NAMESPACE, [
        'userData',
        'dialogState',
      ]),
      ...mapGetters(REGISTER_NAMESPACE, [
        'roleString'
      ]),
      emailValid() {
        return this.emailRules.every(rule => rule(this.userData.email) === true);
      },
    },
    data() {
      return {
        usernameRules: [
          username => !!username || '用户名不能为空',
          username => username.length <= 18 || '用户名不能超过18个字符',
        ],
        passwordRules: [
          password => !!password || '密码不能为空',
        ],
        repeatedPassword: null,
        repeatedPasswordRules: [
          repeatedPassword => !!repeatedPassword || '重复密码不能为空',
        ],
        emailRules: [
          email => !!email || '邮箱不能为空',
          email => /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(email) || '邮箱格式不正确',
        ],
        verificationCodeRules: [
          verificationCode => !!verificationCode || '验证码不能为空',
          verificationCode => /[A-Z0-9]{4}/.test(verificationCode) || '验证码格式不正确',
        ],
        roleRules: [
          role => !!role || '类型不能为空'
        ]
      }
    },
    methods: {
      ...mapMutations(REGISTER_NAMESPACE, [
        'setUsername',
        'setEmail',
        'setPassword',
        'setVerificationCode',
        'setRepeatedPassword',
        'setRoleString',
        'close',
      ]),
      ...mapActions(REGISTER_NAMESPACE, [
        'sendVerificationCode', 'clear',
      ]),
      ...mapActions(REGISTER_NAMESPACE, {
          sendRegisterRequest: 'register',
        },
      ),
      register() {
        if (this.validate()) {
          this.sendRegisterRequest();
        } else {
          this.$store.dispatch(`${SNACKBAR_NAMESPACE}/showError`, '信息不足');
        }
      },
      validate() {
        return this.$refs.form.validate();
      },
      closeDialog() {
        this.close();
        this.$refs.form.resetValidation();
      },
    },

  };



</script>

<style scoped>

</style>