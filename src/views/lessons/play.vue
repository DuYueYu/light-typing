<!--控制controller 的 controller-->
<template>
  <Layout class="layout">
    <Content class="layout-content">
      <div v-if="lessonStepInfo.type === 'introduction'" class="layout-content-intro">
        <VideoController></VideoController>
        <video controls autoplay>
          <source :src="lessonStepInfo.url" type="video/mp4" />
          <h1>哎呀，视频不见了呢！</h1>
        </video>
      </div>
      <div v-if="lessonStepInfo.type === 'firstType'" class="layout-content-firstType">
        <h1>First Typing of {{lessonStepInfo.keys}}</h1>
        <TypingController :data="lessonStepInfo.data" @finished="handleFinished"></TypingController>
      </div>
      <div v-if="lessonStepInfo.type === 'exercise'" class="layout-content-exercise">
        <h1>exercise of {{lessonStepInfo.keys}}</h1>
        <TypingController :data="lessonStepInfo.data" @finished="handleFinished"></TypingController>
      </div>
      <div v-if="lessonStepInfo.type === 'review'" class="layout-content-review">
        <h1>exercise of {{lessonStepInfo.keys}}</h1>
        <TypingController :data="lessonStepInfo.data" @finished="handleFinished"></TypingController>
      </div>
      <div v-if="lessonStepInfo.type === 'game'" class="layout-content-game">
        <h1>exercise of {{lessonStepInfo.keys}}</h1>
        <GameController></GameController>
      </div>
    </Content>
  </Layout>
</template>


<script>
import lessonListFromServer from "../../static/lessonsData/lessonList";

export default {
  data() {
    return {
      lessonId: 0,
      lessonStepId: 0,
      lessonStepInfo: {}
    };
  },
  methods: {
    getLessonStepInfo() {
      const lessonInfo = lessonListFromServer[this.lessonId];
      const lessonData = lessonInfo.data;
      const lessonStepInfo = lessonData[this.lessonStepId - 1];
      console.log("lessonStepInfo = ", lessonStepInfo);
      return lessonStepInfo;
    },
    handleFinished() {
      this.lessonStepId++;
      this.$store.commit("changCurrentLessonStepId", this.currentLessonStepId);
      this.lessonStepInfo = this.getLessonStepInfo();
    }
  },
  mounted() {
    this.lessonId = this.$store.state.currentLessonId;
    this.lessonStepId = this.$store.state.currentLessonStepId;
    this.lessonStepInfo = this.getLessonStepInfo();
  }
};
</script>


<style scoped lang="less">
@myBorder: lightblue 4px solid;
.layout {
  .layout-content {
    min-height: 620px;
    display: flex;
    justify-content: center;
    .layout-content-intro {
      padding: 10px;
      @myBorder: lightblue 2px solid;
      video {
        border-radius: 4px;
        min-height: 620px;
      }
    }
  }
}
</style>
