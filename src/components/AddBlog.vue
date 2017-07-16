<template>
  <div>
    <div class="blog-input" v-if="!submitted">
      <form class="form">
        <md-input-container md-clearable>
          <label>Blog Title</label>
          <md-input type="text" v-model="blog.title"></md-input>
        </md-input-container>
        <md-input-container>
          <label>Blog Content</label>
          <md-textarea v-model="blog.content"></md-textarea>
        </md-input-container>
        <div id="checkbox">
          <label>Popular tags: </label>
          <input type="checkbox" value="Technology" v-model="blog.tags">
          <label>Technology</label>
          <input type="checkbox" value="Science" v-model="blog.tags">
          <label>Science</label>
          <input type="checkbox" value="Arts" v-model="blog.tags">
          <label>Arts</label>
          <input type="checkbox" value="Lifestyle" v-model="blog.tags">
          <label>Lifestyle</label>
          <input type="checkbox" value="Fashion" v-model="blog.tags">
          <label>Fashion</label>
          <input type="checkbox" value="Food" v-model="blog.tags">
          <label>Food</label>
          <input type="checkbox" value="Travel" v-model="blog.tags">
          <label>Travel</label>
          <input type="checkbox" value="Music" v-model="blog.tags">
          <label>Music</label>
        </div>
        <div class="form-controls">
          <md-button @click.prevent = "submit">Submit</md-button>
          <md-button @click="output = !output">Toggle Preview</md-button>
        </div>
      </form>
    </div>
    <div v-if="submitted">
      <h2 align="center">Blog Added</h2>
    </div>
    <div class="blog-output" v-if="output">
      <h1 v-if="!blog.title" align="center">Blog Heading</h1>
      <h1 align="center">{{ blog.title}}</h1>
      <p v-if="!blog.content" align="center">Blog Content</p>
      <p id="content">{{ blog.content }}</p>
      <div class="tags">
        <span>Tags:</span>
        <md-chip v-for="tag in blog.tags">{{ tag }}</md-chip>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: '',
        content: '',
        tags: []
      },
      output: false,
      submitted: false
    }
  },
  methods: {
    submit: function() {
      this.$http.post('https://vue-blog-ee166.firebaseio.com/posts.json', this.blog).then(function(data) {
        console.log(data);
        this.submitted = true;
        this.output = true;
      });
    }
  }
}
</script>

<style lang="sass" scoped>
    @import 'AddBlog'
</style>
