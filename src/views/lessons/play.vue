<template>
	<Layout class="layout">
		<Content class="layout-content">
			<div v-if="currentLessonStep.type === 'introduction'" class="layout-content-intro" >
				<video controls autoplay>
					<source :src="currentLessonStep.url" type="video/mp4"></source>
					<h1>哎呀，视频不见了呢！</h1>
				</video>
			</div>
			<div v-if="currentLessonStep.type === 'firstType'" class="layout-content-firstType">
				<h1>First Typing of {{currentLessonStep.keys}}</h1>
				<Keyboard></Keyboard>
			</div>
			<div v-if="currentLessonStep.type === 'exercise'" class="layout-content-exercise">
				<h1>exercise of {{currentLessonStep.keys}}</h1>
				<Keyboard></Keyboard>
			</div>
            <div v-if="currentLessonStep.type === 'game'" class="layout-content-exercise">
				<h1>exercise of {{currentLessonStep.keys}}</h1>
				<Keyboard></Keyboard>
			</div>
		</Content>
	</Layout>
</template>


<script>
	import lessonDatsFromServer from "../../static/lessonCards.js";
	
	export default{
		components:{
			
		},
		data(){
			return {
				currentLessonId: 0,
				currentLessonData:{},
				currentLessonStepId: 0,
				currentLessonStep: {}
			}
		},
		methods:{
			getCurrentLessonData(){
				this.currentLessonId = this.$store.state.currentLessonId;
				return lessonDatsFromServer[this.currentLessonId];
			},
			getCurrentLessonStep(){
				this.currentLessonStepId = this.$store.state.currentLessonStepId;
				return this.currentLessonData[this.currentLessonStepId-1];
			}
		},
		mounted(){
			this.currentLessonData = this.getCurrentLessonData();
			this.currentLessonStep = this.getCurrentLessonStep();
		}
	}
</script>


<style scoped lang="less">
	@myBorder: lightblue 4px solid;
	.layout{
		.layout-content{
			min-height: 620px;
			display: flex;
			justify-content: center;
			.layout-content-intro{
				padding: 10px;
				@myBorder: lightblue 2px solid;
				video{
					border-radius: 4px;
					min-height: 620px;
				}
			}
		}
	}
</style>
