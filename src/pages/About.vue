<template>
  <Layout>
    <div class="about">
      <h1>Hi, I'm Baptiste. A software developer from France.</h1>

      <g-image class="me" src="~/images/me.jpg" width="256"/>

      <p>I'm currently working for a Paris-based company as a software developer, fully-remote from the South of France. I'm front-end focused but also working on back-end.</p>

      <p>My current stack at work : Vue.js, GraphQL, Node.js, PostgreSQL.</p>

      <div class="stack">
        <g-image src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"/>
        <g-image src="https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg"/>
        <g-image src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"/>
        <g-image src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"/>
      </div>

      <p>I studied computer science applied to video game development, which was my career project when I was young.
        I did some internships in various companies and technologies, from native iOS & Swift, to Unity & C# game development.
        Then I tried making some apps with Javascript, and loved it.</p>

      <p>After graduating, I also did an internship in Laguna Hills, California for some months, making a cross platform (React Native) mobile app.</p>

      <p>I built this website using Gridsome, a static site generator using Vue.js, GraphQL and markdown content files.</p>

      <p>If you wish to discuss or anything, you can email me at bapmenard@gmail.com</p>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About us'
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/colors.scss';
@import '@/styles/global.scss';

.about {
  h1 {
    font-size: 32px;
    font-weight: 500;
    color: $electromagnetic;
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

  .stack {
    text-align: center;
    margin: 8px 0 8px 0;

    img {
      width: 20px;
      height: 20px;

      &:not(:last-child) {
        margin-right: 8px;
      }
    }
  }
}

</style>
