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
                <v-col>
                    <v-text-field :value="username" @input="setUsername" label="用户名或邮箱" color="orange"></v-text-field>
                    <v-text-field :value="password" @input="setPassword" label="密码" color="orange"></v-text-field>
                    <v-btn dark block x-large color="orange" @click="login">登录</v-btn>
                </v-col>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>

  import {mapActions, mapState, mapMutations} from 'vuex'

  export default {
    name: "SignInDialog",
    props: {
      open: {
        type: Boolean,
        required: true,
      }
    },
    computed: {
      ...mapState([
        'username', 'password'
      ]),
    },
    methods: {
      ...mapActions('login', [
        'login',
      ]),
      ...mapMutations('login',[
        'setUsername',
        'setPassword',
      ])
    }

  };
</script>

<style scoped>

</style>