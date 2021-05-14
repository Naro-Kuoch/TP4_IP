<template >
    <div id="triangle">

    </div>
</template>
<script>
export default {
    name:"Triangle"
}
</script>
<style>
    
    #triangle {
    
      width: 0;
      height: 0;
      border-left: 70px solid transparent;
      border-right: 70px solid transparent;
      border-bottom: 120px solid red;
      position:relative;
      left: 700px;
      bottom: 300px;
    }
</style>