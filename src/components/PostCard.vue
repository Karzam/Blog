<template>
  <div class="post-card">
    <div class="tags">
      <g-link
        v-for="tag in post.tags"
        :key="tag.id"
        :to="tag.path"
        class="tag"
      >
        {{ `#${tag.title}` }}
      </g-link>
    </div>

    <g-link :to="post.path" class="title">{{ post.title }}</g-link>

    <span class="date">{{ post.date }}</span>

    <p class="description">{{ post.description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/colors.scss';
@import '@/styles/global.scss';

.post-card {
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;

  .tag {
    margin-right: 8px;
    font-size: 16px;

    &:hover {
      color: $cactusgreen;
    }
  }

  .title {
    margin: 4px 0 12px 0;
    color: $electromagnetic;
    font-size: 32px;
    font-weight: 500;

    &:hover {
      color: $cactusgreen;
    }
  }

  .date {
    font-size: 15px;
  }

  .description {
    color: $midgray;
    line-height: 24px;
    font-size: 15px;
  }
}
</style>
