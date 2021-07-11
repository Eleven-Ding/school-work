<template>
  <div class="left-drawer">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item
            v-for="(item, index) in linkList"
            :index="String(index)"
            :key="index"
          >
            <i :class="item.icon"></i>
            <span slot="title">{{ item.name }}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      linkList: [
        {
          name: "侯雪",
          path: "houxue",
          icon: "el-icon-setting",
        },

        {
          name: "吴波",
          path: "wubo",
          icon: "el-icon-document",
        },

        {
          name: "丁时一",
          path: "shiyi",
          icon: "el-icon-info",
        },
        {
          name: "刘辉军",
          path: "huijun",
          icon: "el-icon-s-platform",
        },
        {
          name: "李瑞",
          path: "lirui",
          icon: "el-icon-s-promotion",
        },

        {
          name: "陈伟",
          path: "chenwei",
          icon: "el-icon-s-data",
        },
        {
          name: "张晗",
          path: "zhanghan",
          icon: "el-icon-s-claim",
        },
      ],
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.$router.push(`/panel/${this.linkList[key].path}`)
    },
  },
};
</script>

<style>
.left-drawer {
  height: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 250px;
  min-height: 400px;
}
</style>