<template>
    <div id="heart">

    </div>
</template>
<script>
export default {
    props:['color']
}
</script>
<style>
    #heart {
      position: relative;
      width: 100;
      height: 90px;
    }
    #heart:before,
    #heart:after {
      position: absolute;
      content: "";
      left: 55px;
      top: 0;
      width: 50px;
      height: 80px;
      background:wheat;
      border-radius: 50px 50px 0 0;
      transform: rotate(-45deg);
      transform-origin: 0 100%;
    }
    #heart:after {
      background:wheat;
      left: 5px;
      transform: rotate(45deg);
      transform-origin: 100% 100%;
    }
</style>