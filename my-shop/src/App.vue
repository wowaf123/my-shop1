<template>
  <div>
    <router-view />  
  </div>
</template>

<script>

export default {
  name: 'App',
components: {
  }
}
  

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary-color: #2563eb;
  --primary-light: #3b82f6;
  --primary-dark: #1d4ed8;
  --accent-color: #10b981;
  --secondary-color: #8b5cf6;
  --danger-color: #ef4444;
  --neutral-50: #f9fafb;
  --neutral-100: #f3f4f6;
  --neutral-200: #e5e7eb;
  --neutral-300: #d1d5db;
  --neutral-400: #9ca3af;
  --neutral-500: #6b7280;
  --neutral-600: #4b5563;
  --neutral-700: #374151;
  --neutral-800: #1f2937;
  --neutral-900: #111827;
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(135deg, var(--neutral-50) 0%, #f0f9ff 100%);
  color: var(--neutral-700);
  min-height: 100vh;
  padding: 20px;
}

body {
  background: linear-gradient(135deg, var(--neutral-50) 0%, #f0f9ff 100%);
}

h1, h2, h3, h4, h5, h6 {
  color: var(--neutral-900);
  font-weight: 600;
  line-height: 1.2;
}

h1 { font-size: 2.25rem; }
h2 { font-size: 1.875rem; }
h3 { font-size: 1.5rem; }

button {
  font-family: inherit;
  transition: var(--transition);
}

button:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

button:active {
  transform: translateY(0);
}

input, textarea, select {
  font-family: inherit;
  border: 1px solid var(--neutral-200);
  border-radius: 8px;
  padding: 8px 12px;
  transition: var(--transition);
}

input:focus, textarea:focus, select:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}
</style>
