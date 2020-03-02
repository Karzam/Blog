
<template>
  <div class="layout">
    <header class="header">
      <div class="wrapper">
        <button
          v-if="isMobile"
          class="mobileButton"
          @click="onClickMenu"
        >
          <font-awesome :icon="['fas', isMenuOpened ? 'times' : 'bars']"/>
        </button>

        <g-link to="/" class="logo-wrapper">
          <g-image src="~/images/logo.png" width="128"/>
        </g-link>

        <nav>
          <g-link class="tab" to="/">LATEST</g-link>
          <g-link class="tab" to="/tag/tech"># TECH</g-link>
          <g-link class="tab" to="/tag/misc"># MISC</g-link>
          <g-link class="tab" to="/about">ABOUT</g-link>

          <div class="socials">
            <a href="https://dev.to/baba"><font-awesome :icon="['fab', 'dev']"/></a>
            <a href="https://github.com/karzam"><font-awesome :icon="['fab', 'github-square']"/></a>
            <a href="https://linkedin.com/in/baptiste-menard-profile/"><font-awesome :icon="['fab', 'linkedin']"/></a>
          </div>
        </nav>
      </div>
    </header>

    <MobileMenu
      v-if="isMenuOpened"
      @input="onClickMenu"
    />
    <slot v-else />
  </div>
</template>

<script>
  import MobileMenu from '~/components/MobileMenu'

  export default {
    metaInfo: {
      title: 'About me'
    },
    components: {
      MobileMenu,
    },
    data() {
      return {
        isMenuOpened: false,
      }
    },
    computed: {
      isMobile() {
        if (!process || !process.isClient) return

        if (navigator && /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          return true
        } else {
          return false
        }
      }
    },
    methods: {
      onClickMenu() {
        this.isMenuOpened = !this.isMenuOpened
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/colors.scss';
  @import '@/styles/global.scss';

  html {
    height: 100%;
  }

  body {
    display: flex;
    flex-flow: column;
    height: 100%;
    
    > div {
      flex: 1 1 auto;
      padding-top: 104px;
      margin: 0 auto;
      width: 50%;
      display: flex;
      flex-direction: column;

      @media (max-width: 640px) {
        width: 90%;
      }
    }
  }

  header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    border-bottom: 1px solid $porcelain;
    padding: 10px 0;
    width: 100%;
    height: 64px;

    .wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: auto;
      width: 80%;

      .mobileButton {
        position: absolute;
        left: 24px;
        top: 30px;
        background: none;
        border: 0;

        svg {
          color: $electromagnetic;
          width: 24px;
          height: 24px;
        }
      }

      .logo-wrapper {
        display: flex;

        @media (max-width: 640px) {
          margin: auto;
        }

        > img {
          width: 64px;
          height: 64px;
          border-radius: 100%;
        }
      }

      nav {
        display: flex;
        align-items: center;

        @media (max-width: 640px) {
          display: none
        }

        .tab {
          font-weight: 500;
          white-space: nowrap;

          &:not(:last-child) {
            margin-right: 32px;
          }

          &:hover {
            color: $cactusgreen;
          }
        }

        .socials {
          > *:not(:last-child) {
            margin-right: 8px;
          }

          svg {
            color: $midgray;
            width: 20px;
            height: 20px;

            &:hover {
              color: $cactusgreen;
            }
          }
        }
      }
    }
  }
</style>
