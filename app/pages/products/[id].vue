<script setup lang="ts">
const router = useRouter();
const {data, pending, error} = useFetch(`https://fakestoreapi.com/products`)
const product = computed(() => data.value?.find((item: Products) => item.id === Number(router.currentRoute.value.params.id)));

watch(product, () => {
  if (product.value) {
    useHead({
      title: product.value.title,
    });
  }
})
</script>

<template>
  <main class="product">
    <p v-if="pending" class="product__loading">
      Загрузка...
    </p>
    <p v-else-if="error" class="product__error">{{ error }}</p>
    <div v-else class="product__content">
      <h1 class="product__title">
        {{ product.title }}
      </h1>

      <ProductsDetails :product class="product__details" />
    </div>
  </main>
</template>

<style scoped>
.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
}

.product .product__loading {
  color: rgb(100,50,25);
}

.product .product__error {
  width: 100%;
  max-width: 360px;
}

.product .product__content {
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

.product .product__details {
  width: 100%;
  max-width: 1820px;
}
</style>
