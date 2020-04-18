
<template>
  <div class="default">
    <div class="content">
      <header class="header">
        <div
          v-show="isMobile"
          class="mobile-wrapper"
        >
          <g-link to="/" class="logo-wrapper">
            <g-image src="~/images/logo.png" width="64" alt="logo"/>
            <span>Baptiste Ménard</span>
          </g-link>

          <g-link class="tab" to="/about">ABOUT</g-link>
        </div>

        <div
          v-show="!isMobile"
          class="wrapper"
        >
          <g-link to="/" class="logo-wrapper">
            <g-image src="~/images/logo.png" width="64" alt="logo"/>
            <span>Baptiste Ménard</span>
          </g-link>

          <nav>
            <g-link class="tab" to="/">LATEST</g-link>
            <g-link class="tab" to="/tag/tech"># TECH</g-link>
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
      margin: 0 auto;
      max-width: 760px;
      display: flex;
      flex-direction: column;

      @media (max-width: 768px) {
        width: 80%;
      }

      @media (max-width: 640px) {
        width: 90%;
      }

      header {
        padding: 10px 0;
        width: 100%;
        height: 64px;
        margin-bottom: 24px;

        .mobile-wrapper,
        .wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: auto;

          .logo-wrapper {
            display: flex;
            align-items: center;
            height: 64px;

            > a {
              color: white;
              font-size: 22px;

              &:hover {
                color: $cactusgreen;
              }
            }

            > img {
              width: 28px;
              height: 28px;
              margin-right: 8px;
            }
          }
        }

        .mobile-wrapper {
          width: 90%;

          .logo-wrapper {
            > a {
              color: white;
              font-size: 20px;
            }
          }

          .tab {
            color: $porcelain;
            font-size: 16px;
            margin-right: 8px;
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
