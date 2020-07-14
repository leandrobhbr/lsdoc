<template>
  <q-page padding>
    <!-- content -->
    <h4 class="text-color-black text-weight-bold">Tokens</h4>
    <div class="text-justify">
      <p>Fazendo uma análise sobre os tokens acredito que poderíamos utilizar o botão da ferramenta "gerar códigos de acesso" (tokens).
        Ela cria os tokens de forma correta e gerencia os usuários que não tem o token, aceitando que sejam gerados após a criação do usuário.
        Após clicar no botão ele preenche todos os tokens na tabela de usuários que não possuem o token.
        Caso inclua novos usuários basta clicar no botão para gerar novos tokens, os pré existentes permanecem inalterados na tabela.
        Os tokens gerados são compostos de letras maiúsculas e minúsculas assim como números, num total de 15 dígitos.</p>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
