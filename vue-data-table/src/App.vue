<template>
  <div>
    <nav class="navbar">
      <router-link to="/">Inventory</router-link>
      <router-link to="/employee">Employee</router-link>
      <router-link to="/library">Library</router-link>
    </nav>

    <router-view />
  </div>
</template>

<script setup>
// No JavaScript needed here
</script>

<style scoped>
.navbar {
  background: #4f46e5;
  padding: 15px;
  display: flex;
  gap: 20px;
}

a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.router-link-active {
  text-decoration: underline;
}
</style>