<template>
  <Layout :class="[$style.post, theme === 'dark' ? $style.dark : null]">
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
  import { mapGetters } from 'vuex'

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
    },
    computed: {
      ...mapGetters(['theme']),
    }
  }
</script>

<style lang="scss" module>
  @import '@/styles/colors.scss';

  .post {
    &.dark {
      .head {
        .tag {
          color: $watergreen;
        }

        .date {
          color: $porcelain;
        }
      }

      h1 {
        color: $porcelain;
      }

      .content {
        color: $porcelain;

        a {
          color: $watergreen;
        }
      }

      .back > span {
        color: $watergreen;
      }
    }

    .back {
      margin: 24px 0 24px 0;
      width: fit-content;

      > span {
        color: $midgray;

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
      }

      .tag {
        margin-right: 8px;
        color: $midgray;

        &:hover {
          color: $cactusgreen;
        }
      }
    }

    h1 {
      font-size: 36px;
    }

    .content {
      font-family: Quicksand;
      text-align: justify;
      line-height: 24px;
      font-size: 17px;

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
        color: $midgray;

        &:hover {
          color: $cactusgreen;
        }
      }
    }
  }
</style>
