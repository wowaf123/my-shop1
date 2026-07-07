<template>
  <div>
    <nav>
      <router-link to="/admin/products">Головна</router-link>
      <router-link to="/admin/reviews">Відгуки</router-link>
    </nav>

  
    <main>
      <router-view /> 
    </main>
  </div>
</template>

<script>
export default {
  name: 'AdminDashboard',
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, var(--neutral-50) 0%, #f0f9ff 100%);
}

nav {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-light) 100%);
  box-shadow: var(--shadow-lg);
  display: flex;
  gap: 0;
  padding: 0;
}

a {
  color: white;
  text-decoration: none;
  padding: 16px 24px;
  font-weight: 600;
  transition: var(--transition);
  border-bottom: 3px solid transparent;
  flex: 1;
  text-align: center;
}

a:hover {
  background: rgba(255, 255, 255, 0.1);
  border-bottom-color: white;
}

a.router-link-active {
  background: rgba(0, 0, 0, 0.1);
  border-bottom-color: white;
}

main {
  flex: 1;
  padding: 30px 20px;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}

@media (max-width: 768px) {
  nav {
    gap: 0;
  }

  a {
    padding: 12px 16px;
    font-size: 0.9rem;
  }

  main {
    padding: 20px 16px;
  }
}
</style>