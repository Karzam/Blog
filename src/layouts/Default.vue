
<template>
  <div class="default">
    <div class="content">
      <header class="header">
        <div
          v-show="isMobile"
          class="mobileWrapper"
        >
          <g-link class="tab" to="/about">ABOUT</g-link>

          <g-link to="/" class="logoWrapper">
            <g-image src="~/images/logo.png" width="128" alt="logo"/>
          </g-link>

          <div class="socials">
            <a href="https://linkedin.com/in/baptiste-menard-profile/"><font-awesome :icon="['fab', 'linkedin-in']"/></a>
            <a href="https://github.com/karzam"><font-awesome :icon="['fab', 'github']"/></a>
            <a href="https://dev.to/baba"><font-awesome :icon="['fab', 'dev']"/></a>
          </div>
        </div>

        <div
          v-show="!isMobile"
          class="wrapper"
        >
          <g-link to="/" class="logoWrapper">
            <g-image src="~/images/logo.png" width="128" alt="logo"/>
          </g-link>

          <nav>
            <g-link class="tab" to="/">LATEST</g-link>
            <g-link class="tab" to="/tag/tech"># TECH</g-link>
            <g-link class="tab" to="/tag/misc"># MISC</g-link>
            <g-link class="tab" to="/about">ABOUT</g-link>

            <div class="socials">
              <a href="https://linkedin.com/in/baptiste-menard-profile/"><font-awesome :icon="['fab', 'linkedin-in']"/></a>
              <a href="https://github.com/karzam"><font-awesome :icon="['fab', 'github']"/></a>
              <a href="https://dev.to/baba"><font-awesome :icon="['fab', 'dev']"/></a>
            </div>
          </nav>
        </div>
      </header>

      <slot />
    </div>
  </div>
</template>

<script>
  export default {
    metaInfo: {
      title: 'Welcome'
    },
    computed: {
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

<style lang="scss" scoped>
  @import '@/styles/colors.scss';
  @import '@/styles/global.scss';

  .default {
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
            color: $porcelain;
            position: absolute;
            top: 38px;
            left: 24px;
          }

          .socials {
            position: absolute;
            right: 24px;
            top: 38px;

            > *:not(:last-child) {
              margin-right: 10px;
            }

            svg {
              color: $porcelain;
              width: 22px;
              height: 22px;

              &:hover {
                color: $cactusgreen;
              }
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
            border: 2px solid $watergreen;
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
            color: $porcelain;

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
              color: $porcelain;
              width: 18px;
              height: 18px;

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
