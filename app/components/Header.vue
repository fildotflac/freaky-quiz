<template>
  <header class="site-header">
    <nav>
      <NuxtLink to="/">Quiz</NuxtLink>
      <NuxtLink to="/aboutme">About Me</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
    </nav>
  </header>
</template>

<script setup>
// No special setup needed for a simple header
</script>

<style scoped>
.site-header {
  background: var(--bg-secondary, #1a0011);
  color: var(--text-primary, #f5dcee);
  padding: 1rem 2rem;
  border-bottom: 2px solid var(--border-primary, #400025);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

nav {
  display: flex;
  gap: 2rem;
  align-items: center;
}

a {
  color:#ff0080;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

a:hover {
  background-color:#40001e;
  border-color: #54002e;
  transform: translateY(-1px);
}

a.router-link-exact-active {
  background-color:#62011e;
  border-color: #990040;
  text-decoration: none;
}
</style>