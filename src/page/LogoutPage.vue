<script>
  import {USER_NAMESPACE} from '@/store';

  export default {
    name: 'LogoutPage',
    beforeRouteEnter(from, to, next) {
      // eslint-disable-next-line no-console
      next(vm => {
        vm.$store.dispatch(`${USER_NAMESPACE}/logout`);
        global.$cookies.keys().forEach(key => global.$cookies.remove(key));
        vm.$router.push('/');
      });
    },
    beforeRouteUpdate() {
      window.confirm('2333');

    }
  };
</script>

<style scoped>

</style>