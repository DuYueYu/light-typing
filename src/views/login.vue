<template>
	<Layout class='layout'>
		<Content class='layout-container'>
			<LoginLightTyping @succeeded="handleSuccueeded"></LoginLightTyping>
		</Content>
	</Layout>
</template>

<script>
	import LoginLightTyping from '../components/LoginLightTyping.vue'
	
	export default {
		data(){
			return{
				
			}
		},
		components: {
			LoginLightTyping
		},
		methods:{
			handleSuccueeded(info){
				console.log(info);
				this.$router.push('/begin');
			}
		},

	}
</script>

<style scoped lang="less">
	.layout {
		position: relative;
		.layout-container{
			padding: 50px 10px;
			text-align: center;
			min-height: 620px;
		}
	}
</style>
