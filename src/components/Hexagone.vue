<template>
  <div id="hexagon">
    <slot> 
      <heart></heart>
    </slot>
  </div>
</template>
<script>
import Heart from './Heart.vue'
export default {
  components: { Heart },
  name: "Hexagone" ,
  props:['color'] 
}
</script>
<style>
#hexagon {
  
  width: 110px;
  height: 76.735px;
  background: red;
  position: relative;
  top: 10px;
  left: 200px;
  
}
#hexagon::before {
  
  content: "";
  position: absolute;
  top: -28.8675px;
  left: 0;
  width: 0;
  height: 0;
  border-left: 55px solid transparent;
  border-right: 55px solid transparent;
  border-bottom: 28.8675px solid red;
}
#hexagon::after {
  content: "";
  position: absolute;
  bottom: -28.8675px;
  left: 0;
  width: 0;
  height: 0;
  border-left: 55px solid transparent;
  border-right: 55px solid transparent;
  border-top: 28.8675px solid red;
}
</style>