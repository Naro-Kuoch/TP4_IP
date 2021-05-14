<template>
 <div>
    <h1>I'm root components</h1>
      <!-- <hexagone></hexagone>
      <triangle></triangle>
      <star></star>
      <diamond></diamond>
      <heart></heart> -->

      <shape name="star"></shape>
      <shape name="hexagone"></shape>
      <shape name="diamond"></shape>
      <shape name="triangle"></shape>
      

 </div>
</template>

<script>
import Shape from './components/Shape.vue'
export default {
  name: 'App',
  components: {
    Shape
  }
}
</script>
    

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: black;
  background-color: rgb(0, 162, 255);
  border: 2px solid black;
  padding: 200px;
  text-align: center;
 

}


</style>
