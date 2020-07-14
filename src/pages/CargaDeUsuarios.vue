<template>
  <q-page padding>
    <!-- content -->
    <h4 class="text-color-black text-weight-bold">Carga de usuários</h4>
    <div class="text-justify">
      <p>- Criei um mini sistema em PHP que analisa o excel e gera um arquivo CSV dentro dos padrões do LimeSurvey. Esta ferramenta verifica se possui logins em branco, autopreenche os logins com @ufmg.br, separa o nome do sobrenome e gera o token único com um número difícil de ser adivinhado por outro usuário (ano + mês + dia + millisegundos + número 1 a 1000 aleatório).</p>
      <p>- No momento da carga o LimeSurvey demora 1 minuto para importar 1000 usuários respondentes, ou seja para este questionário demorou 44 min. A importação fica no menu participantes > importar CSV.</p>
      <p>- O limeSurvey verifica automaticamente se existe e-mails e tokens repetidos durante a importação e no final lista o que foi desconsiderado na validação.</p>
      <p>- Para inserir alunos avulsos um a um, pode se inserir manualmente e inventar um token aleatório no momento, sugiro que seja um número grande de 8 dígitos.</p>
      <p>- Para inserir uma lista grande de alunos em questionário ativo, é prudente abrir uma janela de manutenção (do qual será explicado neste e-mail como funciona)</p>
      <p>- LimeSurvey só aceita arquivos CSVs de até 5MB caso passe disse você precisa dividir o arquivo.</p>
      <p>- Caso dê erro no final da importação entre novamente no LimeSurvey e veja o último importado, e separe o arquivo de onde parou em diante. A primeira coluna é o id e ele bate com número da linha no CSV.</p>
      <p>- Se estiver demorando a importação de usuários, peça ao Gessy para fazer um  "select count(*) from lime_tokens_idQuestionario" e ir monitorando o progresso em tempo real.</p>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
