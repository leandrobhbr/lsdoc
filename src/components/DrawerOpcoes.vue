<template>
  <div class="q-pa-Md" >
    <q-list class="text-primary">
      <q-item
        clickable
        v-ripple
        :active="link === 'index'"
        @click="linkPagina('index')"
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon name="home" />
        </q-item-section>

        <q-item-section>Manual Limesurvey</q-item-section>
      </q-item>
      <q-item
        v-for="opcao in opcoes"
        :key="opcao[1]"
        clickable
        v-ripple
        :active="link === opcao[1]"
        @click="linkPagina(opcao[1])"
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon :name="opcao[2]" />
        </q-item-section>

        <q-item-section>{{ opcao[0] }}</q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  methods: {
    linkPagina: function (data) {
      this.link = data
      this.$router.push({ name: data })
    }
  },
  data () {
    return {
      link: 'inbox',
      opcoes: [
        ['Criando Questionário', 'CriandoQuestionario', 'create'],
        ['Configurando Apresentação', 'ConfigurandoApresentacao', 'settings'],
        ['Criando Grupo', 'CriandoGrupo', 'create'],
        ['Criando Pergunta', 'CriandoPergunta', 'create'],
        ['Criando Participante', 'CriandoParticipante', 'create'],
        ['Editando E-mails', 'EditandoEmails', 'edit'],
        ['Ativando Questionário', 'AtivandoQuestionario', 'check_box'],
        ['Enviando E-mail', 'EnviandoEmail', 'mail'],
        ['Visualizando Estatísticas', 'VisualizandoEstatiticas', 'remove_red_eye'],
        ['Visualizando Registros', 'VisualizandoRegistros', 'remove_red_eye'],
        ['Exportando Estatísticas', 'ExportandoEstatisticas', 'reply'],
        ['Exportando Registros', 'ExportandoRegistros', 'reply'],
        ['Carga de Usuários', 'CargaDeUsuarios', 'add'],
        ['Envio de Convites', 'EnvioDeConvites', 'send'],
        ['Configuração do E-mail', 'ConfiguracaoDoEmail', 'settings'],
        ['Envio de Lembretes', 'EnvioDeLembretes', 'send'],
        ['Configuração das Questões', 'ConfiguracaoDasQuestoes', 'settings'],
        ['Janela de Manutenção', 'JanelaDeManutenção', 'build'],
        ['O que não pode ser feito', 'NaoPodeSerFeito', 'error'],
        ['Acessibilidade', 'Acessibilidade', 'accessibility'],
        ['Navegação por tab', 'NavegacaoPorTab', 'mouse'],
        ['Libras', 'Libras', 'local_library'],
        ['Tokens', 'Tokens', 'enhanced_encryption'],
        ['Dados dos Usuários', 'DadosDosUsuarios', 'bar_chart']
      ]
    }
  }
}
</script>

<style lang="sass">
.my-menu-link
  color: white
  background: $green-10
</style>
