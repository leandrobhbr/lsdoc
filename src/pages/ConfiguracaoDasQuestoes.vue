<template>
  <q-page padding>
    <!-- content -->
    <h4 class="text-color-black text-weight-bold">Configuração das questoes</h4>
    <div class="text-justify">
      Nas configurações gerais do questionário:
      <ul>
        <p>- Sugiro habilitar responder questões por grupos (vai listar um grupo de questões por página) foi o que os usuários mais gostaram. Tem também responder tudo numa página só e tem também passar questão a questão por página.</p>
        <p>- Desabilite a opção de "salvar e retomar depois" tem um bug nessa versão do limesurvey e não é necessário utilizar isso. Ele salva automático a cada mudança de página.</p>
        <p>- Habilite a opção de ir e voltar nos passos do questionário.</p>
        <p>- Não deixe o usuário responder de novo o mesmo questionário, deixe a utilização como 1.</p>
      </ul>

      Na hora de criar o grupo
      <ul>
        <p>- Crie todos grupos de uma vez na opção de grupos e coloque o código G1 G2 G3 G4.... etc</p>
      </ul>

      Na hora de criar as questões
      <ul>
        <p>- Sugiro numerar as questões.</p>
        <p>- Sugiro colocar um código único. Ex: para questão 1 (Qx1). Na hora do cadastro você vai saber onde ele pede isso.</p>
      </ul>

      Na hora de criar as opções de resposta
      <ul>
        <p>- Sugiro colocar letras nas respostas (quando for possível)</p>
        <p>- Sugiro colocar um código único. Ex: para resposta A da questão 1 (1xA)  Na hora do cadastro você vai saber onde ele pede isso</p>
        <p>Obs.: o "x" pode ser alterado por outro símbolo, só não misture (x com X), se seguir um padrão eu consigo quebrar strings e trabalhar com elas fora do sistema.</p>
      </ul>

      Vantagens da numeração e codificação
      <ul>
        <p>- isso é interessante para ficar mais fácil fazer estatísticas direto no banco (fazendo filtros por cursos, grupos, etc).</p>
        <p>- na hora de ordenar as questões você usa uma opção ordenação no limesurvey e facilita muito, evitando ter de verificar o arquivo original em word</p>
      </ul>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
