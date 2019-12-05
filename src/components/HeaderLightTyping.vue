<template>
  <Header class="layout">
    <Menu mode="horizontal" theme="dark" active-name="1">
      <div class="layout-nav">
        <div class="layout-nav-logo"></div>
        <MenuItem to="/" name="logo">
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
          <MenuItem to="/login" name="login" v-if="!logined">
            <Icon type="ios-analytics" />登陆/注册
          </MenuItem>
          <MenuItem to="/info" name="info" v-if="logined">
            <Dropdown @on-click="handerMineMenu">
              <Icon type="ios-analytics" />
              {{userId}}
              <DropdownMenu slot="list">
                <DropdownItem name="mime">个人信息</DropdownItem>
                <DropdownItem name="signOut">登出</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </MenuItem>
        </div>
      </div>
    </Menu>
  </Header>
</template>

<script>
export default {
  data() {
    return {
      logined: false,
      userId: null
    };
  },
  methods: {
    handerMineMenu(itemName) {
      switch (itemName) {
        case "mine":
          break;
        case "signOut":
          //这里向服务器发送登出请求：
          //get:/logout
          window.localStorage["userId"] = null;
          this.userId = null;
          this.logined = false;
          break;
      }
    }
  },
  mounted() {
    window.addEventListener("setItemEvent",(e) => {
      if (e.key === "userId") {
        const userId = JSON.parse(window.localStorage["userId"]);
        if (userId) {
          this.userId = userId;
          this.logined = true;
          this.$nextTick();
        }
      }
    });
    const userId = JSON.parse(window.localStorage["userId"]);
    if (userId) {
      this.userId = userId;
      this.logined = true;
    }
  },
  destroy() {
    window.removeEventListener("setItemEvent");
  }
};
</script>

<style scoped lang="less">
.layout {
  .layout-nav {
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
