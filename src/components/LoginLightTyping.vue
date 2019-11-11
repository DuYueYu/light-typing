<template>
	<div class='login'>
		<Tabs v-show="loginOrRigister === 'login'" class='login-box'>
			
			<TabPane label="账号登陆" icon="ios-key">
				<Form ref="formAccount" :model="formAccount" :rules="ruleAccount">
					<FormItem prop="account">
						<Input type="text" v-model="formAccount.account" placeholder="请输入手机号或邮箱">
						<Icon type="ios-person-outline" slot="prepend"></Icon>
						</Input>
					</FormItem>
					<FormItem prop="password">
						<Input type="password" v-model="formAccount.password" placeholder="请输入密码">
						<Icon type="ios-lock-outline" slot="prepend"></Icon>
						</Input>
					</FormItem>
					<FormItem>
						<Button type="primary" @click="handleSubmit('formAccount')" long>登录</Button>
					</FormItem>
				</Form>
			</TabPane>

			<TabPane label="短信登陆" icon="md-phone-portrait" class='login-box-phone'>
				<Form ref="formPhone" :model="formPhone" :rules="rulePhone">
					<FormItem prop="phoneNum">
						<Input type="text" v-model="formPhone.phoneNum" placeholder="请输入手机号码">
						<Icon type="md-phone-portrait" slot="prepend" />
						</Input>
					</FormItem>
					<FormItem prop="verifiCode">
						<Input type="text" v-model="formPhone.verifiCode" placeholder="请输入短信验证码">
						<Button slot="append" type="primary" @click="handleVerifiCode(formPhone)">获取验证码</Button>
						</Input>
					</FormItem>
					<FormItem>
						<Button type="primary" @click="handleSubmit('formPhone')" long>登录</Button>
					</FormItem>
				</Form>
			</TabPane>
		</Tabs>
		
		<Tabs v-show="loginOrRigister === 'register'" class='register-box'>
			<TabPane label="手机号注册" icon="md-phone-portrait">
				<Form ref="formPhoneRigister" :model="formPhoneRigister" :rules="rulePhoneRigister">
					<FormItem prop="phoneNum">
						<Input type="text" v-model="formPhoneRigister.phoneNum" placeholder="请输入手机号码">
						<Icon type="md-phone-portrait" slot="prepend" />
						</Input>
					</FormItem>
					<FormItem prop="verifiCode">
						<Input type="text" v-model="formPhoneRigister.verifiCode" placeholder="请输入短信验证码">
						<Button slot="append" type="primary" @click="handleVerifiCode(formPhoneRigister)">获取验证码</Button>
						</Input>
					</FormItem>
					<FormItem prop="password">
						<Input type="password" v-model="formPhoneRigister.password" placeholder="请输入密码">
						<Icon type="ios-lock-outline" slot="prepend" />
						</Input>
					</FormItem>
					<FormItem>
						<Button type="primary" @click="handleSubmit('formPhoneRigister')" long>注册</Button>
					</FormItem>
				</Form>
			</TabPane>
		</Tabs>

		<div class="login-options">
			<Checkbox>记住密码</Checkbox>
			<a>忘记密码？</a>|<a @click="handleChang">注册</a>
		</div>
		<div class="login-others">
			<span>其他方式登陆：</span>
			<Icon type="logo-github" class="login-others-logo"/>
			<Icon type="logo-twitter" class="login-others-logo"/>
		</div>

	</div>
</template>
<script>
	/*LoginLightTyping仅仅进行本地的数据验证，例如数据的格式验证，与服务器通信部分交给父组件*/
	export default {
		data() {
			return {
				loginOrRigister: 'login',
				currentVerifiCode: '',
				userData:{},
				formAccount: {
					type: 'account',
					account: '',
					password: ''
				},
				formPhone: {
					type: 'phone',
					phoneNum: '',
					verifiCode: ''
				},
				formPhoneRigister: {
					type: 'register',
					phoneNum: '',
					verifiCode: '',
					password: ''
				},
				ruleAccount: {
					account: [{
							required: true,
							message: '请输入正确的用户名',
							trigger: 'change'
						},
						{
							type: 'string',
							min: 6,
							message: '用户名长度错误',
							trigger: 'blur'
						}
					],
					password: [{
							required: true,
							message: '请输入正确的密码',
							trigger: 'change'
						},
						{
							type: 'string',
							min: 8,
							max: 12,
							message: '密码长度错误',
							trigger: 'blur'
						}
					]
				},
				rulePhone: {
					phoneNum: [{
							required: true,
							message: '请输入手机号码',
							trigger: 'change'
						},
						{
							type: 'string',
							len: 11,
							message: '请输入正确的手机号',
							trigger: 'blur'
						}
					],
					verifiCode: [{
							required: true,
							message: '请输入验证码',
							trigger: 'change'
						},
						{
							type: 'string',
							trigger: 'blur'
						}
					]
				},
				rulePhoneRigister: {
					phoneNum: [{
							required: true,
							message: '请输入手机号码',
							trigger: 'change'
						},
						{
							type: 'string',
							len: 11,
							message: '请输入正确的手机号',
							trigger: 'blur'
						}
					],
					verifiCode: [{
							required: true,
							message: '请输入验证码',
							trigger: 'change'
						},
						{
							type: 'string',
							trigger: 'blur'
						}
					],
					password: [{
								required: true,
								message: '请输入密码',
								trigger: 'change'
							},
							{
								type: 'string',
								min: 8,
								max: 12,
								message: '密码长度必须是8到12位',
								trigger: 'blur'
							}
					],
				}
			}
		},
		methods: {
			//这里是登陆/注册按钮验证，只有点击登陆按钮才会生效：调用validate规则，同时手动区分登陆/注册类型：
			//当我点击submit时，validate保证数据（密码、验证码）存在，并保证数据格式正确：
			handleSubmit(loginType) {
				this.$refs[loginType].validate((valid) => {
					//如果数据有效,将其向服务器提交，完成登陆/注册：
					if (valid) {
						var info = this.$data[loginType];
						var message = this.postLoginInfo(info);
						if(message.state === "200"){
							this.userData = message;
							switch(info.type){
								case "account":
									console.log("通过账号+密码登陆成功!");
									break;
								case 'phone':
									console.log("通过手机号+验证码登陆成功!");
									break;
								case 'register':
									console.log("通过手机号验证码+密码注册成功!");
									break;
							}
						}else{
							console.log("服务器请求失败。");
						}
					}
				})
			},
			//这部分验证是单独验证，用以验证手机号码，而validate用以登陆按钮：
			handleVerifiCode(form) {
				//本地验证是否是手机号：
				if (this.isPhoneNumber(form.phoneNum)) {
					//向服务器提交手机号码，令服务器发送验证短信给用户,获取验证码:
					
					//模拟部分：
					this.currentVerifiCode = Math.floor(Math.random() * 10000);
					this.$Notice.success({
						title: '模拟验证码',
						desc: '你的验证码是：' + this.currentVerifiCode
					});
					//真实部分：
				}
			},
			//此处进行本地的手机号码判断：
			//确保输入结果，11位数字：
			isPhoneNumber(number) {
				if(number === ''){
					return false;
				}
				if(isNaN(Number(number))){
					console.log("isNaN(Number(number))");
					return false;
				}
				if (number.toString().length != 11) {
					return false;
				}
				return true;
			},
			//向服务器提交登陆信息：
			postLoginInfo(info) {
				//模拟部分：
				return {
					state: '200',
					id: 12345,
					name: 'Yates',
					avatar: 'url'
				};
				//真实服务器交互部分：
			    axios.post('url', {info})
				.then((response) => {
					console.log(response);
					return response;
				})
				.catch((error) => {
					console.log(error);
				})
				.then(() => {
					console.log('always executed :no response !');
				});
			},
			handleChang() {
				this.loginOrRigister === 'login' ? this.loginOrRigister = 'register' : this.loginOrRigister = 'login';
			}
		}
	}
</script>

<style scoped lang="less">
	.login {
		display: inline-block;
		width: 380px;
		height: 400px;

		.login-box,
		.register-box {
			zoom: 140%;
		}

		.login-options {
			zoom: 120%;
		}

		.login-others {
			zoom: 120%;
			position: relative;
			top: 40px;
			text-align: left;
			.login-others-logo{
				zoom: 240%;
			}
		}
	}
</style>
