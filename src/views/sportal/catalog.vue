<template>
	<Layout class="catalog">
		<Content class='catalog-content'>
			<Card>
				<div class='catalog-content-title' slot='title'>
					<Button to="/sportal/portal" size="large">
						<Icon type="ios-arrow-back" />返回
					</Button><br /><br />
					<span>课程目录</span>
					<Dropdown class="catalog-content-title-dropdown">
							<span>课程语言:</span>
							<Button>显示所有
								<Icon type="ios-arrow-down"></Icon>
							</Button>
							<DropdownMenu slot="list">
								<DropdownItem>中文</DropdownItem>
								<DropdownItem>英文</DropdownItem>
							</DropdownMenu>
					</Dropdown>
				</div>
				
				<div class='catalog-content-cards'>
					<LessonCard v-for="(lesson, index) in lessonList" :lesson="lesson" :key="index">
						<div class="catalog-content-cards-buttons">
							<Button type="primary" @click="handleGetLesson(lesson.id)" v-if="!isAdded(lesson.id)">
								获取<Icon type="md-download" />
							</Button>
							<Button type="primary" v-if="isAdded(lesson.id)" @click="handleLessonBegin(lesson.id)">打开</Button>
						</div>
					</LessonCard>
				</div>

			</Card>
		</Content>
	</Layout>
</template>

<script>
	import lesson_list from "../../static/lessonList.js";
	
	export default{
		data(){
			return{
				lessonList: [],
			}
		},
		methods:{
			getLessonList(){
				return lesson_list;
			},
			handleGetLesson(lessonId){
				if(!this.isAdded(lessonId)){
					this.$store.commit('addLesson', lessonId);
				}
			},
			isAdded(lessonId){
				return this.myLessonList.find((lesson) => lesson.id === lessonId);
			},
			handleLessonBegin(lessonId){
				this.$store.commit("changCurrentLessonId", lessonId);
				this.$router.push("/lessons/lesson");
			}
		},
		computed:{
			myLessonList(){
				return this.$store.state.myLessonList;
			}
		},
		created(){
			this.lessonList = this.getLessonList();
		}
	}
</script>

<style scoped lang="less">
	.catalog{
		.catalog-content{
			padding: 20px 20px;
			.catalog-content-title{
				font-size: 2.3em;
				padding: 10px 20px;
				.catalog-content-title-dropdown{
					position: absolute;
					right: 40px;
				}
			}
			.catalog-content-cards{
				text-align: left;
				.catalog-content-cards-buttons{
					text-align: right;
				}
			}
		}
	}
</style>
