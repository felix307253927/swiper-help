<template>
  <div class="detail">
    <div class="section">
      <router-link class="btn back-btn" to="home" tag="div"></router-link>
      <div class="btn home-btn" @click=""></div>
    </div>
    <div class="detail-box">
      <div class="menus">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide menu" v-for="d in list" :key="d.name">
              <img :src="'./images/icons/'+d.name+'.png'" :alt="d.name">
            </div>
          </div>
        </div>
      </div>
      <div class="view">
        <div class="title">
          {{detail.name}}
          <span class="disc" v-show="detail.disc">( 即将推出 )</span>
        </div>
        <div class="text-view" ref="textView">
          <div class="text" v-for="t in detail.discs">{{t}}</div>
        </div>
      </div>
      <div class="mask"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper/dist/js/swiper.min.js';
  import {details} from '../data';

  export default {
    data() {
      return {
        list  : details,
        curIdx: 7
      }
    },
    computed: {
      detail() {
        return this.list[this.curIdx]
      }
    },
    mounted() {
      let _this    = this;
      let textView = this.$refs.textView;
      let name     = this.$route.query.name, initialSlide = 0;
      for (let i = 0, len = details.length; i < len; i++) {
        let _name = details[i].name;
        if (name === _name) {
          initialSlide = i;
          break;
        }
      }
      this.swiper = new Swiper('.swiper-container', {
        direction            : 'vertical',
        slidesPerView        : 'auto',
        slideToClickedSlide  : true,
//        spaceBetween         : 20,
        centeredSlides       : true,
        freeMode             : true,
        freeModeSticky       : true,
        freeModeMomentumRatio: 0.2,
        initialSlide,
        on                   : {
          slideChangeTransitionEnd: function () {
            _this.curIdx       = this.activeIndex;
            textView.scrollTop = 0;
          }
        }
      });
    }
  }
</script>
