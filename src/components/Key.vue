<template>
  <Button><span>{{char}}</span></Button>
</template>

<script>
export default {
  props: {
    char: {
      type: String,
      default: " "
    }
  }
};
</script>

<style lang="less" scoped>
@myborder: lightblue 2px solid;

@key_commom_width: 50px;
@key_commom_height: 50px;
.set_key_width_percent(@percent) {
  width: @key_commom_width* @percent;
}

button {
  text-align: center;
  font-weight: bold;
  font-size: 1.6em;
  margin: 1px 1px;
  padding: 0px;
  width: @key_commom_width;
  height: @key_commom_height;
}
</style>