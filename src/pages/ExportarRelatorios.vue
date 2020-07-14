<template>
  <q-page padding>
    <!-- content -->
    <h4 class="text-color-black text-weight-bold">Exportar Relatórios</h4>
    <div class="text-justify">
      <p>- Tem as estatísticas de preenchimento que é só uma totalização de respondentes e convites enviados. Selecione o Questionário: Visão Geral > Registros > Respostas e estatísticas. Ela deve ser gerada como um boletim diário (9h, 13h e 19h) e enviado para o Alfeu.</p>
      <p>- Tem a planilha em excel geral que mostra um relatório detalhado por questão.  Selecione o Questionário: Estatísticas ></p>
      <ul>
        <li>Ativar "Ver resumo de todos campos disponíveis"</li>
        <li>Ativar " Subtotais baseados nas questões apresentadas:"</li>
        <li>Ativar: "Ver as repostas de texto na mesma linha:"</li>
        <li>Formato de saída: escolha Excel</li>
        <li>Marque todos checkboxs de questões</li>
        <li>Clique no botão no topo da página "Mostrar Estatísticas"</li>
      </ul>
      <p>- Existe a opção de gráficos, mas os gráficos gerados automaticamente não são bons, sugiro fazer manualmente com outras ferramentas analisando apenas os dados brutos.</p>
      <p>- Se quiser filtrar as estatísticas sugiro fazer um bkp no banco de dados e analisar os dados fazendo filtros. Caso contrário você terá que subir diversas populações diferentes para fazer um relatório detalhado. Lembrando que vale a pena seguir regras para confecção do questionário para que facilite este trabalho.</p>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
