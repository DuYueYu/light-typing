<template>
  <div class="content">
    <div class="contnet-key">
      <transition name="fade">
        <div class="contnet-key-all">
          <span class="contnet-key-tip">按键初试</span>
          <br />
          <span class="contnet-key-word">按照键盘上的指示按下</span>
          <Key :char="data[index]" :id="index" class="active"></Key>
          <span class="contnet-key-word">按键</span>
          <br />
          <span class="contnet-key-tip">尽量不要看键盘哦</span>
        </div>
      </transition>
    </div>
    <Keyboard @keydown="handleKeydown" class="contnet-keyboard" :activeKey="data[index]"></Keyboard>
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
      show: true
    };
  },
  methods: {
    handleKeydown(key) {
      if (key === this.data[this.index]) {
        this.show = false;
        let key = document.getElementById(`${this.index}`);
        if (this.data.length === this.index + 1) {
          this.$emit("finished");
        }
        this.index++;
      }
    }
  }
};
</script>

<style lang="less" scoped>
@myBorder: blue 2px solid;

.fade-enter-active,
.fade-leave-active {
  transition: opacity 3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.active {
  background-color: #0383f2;
  color: #fff;
}

.content {
  position: relative;
  text-align: center;
  width: 100%;
  height: 100%;
  .contnet-key {
    width: 826px;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    .contnet-key-all {
      text-align: left;
      .contnet-key-tip {
        font-size: 1.3em;
      }
      .contnet-key-word {
        vertical-align: middle;
        font-size: 2.7em;
      }
    }
  }
  .contnet-keyboard {
    position: absolute;
    bottom: 10%;
  }
}
</style>