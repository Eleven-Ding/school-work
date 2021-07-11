<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">XXXXXX后台管理系统</div>
      <div class="Input_wrap">
        <el-input
          placeholder="用户名"
          v-model="email"
          clearable
          prefix-icon="el-icon-user-solid"
        >
        </el-input>
      </div>
      <div class="Input_wrap">
        <el-input
          placeholder="密码"
          v-model="code"
          clearable
          type="password"
          prefix-icon="el-icon-lock"
        >
        </el-input>
      </div>
      <div class="Input_wrap">
        <el-button type="primary" style="width: 100%" @click.native="login()"
          >登录</el-button
        >
      </div>
      <div class="Input_wrap1">
        <span>Tip:{{ tip }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      code: "",
      disabled: false,
      content: "发送验证码",
      tip: "第二小组的后台管理系统",
    };
  },
  mounted() {
    this.email = sessionStorage.getItem("email") || "";
  },
  methods: {
    //登录
    login() {
      if (this.email === "123456" && this.code === "123456") {
        localStorage.setItem("token-1", "logined");
        this.$router.push("/panel");
      } else {
        this.$message.error("密码错误，请重试！");
      }
    },
    //发送验证码
  },
};
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background: url("https://blog-1303885568.cos.ap-chengdu.myqcloud.com/useImg/blogBackImg.jpg")
    50% fixed;
  background-size: cover;
}

.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-bottom: 1px solid #ddd;
}

.ms-login {
  padding: 0 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  background: rgba(59, 55, 55, 0.3);
  overflow: hidden;
  box-shadow: 0 0 4px white;
}
.Input_wrap {
  display: flex;
  justify-content: center;
  margin: 20px;
}

.Input_wrap1 {
  margin: 20px;
  display: flex;
  justify-content: flex-start;
}
.Input_wrap1 span {
  color: white;
  font-size: 12px;
}
</style>