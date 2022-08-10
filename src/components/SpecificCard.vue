<template>
    <q-card :class="bigCard ? 'biggerCard flex flex-center' : 'smallerCard'">
        <q-card-section><div class="row"> <div class="col-11">
            <div class="text-h4 q-mt-sm q-mb-xs">{{ title }}</div>
            <div class="text-subtitle2 text-black">{{ details.description }} </div> 
            </div>
            <div class="col-1"><q-btn
        v-if="details.hasShowMore"
                color="grey"
                round
                flat
                dense
                :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                @click="expanded = !expanded"
                
                /></div>
                </div>
                <div class="row text-h6 q-mt-sm q-mb-xs">
                  {{details.spotlightDescription}}
                </div>
                <div class="row">
                  <div v-for="bubble in details.spotlight" :key="bubble" class="q-mr-sm q-pa-sm q-my-sm cloud bg-grey-11 text-grey-10"> {{ bubble }} </div>
                </div>
        </q-card-section>
      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subitle2">
            <q-item clickable :href="details.link" target="_blank">
            <q-icon name="sports_volleyball" size="md" color="primary"></q-icon>
            </q-item>
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
</template>

<script>
import { number } from "@intlify/core-base";
import { defineComponent, ref } from "vue";

export default defineComponent({
    data() {
        return {
            expanded: ref(false),
            lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
    },
    props: {
        title: {
            type: String,
            required: true
        },
        details: Object,
        bigCard: Boolean,
    }
})
</script>

<style lang="scss">
.biggerCard {
    background-color: $primary;
}
.smallerCard {
    background-color: $fourth;
}
.cloud {
  border-radius: 5px;
}
</style>