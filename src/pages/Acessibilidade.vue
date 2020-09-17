<template>
  <q-page padding>
    <!-- content -->
    <h4 class="text-color-black text-weight-bold">Acessibilidade</h4>
    <div class="text-justify">
      <p>- Para os deficientes auditivos, caso seja necessário fazer um vídeo em Libras é  imprescindível  que tenha numeração nas questões e identificação alfabética de opções de resposta.</p>
      <p>- As questões precisam de &lt;header&gt; nos títulos das questões para o leitor de tela para cegos seja mais efetivo.</p>
      <ul>
        <p>ex.: &lt;h1 style="font-size:14px;line-height:25px;">1. Para realização das suas atividades acadêmicas fora das instalações da UFMG, quais equipamentos para acesso à Internet você utiliza com mais frequência? (marque mais de uma opção, se for o caso)&lt;/h1&gt;</p>

        <p>font-size:14px;line-height:25px;
        esse código é pra não ficar grandalhão demais</p>
      </ul>
      <p>- Para inserir vídeos na questão, sugiro link do youtube na questão e que ao clicar, o vídeo abre em outra aba do browser de forma que por segurança, o código do video via iframe não seja executado dentro do servidor do questionário.  O código HTML da questão ficaria da seguinte forma. Repare que precisamos de fazer prints dos vídeos e pedir para o Gessy publicar no servidor e a largura do mesmo tem de ser delimitado em 150px. Com os estilos float left e float right conseguimos colocar o vídeo do lado da questão. A tag Alt e title é para ajudar os leitores de tela.</p>
      <ul>
        <p>&lt;h1 style="font-size:14px;line-height:25px;float:left;"&gt;1. Para realização das suas atividades acadêmicas fora das instalações da UFMG, quais equipamentos para acesso à Internet você utiliza com mais frequência? (marque mais de uma opção, se for o caso)&lt;/h1&gt;</p>
        <p>&lt;p style="float:right;"&gt;&lt;a href="https://youtu.be/K1Odsq44HoU" target="_blank" title="Video Libras questão 1."&gt;&lt;img alt="Video Libras questão 1." src="https://questionarios.ufmg.br/assets/images/libras/q1.png" style="width:150px;" /&gt;&lt;/a&gt;&lt;/p&gt;</p>
      </ul>
      <p>O LimeSurvey na versão que trabalhamos não é preparado para todas normas de acessibilidade mas estes poucos passos acima ajudam bastante. O problema principal é a não navegação apenas apertando o tab.</p>
  </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
