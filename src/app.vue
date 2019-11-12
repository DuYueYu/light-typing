<template>
  <div>
    <HeadLightTyping :logined="false"></HeadLightTyping>
    <router-view></router-view>
    <FooterLightTyping></FooterLightTyping>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  beforeDestroy() {},
  methods: {}
};
</script>

<style scoped lang="less">
@import "styles/common.css";
</style>