<template>
	<Card class='card'>
		<img :src='lesson.image' />
		<h3>{{lesson.name}}</h3>
		<p>{{lesson.description}}</p>
		<slot></slot>
	</Card>
</template>

<script>
	export default{
		props:{
			lesson: {
				type: Object,
				default: function(){
					return {};
				}
			}
		},
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped lang="less">
	.card{
		display: inline-block;
		vertical-align: top;
		text-align: left;
		margin: 20px 30px;
		width: 300px;
		height: 340px;
		&:hover{
			cursor: pointer;
		}
		img{
			width: 100%;
			border-radius: 4px;
		}
		p{
			line-height: 20px;
			height: 70px;
			overflow: hidden;
		}
	}
</style>
