<script setup>
</script>

<template>
  <el-carousel class = "carousel" :interval="10000" type="card" height="300px">
    <el-carousel-item v-for="item in 3" :key="item">
      <h3 text="2xl" justify="center">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
  <el-carousel class="mobile-carousel" :interval="10000" height="200px">
      <el-carousel-item v-for="item in 3" :key="item">
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  <el-divider />
  <div class="header">
    <!-- <h1>ROUTE 40 PAINTBALL PARK</h1> -->
  <h1>ROUTE 40 PAINTBALL PARK</h1>
  <h3>OPEN 10AM-4PM SATURDAY & SUNDAY</h3>
  <div>
    <div>Opened by Tom Maliszewski of the “All Americans” and “Image” fame, Route 40 Paintball Park has been Maryland's primier paintball park since 2000. Tommy has been playing professional paintball for more than two decades and saw a need in the Baltimore Area for a tournament style playing field for the local players. With the experience that Tommy has gained from playing International tournaments he knew exactly what was needed at the new field. </div>
    <div style="margin-top: 20px">There are currently four tournament size fields and one woodsball field, each with unique layouts and scenarios.
        Route 40 Paintball is a great place to play for players of all skill levels and we specialize in providing the ultimate party experience! Whether it is a bachelor party, a birthday party or a corporate outing, we offer a great experience for everyone!</div></div>
  </div>
  
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
