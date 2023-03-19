<script setup>
</script>

<template>
THIS IS THE CONTACT PAGE
  
</template>

<style scoped>
@media only screen and (max-width: 768px) {
  .carousel {
    display: none;
  }
  .mobile-carousel{
    display: block !important;
    margin-top: 20px;;
  }
}
.carousel {
  margin-top: 20px;
}
.mobile-carousel {
  display: none;
}
.header {
  margin: auto;
  width: 75%;
  padding: 10px;
  text-align: center;
  letter-spacing: 0.6px;
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
