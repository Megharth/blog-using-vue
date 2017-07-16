<template>
  <div class="blog-output">
    <h1 align="center">{{ blog.title }}</h1>
    <p id="content">{{ blog.content }}</p>
    <div class="tags">
      <span>Tags:</span>
      <md-chip v-for="tag in blog.tags">{{ tag }}</md-chip>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    }
  },
  created() {
    this.$http.get('https://vue-blog-ee166.firebaseio.com/posts/' + this.id + '.json').then(function(data) {
      return data.json();
    }).then(function(data){
      this.blog = data;
    });
  }
}
</script>

<style lang="sass">
@import '../mixins/blogOutput'
</style>
