<template>
  <div class="content">
    <div class="content-summary">
      <span class="content-summary-value">1%</span>进度
      <span class="content-summary-sep">|</span>
      <span class="content-summary-value">5</span>星星
      <span class="content-summary-sep">|</span>
      <span class="content-summary-value">5,600</span>积分
    </div>
    <nav class="content-lessonsNav">
      <Dropdown placement="left">
        <Button icon="ios-menu"></Button>
        <br />
        <DropdownMenu slot="list">
          <DropdownItem>分级测试</DropdownItem>
          <DropdownItem>目录表</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Button icon="ios-arrow-up" @click="handleUp"></Button>
      <Steps :current="lessonStep" direction="vertical" class="content-lessonsNav-steps">
        <Step v-for="n in 10" :key="n"></Step>
      </Steps>
      <Button icon="ios-arrow-down" @click="handleDown"></Button>
      <br />
    </nav>
    <div class="content-lessons" v-if="lessonCards != undefined">
      <Card class="content-lessons-card" v-for="card in lessonCards" :key="card.id" :id="card.id">
        <div slot="title" class="content-lessons-card-title">
          <h1>{{card.id}}</h1>
          <span>{{card.title}}</span>
          <div>
            <Icon type="ios-lock" size="26" v-if="card.isLock" />
          </div>
        </div>
        <Icon :type="card.icon" size="100" @click="handlePlay(card.id)" />
      </Card>
    </div>
    <div v-else>
      <h1>正在施工中！</h1>
    </div>
  </div>
</template>

<script>
import lessonListFromServer from "../../static/lessonsData/lessonList.js";
import Util from "../../libs/util.js";

export default {
  data() {
    return {
      lessonStep: 0,
      anchor: 1,
      stroke_width: 30,
      lessonCards: []
    };
  },
  computed: {
    cardGroupNumber() {
      return Math.floor(this.lessonCards.length / 10) + 1;
    }
  },
  methods: {
    handleUp() {
      if (this.lessonStep <= 0) {
        return false;
      }
      this.anchor -= this.cardGroupNumber;
      this.lessonStep -= 1;
      location.hash = "#" + this.anchor;
    },
    handleDown() {
      if (this.lessonStep >= 9) {
        return false;
      }
      this.anchor += this.cardGroupNumber;
      this.lessonStep += 1;
      location.hash = "#" + this.anchor;
    },
    handlePlay(id) {
      this.$store.commit("changCurrentLessonStepId", id);
      this.$router.push("/lessons/play");
    },
    getLessonList() {
      let lessonId = this.$store.state.currentLessonId;
      return lessonListFromServer[lessonId];
    }
  },
  mounted() {
    this.lessonCards = this.getLessonList().data;
  }
};
</script>

<style scoped lang="less">
@myborder: none;

.content {
  @media screen and (min-height: 901px) and (max-height: 1080px) {
    min-height: 783px;
  }
  min-height: 570px;
  border: @myborder;
  margin: 0px 0px;
  background: url("/src/images/bg.png") no-repeat;
  background-size: 100% 100%;
  .content-lessonsNav {
    position: fixed;
    right: 10%;
    top: 20%;
    height: 250px;
    border: @myborder;
    text-align: center;
    button {
      display: block;
    }
    .content-lessonsNav-steps {
      position: relative;
      left: 30%;
      zoom: 65%;
    }
  }
  .content-lessons {
    display: flex;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    border: @myborder;
    width: 85%;
    right: 10%;
    .content-lessons-card {
      opacity: 0.9;
      margin: 15px 15px;
      width: 200px;
      height: 200px;
      text-align: center;
      .content-lessons-card-title {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        border: @myborder;
        span {
          display: inline;
        }
      }
    }
  }
}
</style>
