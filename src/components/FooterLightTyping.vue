<template>
	<Footer class="footer">
		<Row>
			<Col span="8">
				<p>{{others.authorization}}</p>
				<p>{{others.text}}</p>
			</Col>
			<Col span="8">
				<address>
					<p>电子邮箱：{{others.email}}</p>
					<p>电话：{{others.phone}}</p>
				</address>
			</Col>
			<Col span="8" v-for="(other,index) in others.others" :key="index">
				<p>{{other}}</p>
			</Col>
		</Row>
	</Footer>
</template>

<script>
	import othersFromServer from '../libs/others.js'

	export default {
		data() {
			return {
				others: []
			}
		},
		methods: {
			getOthers() {
				return othersFromServer;
			}
		},
		mounted() {
			this.others = this.getOthers();
		}
	}
</script>

<style scoped lang="less">
	@dark-color: #515a6e;
	.footer {
		text-align: center;
		clear: both;
		background-color: @dark-color;
		p{
			color: white;
		}
	}
</style>
