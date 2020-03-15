
<template>
  <div :class="[$style.default, $style.dark]">
    <div :class="$style.content">
      <header :class="$style.header">
        <div
          v-show="isMobile"
          :key="$style.mobileWrapper"
          :class="$style.mobileWrapper"
        >
          <g-link :class="$style.tab" to="/about">ABOUT</g-link>

          <g-link to="/" :class="$style.logoWrapper">
            <g-image src="~/images/logo.png" width="128" alt="logo"/>
          </g-link>

          <SwitchTheme :class="$style.switchTheme" />
        </div>

        <div
          v-show="!isMobile"
          :key="$style.wrapper"
          :class="$style.wrapper"
        >
          <g-link to="/" :class="$style.logoWrapper">
            <g-image src="~/images/logo.png" width="128" alt="logo"/>
          </g-link>

          <nav>
            <g-link :class="$style.tab" to="/">LATEST</g-link>
            <g-link :class="$style.tab" to="/tag/tech"># TECH</g-link>
            <g-link :class="$style.tab" to="/tag/misc"># MISC</g-link>
            <g-link :class="$style.tab" to="/about">ABOUT</g-link>

            <div :class="$style.socials">
              <a href="https://dev.to/baba"><font-awesome :icon="['fab', 'dev']"/></a>
              <a href="https://github.com/karzam"><font-awesome :icon="['fab', 'github-square']"/></a>
              <a href="https://linkedin.com/in/baptiste-menard-profile/"><font-awesome :icon="['fab', 'linkedin']"/></a>
            </div>

            <SwitchTheme :class="$style.switchTheme" />
          </nav>
        </div>
      </header>

      <v-else

      <slot />
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import SwitchTheme from '~/components/SwitchTheme'

  export default {
    metaInfo: {
      title: 'Welcome'
    },
    components: {
      SwitchTheme,
    },
    data() {
      return {
        isMenuOpened: false,
      }
    },
    computed: {
      ...mapGetters(['theme']),
      isMobile() {
        if (!process || !process.isClient) return

        if (navigator && /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          return true
        } else {
          return false
        }
      },
    }
  }
</script>

<style lang="scss" module>
  @import '@/styles/colors.scss';
  @import '@/styles/global.scss';

  :global(html) {
    height: 100%;
  }

  :global(body) {
    height: 100%;
    display: flex;
    flex-flow: column;
    margin: 0;
    padding: 0;
  }

  .default {
    height: -webkit-fill-available;
    display: table;

    &.dark {
      background-color: $darkgreen;

      .content {
        .wrapper, .mobileWrapper {
          .tab {
            color: $porcelain;
          }

          .socials svg {
            color: $porcelain;
          }
          
          .logoWrapper img {
            border: 2px solid $porcelain;
          }
        }
      }
    }

    .content {
      flex: 1 1 auto;
      padding-top: 104px;
      margin: 0 auto;
      width: 50%;
      display: flex;
      flex-direction: column;

      @media (max-width: 640px) {
        width: 90%;
      }

      header {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        padding: 10px 0;
        width: 100%;
        height: 64px;

        .mobileWrapper {
          .logoWrapper > img {
            width: 64px;
            height: 64px;
            border-radius: 100%;
            margin: auto;
          }

          .tab {
            position: absolute;
            top: 40px;
            left: 24px;
          }

          .switchTheme {
            position: absolute;
            top: 36px;
            right: 36px;

            svg {
              width: 22px;
              height: 22px;
            }
          }
        }

        .wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: auto;
          width: 80%;
        }

        .logoWrapper {
          display: flex;

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
            display: none;
          }

          .tab {
            font-weight: 500;
            white-space: nowrap;
            color: $midgray;

            &:not(:last-child) {
              margin-right: 32px;
            }

            &:hover {
              color: $cactusgreen;
            }
          }

          .socials {
            margin-right: 16px;

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
  }
</style>
