import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/Base.vue'),
    children: [
      { path: '', name: 'index', component: () => import('pages/Index.vue') },
      { path: 'criando-questionario', name: 'CriandoQuestionario', component: () => import('pages/CriandoQuestionario.vue') },
      { path: 'configurando-apresentacao', name: 'ConfigurandoApresentacao', component: () => import('pages/ConfigurandoApresentacao.vue') },
      { path: 'criando-grupo', name: 'CriandoGrupo', component: () => import('pages/CriandoGrupo.vue') },
      { path: 'criando-pergunta', name: 'CriandoPergunta', component: () => import('pages/CriandoPergunta.vue') },
      { path: 'criando-participante', name: 'CriandoParticipante', component: () => import('pages/CriandoParticipante.vue') },
      { path: 'editando-emails', name: 'EditandoEmails', component: () => import('pages/EditandoEmails.vue') },
      { path: 'ativando-questionario', name: 'AtivandoQuestionario', component: () => import('pages/AtivandoQuestionario.vue') },
      { path: 'enviando-email', name: 'EnviandoEmail', component: () => import('pages/EnviandoEmail.vue') },
      { path: 'visualizando-estatisticas', name: 'VisualizandoEstatiticas', component: () => import('pages/VisualizandoEstatisticas.vue') },
      { path: 'visualizando-registros', name: 'VisualizandoRegistros', component: () => import('pages/VisualizandoRegistros.vue') },
      { path: 'exportando-rstatisticas', name: 'ExportandoEstatisticas', component: () => import('pages/ExportandoEstatisticas.vue') },
      { path: 'exportando-registros', name: 'ExportandoRegistros', component: () => import('pages/ExportandoRegistros.vue') },
      { path: 'carga-de-usuarios', name: 'CargaDeUsuarios', component: () => import('pages/CargaDeUsuarios.vue') },
      { path: 'envio-de-convites', name: 'EnvioDeConvites', component: () => import('pages/EnvioDeConvites.vue') },
      { path: 'configuracao-do-email', name: 'ConfiguracaoDoEmail', component: () => import('pages/ConfiguracaoDoEmail.vue') },
      { path: 'envio-de-lembretes', name: 'EnvioDeLembretes', component: () => import('pages/EnvioDeLembretes.vue') },
      { path: 'exportar-relatorios', name: 'ExportarRelatorios', component: () => import('pages/ExportarRelatorios.vue') },
      { path: 'configuracao-das-questoes', name: 'ConfiguracaoDasQuestoes', component: () => import('pages/ConfiguracaoDasQuestoes.vue') },
      { path: 'janela-de-manutenção', name: 'JanelaDeManutenção', component: () => import('pages/JanelaDeManutenção.vue') },
      { path: 'nao-pode-der-feito', name: 'NaoPodeSerFeito', component: () => import('pages/NaoPodeSerFeito.vue') },
      { path: 'acessibilidade', name: 'Acessibilidade', component: () => import('pages/Acessibilidade.vue') },
      { path: 'navegacao-por-tab', name: 'NavegacaoPorTab', component: () => import('pages/NavegacaoPorTab.vue') },
      { path: 'libras', name: 'Libras', component: () => import('pages/Libras.vue') },
      { path: 'tokens', name: 'Tokens', component: () => import('pages/Tokens.vue') },
      { path: 'dados-dos-usuarios', name: 'DadosDosUsuarios', component: () => import('pages/DadosDosUsuarios.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
