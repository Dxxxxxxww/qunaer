<template>
  <div>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :bannerImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="list"></detail-list>
    <!-- <button @click="changeUrl">change</button> -->
    <div style="height: 50rem"></div>
  </div>
</template>

<script>
import DetailBanner from "./components/Banner";
import DetailHeader from "./components/Header";
import DetailList from "./components/List";
export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  props: {
    idid: String
  },
  data() {
    return {
      sightName: "",
      bannerImg: "",
      gallaryImgs: [],
      list: []
    };
  },
  mounted() {
    // console.log("detail mounted");
    // console.log(this.$route.params);
    console.log(this.idid);
    this.onGetDetail();
  },
  // activated() {
  //   console.log("detail activated");
  //   console.log(this.$route.fullPath);
  // },
  // beforeRouteUpdate(to, from, next){
  //   console.log(to);
  //   console.log(from);
  //   next();
  // },
  methods: {
    onGetDetail() {
      // this.$axios
      //   .get("/static/mock/detail.json", {
      //     params: {
      //       id: this.idid
      //     }
      //   })
      //   .then(this.onGetDetailSucc);
      this.$axios
        .get("/api/detail.json", {
          params: {
            id: this.idid
          }
        })
        .then(this.onGetDetailSucc);
    },
    onGetDetailSucc(res) {
      console.log(res);
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.sightName = data.sightName;
        this.bannerImg = data.bannerImg;
        this.gallaryImgs = data.gallaryImgs;
        this.list = data.categoryList;
      }
    }
    // changeUrl() {
    //   let id = this.$route.params.id == "0001" ? "0002" : "0001";
    //   this.$router.push(`/detail/${id}`);
    // }
  }
};
</script>

<style lang="stylus" scoped></style>