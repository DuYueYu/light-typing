<template>
	<Layout class="portal">	
		<Content class='portal-content'>
			<Card class='portal-content-card'>
				<div class="portal-content-card-title">
					<span slot="title">我的课程</span>
					<Button to='/sportal/catalog' size="large">
						<Icon type="md-add" />
						增加课程
					</Button>
				</div>
				
				<div class='catalog-content-card-cards'>
					<LessonCard v-for="(lesson, index) in myLessonList" :lesson="lesson" :key="index">
						<div class="catalog-content-card-cards-button">
							<Button type="primary" size="large" @click="handleLessonBegin(lesson.id)">开始</Button>
						</div>
					</LessonCard>
				</div>
			</Card>
		</Content>
	</Layout>
</template>

<script>
	import lesson_list_from_server from "../../static/lessonsData/lessonList.js";
	
	export default{
		data(){
			return{
				lessonListFromServer: []
			}
		},
		computed:{
			myLessonIds(){
				return this.$store.state.myLessonList;
			},
			myLessonList(){
				var myList = [];
				this.lessonListFromServer.forEach((lesson) => {
					this.myLessonIds.forEach((item) => {
						if(item.id === lesson.id){
							myList.push(lesson);
						}
					});
				});
				return myList;
			}
		},
		methods:{
			getLessonList(){
				return lesson_list_from_server;
			},
			handleLessonBegin(lessonId){
				this.$store.commit("changCurrentLessonId", lessonId);
				this.$router.push("/lessons/lesson");
			}
		},
		mounted(){
			this.lessonListFromServer = this.getLessonList();
		}
	}
</script>

<style scoped lang="less">
	.portal{
		.portal-content{
			padding: 0px 20px;
			.portal-content-card{
				min-height: 570px;
				.portal-content-card-title{
					font-size: 3em;
				}
				.catalog-content-card-cards{
					.catalog-content-card-cards-button{
						text-align: right;
					}
				}
			}
		}
	}
</style>
