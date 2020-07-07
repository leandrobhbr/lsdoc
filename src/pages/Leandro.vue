<template>
  <q-page padding>
    Página Leandro
    <leandro-campos :profissao="profissao" />
  </q-page>
</template>

<script>
import LeandroCampos from 'components/LeandroCampos.vue'
export default {
  // name: 'PageName',
   data () {
    return {
      profissao: 'Analista'
    }
  },
  components: {
    'leandro-campos': LeandroCampos,
  },
}
</script>
