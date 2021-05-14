<template>
    <div id="diamond">
      <!-- <slot>
        <star :color='color'></star>
      </slot> -->
    </div>
</template>
<script>
// import Star from './Star.vue'
export default {
  // components: { Star },
    name:"Diamond",
    props:['color'],
    data(){
      return{
        // color:'pink'
      }
    }
}
</script>
<style>

    #diamond {
      width: 0;
      height: 0;
      border: 100px solid transparent;
      border-bottom-color:pink;
      position: relative;
      top: -220px;
      left: 400px;
    }
    #diamond:after {
      content: '';
      position: absolute;
      left: -100px;
      top: 100px;
      width: 0;
      height: 0;
      border: 100px solid transparent;
      border-top-color:pink;
    }
</style>