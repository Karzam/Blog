<template>
  <button
    :class="[$style.switchTheme, theme === 'dark' ? $style.dark : null]"
    @click="onClick"
  >
    <font-awesome :icon="['fas', $store.getters.theme === 'light' ? 'moon' : 'sun']"/>
  </button>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['theme']),
    },
    methods: {
      ...mapActions(['switchTheme']),
      onClick() {
        this.switchTheme();
      }
    }
  }
</script>

<style lang="scss" module>
  @import '@/styles/colors.scss';

  .switchTheme {
    background: none;
    border: 0;

    &.dark {
      svg {
        color: $porcelain;
      }
    }

    svg {
      color: $midgray;
      width: 18px;
      height: 18px;

      &:hover {
        color: $cactusgreen;
      }
    }
  }
</style>
