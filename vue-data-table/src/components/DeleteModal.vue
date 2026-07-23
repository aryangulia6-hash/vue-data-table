<template>
  <div v-if="show" class="modal-overlay">
    <div class="modal">
      <h2>Delete Record</h2>

      <p>
        Are you sure you want to delete
        <strong>{{ recordName }}</strong>?
      </p>

      <div class="buttons">
        <button
          class="btn-delete"
          @click="$emit('confirm')"
        >
          Delete
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
import { computed } from "vue";

const props = defineProps({
  show: Boolean,
  row: {
    type: Object,
    default: () => ({})
  }
});

defineEmits(["confirm", "close"]);

const recordName = computed(() => {
  if (!props.row) return "";

  return (
    props.row.name ||
    props.row.employeeName ||
    props.row.productName ||
    props.row.title ||
    props.row.id ||
    "this record"
  );
});
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
  width: 380px;
  background: white;
  padding: 25px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,.25);
}

.modal h2 {
  color: #ef4444;
  margin-bottom: 15px;
}

.modal p {
  margin-bottom: 25px;
  color: #444;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 12px;
}

.btn-delete {
  background: #ef4444;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  cursor: pointer;
}

.btn-cancel {
  background: #9ca3af;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  cursor: pointer;
}
</style>