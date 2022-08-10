<template>
  <q-layout view="hhr lpr fFf" >
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title class="toolbar q-pa-md grey-10 text-h5">
          Stairway 2 Ladder
        </q-toolbar-title>

        <div><q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        /></div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      side="right"
    >
      <q-list>
        <q-item-label class="flex flex-center"
          header
        >
          <q-avatar size="140px">
      <img src="https://cdn.quasar.dev/img/avatar.png">
    </q-avatar>
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key= "link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useQuasar } from 'quasar'
import EssentialLink from 'components/EssentialLink.vue'


const linksList = [
  {
    title: 'Username',
    caption: 'czqv4',
    icon: 'code'
  },
  {
    title: 'Birthdate',
    caption: '01.01.1996',
    icon: 'cake'
  },
  {
    title: 'Description',
    caption: 'Name\'s Vlad, passionate about sports coding and other stuff ???',
    icon: 'house'
  },
  {
    title: 'Socials',
    caption: 'cazacuv',
    icon: 'instagram',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Favorite song',
    caption: 'JID - Workin out',
    icon: 'pause',
    link: 'https://awesome.quasar.dev'
  }
]

export default defineComponent({
  
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)
    

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
  created() {
    this.$q.dark.set(true)
  } 
})
</script>
