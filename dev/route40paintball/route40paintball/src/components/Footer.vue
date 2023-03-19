<script setup>
</script>

<template>
  <footer class="footer">
    <div class="footer-item">
      <div>11011 Pulaski Highway</div>
      <div>White Marsh, Maryland</div>
    </div>
    <div class="footer-item">
        <div>OPEN SATURDAY & SUNDAY 10AM - 4PM</div>
        <div class="socials">
            <i class="fa fa-instagram" style="font-size:24px"></i>
            <i class="fa fa-facebook" style="font-size:24px"></i>
            <i class="fa fa-twitter" style="font-size:24px"></i>
        </div>
        
    </div>
    <div class="footer-item">
        <div>(410) 335-7622</div>
    </div>
  </footer>
  <footer class="mobile-footer">
    <div class="footer-item">
        <div class="socials">
            <i class="fa fa-instagram" style="font-size:24px"></i>
            <i class="fa fa-facebook" style="font-size:24px"></i>
            <i class="fa fa-twitter" style="font-size:24px"></i>
        </div>
        <div>(410) 335-7622</div>
        
    </div>
  </footer>
</template>

<style scoped>
@media only screen and (max-width: 768px) {
  .footer {
    display: none !important;
  }
  .mobile-footer {
    margin-top: 20px;
  height: 80px;
  background-color: black;
  color: white;
  text-align: center;
  vertical-align: middle;
  display: flex !important;
  justify-content: space-evenly;
  font-size: 20px;
  }
}
.mobile-footer {
    display:none;
}
.footer {
    margin-top: 20px;
  height: 100px;
  background-color: black;
  color: white;
  text-align: center;
  vertical-align: middle;
  display: flex;
  justify-content: space-evenly;
}
.footer-item {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}
.socials {
    display: flex;
    justify-content: center;
    
}
i {
        padding: 5px;
        margin-top: 5px;
}
i:hover {
    color: rgb(255, 0, 183);
}
</style>
