<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Button',
  props: {
    label: {
      type: String,
      required: true
    },
    to: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'button'
    }
  },
  methods: {
    handleClick() {
      if (this.disabled) {
        return;
      }
      if (this.to) {
        this.$router.push(this.to);
      }
      this.$emit('click');
    }
  }
});
</script>

<template>
  <button
    class="custom-button"
    :type="type"
    :disabled="disabled"
    @click="handleClick"
  >
    {{ label }}
  </button>
</template>

<style scoped>
.custom-button {
  background-color:#31001b;
  color: #ffe0f0;
  border: 1px solid #810050;
  padding: 12px 24px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.custom-button:hover {
  background-color:#540019;
  border-color: #7a0033;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.custom-button:active {
  background-color:#540019;
  border-color: #7a0033;
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.custom-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}
</style>