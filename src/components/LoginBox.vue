<template>
  <div class="login">
    <Tabs v-show="loginOrRigister === 'login'" class="login-box">
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

      <TabPane label="短信登陆" icon="md-phone-portrait" class="login-box-phone">
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

    <Tabs v-show="loginOrRigister === 'register'" class="register-box">
      <TabPane label="手机号注册" icon="md-phone-portrait">
        <Form ref="formPhoneRigister" :model="formPhoneRigister" :rules="rulePhoneRigister">
          <FormItem prop="phoneNum">
            <Input type="text" v-model="formPhoneRigister.phoneNum" placeholder="请输入手机号码">
              <Icon type="md-phone-portrait" slot="prepend" />
            </Input>
          </FormItem>
          <FormItem prop="verifiCode">
            <Input type="text" v-model="formPhoneRigister.verifiCode" placeholder="请输入短信验证码">
              <Button slot="append" type="primary" @click="handleVerifiCode">获取验证码</Button>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="password" v-model="formPhoneRigister.password" placeholder="请输入密码">
              <Icon type="ios-lock-outline" slot="prepend" />
            </Input>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="handlePhoneNumRegister" long>注册</Button>
          </FormItem>
        </Form>
      </TabPane>
    </Tabs>

    <div class="login-options">
      <Checkbox>记住密码</Checkbox>
      <a>忘记密码？</a>|
      <a @click="handleChang">注册</a>
    </div>
    <div class="login-others">
      <span>其他方式登陆：</span>
      <Icon type="logo-github" class="login-others-logo" />
      <Icon type="logo-twitter" class="login-others-logo" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      loginOrRigister: "login",
      currentVerifiCode: "",
      userData: {},
      verification: {},
      formAccount: {
        type: "account",
        account: "",
        password: ""
      },
      formPhone: {
        type: "phone",
        phoneNum: "",
        verifiCode: ""
      },
      formPhoneRigister: {
        type: "register",
        phoneNum: "",
        verifiCode: "",
        password: ""
      },
      ruleAccount: {
        account: [
          {
            required: true,
            message: "请输入正确的用户名",
            trigger: "change"
          },
          {
            type: "string",
            min: 6,
            message: "用户名长度错误",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入正确的密码",
            trigger: "change"
          },
          {
            type: "string",
            min: 8,
            max: 12,
            message: "密码长度错误",
            trigger: "blur"
          }
        ]
      },
      rulePhone: {
        phoneNum: [
          {
            required: true,
            message: "请输入手机号码",
            trigger: "change"
          },
          {
            type: "string",
            len: 11,
            message: "请输入正确的手机号",
            trigger: "blur"
          }
        ],
        verifiCode: [
          {
            required: true,
            message: "请输入验证码",
            trigger: "change"
          },
          {
            type: "string",
            trigger: "blur"
          }
        ]
      },
      rulePhoneRigister: {
        phoneNum: [
          {
            required: true,
            message: "请输入手机号码",
            trigger: "change"
          },
          {
            type: "string",
            len: 11,
            message: "请输入正确的手机号",
            trigger: "blur"
          }
        ],
        verifiCode: [
          {
            required: true,
            message: "请输入验证码",
            trigger: "change"
          },
          {
            type: "string",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "change"
          },
          {
            type: "string",
            min: 8,
            max: 12,
            message: "密码长度必须是8到12位",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit(loginType) {
      this.$refs[loginType].validate(valid => {
        if (valid) {
          var info = this.$data[loginType];
          console.log("info = ", info);
          if (info.type === "account" || info.type === "phone") {
            var message = this.postLogin(info);
          }
          if (message.state === "200") {
            this.userData = message;
            switch (info.type) {
              case "account":
                console.log("通过账号+密码登陆成功!");
                break;
              case "phone":
                console.log("通过手机号+验证码登陆成功!");
                break;
              case "register":
                console.log("通过手机号验证码+密码注册成功!");
                break;
            }
          } else {
            console.log("服务器请求失败。");
          }
        }
      });
    },
    handlePhoneNumRegister() {
      this.$refs["formPhoneRigister"].validate(valid => {
        if (!valid) return false;
        console.log("valid = ", valid);
        const info = this.formPhoneRigister;
        console.log("info = ", info);
        console.log("this.verification = ", this.verification);
        if (
          info.phoneNum == this.verification.phoneNum &&
          info.verifiCode == this.verification.verifiCode
        ) {
          axios
            .post("/register/register", { info })
            .then(res => {
              if (res.data.user.id) {
                this.pushLocalStore("userId", res.data.user.id);
                this.$router.push({ path: "/" });
                this.$Notice.success({
                  title: "注册成功",
                  desc: "注册成功，正在跳转。"
                });
              } else {
                this.$Notice.error({
                  title: "注册失败",
                  desc: "注册失败，请稍作重试。"
                });
              }
            })
            .catch(error => {
              console.log(error);
            });
        } else {
          this.$Notice.error({
            title: "注册失败",
            desc: "请检查您的手机号和验证码."
          });
        }
      });
    },
    handleVerifiCode() {
      const info = this.formPhoneRigister;
      if (this.isPhoneNumber(info.phoneNum)) {
        const userInfo = { phoneNum: info.phoneNum };
        console.log("userInfo = ", userInfo);
        axios
          .post("/register/verifiCode", { userInfo })
          .then(res => {
            const data = res.data;
            this.verification.phoneNum = data.verification.phoneNum;
            this.verification.verifiCode = data.verification.verifiCode;
            this.$Notice.success({
              title: "验证码",
              desc: "你的验证码是：" + this.verification.verifiCode
            });
          })
          .catch(error => {
            console.log(error);
            switch (error.status) {
              case 403:
                this.$Notice.info({
                  title: "已注册",
                  desc: "已经注册过了哦。"
                });
                break;
              default:
                this.$Notice.error({
                  title: "失败",
                  desc: "哎呀，出了点问题呢。"
                });
            }
          });
      }
    },
    //向服务器提交登陆/注册信息：
    postLogin(info) {
      //模拟部分：
      return {
        state: "200",
        id: 12345,
        name: "Yates",
        avatar: "url"
      };
      axios
        .post("/login", { info })
        .then(response => {
          console.log(response);
          return response;
        })
        .catch(error => {
          console.log(error);
        });
    },
    postRigester(info) {
      //真实部分:
      console.log("info = ", info);
      axios
        .post("/register", { info })
        .then(response => {
          console.log(response);
          return response;
        })
        .catch(error => {
          console.log(error);
        });
      //模拟部分：
      return {
        id: Math.floor(Math.random() * 10000)
      };
    },
    isPhoneNumber(number) {
      if (number === "") {
        return false;
      }
      if (isNaN(Number(number))) {
        console.log("isNaN(Number(number))");
        return false;
      }
      if (number.toString().length != 11) {
        return false;
      }
      return true;
    },
    handleChang() {
      this.loginOrRigister === "login"
        ? (this.loginOrRigister = "register")
        : (this.loginOrRigister = "login");
    },
    pushLocalStore(name, value) {
      if (!window.localStorage) return false;
      window.localStorage.setItem(name, JSON.stringify(value));
    }
  }
};
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
    .login-others-logo {
      zoom: 240%;
    }
  }
}
</style>
