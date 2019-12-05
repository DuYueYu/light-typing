<template>
  <div class="content">
    <div class="contnet-key">
      <div class="contnet-key-line" id="contnet-key-line">
        <Key v-for="(char, index) in data" :char="char" :key="index" :id="index" class="key"></Key>
      </div>
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
      index: 0,
      lineLenght: 8,
    };
  },
  methods: {
    handleKeydown(key) {
      if (key === this.data[this.index]) {
        let key = document.getElementById(`${this.index}`).style.background = "lightgreen";
      } else {
        document.getElementById(`${this.index}`).style.background = "#ff9944";
      }
      if (this.data.length === this.index + 1) {
        this.$emit("finished");
      }
      this.index++;
      
      if (this.index === this.lineLenght) {
        for (let i = 0; i < this.lineLenght; i++) {
          this.data.shift();
          document.getElementById(`${i}`).style.background = "#fff";
        }
        this.$nextTick();
        this.index = 0;
      }
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
    .contnet-key-line {
      height: 80px;
      border: @myBorder;
      .key {
        margin: 10px 10px;
        zoom: 1.3;
      }
    }
  }
  .contnet-keyboard {
    position: absolute;
    bottom: 10%;
    border: @myBorder;
  }
}
</style>