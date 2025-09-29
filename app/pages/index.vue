<script setup>
import Header from '~/components/Header.vue';
import Button from '~/components/Button.vue';
useHead({
  title: 'EmotAI Quiz',
  link: [
    {
      rel: 'icon',
      href: '/favicon.svg'
    }
  ]
})

</script>

<template>
    <Header />
    <main>
        <div class="page-container">
            <p style="font-size: 110%; color: #ff006f;">L'idea per questo test é partita dalla curiosita sulla risposta umana alla possibilitá di intelligenza artificiale emotiva e cosciente:</p>
            <p>- Il quiz è composto da diverse domande che esplorano possibili contesti futuri in cui si potrebbe trovare una IA.</p>
            <p>- Ogni domanda è progettata per farti valutare quesiti riguardanti una possibile intelligenza artificiale estremamente vicina alla mente umana.</p>
            <p>- Rispondendo a queste domande contribuirai a un piccolo studio sulla percezione umana delle emozioni "binarie" e delle sfide etiche associate all'IA.</p>
            <p>- Risponderai alle domande con si/no o votando su una scala da 1 a 5.</p>
            <br>
            <h2 style="text-align: center;">IL QUIZ É COMPLETAMENTE ANONIMO</h2>
            <br>
            <Button label="Inizia il Quiz" to="/quiz" class="cen"/>
        </div>
    </main>
</template>

<style>
.cen {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>