<template>
  <div>
    <!-- Navigation Bar -->
    <nav class="navbar">
      <div class="logo">
        📊 Vue Data Table System
      </div>

      <div class="nav-links">
        <router-link to="/">
          Employee
        </router-link>

        <router-link to="/inventory">
          Inventory
        </router-link>

        <router-link to="/library">
          Library
        </router-link>

        <router-link to="/support">
          Support
        </router-link>

        <router-link to="/transactions">
          Transactions
        </router-link>
      </div>
    </nav>

    <!-- Current Page -->
    <main class="content">
      <router-view />
    </main>

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

*{
  box-sizing:border-box;
}

.navbar{
  background:linear-gradient(135deg,#2563eb,#4f46e5);
  color:white;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:18px 40px;
  box-shadow:0 5px 20px rgba(0,0,0,.15);
  flex-wrap:wrap;
}

.logo{
  font-size:24px;
  font-weight:700;
}

.nav-links{
  display:flex;
  gap:25px;
  flex-wrap:wrap;
}

.nav-links a{
  color:white;
  text-decoration:none;
  font-weight:500;
  padding-bottom:4px;
  transition:.3s;
}

.nav-links a:hover{
  color:#dbeafe;
}

.router-link-active{
  border-bottom:3px solid white;
  font-weight:700;
}

.content{
  padding:30px;
  min-height:calc(100vh - 170px);
  background:#f5f7fb;
}

.footer{
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

@media (max-width:768px){

  .navbar{
    flex-direction:column;
    gap:15px;
    padding:20px;
  }

  .nav-links{
    justify-content:center;
    gap:15px;
  }

  .content{
    padding:15px;
  }

}
</style>