<template>
  <div v-if="show" class="modal-overlay">
    <div class="modal">
      <h2>Edit Record</h2>

      <div
        v-for="column in columns"
        :key="column.key"
        class="field"
      >
        <label>{{ column.label }}</label>

        <input
          v-model="form[column.key]"
          :type="isNumber(column.key) ? 'number' : 'text'"
        />
      </div>

      <div class="buttons">
        <button
          class="btn-save"
          @click="save"
        >
          Save
        </button>

        <button
          class="btn-cancel"
          @click="$emit('close')"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  show: Boolean,
  row: {
    type: Object,
    default: () => ({})
  },
  columns: {
    type: Array,
    default: () => []
  }
});

const emit = defineEmits(["save", "close"]);

const form = ref({});

watch(
  () => props.row,
  (value) => {
    form.value = value ? { ...value } : {};
  },
  {
    immediate: true,
    deep: true
  }
);

function save() {
  emit("save", { ...form.value });
}

function isNumber(key) {
  return [
    "salary",
    "tax",
    "netPay",
    "stock",
    "price"
  ].includes(key);
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.45);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  width: 420px;
  background: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,.25);
}

.modal h2 {
  margin-bottom: 20px;
  color: #2563eb;
}

.field {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

.field label {
  margin-bottom: 6px;
  font-weight: 600;
}

.field input {
  padding: 10px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  outline: none;
}

.field input:focus {
  border-color: #2563eb;
}

.buttons {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 20px;
}

.btn-save {
  background: #16a34a;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  cursor: pointer;
}

.btn-cancel {
  background: #ef4444;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  cursor: pointer;
}
</style>