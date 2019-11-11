<template>
	<Layout class="layout">
		<Content class="layout-content">
			<Row class="row1">
				<Col span="12" class="row1-col1">
					<h1>在线打字练习</h1><br />
					<p>我们将从指法开始，一步一步教您学会盲打。并通过各种有趣的练习提高您的打字速度，同时提高您的阅读量。</p>
					<br /><br />
					<Button type="primary" size="large" to="/sportal/portal">开始</Button>
				</Col>
				<Col span="12" class="row1-col2">
					<img src="src/images/description-picture.png" />
				</Col>
			</Row>
			<Row class="row2">
				<Col span="12" class="row2-col1">
					<h2>我们如何帮您达到目标？</h2>
					<p>练习每一个关卡，不达五星誓不罢休！无需花费太多时间，在两周之内每天练习几分钟，您就可以成为专家！</p>
				</Col>
				<Col span="12" class="row2-col2">
					<h2>我需要一个帐户吗？</h2>
					<p>您无需创建账户，但是在打字过程中您可以选择创建账户以保存您的进度。</p>
				</Col>
			</Row>
			<Row class="row3">
				<Col v-for="(col,index) in descriptions" :key="index" span="12" class="row3-col">
					<div class="row3-col-content">
						<Icon :type="col.icon" class="row3-col-conten-icon" />
						<p>{{col.desctiption}}</p>
					</div>
				</Col>
			</Row>
			<Carousel :carouselItems="carouselItems"></Carousel>
		</Content>
	</Layout>
</template>

<script>
	import descriptions_from_server from '../libs/descriptions.js'
	import carouselItemsFromServer from '../libs/carouselItems.js'
	import othersFromServer from '../libs/others.js'
	import Carousel from '../components/Carousel.vue'
	
	export default {
		components: {
			Carousel
		},
		data(){
			return{
				descriptions: [],
				carouselItems: [],
				others: []
			}
		},
		methods:{
			getDescriptions(){
				return descriptions_from_server;
			},
			getCarouselItems(){
				return carouselItemsFromServer;
			},
			getOthers(){
				return othersFromServer;
			}
		},
		mounted(){
			this.descriptions = this.getDescriptions();
			this.carouselItems = this.getCarouselItems();
			this.others = this.getOthers();
		}
	}
</script>

<style scoped lang="less">
	@margin-top: 130px;
	@margin-bottom: 130px;
	@margin-left: 240px;
	@margin-right: 30px;
	
	.layout{
		.layout-content{
			text-align: center;
			background-color: #FFFFFF;
			.row1{
				.row1-col1{
					text-align: left;
					padding: @margin-top @margin-right @margin-bottom @margin-left;
					h1{
						font-size: 5em;
					}
					p{
						font-size: 2em;
					}
					Button{
						zoom: 140%;
					}
				}
				.row1-col2{
					padding: @margin-top @margin-left @margin-bottom @margin-right;
					img{
						width: 430px;
						height: 430px;
					}
				}
			}
			.row2{
				background-color: #808695;
				color: white;
				padding: 80px @margin-left;
				.row2-col1, .row2-col2{
					h2{
						font-size: 2.6em;
					}
					p{
						font-size: 1.2em;
					}
				}
			}
			.row3{
				padding: 80px @margin-left;
				.row3-col{
					padding: 20px 30px;
					.row3-col-content{
						p{
							font-size: 1.8em;
						}
						.row3-col-conten-icon{
							zoom: 700%;
						}
					}
				}
			}
		}
	}
</style>
