<template>
  <Layout :class="[$style.about, theme === 'dark' ? $style.dark : null]">
    <g-image :class="$style.me" src="~/images/me.jpg" alt="me" width="256"/>

    <div :class="$style.links">
      <a href="https://dev.to/baba"><font-awesome :icon="['fab', 'dev']"/></a>
      <a href="https://github.com/karzam"><font-awesome :icon="['fab', 'github-square']"/></a>
      <a href="https://linkedin.com/in/baptiste-menard-profile/"><font-awesome :icon="['fab', 'linkedin']"/></a>
    </div>

    <p>Hi, I'm Baptiste. A software developer from France.</p>

    <p>I'm currently working for a Paris-based company as a software developer, fully-remote from the South of France. I'm front-end focused but also working on back-end.</p>

    <p>My current stack at work : Vue.js, GraphQL, Node.js, PostgreSQL.</p>

    <p>I studied computer science applied to video game development, which was my career project when I was young.
      I did some internships in various companies and technologies, from native iOS & Swift, to Unity & C# game development.
      Then I tried making some apps with Javascript, and loved it.</p>

    <p>After graduating, I also did an internship in Laguna Hills, California for some months, making a cross platform (React Native) mobile app.</p>

    <p>I built this website using Gridsome, a static site generator using Vue.js, GraphQL and markdown content files.</p>

    <p>If you wish to discuss or anything, you can email me at bapmenard@gmail.com</p>
  </Layout>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    metaInfo: {
      title: 'About me'
    },
    computed: {
      ...mapGetters(['theme']),
    }
  }
</script>

<style lang="scss" module>
  @import '@/styles/colors.scss';

  .about {
    padding-bottom: 48px;

    &.dark {
      p, .links svg {
        color: $porcelain;
      }
    }

    .me {
      display: flex;
      margin: auto;
      width: 128px;
      height: 128px;
      border-radius: 100%;
    }

    p {
      text-align: justify;
      line-height: 24px;
    }

    .links {
      text-align: center;
      margin-top: 24px;

      svg {
        color: $electromagnetic;
        margin: 0 4px;
        width: 24px;
        height: 24px;

        &:hover {
          color: $cactusgreen;
        }
      }
    }
  }

</style>
