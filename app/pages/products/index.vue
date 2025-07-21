<script setup lang="ts">
import ProductsCard from "~/components/products/ProductsCard.vue";

const { data, pending, error } = useFetch<Products[]>('https://fakestoreapi.com/products');

const productsData = computed(() => data.value ?? []);
</script>

<template>
  <main class="products">
    <h1 class="products__title">Каталог</h1>
    <p v-if="pending" class="products__loading">Загрузка...</p>
    <p v-else-if="error" class="products__error">Ошибка: {{ error }}</p>
    <div v-else>
      <ul class="products__list">
        <li v-for="product in productsData" :key="product.id" class="products__item">
          <NuxtLink :to="`/products/${product.id}`" class="products__link">
            <ProductsCard :product />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </main>
</template>

<style scoped>
.products {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-items: center;
}

.products__title {
  font-size: 48px;
  line-height: 58px;
  color: rgb(100,50,25);
  font-weight: 700;
}

.products__loading {
  color: rgb(100,50,25);
}

.products__error {
  width: 100%;
  max-width: 360px;
}

.products__list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
  align-items: stretch;
  max-width: 1820px;
}

.products__item {
  width: 100%;
  max-width: 440px;
}

.products__link {
  height: 100%;
  text-decoration: none;
  display: flex;
  transition: opacity 0.3s ease-in-out;
}

.products__link:hover {
  opacity: 0.8;
}
</style>
