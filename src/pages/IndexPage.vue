<template>
  <q-page>
    <div class="background"> </div>
    <div class="background1"> </div>
    <div class="background2"> </div>
    <myCards/>
    <MusicPlayer/> 
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import MusicPlayer from '../components/MusicPlayer.vue'
import myCards from '../components/myCards.vue'

export default defineComponent({
    name: "IndexPage",
    components: { MusicPlayer, myCards }
})
</script>
<style lang="scss">
.background {
    border:95px solid $pink-3;
    position: absolute;    
    height:1500px;
    margin-left: -750px;
    margin-top: -750px;
    z-index: -2;
    border-radius:50%;
    width:1500px;
}
.background1 {
    border:95px solid $pink-2;
    position: absolute;    
    height:1300px;
    margin-left: -650px;
    margin-top: -650px;
    z-index: -2;
    border-radius:50%;
    width:1300px;
}
.background2 {
    border:95px solid $pink-4;
    position: absolute;    
    height:1700px;
    margin-left: -850px;
    margin-top: -850px;
    z-index: -2;
    border-radius:50%;
    width:1700px;
}

</style>
