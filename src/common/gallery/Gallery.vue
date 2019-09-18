<template>
  <div class="container" @click="onClose">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="gallery-img" :src="item" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonGallery",
  props: {
    imgs: {
      type: Array
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        paginationType: "fraction",
        observeParents: true,
        observer: true
      }
    };
  },
  methods: {
    onClose() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container {
  overflow: inherit;
}

.container {
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #000000;

  .wrapper {
    width: 100%;
    height: 0;
    padding-bottom: 100%;

    .gallery-img {
      width: 100%;
    }

    .swiper-pagination {
      bottom: -1rem;
      color: #ffffff;
    }
  }
}
</style>