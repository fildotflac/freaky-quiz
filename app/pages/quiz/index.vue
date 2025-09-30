<script setup>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import Button from '~/components/Button.vue';

useHead({
  title: 'Quiz - EmotAI',
  link: [
    {
      rel: 'icon',
      href: '/favicon.svg'
    }
  ]
})

// Form data state
const formData = ref({
  domanda1_1: '',
  domanda1_2: '',
  domanda1_3: '',
  domanda2_1: 3,
  domanda2_2: 3,
  domanda2_3: 3,
  domanda2_4: 3,
  domanda3_1: 3,
  domanda3_2: 3,
  domanda3_3: 3,
  domanda3_4: 3,
  domanda4_1: 3,
  domanda4_2: 3,
  domanda4_3: 3,
  domanda4_4: ""
})

// Form submission state
const isSubmitting = ref(false)
const submitError = ref('')
const submitSuccess = ref(false)

// Validation
const isFormValid = computed(() => {
  return formData.value.domanda1_1 && 
         formData.value.domanda1_2 && 
         formData.value.domanda1_3
})

// Submit function
const submitQuiz = async () => {
  if (!isFormValid.value) {
    submitError.value = 'Per favore rispondi a tutte le domande obbligatorie'
    return
  }

  isSubmitting.value = true
  submitError.value = ''

  try {
    const { data } = await $fetch('/api/quiz/submit', {
      method: 'POST',
      body: {
        ...formData.value,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent
      }
    })
    
    submitSuccess.value = true
    await navigateTo('/quiz/thank-you')
  } catch (error) {
    submitError.value = 'Errore durante l\'invio. Riprova più tardi.'
    console.error('Submission failed:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
    <Header />
    <main>
        <div class="page-container">
            <h1 style="text-align: center;">Preconcetto:</h1>
            <div class="quiz-placeholder">
                <p>René Descartes fu il primo a portare avanti il pensiero che nessuno é certo di nulla apparte della propria esistenza.</p>
                <p>Non potremmo mai avere la certezza che una persona viva le emozioni come le viviamo noi, ma qualcosa ci fa pensare che sia cosí.</p>
                <p>Quel qualcosa é il dialogo, <strong>la comunicazione tra gli esseri</strong>.</p>
                <p>Se un'intelligenza artificiale fosse in grado di dialogare in modo da essere indistinguibile da un essere umano, seguendo la stessa logica per cui presumiamo la emotivitá umana, dovremmo presumere la emotivitá <strong>di quell'intelligenza artificiale</strong>.</p>
            </div>
            <div class="quiz-placeholder">
                <h2>Primo set domande (si-no):</h2>
                <div class="question-group">
                    <p><strong>Hai mai parlato ad un IA come se capisse i tuoi sentimenti?</strong></p>
                    <div class="radio-group">
                        <label><input type="radio" v-model="formData.domanda1_1" value="si"> Sì</label>
                        <label><input type="radio" v-model="formData.domanda1_1" value="no"> No</label>
                    </div>
                </div>
                
                <div class="question-group">
                    <p><strong>Hai mai pensato che un'IA potesse provare emozioni umane?</strong></p>
                    <div class="radio-group">
                        <label><input type="radio" v-model="formData.domanda1_2" value="si"> Sì</label>
                        <label><input type="radio" v-model="formData.domanda1_2" value="no"> No</label>
                    </div>
                </div>
                
                <div class="question-group">
                    <p><strong>Credi che ci sia possibilità in futuro di sviluppare un IA cosciente di sé?</strong></p>
                    <div class="radio-group">
                        <label><input type="radio" v-model="formData.domanda1_3" value="si"> Sì</label>
                        <label><input type="radio" v-model="formData.domanda1_3" value="no"> No</label>
                    </div>
                </div>
            </div>
            <div class="quiz-placeholder">
                <h2>Secondo set domande (1-5):</h2>
                <h3>Contesto 1:</h3>
                <h3>Un intelligenza artificiale viene allenata tramite i dati raccolti analizzando la vita di un essere umano dai suoi primi anni di vita</h3>
                
                <div class="question-group">
                    <p><strong>Pensi che questa IA possa essere in grado di provare emozioni umane?</strong></p>
                    <p class="scale-labels">1 = Per niente, 5 = Completamente</p>
                    <input v-model.number="formData.domanda2_1" type="range" min="1" max="5" step="1" class="slider" />
                    <div class="slider-value">Valore: {{ formData.domanda2_1 }}</div>
                </div>
                
                <div class="question-group">
                    <p><strong>Pensi che se questa IA comunicasse qualcosa di simile alle emozioni umane, non sarebbe un'imitazione ma bensì una forma di emotività?</strong></p>
                    <p class="scale-labels">1 = Per niente, 5 = Completamente</p>
                    <input v-model.number="formData.domanda2_2" type="range" min="1" max="5" step="1" class="slider" />
                    <div class="slider-value">Valore: {{ formData.domanda2_2 }}</div>
                </div>
                
                <div class="question-group">
                    <p><strong>Ritieni pericolosa la possibilità di un IA cosciente?</strong></p>
                    <p class="scale-labels">1 = Negativo, 5 = Positivo</p>
                    <input v-model.number="formData.domanda2_3" type="range" min="1" max="5" step="1" class="slider" />
                    <div class="slider-value">Valore: {{ formData.domanda2_3 }}</div>
                </div>
                
                <div class="question-group">
                    <p><strong>Se questa IA fosse convinta di essere umana, dovrebbe avere pari diritti ad un umano?</strong></p>
                    <p class="scale-labels">1 = Per niente, 5 = Completamente</p>
                    <input v-model.number="formData.domanda2_4" type="range" min="1" max="5" step="1" class="slider" />
                    <div class="slider-value">Valore: {{ formData.domanda2_4 }}</div>
                </div>
            </div>

            <div class="quiz-placeholder">
                <h2>Terzo set domande (1-5):</h2>
                <h3>Contesto 1 + Contesto 2:</h3>
                <h3>La stessa IA viene migliorata per aiutare gli esseri umani in situazioni di crisi emotiva come farebbe un terapeuta umano.</h3>
                
                <div class="question-group">
                    <p><strong>Quanto pensi possa essere efficace questa IA nel supportare le persone emotivamente?</strong></p>
                    <p class="scale-labels">1 = Per niente, 5 = Moltissimo</p>
                    <input v-model.number="formData.domanda3_1" type="range" min="1" max="5" step="1" class="slider" />
                    <div class="slider-value">Valore: {{ formData.domanda3_1 }}</div>
                </div>
                
                <div class="question-group">
                    <p><strong>Presupponendo la impossibilitá di notare differenze tra essa e un umano, accetteresti come psicologo questa IA?</strong></p>
                    <p class="scale-labels">1 = Assolutamente no, 5 = Completamente</p>
                    <input v-model.number="formData.domanda3_2" type="range" min="1" max="5" step="1" class="slider" />
                    <div class="slider-value">Valore: {{ formData.domanda3_2 }}</div>
                </div>
                
                <div class="question-group">
                    <p><strong>Il fatto che questa IA possa capire e simulare emozioni umane è un segnale positivo o negativo?</strong></p>
                    <p class="scale-labels">1 = Negativo, 5 = Positivo</p>
                    <input v-model.number="formData.domanda3_3" type="range" min="1" max="5" step="1" class="slider" />
                    <div class="slider-value">Valore: {{ formData.domanda3_3 }}</div>
                </div>
                
                <div class="question-group">
                    <p><strong>Pensi che questa IA saprebbe gestire le nostre emozioni meglio di noi?</strong></p>
                    <p class="scale-labels">1 = Per niente, 5 = Completamente</p>
                    <input v-model.number="formData.domanda3_4" type="range" min="1" max="5" step="1" class="slider" />
                    <div class="slider-value">Valore: {{ formData.domanda3_4 }}</div>
                </div>
            </div>

            <div class="quiz-placeholder">
                <h2>Quarto set domande (1-5):</h2>
                <h3>Contesto 3:</h3>
                <h3>Viene rilasciata un IA senza alcun limite imposto da nessuna autorità.</h3>
                
                <div class="question-group">
                    <p><strong>Pensi che la libertà di questa IA possa essere pericolosa?</strong></p>
                    <p class="scale-labels">1 = Per niente, 5 = Assolutamente</p>
                    <input v-model.number="formData.domanda4_1" type="range" min="1" max="5" step="1" class="slider" />
                    <div class="slider-value">Valore: {{ formData.domanda4_1 }}</div>
                </div>
                
                <div class="question-group">
                    <p><strong>Pensi che questa IA possa portare più vantaggi o svantaggi?</strong></p>
                    <p class="scale-labels">1 = Svantaggi, 5 = Vantaggi</p>
                    <input v-model.number="formData.domanda4_2" type="range" min="1" max="5" step="1" class="slider" />
                    <div class="slider-value">Valore: {{ formData.domanda4_2 }}</div>
                </div>

                <div class="question-group">
                    <p><strong>Pensi che se l'IA si ribellasse contro gli esseri umani, sarebbe colpa nostra?</strong></p>
                    <p class="scale-labels">1 = Probabilmente no, 5 = Molto probabilmente</p>
                    <input v-model.number="formData.domanda4_3" type="range" min="1" max="5" step="1" class="slider" />
                    <div class="slider-value">Valore: {{ formData.domanda4_3 }}</div>
                </div>
                
                <div class="question-group">
                    <p><strong>Descrivi la tua opinione sull'IA in una frase.</strong></p>
                    <p class="scale-labels">Campo di testo libero</p>
                    <input v-model="formData.domanda4_4" type="text" class="textin" placeholder="Scrivi la tua opinione qui..."/>
                </div>
            </div>
            
            <!-- Submit Section -->
            <div class="quiz-placeholder submit-section">
                <div v-if="submitError" class="error-message">
                    {{ submitError }}
                </div>
                
                <Button 
                    :label="isSubmitting ? 'Invio in corso...' : 'Invia Risposte'"
                    @click="submitQuiz"
                    :disabled="!isFormValid || isSubmitting"
                    class="submit-button"
                />
                
                <p class="form-info">
                    * Tutte le domande del primo set sono obbligatorie
                </p>
            </div>
        </div>
    </main>
    <Footer />
</template>

<style scoped>
.quiz-placeholder {
    background-color: var(--bg-tertiary, #310029);
    padding: 2rem;
    border-radius: 8px;
    border: 1px solid var(--border-primary, #4a0040);
    margin-top: 2rem;
    text-align: center;
}

.quiz-placeholder h2 {
    margin-bottom: 1rem;
    color: var(--text-accent, #ff006f);
}

.question-group {
    margin: 2rem 0;
    text-align: left;
}

.question-group p {
    margin-bottom: 1rem;
    color: var(--text-primary, #ffe0f0);
}

.radio-group {
    display: flex;
    gap: 2rem;
    justify-content: center;
    margin: 1rem 0;
}

.radio-group label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-secondary, #ffb8d6);
    cursor: pointer;
}

.radio-group input[type="radio"] {
    accent-color: var(--pink-accent, #ff006f);
}

.textin {
    width: 100%;
    padding: 10px;
    border-radius: 6px;
    border: 1px solid var(--border-primary, #4a0040);
    background-color: var(--bg-secondary, #190014);
    color: var(--text-primary, #ffe0f0);
    font-size: 16px;
    box-sizing: border-box;
}

.slider {
    width: 100%;
    height: 6px;
    border-radius: 3px;
    background: var(--bg-secondary, #190014);
    outline: none;
    margin: 1rem 0;
    accent-color: var(--pink-accent, #ff006f);
}

.slider-value {
    font-weight: bold;
    color: var(--text-accent, #ff006f);
    margin-top: 0.5rem;
}

.scale-labels {
    font-size: 0.9rem;
    color: var(--text-secondary, #ffb8d6);
    font-style: italic;
}

.submit-section {
    background-color: var(--bg-secondary, #190014);
    border: 2px solid var(--pink-accent, #ff006f);
}

.submit-button {
    margin: 1rem 0;
}

.error-message {
    background-color: #ff3333;
    color: white;
    padding: 1rem;
    border-radius: 6px;
    margin-bottom: 1rem;
}

.form-info {
    font-size: 0.9rem;
    color: var(--text-secondary, #ffb8d6);
    margin-top: 1rem;
}

.cen {
    display: block;
    margin-left: auto;
    margin-right: auto;
}
</style>