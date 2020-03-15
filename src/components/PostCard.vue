<template>
  <div :class="[$style.postCard, theme === 'dark' ? $style.dark : null]">
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
  import { mapGetters } from 'vuex'

  export default {
    props: {
      post: {
        type: Object,
        required: true,
      }
    },
    computed: {
      ...mapGetters(['theme']),
    }
}
</script>

<style lang="scss" module>
  @import '@/styles/colors.scss';

  .postCard {
    display: flex;
    flex-direction: column;
    margin-bottom: 48px;
    
    &.dark {
      .tag {
        color: $watergreen;
      }

      .title, .date, .description {
        color: $porcelain;
      }
    }

    .tag {
      margin-right: 8px;
      font-size: 16px;
      color: $midgray;

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
