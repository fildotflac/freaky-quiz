<script setup>
import Header from '~/components/Header.vue';
import Button from '~/components/Button.vue';

useHead({
  title: 'Grazie - EmotAI Quiz',
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
            <div class="thank-you-section">
                <h1>🎉 Grazie per aver partecipato!</h1>
                
                <div class="success-message">
                    <p>Le tue risposte sono state registrate con successo.</p>
                </div>
                
                <div class="info-section">
                    <h2>Cosa succede ora?</h2>
                    <p>I dati raccolti da questo quiz contribuiranno a uno studio sulla percezione umana dell'intelligenza artificiale emotiva.</p>
                    <p>Le tue risposte sono completamente anonime e verranno utilizzate esclusivamente per scopi di ricerca accademica.</p>
                </div>
                
                <div class="sharing-section">
                    <h3>Aiutaci a diffondere lo studio!</h3>
                    <p>Se conosci altre persone che potrebbero essere interessate a partecipare, condividi il link del quiz con loro.</p>
                    <p>Più dati raccogliamo, più accurate saranno le nostre conclusioni sulla percezione umana dell'IA emotiva.</p>
                </div>
                
                <div class="actions">
                    <Button 
                        label="Torna alla Home" 
                        to="/"
                        class="action-button"
                    />
                </div>
                
                <div class="contact-info">
                    <p><small>Per domande riguardo questo studio, contatta il tuo istituto di ricerca.</small></p>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
.thank-you-section {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
}

.success-message {
    background-color: var(--pink-dark, #4a0040);
    border: 2px solid var(--pink-accent, #ff006f);
    padding: 1.5rem;
    border-radius: 8px;
    margin: 2rem 0;
}

.success-message p {
    margin: 0;
    font-weight: 500;
    color: var(--text-primary, #ffe0f0);
}

.info-section {
    background-color: var(--bg-tertiary, #310029);
    padding: 2rem;
    border-radius: 8px;
    border: 1px solid var(--border-primary, #4a0040);
    margin: 2rem 0;
    text-align: left;
}

.info-section h2 {
    color: var(--text-accent, #ff006f);
    margin-bottom: 1rem;
    text-align: center;
}

.sharing-section {
    background-color: var(--bg-secondary, #190014);
    padding: 2rem;
    border-radius: 8px;
    border: 1px solid var(--border-secondary, #73005f);
    margin: 2rem 0;
    text-align: left;
}

.sharing-section h3 {
    color: var(--pink-light, #b30095);
    margin-bottom: 1rem;
    text-align: center;
}

.actions {
    margin: 3rem 0 2rem 0;
}

.action-button {
    font-size: 1.1rem;
    padding: 1rem 2rem;
}

.contact-info {
    margin-top: 3rem;
    color: var(--text-secondary, #ffb8d6);
}

.contact-info small {
    font-style: italic;
}

h1 {
    color: var(--text-accent, #ff006f);
    margin-bottom: 1.5rem;
    font-size: 2.5rem;
}
</style>