<template>
  <q-page padding>
    <!-- content -->
    <h4 class="text-color-black text-weight-bold">Envio de convites</h4>
    <div class="text-justify">
      <p>- O LimeSurvey após vários testes só deixa carregar 2500 usuários na tabela para seleção, senão dá erro no sistema. Ou seja, você tem de enviar de 2500 em 2500 convites.</p>
      <p>- Sugiro abrir todas as páginas em novas abas do Browser, de forma que cada aba liste 2500 usuários.</p>
      <p>- Nas configurações globais foi definido que o LimeSurvey envia um bloco de 200 emails e aguarda 20 segundos para enviar o segundo bloco. Reduzir o tempo de 20 segundos eu não achei no sistema onde se faz, ele apenas permite aumentar a qtd por bloco. O padrão era 50 e passamos para 200. Colocamos este valor de teste, mas não testei aumentando muito essa qtd, fiquei com medo de dar erro.</p>
      <p>- A medida que vai terminando eu vou disparando aba a aba os 2500 envios. Demora em média 4 minutos a cada 2500 envios. Mas eu disparo 5 mil de uma vez disparando duas abas de uma vez. Enquanto um descansa 20 segundos o outro está enviando. Dá certinho.</p>
      <p>- Antes do envio o sistema mostra o texto que será enviado e o email do remetente. Dê uma última conferida para saber se está tudo correto.</p>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
