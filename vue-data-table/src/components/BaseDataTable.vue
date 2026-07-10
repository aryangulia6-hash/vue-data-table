<template>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th
            v-for="column in columns"
            :key="column.key"
            @click="sortBy(column.key)"
            class="sortable"
          >
            {{ column.label }}

            <span v-if="sortKey === column.key">
              {{ sortDirection === "asc" ? " ▲" : " ▼" }}
            </span>
          </th>

          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(row, index) in paginatedRows" :key="index">
          <td
            v-for="column in columns"
            :key="column.key"
          >
            <!-- Scoped Slot -->
            <slot
              :name="column.key"
              :row="row"
            >
              {{ row[column.key] }}
            </slot>
          </td>

          <td>
            <button @click="$emit('edit', row)">Edit</button>
            <button @click="$emit('delete', row)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Pagination -->

    <div class="pagination">
      <button
        @click="previousPage"
        :disabled="currentPage === 1"
      >
        Previous
      </button>

      <span>
        Page {{ currentPage }} of {{ totalPages }}
      </span>

      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  columns: {
    type: Array,
    required: true,
  },

  rows: {
    type: Array,
    required: true,
  },
});

defineEmits(["edit", "delete"]);

// ---------------------
// Sorting
// ---------------------

const sortKey = ref("");
const sortDirection = ref("asc");

function sortBy(key) {
  if (sortKey.value === key) {
    sortDirection.value =
      sortDirection.value === "asc"
        ? "desc"
        : "asc";
  } else {
    sortKey.value = key;
    sortDirection.value = "asc";
  }
}

const sortedRows = computed(() => {
  const data = [...props.rows];

  if (!sortKey.value) return data;

  return data.sort((a, b) => {
    if (a[sortKey.value] < b[sortKey.value])
      return sortDirection.value === "asc"
        ? -1
        : 1;

    if (a[sortKey.value] > b[sortKey.value])
      return sortDirection.value === "asc"
        ? 1
        : -1;

    return 0;
  });
});

// ---------------------
// Pagination
// ---------------------

const currentPage = ref(1);

const rowsPerPage = 10;

const totalPages = computed(() =>
  Math.ceil(sortedRows.value.length / rowsPerPage)
);

const paginatedRows = computed(() => {
  const start =
    (currentPage.value - 1) * rowsPerPage;

  return sortedRows.value.slice(
    start,
    start + rowsPerPage
  );
});

function nextPage() {
  if (currentPage.value < totalPages.value)
    currentPage.value++;
}

function previousPage() {
  if (currentPage.value > 1)
    currentPage.value--;
}
</script>

<style scoped>
.table-container {
  margin: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}

th {
  background: #4f46e5;
  color: white;
}

.sortable {
  cursor: pointer;
}

tr:nth-child(even) {
  background: #f7f7f7;
}

button {
  margin: 3px;
  padding: 6px 12px;
  cursor: pointer;
}

.pagination {
  margin-top: 15px;

  display: flex;

  justify-content: center;

  align-items: center;

  gap: 15px;
}
</style>