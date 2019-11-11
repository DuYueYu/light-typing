<template>
	<div class="logo">
		<span :color='color'>Light Typing</span>
	</div>
</template>

<script>
	export default{
		props:{
			color:{
				type: String,
				default: 'white'
			}
		}
	}
</script>

<style scoped lang="less">
	.logo{
		text-align: center;
	}
</style>
