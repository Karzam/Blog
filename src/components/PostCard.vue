<template>
  <div :class="$style.postCard">
    <div :class="$style.tags">
      <g-link
        v-for="tag in post.tags"
        :key="tag.id"
        :to="tag.path"
        :class="$style.tag"
      >
        {{ `#${tag.title}` }}
      </g-link>
    </div>

    <g-link :to="post.path" :class="$style.title">{{ post.title }}</g-link>

    <span :class="$style.date">{{ post.date }}</span>

    <p :class="$style.description">{{ post.description }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      post: {
        type: Object,
        required: true,
      }
    },
  }
</script>

<style lang="scss" module>
  @import '@/styles/colors.scss';

  .postCard {
    display: flex;
    flex-direction: column;
    margin-bottom: 48px;

    .tag {
      margin-right: 8px;
      font-size: 16px;
      color: $watergreen;

      &:hover {
        color: $cactusgreen;
      }
    }

    .title {
      margin: 4px 0 12px 0;
      color: $porcelain;
      font-size: 28px;
      font-weight: 500;

      &:hover {
        color: $cactusgreen;
      }
    }

    .date {
      font-size: 15px;
      color: $porcelain;
    }

    .description {
      color: $porcelain;
      line-height: 24px;
      font-size: 16px;
    }
  }
</style>
