<template>
  <Layout class="layout">
    <Content class="layout-container">
      <LoginBox @succeeded="handleSuccueeded"></LoginBox>
    </Content>
  </Layout>
</template>

<script>
import LoginBox from "../components/LoginBox.vue";

export default {
  data() {
    return {};
  },
  components: {
    LoginBox
  },
  methods: {
    handleSuccueeded(info) {
      console.log(info);
      this.$router.push("/begin");
    }
  }
};
</script>

<style scoped lang="less">
.layout {
  position: relative;
  .layout-container {
    padding: 50px 10px;
    text-align: center;
    min-height: 620px;
  }
}
</style>
