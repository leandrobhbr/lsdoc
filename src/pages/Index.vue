<template>
  <q-page padding>
    <!-- content -->
    <h4 class="text-color-black text-weight-bold">Manual de uso Limesurvey</h4>
    <p>Tenha acesso a passo a passo de como agir dentro do Limesurvey.
      Como realizar a criação, edição, envios, formas de configuração e entre outros.
    </p>
    <p><q-icon name="reply" class="" style="font-size: 3rem;" />Veja no menu lateral todas opções.</p>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  methods: {
    linkPagina: function (data) {
      this.$router.push({ name: data })
    }
  },
  data () {
    return {
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
        ['Exportar Relatórios', 'ExportarRelatorios', 'reply'],
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
