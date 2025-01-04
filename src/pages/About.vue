<template>
  <Layout :class="$style.about">
    <g-image :class="$style.me" src="~/images/me.png" alt="me" width="256" />

    <div :class="$style.links">
      <a href="https://linkedin.com/in/baptiste-menard-profile/"
        ><font-awesome :icon="['fab', 'linkedin-in']"
      /></a>
      <a href="https://github.com/karzam"
        ><font-awesome :icon="['fab', 'github']"
      /></a>
      <a href="https://dev.to/baba"><font-awesome :icon="['fab', 'dev']" /></a>
    </div>
    <p>
      Hi! I'm Baptiste, a 28-year-old software developer from France, currently
      living in the South of France.
    </p>

    <p>
      I'm a lead software developer at Neoxam, a Paris-based company, where I
      work fully remotely.
    </p>

    <p>
      When I'm not working, I enjoy building web applications with React and
      Node.js, and I'm also a dad of one girl.
    </p>

    <p>
      Feel free to reach out to me to discuss or anything else, I can be reached
      at bapmenard@gmail.com.
    </p>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "About me",
  },
}
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
