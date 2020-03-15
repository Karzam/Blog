<template>
  <Layout :class="$style.post">
    <div :class="$style.head">
      <div :class="$style.tags">
        <g-link
          v-for="tag in $page.post.tags"
          :key="tag.id"
          :to="tag.path"
          :class="$style.tag"
        >
          {{ `#${tag.title}` }}
        </g-link>
      </div>

      <span :class="$style.date">{{ $page.post.date }}</span>
    </div>

    <h1>{{ $page.post.title }}</h1>

    <div v-html="$page.post.content" :class="$style.content"/>

    <g-link to="/" :class="$style.back">
      <span> &larr; Back </span>
    </g-link>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  post (id: $id) {
    title
    date (format: "MMMM D, YYYY")
    content
    tags {
      id
      title
      path
    }
  }
}
</page-query>

<script>
  export default {
    metaInfo() {
      return {
        title: `Baptiste - ${this.$page.post.title}`,
        meta: [
          {
            name: 'description',
            content: this.$page.post.description
          }
        ]
      }
    }
  }
</script>

<style lang="scss" module>
  @import '@/styles/colors.scss';

  .post {
    .back {
      margin: 24px 0 24px 0;
      width: fit-content;

      > span {
        color: $watergreen;

        &:hover {
          color: $cactusgreen;
        }
      }
    }

    .head {
      line-height: 24px;
      align-items: center;

      .date {
        font-size: 16px;
        color: $porcelain;
      }

      .tag {
        margin-right: 8px;
        color: $watergreen;

        &:hover {
          color: $cactusgreen;
        }
      }
    }

    h1 {
      font-size: 36px;
      color: $porcelain;
    }

    .content {
      font-family: Quicksand;
      text-align: justify;
      line-height: 24px;
      font-size: 17px;
      color: $porcelain;

      code[class*="language-"],
      pre[class*="language-"] * {
        font-family: "Monaco", monospace;
        font-size: 14px !important;
      }

      img {
        display: block;
        margin: 0 auto;
        max-width: 100%;
      }

      a {
        word-break: break-word;
        color: $watergreen;

        &:hover {
          color: $cactusgreen;
        }
      }
    }
  }
</style>
