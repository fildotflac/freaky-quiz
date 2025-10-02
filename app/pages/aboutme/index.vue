<script setup>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

useHead({
  title: 'About Me - EmotAI Quiz',
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
            <h1>About me</h1>
            <p>Ciao, sono Filippo Tusberti, studente di Informatica all'ITIS Vinci di Carpi (MO)</p>
            <p>Questo é un progetto nato da curiosità personale e per spronare al dialogo riguardo l'Intelligenza Artificiale e come potrá impattare la società in futuro.</p>
            <p>Il sito é creato sfruttando il web framework <a href="https://vuejs.org">Vue.js</a>, non sono stati usate component libraries</p>
            <p><strong>Il sito é stato creato con aiuto da parte del mio amico <a href="https://claude.ai">claduio 4.5</a>.</strong></p>
        </div>
    </main>
    <Footer />
</template>