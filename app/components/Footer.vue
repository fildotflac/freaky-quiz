<template>
  <footer class="site-footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>EmotAI Quiz</h3>
        <p>Uno studio sulla percezione umana dell'intelligenza artificiale emotiva</p>
      </div>
      
      <div class="footer-section">
        <h4 class="tabsect">Informazioni</h4>
        <ul>
          <li><NuxtLink to="/aboutme">Chi sono</NuxtLink></li>
          <li><NuxtLink to="/contact">Contatti</NuxtLink></li>
          <li><a href="/">Partecipa al Quiz</a></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h4 class="tabsect">Privacy & Ricerca</h4>
        <ul>
          <li>Risposte completamente anonime</li>
          <li>Dati utilizzati solo per ricerca</li>
          <li>Nessuna informazione personale raccolta</li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h4 class="tabsect">Studio Accademico</h4>
        <p class="study-info">
          Questo quiz fa parte di uno studio sulla percezione di possibili intelligenze artificiali future.
        </p>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="footer-credits">
        <p>{{ currentYear }} Filippo Tusberti</p>
        <p class="tech-info">Sviluppato con Nuxt.js • Ospitato in modo sicuro</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.site-footer {
  background-color: var(--bg-secondary, #190014);
  border-top: 2px solid var(--border-primary, #4a0040);
  margin-top: 4rem;
  color: var(--text-primary, #ffe0f0);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.footer-section h3 {
  color: var(--text-accent, #ff006f);
  font-size: 1.5rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid var(--pink-dark, #4a0024);
  padding-bottom: 0.5rem;
}

.footer-section h4 {
  color: var(--pink-light, #b30045);
  font-size: 1.1rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.footer-section p {
  color: var(--text-secondary, #ffb8d6);
  line-height: 1.6;
  margin-bottom: 0.5rem;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 0.75rem;
}

.footer-section ul li a {
  color: var(--text-secondary, #ffb8d6);
  text-decoration: none;
  transition: color 0.3s ease;
  padding: 0.25rem 0;
  display: inline-block;
}

.footer-section ul li a:hover {
  color: var(--text-accent, #ff006f);
  text-decoration: underline;
}

.study-info {
  font-style: italic;
  font-size: 0.9rem;
  background-color: var(--bg-tertiary, #310029);
  padding: 1rem;
  border-radius: 6px;
  border-left: 3px solid var(--pink-accent, #ff006f);
}

.footer-bottom {
  background-color: var(--bg-primary, #0f0f12);
  border-top: 1px solid var(--border-primary, #4a0021);
  padding: 1.5rem 2rem;
  text-align: center;
}

.footer-credits p {
  margin-bottom: 0.5rem;
  color: var(--text-secondary, #ffb8d6);
  font-size: 0.9rem;
}

.tech-info {
  color: var(--pink-medium, #730032);
  font-size: 0.8rem;
}

/* Responsive design */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    padding: 2rem 1rem;
  }
  
  .footer-section {
    text-align: center;
  }
  
  .footer-bottom {
    padding: 1rem;
  }
}
</style>