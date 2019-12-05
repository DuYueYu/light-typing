<template>
  <div class="content">
    <video controls autoplay>
      <source :src="url" type="video/mp4" />
      <h1>哎呀，视频不见了呢！</h1>
    </video>
  </div>
</template>

<script>
export default {
  props: {
    url: ""
  }
};
</script>

<style lang="less" scoped>
@myBorder: 2px solid blue;

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  video {
    border-radius: 4px;
    min-height: 620px;
  }
}
</style>