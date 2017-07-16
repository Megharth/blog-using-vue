<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>

import addBlog from './components/AddBlog.vue';
import showBlog from './components/ShowBlogs.vue';
import header from './components/header.vue';

export default {
  components: {
    'add-blog': addBlog,
    'show-blog': showBlog,
    'app-header': header
  },
  data() {
    return {
      title: 'New Blog'
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
