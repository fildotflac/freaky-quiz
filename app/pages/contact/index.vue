<script setup>
import Header from '~/components/Header.vue';

useHead({
  title: 'fil.flac\'s quiz',
  link: [
    {
      rel: 'icon',
      href: '/favicon.svg'
    }
  ]
})

const Head = resolveComponent('Head')

</script>

<template>
    <Header />
    <main>
        <div class="page-container">
            <h1>Contacts</h1>
            <p>Get in touch with us for any questions or feedback about the quiz platform.</p>
        </div>
    </main>
</template>