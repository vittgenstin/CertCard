<template>
  <section class="app-main">
    <transition name="fade-transition" mode="out-in">
      <keep-alive :include="cacheViews">
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    cacheViews() {
      return this.$store.state.tagsView.cacheViews
    }, key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
.app-main{
  // navbar = 50
  min-height:calc(100vh - 50px);
  width:100%;
  position:relative;
  overflow: hidden;
}

.fixed-header + .app-main{
  padding-top:50px;
}

.hasTagsView{
  .app-main{
    // navbar + tags-view = 50 + 34 = 84
    min-height:calc(100vh - 84px);
  }
  .fixed-header + .app-main{
    padding-top:84px;
  }
}
</style>

<style lang="scss">
.el-popup-parent--hidden{
  .fixed-header{
    padding-right:15px;
  }
}
</style>
