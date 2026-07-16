<template>
  <div>

    <!-- Navigation Bar -->
    <nav class="navbar">

      <div class="logo">
        📊 Vue Data Table System
      </div>

      <div class="nav-links">

        <router-link to="/">
          Inventory
        </router-link>

        <router-link to="/employee">
          Employee
        </router-link>

        <router-link to="/library">
          Library
        </router-link>

      </div>

    </nav>

    <!-- Current Page -->
    <router-view />

    <!-- Footer -->
    <footer class="footer">

      <p>
        Reusable Vue 3 Data Table Component System
      </p>

      <small>
        Developed using Vue 3 Composition API • Props • Emits • Scoped Slots
      </small>

    </footer>

  </div>
</template>

<script setup>
// No script required
</script>

<style scoped>

.navbar{

    background:linear-gradient(135deg,#2563eb,#4f46e5);

    color:white;

    display:flex;

    justify-content:space-between;

    align-items:center;

    padding:18px 40px;

    box-shadow:0 5px 20px rgba(0,0,0,.15);

}

.logo{

    font-size:24px;

    font-weight:700;

}

.nav-links{

    display:flex;

    gap:30px;

}

.nav-links a{

    color:white;

    text-decoration:none;

    font-weight:500;

    transition:.3s;

}

.nav-links a:hover{

    color:#dbeafe;

}

.router-link-active{

    border-bottom:3px solid white;

    padding-bottom:5px;

    font-weight:700;

}

.footer{

    margin-top:40px;

    padding:25px;

    text-align:center;

    background:white;

    color:#6b7280;

    box-shadow:0 -2px 10px rgba(0,0,0,.08);

}

.footer p{

    font-size:16px;

    font-weight:600;

    margin-bottom:8px;

}

.footer small{

    color:#9ca3af;

}

</style>