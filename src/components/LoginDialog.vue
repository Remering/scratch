<template>
    <v-dialog v-model="open" persistent max-width="480">
        <v-card>
            <v-card-title class="justify-space-between">
                <span class="headline">登录</span>
                <v-btn icon @click="$emit('close')">
                    <v-icon>close</v-icon>
                </v-btn>
            </v-card-title>
            <v-card-text>
                <v-form ref="form">
                    <v-text-field
                            :value="username"
                            @input="setUsername"
                            label="用户名或邮箱"
                            color="orange"
                            :rules="usernameRules"
                    >
                    </v-text-field>

                    <v-text-field
                            :value="password"
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

  import {mapActions, mapState, mapMutations} from 'vuex'

  const namespace = 'login';

  export default {
    name: "LoginDialog",
    props: {
      open: {
        required: false,
        default: false,
        type: Boolean,
      }
    },
    data: () => ({
      usernameRules: [
        username => !!username || "用户名不能为空",
      ],
      passwordRules: [
        password => !!password || "用户名不能为空",
      ],
    }),
    computed: {
      ...mapState(namespace, [
        'username', 'password'
      ]),
    },
    methods: {
      ...mapActions(namespace, {
          sendLoginRequest: 'login',
        }),
      ...mapMutations(namespace,[
        'setUsername',
        'setPassword',
      ]),
      login() {
        if (this.$refs.form.validate())
          this.sendLoginRequest();
      }
    }

  };
</script>

<style scoped>

</style>