<template>
  <q-page padding>
    <!-- content -->
    <h4 class="text-color-black text-weight-bold">Configuração do email</h4>
    <div class="text-justify">
      <p>- A conta de e-mail por padrão, na DIS, só envia 1.000 e-mails por hora, tem de solicitar ao Cláudio para que ele aumente este limite. Ele colocou 30mil envios por hora para nós.</p>
      <p>- Tome muito cuidado para não esquecer de cadastrar a conta de e-mail como remetente dos envios senão ele vai enviar todos e-mails com o e-mail pessoal do administrador (isso fica nas configurações de cada questionário)</p>
      <p>- Os templates de convite e lembrete devem ser alterados de acordo com a necessidade, lembre-se de limpar o texto padrão do LimeSurvey onde ele lista a opção de descadastro. Lembre-se que o único link que vai no e-mail é  https://questionarios.ufmg.br/login.php  . Isso é feito para cada questionário.</p>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
