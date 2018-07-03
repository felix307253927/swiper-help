<template>
  <div class="home">
    <section class="section">
      <div class="btn close-btn" onclick="android.closeHelp()"></div>
      <div class="title">常见问题</div>
    </section>
    <div class="home-container">
      <router-link tag="div" :to="'/detail?id='+li" class="item" v-for="(item, li) in list" :key="li" v-once="">
        <div class="name">
          {{item.name}}
        </div>
        <i class="icon-right"></i>
      </router-link>
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
  }
</script>
