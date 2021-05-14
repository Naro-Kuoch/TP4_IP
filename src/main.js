import { createApp } from 'vue'
import App from './App.vue'
import Triangle from './components/Triangle.vue'
import Hexagone from './components/Hexagone.vue'
import Heart from './components/Heart.vue'
import Diamond from './components/Diamond.vue'
import Star from './components/Star.vue'
const app = createApp(App);
app.component('Triangle',Triangle);
app.component('Hexagone',Hexagone);
app.component('Heart',Heart);
app.component('Diamond',Diamond);
app.component('Star',Star);
app.mount('#app');

