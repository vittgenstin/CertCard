<template>
  <div :class="classobj" class="app-wrapper">
    <h3>text</h3>
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutSide">
      <sidebar class="sidebar-container">
        <div :class="{hasTagView:needTagsView}" class="main-container">
          <div :class="{'fixed-header':fixedHeader}">
            <navbar />
            <tags-view v-if="needTagsView" />
          </div>
          <app-main />
          <right-panel v-if="showSettings">
            <settings />
          </right-panel>
        </div>
      </sidebar>
    </div>
  </div>
</template>

<script>
import RightPanel from '@/components/RightPanel'
import TopPanel from '@/components/TopPanel'
import { AppMain } from './components'

export default {
  name: 'Layout',
  components: {
    AppMain,
    TopPanel,
    RightPanel
  },
  computed: {
    classObj() {
      return {
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/index.scss";
  @import "~@/styles/variables.scss";

</style>

