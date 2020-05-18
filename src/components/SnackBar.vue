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
    import {SNACKBAR_NAMESPACE} from '@/global';

    export default {
        name: 'SnackBar',
        computed: mapState(SNACKBAR_NAMESPACE, [
            'color', 'message', 'open',
        ]),
        methods: mapMutations(SNACKBAR_NAMESPACE, [
            'close', 'setOpen',
        ]),
    };
</script>

<style scoped>

</style>