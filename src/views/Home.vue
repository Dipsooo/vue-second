<script lang="ts">
</script>

<template>
  <h1>Welcome to Our Store</h1>
    <div class="slideshow">
      <div class="slide_wrapper">
      <div class="slide">
        <img src="../images/tg.jpg"></div>
      <div class="slide">
        <img src="../images/yo.jpg"></div>
        <div class="slide">
        <img src="../images/bo.jpg"></div>
        <div class="slide">
        <img src="../images/my.jpg"></div>
    </div>
  </div>
</template>

<style scoped>
.slide img{
  width: 1000px;
  height: 510px;
  float: left;
}
.slideshow{
  width: 1000px;
  height: 510px;
  margin: 0 auto;
  overflow: hidden;
}
.slide_wrapper
{
  animation: slide 10s ease infinite;
  width: calc(1000px * 4);
}
@keyframes slide
{
  20%
  {
    margin-left: 0px;
  }
  40%
  {
    margin-left: calc(-1000px*1);
  }
  60%
  {
    margin-left: calc(-1000px*2);
  }
  80%
  {
    margin-left: calc(-1000px*3);
  }
}
</style>