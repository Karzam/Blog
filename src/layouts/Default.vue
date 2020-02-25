
<template>
  <div class="layout">
    <header class="header">
      <g-link to="/" class="logo-wrapper">
        <g-image src="~/images/logo.png" width="128"/>
      </g-link>

      <nav>
        <g-link class="tab" to="/">LATEST</g-link>
        <g-link class="tab" to="/tag/tech"># TECH</g-link>
        <g-link class="tab" to="/tag/misc"># MISC</g-link>
        <g-link class="tab" to="/about">ABOUT</g-link>
      </nav>
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid $porcelain;
    padding: 10px 10%;
    height: 64px;

    .logo-wrapper {
      display: flex;
      padding: 8px;
      background-color: $watergreen;
      border-radius: 100%;

      > img {
        width: 48px
      }
    }

    nav {
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
</style>
