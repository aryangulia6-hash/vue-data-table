<template>
  <div>
    <h1>Library Catalog</h1>

    <BaseDataTable
      :columns="libraryColumns"
      :rows="libraryData"
      @edit="editBook"
      @delete="deleteBook"
    >
      <template #status="{ row }">
        <span
          :style="{
            color: row.status === 'Available' ? 'green' : 'red',
            fontWeight: 'bold'
          }"
        >
          {{ row.status }}
        </span>
      </template>
    </BaseDataTable>
  </div>
</template>

<script setup>
import BaseDataTable from "../components/BaseDataTable.vue";

import {
  libraryColumns,
  libraryData
} from "../data/library.js";

function editBook(row) {
  alert("Edit " + row.book);
}

function deleteBook(row) {
  alert("Delete " + row.book);
}
</script>