<template>
  <q-page padding>
    <!-- content -->
    <h4 class="text-color-black text-weight-bold">Janela de manutencao</h4>
    <div class="text-justify">
      <p>O LimeSurvey é um software muito bom, mas caso precise fazer alguma manutenção em questionários ativos sugiro não dar sorte pro azar.</p>

      <p>Quais tipos de manutenções são permitidas:</p>
      <ul>
      <p>- Alterar texto da questão (arriscado)</p>
      <p>- Alterar texto das opções  (super arriscado)</p>
      <p>- Alterar texto de e-mails (tranquilo)</p>
      <p>- Inserir um novo respondente (tranquilo)</p>
      <p>- Inserir uma lista de respondentes em CSV (super arriscado)</p>
      <p>- Remover obrigatoriedade da questão (arriscado)</p>
      </ul>
      <p>Quais tipos de manutenção não são permitidas:</p>
      <ul>
      <p>- Mudar o código das questões (isso faz todas respostas ficarem erradas)</p>
      <p>- Remover questões</p>
      <p>- Reordenar questão (não me atrevi a testar)</p>
      </ul>
      <p>Para as demandas arriscadas sugiro seguir o script</p>
      <ul>
      <p>- Gessy alterar o login.php com mensagem de manutenção de forma que nenhum usuário mais entre nos questionários</p>
      <p>- Avisa o Alfeu que começou</p>
      <p>- Esperar os usuários ativos terminarem de responder (média de 10min de espera). Veja no google analytics</p>
      <p>- Gessy faz o bkp do banco de dados</p>
      <p>- Administrador do questionário exporta o questionário em formato completo com as respostas (ISA). Esse passo só dá certo se não tiver muitas respostas. O LimeSurvey dá erro nesse passo.</p>
      <p>- Geramos uma estatística completa via planilha</p>
      <p>- Realizamos a manutenção</p>
      <p>- Testamos simular "responder o questionário" via administrativo</p>
      <p>- Gessy libera o login</p>
      <p>- Analisamos se continua a registrar o aumento de respondentes nas estatísticas.</p>
      <p>- Avisa o Alfeu que terminou</p>
      </ul>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
