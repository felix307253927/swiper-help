<template>
  <div class="home">
    <section class="section">
      <div class="btn close-btn" onclick="android.closeHelp()"></div>
      <div class="title">技能指令</div>
    </section>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(s, si) in list" :key="si" v-once="">
          <div class="skill-list">
            <router-link tag="div" :to="'detail?name='+item.name" class="item" v-for="(item,li) in s" :key="li" v-once="">
              <img class="img" :src="'./images/icons/'+item.icon+'.png'">
              <div class="name">{{item.name}}</div>
              <div class="disc" :class="{coming:!item.discs}" v-for="disc in item.discs">{{disc}}</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper/dist/js/swiper.min.js';
  import list from 'data';

  export default {
    data() {
      return {
        list
      }
    },
    mounted() {
      this.swiper = new Swiper('.swiper-container', {
        speed     : 500,
        pagination: {
          el       : '.swiper-pagination',
          clickable: true
        },
      });
    }
  }
</script>
