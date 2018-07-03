<template>
  <div class="home">
    <section class="section">
      <router-link class="btn back-btn" to="/home" tag="div"></router-link>
      <div class="title">常见问题</div>
    </section>
    <div class="home-container">
      <div class="question">
        <div class="name">{{item.name}}</div>
        <div class="answer">{{item.discs}}</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import list from 'data';

  export default {
    data() {
      return {
        list
      }
    },
    computed: {
      item() {
        return this.list[this.$route.query.id]
      }
    }
  }
</script>
