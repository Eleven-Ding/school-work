<template>
  <div class="panel-page">
    <div class="header">
      <Header></Header>
    </div>
    <div class="panle-page-body">
      <div class="body-left">
        <Links></Links>
      </div>
      <div class="body-right">
        <router-view class="children-page"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/header.vue";
import Links from "../components/links.vue";
export default {
  components: {
    Header,
    Links,
  },
};
</script>

<style scoped>
.panel-page {
  display: flex;
  height: 100%;
  flex-direction: column;
}
.header {
  height: 80px;
}
.body-left {
  height: 100%;
}
.panle-page-body {
  flex: 1;
  display: flex;
}
.body-left {
  background-color: #565c63;
  width: 250px;
}
.body-right {
  flex: 1;
  overflow: hidden;
}
.body-right .children-page{
  width: 100%;
}
</style>