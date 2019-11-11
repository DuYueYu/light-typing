<template>
	<Header class='layout'>
		<Menu mode="horizontal" theme="dark" active-name="1">
			<div class="layout-nav">
				<div class="layout-nav-logo"></div>
					<MenuItem to="/index" name="logo">
						<span>Light Typing</span>
					</MenuItem>
				<div class="layout-nav-learn">
					<MenuItem to="/sportal/portal" name="portal">
						<Icon type="ios-navigate" />主页
					</MenuItem>
					<MenuItem to="/" name="stats">
						<Icon type="ios-navigate" />数据统计
					</MenuItem>
					<MenuItem to="/" name="badges">
						<Icon type="ios-navigate" />奖章
					</MenuItem>
				</div>
				<div class="layout-nav-mine">
					<MenuItem to="/message" name="message">
						<Icon type="ios-notifications-outline" />消息
					</MenuItem>
					<MenuItem to="/shop" name="shop">
						<Icon type="ios-cart-outline" />商店
					</MenuItem>
					<MenuItem to="/login" name="login" v-if="!currentLogined">
						<Icon type="ios-analytics" />登陆/注册
					</MenuItem>
					<MenuItem to="/info" name="info" v-if="currentLogined">
						<Icon type="ios-analytics" />我的昵称
					</MenuItem>
				</div>
			</div>
		</Menu>
	</Header>
</template>

<script>
	export default{
		props:{
			logined:{
				type: Boolean,
				default: false
			}
		},
		data(){
			return{
				currentLogined: this.logined
			}
		}
	}
</script>

<style scoped lang="less">
	.layout{
		.layout-nav{
			padding: 0 15px;
			.layout-nav-logo {
				border-radius: 3px;
			}
			.layout-nav-mine {
				position: relative;
				float: right;
			}
		}
	}
</style>
