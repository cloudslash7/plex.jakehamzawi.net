<template>
    <div>
        <div v-if='!canceled'>
            <h2>Request received! E-mail sent to mail@jakehamzawi.net</h2>
            <h2>If you would like to cancel your request, please <a @click='cancelRequest'>click here</a></h2>
        </div>
        <div v-else>
            <h2>Request canceled</h2>
        </div>
        <h2>View the current database <router-link to='/database'>here</router-link></h2>
</div>
</template>

<script>
export default {
  name: 'Confirmation',
  data() {
      return {
          canceled: false
      }
  },
  methods: {
      cancelRequest() {
          this.$root.$data.media.pop();
          this.canceled = true;
      }
  }
}
</script>

<style scoped>
    a {
        text-decoration: none;
        cursor: pointer;
        color: #c24e4e;
    }
</style>