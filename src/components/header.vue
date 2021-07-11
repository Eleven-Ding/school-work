<template>
  <div class="header">
    <div class="title">XXXXX后台管理系统</div>
    <div class="out-login" @click="HanldeLoginOut">
      <i class="el-icon-s-custom"></i> 退出登录
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    HanldeLoginOut() {
      localStorage.removeItem("token-1");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.header {
  background-color: #42505c;
  height: 100%;
  display: flex;
  align-items: center;
  width: 100%;
  font-family: "正楷";
  padding: 0 10px;
  justify-content: space-between;
  box-shadow: 0px 0px 10px rgb(70, 70, 70);
}
.title {
  color: wheat;
  font-size: 24px;
  font-weight: bold;
}
.out-login {
  color: white;
  cursor: pointer;
}
.out-login:hover {
  color: rgb(158, 247, 249);
}
</style>