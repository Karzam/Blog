<template>
  <Layout :class="$style.tag">
    <div :class="$style.head">
      <span :class="$style.tagWord">{{ `#${$page.tag.title}` }}</span>
      <span :class="$style.postNumber">{{ formattedPostNumber }}</span>
    </div>

    <PostCard
      v-for="edge in $page.tag.belongsTo.edges"
      :key="edge.node.id"
      :post="edge.node"
    />
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
      totalCount
      edges {
        node {
          ...on Post {
            id
            title
            date (format: "MMMM D, YYYY")
            description
            path
            tags {
              id
              title
              path
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
  import PostCard from '~/components/PostCard'

  export default {
    metaInfo: {
      title: 'Daily Cactus'
    },
    components: {
      PostCard,
    },
    computed: {
      /**
       * Get formatted post number
       * @type {String}
       */
      formattedPostNumber() {
        const count = this.$page.tag.belongsTo.totalCount

        return count > 1
          ? `(${count} posts)`
          : `(${count} post)`
      }
    }
}
</script>

<style lang="scss" module>
  @import '@/styles/colors.scss';

  .tag {
    .head {
      margin-bottom: 32px;

      .tagWord {
        font-size: 24px;
        color: $watergreen;
      }

      .postNumber {
        color: $porcelain;
        font-size: 16px;
        margin-left: 12px;
      }
    }
  }
</style>