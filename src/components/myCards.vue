<template>
    <div class="row q-mt-xl">
        <div v-for="categories in cardsTypes" :key="categories.id" class="col-xs-12 col-md-6 col-lg-4">
            <div class="q-my-md q-mx-xl">
                <SpecificCard :title=categories.title :details="categories.details" />
            </div>
        </div>
    </div>
    <div class="row q-my-md q-mx-xl q-mb-xl flex flex-center">
            <div class="col-12">
                <SpecificCard :title="this.bigCard.title"  :details="this.bigCard.details" :bigCard="this.bigCard.bigger" />
            </div>
        </div>
</template>
<script>
import { defineComponent } from "vue";
import SpecificCard from './SpecificCard.vue'

export default defineComponent({
    data() {
        return {
            cardsTypes: [{
                title: "Details",
                id: 0,
                details: {
                    description : 'Emotions tell us everything about ourselves but only if we\'re prepared to look into our past selves without judgement',
                    spotlightDescription: 'Representative emotions',
                    spotlight : ['Fearless', 'Cautious']
                }
            },
            {
                title: "Sports",
                id: 1,
                details: {
                    description : 'Sports are the perfect way to show your kid how to embrace failure and how to manage years of commitment on one subject',
                    spotlightDescription: 'Favorite sports',
                    spotlight : ['Water polo', 'Basketball','Handball','Voleyball','Chess'],
                    hasShowMore : true,
                    link: 'https://www.fina.org/water-polo'
                }
            },
            {
                title: "Music",
                id: 2,
                details: {
                    description : 'Music frees your soul while your body is being trapped in a subway, train or in line for a government paper ',
                    spotlightDescription: 'Favorite songs',
                    spotlight : ['Led Zeppelin - Stairway to heaven', 'The Rolling Stones - Paint It, Black']
                }
            },
            {
                title: "TV Shows",
                id: 3,
                details: {
                    description : 'Slouching on the couch has it\'s perks',
                    spotlightDescription: 'Favorite TV shows',
                    spotlight : ['Fringe', 'True Detective', 'The Queen Gambit']
                }
            },
            {
                title: "Hobbies",
                id: 4,
                details: {
                    description : 'What do you do when nobody\'s watching',
                    spotlightDescription: 'Favorite things to do',
                    spotlight : ['Gaming','Sports', 'Hiking']
                }
            },
            {
                title: "Dislikes",
                id: 5,
                details: {
                    description : 'What we hate shows us where to go',
                    spotlightDescription: 'Hated things',
                    spotlight : ['Insects', 'Heights', 'Crowded places']
                }
            },
            ],
            bigCard: {
                title: "Streetfoods",
                details: {
                    description : 'Having a good meal on a random street in a foreign city is the closest thing to reaching Valhalla',
                    spotlightDescription: 'Favorite dishes',
                    spotlight : ['Pho\'bo', 'Egg fried rice', 'Seafood']
                },
                bigger: true,
            }
        };
    },
    components: { SpecificCard }
})
</script>
<style>
</style>