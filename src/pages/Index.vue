<template>
  <Layout>
    <PostCard
      v-for="edge in $page.posts.edges"
      :key="edge.node.id"
      :post="edge.node"
    />
  </Layout>
</template>

<page-query>
query {
  posts: allPost {
    edges {
      node {
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
</page-query>

<script>
import PostCard from '~/components/PostCard'

export default {
  metaInfo: {
    title: 'Daily Cactus'
  },
  components: {
    PostCard,
  }
}
</script>
