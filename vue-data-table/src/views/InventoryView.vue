<template>
  <div class="container">
    <h1>Inventory Management</h1>

    <BaseDataTable
      :columns="inventoryColumns"
      :rows="inventoryData"
      @edit="editItem"
      @delete="deleteItem"
    />
  </div>
</template>

<script setup>
import BaseDataTable from "../components/BaseDataTable.vue";
import { inventoryColumns, inventoryData } from "../data/inventory.js";

function editItem(row) {
  alert(`Edit Product: ${row.product}`);
}

function deleteItem(row) {
  const confirmDelete = confirm(
    `Are you sure you want to delete ${row.product}?`
  );

  if (confirmDelete) {
    alert(`${row.product} deleted successfully!`);
  }
}
</script>

<style scoped>
.container {
  padding: 20px;
}

h1 {
  margin-bottom: 20px;
}
</style>