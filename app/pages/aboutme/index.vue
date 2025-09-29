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

</script>

<template>
    <Header />
    <main>
        <div class="page-container">
            <h1>About me</h1>
            <p>Learn more about the creator of this quiz platform.</p>
        </div>
    </main>
</template>