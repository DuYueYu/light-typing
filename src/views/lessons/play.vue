<!--控制controller 的 controller-->
<template>
  <Layout class="layout">
    <Content class="layout-content">
      <div v-if="lessonStepInfo.type === 'introduction'">
        <VideoController :url="lessonStepInfo.url"></VideoController>
      </div>
      <div v-if="lessonStepInfo.type === 'firstType'">
        <FirstTypeController :data="lessonStepInfo.data" @finished="handleFinished"></FirstTypeController>
      </div>
      <div v-if="lessonStepInfo.type === 'exercise'">
        <ExerciseController :data="lessonStepInfo.data" @finished="handleFinished"></ExerciseController>
      </div>
      <div v-if="lessonStepInfo.type === 'review'">
        <h1>exercise of {{lessonStepInfo.keys}}</h1>
        <TypingController :data="lessonStepInfo.data" @finished="handleFinished"></TypingController>
      </div>
      <div v-if="lessonStepInfo.type === 'game'">
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
      return lessonStepInfo;
    },
    handleFinished() {
      this.lessonStepId++;
      this.$store.commit("changCurrentLessonStepId", this.currentLessonStepId);
      this.lessonStepInfo = this.getLessonStepInfo();
    },
    autoContentHeight() {
      console.log(window.screen);
    }
  },
  mounted() {
    this.lessonId = this.$store.state.currentLessonId;
    this.lessonStepId = this.$store.state.currentLessonStepId;
    this.lessonStepInfo = this.getLessonStepInfo();
    this.autoContentHeight();
  }
};
</script>


<style scoped lang="less">
@myBorder: lightblue 4px solid;

.layout {
  .layout-content {
    @media screen and (min-height: 901px) and (max-height: 1080px) {
      min-height: 783px;
    }
    min-height: 620px;
    display: flex;
    justify-content: center;
  }
}
</style>
