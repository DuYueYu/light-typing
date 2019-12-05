<template>
  <Layout class="layout">
    <Content class="layout-keyboard">
      <div id="firstrow" class="layout-keyboard-row">
        <Button id="key-192">`</Button>
        <Button id="key-49">1</Button>
        <Button id="key-50">2</Button>
        <Button id="key-51">3</Button>
        <Button id="key-52">4</Button>
        <Button id="key-53">5</Button>
        <Button id="key-54">6</Button>
        <Button id="key-55">7</Button>
        <Button id="key-56">8</Button>
        <Button id="key-57">9</Button>
        <Button id="key-48">0</Button>
        <Button id="key-189">-</Button>
        <Button id="key-187">=</Button>
        <Button id="key-8">back</Button>
      </div>
      <div id="secondrow" class="layout-keyboard-row">
        <Button id="key-9">tab</Button>
        <Button id="key-81">q</Button>
        <Button id="key-87">w</Button>
        <Button id="key-69">e</Button>
        <Button id="key-82">r</Button>
        <Button id="key-84">t</Button>
        <Button id="key-89">y</Button>
        <Button id="key-85">u</Button>
        <Button id="key-73">i</Button>
        <Button id="key-79">o</Button>
        <Button id="key-80">p</Button>
        <Button id="key-219">[</Button>
        <Button id="key-221">]</Button>
        <Button id="key-220">\</Button>
      </div>
      <div id="thirdrow" class="layout-keyboard-row">
        <Button id="key-20">caps</Button>
        <Button id="key-65">a</Button>
        <Button id="key-83">s</Button>
        <Button id="key-68">d</Button>
        <Button id="key-70">f</Button>
        <Button id="key-71">g</Button>
        <Button id="key-72">h</Button>
        <Button id="key-74">j</Button>
        <Button id="key-75">k</Button>
        <Button id="key-76">l</Button>
        <Button id="key-186">;</Button>
        <Button id="key-222">'</Button>
        <Button id="key-13">return</Button>
      </div>
      <div id="fourthrow" class="layout-keyboard-row">
        <Button id="key-16-ShiftLeft">shift</Button>
        <Button id="key-90">z</Button>
        <Button id="key-88">x</Button>
        <Button id="key-67">c</Button>
        <Button id="key-86">v</Button>
        <Button id="key-66">b</Button>
        <Button id="key-78">n</Button>
        <Button id="key-77">m</Button>
        <Button id="key-188">,</Button>
        <Button id="key-190">.</Button>
        <Button id="key-191">/</Button>
        <Button id="key-16-ShiftRight">shift</Button>
      </div>
      <div id="fifthrow" class="layout-keyboard-row">
        <Button id="key-17-ControlLeft">ctrl</Button>
        <Button id="key-188">fn</Button>
        <Button id="key-91">win</Button>
        <Button id="key-18-AltLeft">alt</Button>
        <Button id="key-32"></Button>
        <Button id="key-18-AltRight">alt</Button>
        <Button id="key-17-ControlRight">ctrl</Button>
        <Button id="key-other"></Button>
      </div>
    </Content>
  </Layout>
</template>

<script>
export default {
  props: {
    activeKey: {
        type: String,
        default: ""
    }
  },
  data() {
    return {};
  },
  methods: {
    keydown(e) {
      const key = this.getKeyElement(e);
      key.classList.add("pressed");
      this.$emit("keydown", e.key);
      setTimeout(this.keyup, 500, e);
    },
    keyup(e) {
      const key = this.getKeyElement(e);
      key.classList.remove("pressed");
      this.$emit("keyup", e.key);
    },
    getKeyElement(e) {
      let id = "";
      switch (e.keyCode) {
        case 16:
        case 17:
        case 18:
          id = `key-${e.keyCode}-${e.code}`;
          break;
        default:
          id = `key-${e.keyCode}`;
      }
      return document.getElementById(id);
    }
  },
  mounted() {
    window.addEventListener("keydown", this.keydown);
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.keydown);
  }
};
</script>

<style scoped lang="less">
@myborder: lightblue 2px solid;
@key_commom_width: 50px;
@key_commom_height: 50px;
.set_key_width_percent(@percent) {
  width: @key_commom_width* @percent;
}

.layout {
  border: lightgrey 2px solid;
  border-radius: 10px;
  padding: 10px 8px;
  .layout-keyboard {
    width: @key_commom_width*16.6;
    button {
      text-align: center;
      font-weight: bold;
      font-size: 1.6em;
      margin: 1px 1px;
      padding: 0px;
      width: @key_commom_width;
      height: @key_commom_height;
    }
    .layout-keyboard-row {
      #key-8 {
        .set_key_width_percent(2);
      }
      #key-9 {
        .set_key_width_percent(1.8);
      }
      #key-220 {
        .set_key_width_percent(1.2);
      }
      #key-20 {
        .set_key_width_percent(2);
      }
      #key-13 {
        .set_key_width_percent(2.1);
      }
      #key-16-ShiftLeft {
        .set_key_width_percent(2.4);
      }
      #key-16-ShiftRight {
        .set_key_width_percent(2.8);
      }
      #key-32 {
        .set_key_width_percent(6.4);
      }
      #key-other {
        .set_key_width_percent(3.24);
      }
    }
  }
}

.pressed {
  color: white;
  background-color: #5cadff;
}
</style>
