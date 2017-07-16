<template>
  <div>
    <md-input-container md-clearable class="input-search">
      <md-input type="text" v-model="search" placeholder="search"></md-input>
    </md-input-container>
    <div v-for="blog in filteredBlogs" class="blogs">
      <router-link :to="'blog/' + blog.id" exact>
        <md-card md-with-hover>
          <md-card-header>
            <div class="md-title" v-rainbow>{{ blog.title | uppercase }}</div>
          </md-card-header>
          <md-card-content>{{blog.content}}</md-card-content>
        </md-card>
      </router-link>
    </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';

export default {
  data() {
    return {
      blogs: [],
      search: ''
    }
  },
  computed: {

  },
  created() {
    this.$http.get('https://vue-blog-ee166.firebaseio.com/posts.json').then(function(data){
      return data.json();
    }).then(function(data) {
      var blogsArray = [];
      for(let key in data){
        data[key].id = key;
        blogsArray.push(data[key]);
      }
      this.blogs = blogsArray;
    });
  },
  mixins: [searchMixin]
}
</script>

<style lang="sass" scoped>
@import 'ShowBlog'
</style>
