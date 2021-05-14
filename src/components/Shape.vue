<template>
    <div>
        <div v-if="name == 'triangle'">
            <triangle></triangle>
        </div>
        <div v-if="name == 'star'">
            <star></star>
        </div>
        <div v-if="name == 'diamond'">
            <diamond></diamond>
        </div>
         <div v-if="name == 'heart'">
            <heart></heart>
        </div>
        <div v-if="name == 'hexagone'" >
            <hexagone></hexagone>
        </div>
    </div>

</template>
<script>
import Diamond from './Diamond.vue'
import Heart from './Heart.vue'
import Hexagone from './Hexagone.vue'
import Star from './Star.vue'
import Triangle from './Triangle.vue'
export default {
  components: { Triangle, Star, Diamond, Heart, Hexagone },
   name:'Shape',
   props:['name', 'color']
}
</script>
<style scoped>

</style>