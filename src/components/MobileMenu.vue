<template>
  <div class="mobile-menu">
    <button @click="onClick('/')"><span>LATEST</span><span>></span></button>
    <hr/>
    <button @click="onClick('/tag/tech')"><span># TECH</span><span>></span></button>
    <hr/>
    <button @click="onClick('/tag/misc')"><span># MISC</span><span>></span></button>
    <hr/>
    <button @click="onClick('/about')"><span>ABOUT</span><span>></span></button>
    <hr/>
  </div>
</template>

<script>
  export default {
    methods: {
      onClick(route) {
        if (this.$route && this.$route.path != route) {
          this.$router.push({ path: route })  
        }
        this.$emit('input')
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/colors.scss';
  @import '@/styles/global.scss';

  .mobile-menu {
    margin-bottom: 24px;

    button {
      display: flex;
      justify-content: space-between;
      padding: 18px 0;
      width: 100%;
      background: none;
      border: 0;
    }
  }
</style>
