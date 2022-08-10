<template>
    <div class="whole row shadow-10">
        <div class="col-12 flex flex-center text-subtitle2 q-mx-sm">
            Play your new <q-icon class="q-pa-sm" name="favorite" size="lg" color="pink-4" /> song
        </div>
        <div class="col-12 flex flex-center q-mx-sm">
            <q-btn
            color="primary"
            flat
            round
            icon="fast_rewind"
            size="md"
            @click="PreviousSong()"
            />
            <q-btn
            v-if="isPlaying"
            color="primary"
            round
            icon="pause"
            size="lg"
            @click="wavesurfer.playPause()"
            />
            <q-btn
            v-if="!isPlaying"
            color="primary"
            round
            icon="play_arrow"
            size="lg"
            @click="wavesurfer.playPause()"
            />
            <q-btn
            color="primary"
            flat
            round
            icon="fast_forward"
            size="md"
            @click="NextSong()"
            />
            </div>
            <div class="col-12 flex flex-center text-h6 q-ma-sm">
            {{ audio.artist }} - {{ audio.songName }}
        </div>
            <div class="hidden" id="waveform"></div>
    </div>
</template>
<script>
import { defineComponent } from "vue";
import WaveSurfer from "wavesurfer.js";
import { useMusicStore } from "stores/musicStore.js"
import { storeToRefs } from "pinia";

const audio = useMusicStore()
 
export default defineComponent({
    name: 'app',
    data() {       
        return {
            audio,
            wavesurfer: null,
            hiddenLogic: false,
        }
    },
    async mounted() {
        if (!this.wavesurfer) this.createWaveSurfer();
    },
    computed: {
        isPlaying() {
            if (!this.wavesurfer) return false;
            return this.wavesurfer.isPlaying();
        }
    },
    methods: {
        createWaveSurfer() {
        this.wavesurfer = WaveSurfer.create({
            container: "#waveform"
        });
        this.wavesurfer.load(
            audio.songs[0].source
        );
        },
        NextSong(){
            if ( audio.index + 1 > audio.songs.length - 1 ) {
                audio.setCurrentSong(0)
            } else {
                audio.setCurrentSong(audio.index + 1)
            }
            this.wavesurfer.load(
                    audio.songs[audio.index].source
                );
        },
        PreviousSong(){
            if ( audio.index - 1 < 0 ) {
                audio.setCurrentSong(audio.songs.length - 1)
            } else {
                audio.setCurrentSong(audio.index - 1)

            }
            this.wavesurfer.load(
                    audio.songs[audio.index].source
                );
        },
    }

})
</script>
<style>
.whole {
    background-color: #212121;
}
</style>