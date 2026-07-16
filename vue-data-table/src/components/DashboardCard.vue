<template>
  <div class="card">
    <div class="card-icon">
      {{ icon }}
    </div>

    <div class="card-content">
      <h3>{{ title }}</h3>
      <h1>{{ value }}</h1>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },

  value: {
    type: [String, Number],
    required: true
  },

  icon: {
    type: String,
    default: "📊"
  }
});
</script>

<style scoped>
.card {
  background: white;
  border-radius: 18px;
  padding: 22px;
  display: flex;
  align-items: center;
  gap: 18px;
  box-shadow: 0 10px 25px rgba(0,0,0,.08);
  transition: .3s;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 15px 35px rgba(37,99,235,.18);
}

.card-icon {
  width: 70px;
  height: 70px;
  border-radius: 15px;
  background: linear-gradient(135deg,#2563eb,#4f46e5);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
}

.card-content {
  flex: 1;
}

.card-content h3 {
  color: #6b7280;
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 8px;
}

.card-content h1 {
  color: #111827;
  font-size: 30px;
  font-weight: 700;
}
</style>