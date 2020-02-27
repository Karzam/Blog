<template>
  <Layout>
    <div class="head">
      <span class="tag">{{ `#${$page.tag.title}` }}</span>
      <span class="postNumber">{{ formattedPostNumber }}</span>
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

<style lang="scss" scoped>
@import '@/styles/colors.scss';
@import '@/styles/global.scss';

.head {
  margin-bottom: 24px;

  .tag {
    font-size: 24px;
  }

  .postNumber {
    color: $midgray;
    font-size: 16px;
    margin-left: 12px;
  }
}

</style>