<template>
  <div>
    <div class="TopPanel-container" @click="goback">
      <h3>营商路路通</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopPanel',
  mounted() {
    this.insertBody()
  },
  beforeDestroy() {
    const elx = this.$refs.topPanel
    elx.remove()
  },
  methods: {
    insertBody() {
      const elx = this.$refs.topPanel
      const body = document.querySelector('body')
      body.insertBefore(elx, body.firstChild)
    },
    goback() {
      this.$router.go(-1)
    }
  }
}
</script>

<style>

</style>
