<template>
  <Layout :class="$style.about">
    <g-image :class="$style.me" src="~/images/me.jpg" alt="me" width="256" />

    <div :class="$style.links">
      <a href="https://linkedin.com/in/baptiste-menard-profile/"
        ><font-awesome :icon="['fab', 'linkedin-in']"
      /></a>
      <a href="https://github.com/karzam"
        ><font-awesome :icon="['fab', 'github']"
      /></a>
      <a href="https://dev.to/baba"><font-awesome :icon="['fab', 'dev']"/></a>
    </div>

    <p>Hi! I'm Baptiste, 25 year-old, from France.</p>

    <p>
      I'm currently working for a Paris-based company as a software developer,
      fully-remote from the South of France.
    </p>

    <p>
      I'm building web applications with Typescript, React, GraphQL, Node.js...
    </p>

    <p>
      I built this website using Gridsome, a static site generator using Vue.js,
      GraphQL and markdown content files.
    </p>

    <p>
      If you wish to discuss or anything, you can email me at
      bapmenard@gmail.com.
    </p>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "About me",
  },
};
</script>

<style lang="scss" module>
@import "@/styles/colors.scss";

.about {
  margin-bottom: 48px;

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
    color: $porcelain;
  }

  .links {
    text-align: center;
    margin-top: 24px;

    svg {
      color: $porcelain;
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
