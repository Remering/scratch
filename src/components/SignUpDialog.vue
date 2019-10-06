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
                <v-text-field v-model="userData.username" label="用户名" color="orange"></v-text-field>
                <v-text-field v-model="userData.password" label="密码" type="password" color="orange"></v-text-field>
                <v-text-field v-model="userData.repeatedPassword" label="重复密码" type="password" color="orange"></v-text-field>
                <v-text-field v-model="userData.email" label="邮箱" type="email" color="orange"></v-text-field>
                <v-row>
                    <v-col cols="6">
                        <v-text-field v-model="userData.verificationCode" label="验证码" color="orange"></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-btn x-large block outlined color="orange" @click="$emit('sendVerificationCode')">发送验证码</v-btn>
                    </v-col>
                </v-row>
                <v-btn dark block x-large color="orange" @click="$emit('sign-up', userData)">注册</v-btn>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
  export default {
    name: "SignUpDialog",
    props: {
      open: {
        type: Boolean,
        default: false,
      }
    },
    data: () => ({
      userData: {
        username: "",
        password: "",
        repeatedPassword: "",
        email: "",
        verificationCode: ""
      }
    }),

  };
</script>

<style scoped>

</style>