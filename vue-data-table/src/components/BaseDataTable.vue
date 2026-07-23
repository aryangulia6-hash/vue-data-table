<template>
  <div class="table-container">

    <!-- Search -->
    <div class="search-box">
      <input
        v-model="search"
        type="text"
        placeholder="🔍 Search..."
      />
    </div>

    <!-- Table -->
    <table>

      <thead>
        <tr>

          <th
            v-for="column in columns"
            :key="column.key"
            class="sortable"
            @click="sortBy(column.key)"
          >
            {{ column.label }}

            <span v-if="sortKey === column.key">
              {{ sortDirection === 'asc' ? '▲' : '▼' }}
            </span>

          </th>

          <th>Actions</th>

        </tr>
      </thead>

      <tbody>

        <tr
          v-for="(row,index) in paginatedRows"
          :key="index"
        >

          <td
            v-for="column in columns"
            :key="column.key"
          >

            <slot
              :name="column.key"
              :row="row"
            >

              {{ row[column.key] }}

            </slot>

          </td>

          <td class="action-buttons">

            <button
              class="btn btn-edit"
              @click="$emit('edit', row)"
            >
              ✏ Edit
            </button>

            <button
              class="btn btn-delete"
              @click="$emit('delete', row)"
            >
              🗑 Delete
            </button>

          </td>

        </tr>

        <tr v-if="paginatedRows.length === 0">

          <td
            :colspan="columns.length + 1"
            class="no-data"
          >
            No Data Found
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
        ◀ Previous
      </button>

      <span>

        Page {{ currentPage }}

        of

        {{ totalPages }}

      </span>

      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
      >
        Next ▶
      </button>

    </div>

  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";

const props = defineProps({
  columns: {
    type: Array,
    required: true
  },

  rows: {
    type: Array,
    required: true
  }
});

defineEmits(["edit", "delete"]);

// =======================
// Search
// =======================

const search = ref("");

// =======================
// Sorting
// =======================

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

// =======================
// Filter
// =======================

const filteredRows = computed(() => {

  if (!search.value) return props.rows;

  return props.rows.filter(row =>
    Object.values(row)
      .join(" ")
      .toLowerCase()
      .includes(search.value.toLowerCase())
  );

});

// =======================
// Sort
// =======================

const sortedRows = computed(() => {

  const data = [...filteredRows.value];

  if (!sortKey.value) return data;

  return data.sort((a, b) => {

    if (a[sortKey.value] < b[sortKey.value]) {

      return sortDirection.value === "asc"
        ? -1
        : 1;

    }

    if (a[sortKey.value] > b[sortKey.value]) {

      return sortDirection.value === "asc"
        ? 1
        : -1;

    }

    return 0;

  });

});

// =======================
// Pagination
// =======================

const rowsPerPage = 5;

const currentPage = ref(1);

const totalPages = computed(() => {

  return Math.max(
    1,
    Math.ceil(
      sortedRows.value.length / rowsPerPage
    )
  );

});

const paginatedRows = computed(() => {

  const start =
    (currentPage.value - 1) * rowsPerPage;

  return sortedRows.value.slice(
    start,
    start + rowsPerPage
  );

});

function nextPage() {

  if (currentPage.value < totalPages.value) {

    currentPage.value++;

  }

}

function previousPage() {

  if (currentPage.value > 1) {

    currentPage.value--;

  }

}

// =======================
// Watchers
// =======================

watch(search, () => {

  currentPage.value = 1;

});

watch(
  () => sortedRows.value.length,
  () => {

    if (currentPage.value > totalPages.value) {

      currentPage.value = totalPages.value;

    }

  }
);

</script>

<style scoped>

.table-container{

    background:#fff;

    padding:25px;

    border-radius:15px;

    box-shadow:0 10px 25px rgba(0,0,0,.08);

}

.search-box{

    margin-bottom:20px;

}

.search-box input{

    width:320px;

    padding:12px 15px;

    border:1px solid #d1d5db;

    border-radius:8px;

    outline:none;

    font-size:15px;

}

.search-box input:focus{

    border-color:#2563eb;

}

table{

    width:100%;

    border-collapse:collapse;

}

thead{

    background:#2563eb;

    color:white;

}

th{

    padding:15px;

    cursor:pointer;

    user-select:none;

    text-align:left;

}

td{

    padding:14px;

    border-bottom:1px solid #eee;

}

tbody tr:hover{

    background:#f8fbff;

}

.action-buttons{

    display:flex;

    gap:10px;

}

.btn{

    border:none;

    padding:8px 14px;

    color:white;

    border-radius:8px;

    cursor:pointer;

    transition:.25s;

}

.btn:hover{

    transform:translateY(-2px);

}

.btn-edit{

    background:#2563eb;

}

.btn-delete{

    background:#ef4444;

}

.pagination{

    display:flex;

    justify-content:center;

    align-items:center;

    gap:20px;

    margin-top:20px;

}

.pagination button{

    border:none;

    background:#2563eb;

    color:white;

    padding:10px 18px;

    border-radius:8px;

    cursor:pointer;

}

.pagination button:disabled{

    background:#9ca3af;

    cursor:not-allowed;

}

.no-data{

    text-align:center;

    padding:25px;

    color:#6b7280;

}

@media(max-width:768px){

table{

    display:block;

    overflow-x:auto;

}

.search-box input{

    width:100%;

}

.action-buttons{

    flex-direction:column;

}

}

</style>