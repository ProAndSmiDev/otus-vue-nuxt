<script setup lang="ts">
import {Field, Form} from "vee-validate"

const { data, pending, error } = useFetch<Products[]>('https://fakestoreapi.com/products');
const productsData = computed(() => data.value ?? []);

const searchInput = ref<string>('')
const searchQuery = ref<string>('')

const filteredProducts = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()

  if (!query) {
    return productsData.value
  }

  return productsData.value.filter((product: Products) => {
    if (!product) return false

    const nameMatch = product.title.toLowerCase().includes(query)
    const priceMatch = !Number.isNaN(parseFloat(query)) && product.price === parseFloat(query)

    return nameMatch || priceMatch
  })
})

function handleSearch() {
  searchQuery.value = searchInput.value
}
</script>

<template>
  <main class="products">
    <h1 class="products__title">Каталог</h1>
    <p v-if="pending" class="products__loading">Загрузка...</p>
    <p v-else-if="error" class="products__error">Ошибка: {{ error }}</p>
    <div v-else class="products__content">
      <Form class="products__search" @submit="handleSearch">
        <Field name="userSearch" class="products__search-field" placeholder="Введите название или цену" v-model="searchInput" />

        <button class="products__search-submit" type="submit">
          <SvgoSearch class="products__search-icon" />
        </button>
      </Form>

      <ul class="products__list">
        <li v-for="product in filteredProducts" :key="product.id" class="products__item">
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

.products__content {
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  align-items: center;
}

.products__search {
  width: 100%;
  max-width: 360px;
  position: relative;
}

.products__search-field {
  background-color: rgb(255,248,220);
  border: unset;
  padding: 12px 40px 12px 16px;
  width: 100%;
  border-radius: 8px;
  color: rgb(100,50,25);
  font-size: 18px;
  line-height: 22px;
  outline: 3px solid rgb(100,50,25);
  transition: outline-color 0.3s ease-in-out;
}

.products__search-field:focus {
  outline-color: rgb(150,75,40);
}

.products__search-submit {
  width: 20px;
  height: 20px;

  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-44%);
  color: rgb(100,50,25);
  transition: color 0.3s ease-in-out;
}

.products__search-submit:hover {
  color: rgb(150,75,40);
}

.products__search-icon {
  font-size: 20px;
  vertical-align: inherit;
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
  transition: filter 0.3s ease-in-out;
  filter: brightness(0.9);
}

.products__link:hover {
  filter: brightness(1);
}
</style>
