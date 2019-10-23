<template>
    <v-snackbar :color="color" :value="open" @input="setOpen">
        {{message}}
        <v-btn icon @click="close">
            <v-icon>close</v-icon>
        </v-btn>
    </v-snackbar>
</template>

<script>
  import {mapMutations, mapState} from 'vuex';
  const namespace = 'snackbar';
  export default {
    name: 'SnackBar',
    computed: mapState(namespace, [
        'color', 'message', 'open',
    ]),
    methods: mapMutations(namespace, [
      'close', 'setOpen',
    ]),
  };
</script>

<style scoped>

</style>