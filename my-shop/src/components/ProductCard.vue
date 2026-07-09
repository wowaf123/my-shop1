<template>
  <div class="product-card">
    <img :src="image" :alt="name" class="product-image" />
    <h2>{{ name }}</h2>
    <p>{{ description }}</p>
    <p class="price">${{ price }}</p>
    <button v-on:click="handleAddToCart" class="buy-button">Add to Cart</button>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  props: {
    name: String,
    description: String,
    price: Number,
    image: String,
  },
  setup(props) {
    const addToCart = inject("addToCart");
    function handleAddToCart() {
      addToCart({
        name: props.name,
        price: props.price,
        image: props.image,
      });
    }
    return {
      handleAddToCart,
    };
  },
  
};

</script>

<style scoped>
.product-card {
  max-width: 320px;
  background: white;
  border: 1px solid var(--neutral-200);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
  text-align: center;
  transition: var(--transition);
  display: flex;
  flex-direction: column;
  height: 100%;
}

.product-card:hover {
  border-color: var(--primary-light);
  box-shadow: var(--shadow-xl);
  transform: translateY(-8px);
}

.product-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
  transition: var(--transition);
}

.product-card:hover .product-image {
  transform: scale(1.05);
}

h2 {
  font-size: 1.25rem;
  color: var(--neutral-900);
  margin: 16px 12px 8px;
  line-height: 1.4;
  flex-grow: 0;
}

p {
  color: var(--neutral-600);
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0 12px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.price {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent-color);
  margin: 12px 12px 0;
  letter-spacing: 0.5px;
}

.buy-button {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-light) 100%);
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  padding: 12px 24px;
  margin: 16px 12px;
  cursor: pointer;
  font-size: 1rem;
  box-shadow: var(--shadow-md);
  transition: var(--transition);
}

.buy-button:hover {
  background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-color) 100%);
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.buy-button:active {
  transform: translateY(0);
}
</style> 