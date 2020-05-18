<template>
  <div/>
</template>
<script>

  export default {
    name: 'LogoutPage',
    beforeRouteEnter(from, to, next) {
      // eslint-disable-next-line no-console
      next(vm => {
        vm.$router.push('/');
      });
    },

  };
</script>

<style scoped>

</style>