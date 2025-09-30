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
            <p>Questo é un progetto nato da curiosità personale e per spronare al dialogo riguardo l'Intelligenza Artificiale e come potrá impattare sulla società in futuro.</p>
            <p>Abbiamo creato l'intelligenza artificiale a nostra immagine, nel nostro concreto potremmo definirci degli dei, ma se lo studente superasse il maestro?</p>
        </div>
    </main>
    <Footer />
</template>