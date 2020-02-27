
<template>
  <div class="layout">
    <header class="header">
      <div class="wrapper">
        <g-link to="/" class="logo-wrapper">
          <g-image src="~/images/logo.png" width="128"/>
        </g-link>

        <nav>
          <g-link class="tab" to="/">LATEST</g-link>
          <g-link class="tab" to="/tag/tech"># TECH</g-link>
          <g-link class="tab" to="/tag/misc"># MISC</g-link>
          <g-link class="tab" to="/about">ABOUT</g-link>
        </nav>
      </div>
    </header>

    <slot/>
  </div>
</template>

<style lang="scss" scoped>
  @import '@/styles/colors.scss';
  @import '@/styles/global.scss';

  .darkmode--activated header {
    background-color: black;
  }

  .darkmode--activated .tab {
    color: $porcelain;
  }

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

      @media (min-width: 768px) {
        width: 80%;
      }

      @media (min-width: 1024px) {
        width: 50%;
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

      .logo-wrapper {
        display: flex;

        @media (max-width: 640px) {
          margin: auto;
        }

        > img {
          width: 64px;
          border-radius: 100%;
        }
      }

      nav {
        @media (max-width: 640px) {
          display: none
        }

        .tab {
          font-weight: 500;
          margin-right: 40px;
          white-space: nowrap;

          &:hover {
            color: $cactusgreen
          }
        } 
      }
    }
  }
</style>
