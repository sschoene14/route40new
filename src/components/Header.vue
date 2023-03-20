<script>
export default {
  components: {},
  data() {
    return {
      showDropdown: false,
      activeIndex: "0",
      activeLink: null,
    };
  },
  mounted() {},

  methods: {
    toggleHamburger() {
      this.showDropdown = !this.showDropdown;
    },
    handleSelect(val) {
      this.activeIndex = val;
      this.$router.push({path: val})
        this.showDropdown = false;
    },
  },
};
</script>

<template>
    
  <div class="nav">
    
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
      <el-menu-item :router="true" :default-active="activeLink" index="/"
        ><img
          src="src/assets/route40shield.jpeg"
          alt="Route 40 Paintball"
          height="60"
      /></el-menu-item>
      <div class="flex-grow" />
      <template v-for="rule in $router.options.routes" :key="rule.path">
        <el-menu-item v-if="rule.name !== 'Home'" :index="rule.path">{{ rule.name }}</el-menu-item>
      </template>
    </el-menu>
  </div>
  <div class="mobilenav">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
      <el-menu-item index="/"
        ><img
          src="src/assets/route40shield.jpeg"
          alt="Route 40 Paintball"
          height="60"
      /></el-menu-item>
      <div class="flex-grow" />
      <div style="padding-right:10px;" @click="toggleHamburger">
        <i class="center fa fa-bars" style="font-size: 40px"></i>
      </div>
    </el-menu>
    <div v-if="this.showDropdown" class="dropdown">
      <template v-for="rule in $router.options.routes" :key="rule.path">
      <div v-if="rule.name !== 'Home'" class="dropdown-item" @click="handleSelect(rule.path)">{{rule.name}}</div>
      </template>
    </div>
  </div>
  <!-- <img    
          src="src/assets/40_header.jpeg"
          alt="Route 40 Paintball"
      /> -->
</template>

<style scoped>
.dropdown-item {
  margin: auto;
  width: 100%;
  padding: 10px;
  text-align: center;
  letter-spacing: 0.6px;
  background-color: rgba(193, 200, 207, 0.64);
  border-bottom: 1px solid rgba(193, 200, 207);
}
.center {
  margin-top: 10px;
}
.flex-grow {
  flex-grow: 1;
}
.mobilenav {
  display: none;
}
@media only screen and (max-width: 768px) {
  .nav {
    display: none;
  }
  .mobilenav {
    display: block;
  }
}
</style>
