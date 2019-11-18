<template>
  <div>
    <div>
      <Key v-for="(char, index) in data" :char="char" :key="index"></Key>
    </div>
    <Keyboard @keydown="handleKeydown"></Keyboard>
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

  methods: {
    handleKeydown(key) {
      console.log("key = ", key);
      console.log("this.data = ", this.data);
      if (key === this.data[0]) {
        this.data.shift();
        if (this.data.length === 0) {
          this.$emit("finished");
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
</style>