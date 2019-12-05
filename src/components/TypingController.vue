<template>
  <div class="content">
    <div class="contnet-key">
      <Key v-for="(char, index) in data" :char="char" :key="index" :id="index"></Key>
    </div>
    <Keyboard @keydown="handleKeydown" class="contnet-keyboard"></Keyboard>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      index: 0
    };
  },
  methods: {
    handleKeydown(key) {
      if (key === this.data[this.index]) {
        document.getElementById(`${this.index}`).style.background = "lightblue";
      } else {
        document.getElementById(`${this.index}`).style.background = "#ff9944";
      }
      if (this.data.length === this.index + 1) {
        this.$emit("finished");
      }
      this.index++;
    }
  }
};
</script>

<style lang="less" scoped>
@myBorder: blue 2px solid;

.content {
  position: relative;
  text-align: center;
  width: 100%;
  height: 100%;
  border: @myBorder;
  .contnet-key {
    width: 826px;
    height: 30%;
    border: @myBorder;
  }
  .contnet-keyboard {
    position: absolute;
    bottom: 10%;
    border: @myBorder;
  }
}
</style>