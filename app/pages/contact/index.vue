<script setup>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

useHead({
  title: 'Contatti - EmotAI Quiz',
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
            <h1>Contatti</h1>
            <p>Puoi contattarmi personalmente a <a href="mailto:tsbfpp@gmail.com">tsbfpp@gmail.com</a> o tramite Instagram a <a href="https://www.instagram.com/filippotusberti/">@filippo_tusberti</a>.</p>
        </div>
    </main>
    <Footer />
</template>