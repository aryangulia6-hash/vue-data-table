<template>
  <div class="container">

    <h1 class="page-title">📚 Library Catalog</h1>

    <!-- Dashboard Cards -->
    <div class="cards">

      <DashboardCard
        title="Total Books"
        :value="libraryData.length"
        icon="📚"
      />

      <DashboardCard
        title="Available Books"
        :value="availableBooks"
        icon="✅"
      />

      <DashboardCard
        title="Issued Books"
        :value="issuedBooks"
        icon="📕"
      />

    </div>

    <!-- Add Book Form -->

    <div class="form-card">

      <h2>Add New Book</h2>

      <div class="form-grid">

        <input
          v-model="newBook.book"
          placeholder="Book Name"
        />

        <input
          v-model="newBook.author"
          placeholder="Author"
        />

        <input
          v-model="newBook.genre"
          placeholder="Genre"
        />

        <input
          v-model="newBook.year"
          type="number"
          placeholder="Publication Year"
        />

        <select v-model="newBook.status">
          <option value="">Select Status</option>
          <option>Available</option>
          <option>Issued</option>
        </select>

      </div>

      <button
        class="btn-success"
        @click="addBook"
      >
        Add Book
      </button>

    </div>

    <!-- Data Table -->

    <BaseDataTable
      :columns="libraryColumns"
      :rows="libraryData"
      @edit="editBook"
      @delete="deleteBook"
    >

      <template #status="{ row }">

        <span
          :class="
            row.status === 'Available'
              ? 'badge available'
              : 'badge issued'
          "
        >
          {{ row.status }}
        </span>

      </template>

    </BaseDataTable>

  </div>
</template>

<script setup>
import { ref, computed } from "vue";

import BaseDataTable from "../components/BaseDataTable.vue";
import DashboardCard from "../components/DashboardCard.vue";

import {
  libraryColumns,
  libraryData
} from "../data/library.js";

// =======================
// Dashboard Cards
// =======================

const availableBooks = computed(() =>
  libraryData.value.filter(
    book => book.status === "Available"
  ).length
);

const issuedBooks = computed(() =>
  libraryData.value.filter(
    book => book.status === "Issued"
  ).length
);

// =======================
// Add Book
// =======================

const newBook = ref({

  book: "",

  author: "",

  genre: "",

  year: "",

  status: ""

});

function addBook(){

  if(

    !newBook.value.book ||

    !newBook.value.author ||

    !newBook.value.genre ||

    !newBook.value.year ||

    !newBook.value.status

  ){

    alert("Please fill all fields.");

    return;

  }

  libraryData.value.push({

    book:newBook.value.book,

    author:newBook.value.author,

    genre:newBook.value.genre,

    year:Number(newBook.value.year),

    status:newBook.value.status

  });

  newBook.value={

    book:"",

    author:"",

    genre:"",

    year:"",

    status:""

  };

  alert("Book Added Successfully!");

}

// =======================
// Edit Book
// =======================

function editBook(row){

  const book = prompt("Book Name", row.book);
  if(book===null) return;

  const author = prompt("Author", row.author);
  if(author===null) return;

  const genre = prompt("Genre", row.genre);
  if(genre===null) return;

  const year = prompt("Publication Year", row.year);
  if(year===null) return;

  const status = prompt(
    "Status (Available / Issued)",
    row.status
  );
  if(status===null) return;

  row.book = book;
  row.author = author;
  row.genre = genre;
  row.year = Number(year);
  row.status = status;

  alert("Book Updated Successfully!");

}

// =======================
// Delete Book
// =======================

function deleteBook(row){

  const confirmDelete = confirm(
    `Delete "${row.book}" ?`
  );

  if(!confirmDelete) return;

  const index = libraryData.value.findIndex(
    item => item.book === row.book
  );

  if(index !== -1){

    libraryData.value.splice(index,1);

    alert("Book Deleted Successfully!");

  }

}
</script>

<style scoped>

.container{
    width:95%;
    margin:30px auto;
}

.page-title{
    font-size:34px;
    color:#1f2937;
    margin-bottom:25px;
}

.cards{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
    gap:20px;
    margin-bottom:30px;
}

.form-card{
    background:white;
    padding:25px;
    border-radius:15px;
    margin-bottom:30px;
    box-shadow:0 10px 25px rgba(0,0,0,.08);
}

.form-card h2{
    margin-bottom:20px;
}

.form-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
    gap:15px;
    margin-bottom:20px;
}

.form-grid input,
.form-grid select{
    padding:12px;
    border:1px solid #d1d5db;
    border-radius:8px;
    font-size:15px;
    outline:none;
}

.form-grid input:focus,
.form-grid select:focus{
    border-color:#2563eb;
    box-shadow:0 0 6px rgba(37,99,235,.3);
}

.btn-success{
    background:#16a34a;
    color:white;
    border:none;
    padding:12px 22px;
    border-radius:8px;
    cursor:pointer;
    font-size:15px;
    font-weight:600;
}

.btn-success:hover{
    background:#15803d;
}

.badge{
    padding:6px 12px;
    border-radius:20px;
    font-size:13px;
    font-weight:600;
}

.available{
    background:#dcfce7;
    color:#15803d;
}

.issued{
    background:#fee2e2;
    color:#dc2626;
}

</style>