<template>
  <q-layout view="hHh lpR lff"> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated class="bg-verde-escuro">
      <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="menu"
          @click="leftDrawer = !leftDrawer"
        />
        <q-toolbar-title>
          Manual Limesurvey
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- (Optional) The Footer -->
    <q-footer class="bg-rodape">
      <q-toolbar>
        <q-toolbar-title>
          Manual Limesurvey
        </q-toolbar-title>
        <q-tollbar-content>
          © 2020 Centro de Computação. Todos os direitos reservados.
        </q-tollbar-content>
      </q-toolbar>
    </q-footer>

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-drawer
      v-model="leftDrawer"
      side="left"
      bordered
      content-class="bg-grey-2"
    >
      <!-- QScrollArea is optional -->
      <q-scroll-area class="fit q-pa-sm">
        <!-- Content here -->
        <DrawerOpcoes></DrawerOpcoes>
      </q-scroll-area>
    </q-drawer>

    <q-page-container class="text-color-limesurvey">
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>

import DrawerOpcoes from 'components/DrawerOpcoes'

export default {

  components: {
    DrawerOpcoes
  },

  data () {
    return {
      leftDrawer: true
    }
  }
}
</script>

<style lang="stylus">
.bg-verde-escuro
  background-color #1f3748
.bg-rodape
  background-color #58585a
.text-color-limesurvey
  color #058ec7
</style>
