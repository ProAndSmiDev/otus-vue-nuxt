<script setup lang="ts">
interface Props {
  product: Products
}

defineProps<Props>()
</script>

<template>
  <article class="products-card">
    <header class="products-card__header">
      <picture class="products-card__pic">
        <img :src="product.image" :alt="`Фото продукта «${product.title}»`" class="products-card__photo"/>
      </picture>

      <h2 class="products-card__title">{{ product.title }}</h2>
    </header>

    <div class="products-card__content">
      <p class="products-card__description">{{ product.description }}</p>
      <p class="products-card__price"><strong>Цена:</strong> {{ product.price }} USD</p>
    </div>
  </article>
</template>

<style scoped>
.products-card {
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgb(255,248,220);
  padding: 24px 16px;
  row-gap: 24px;
  border-radius: 12px;
}

.products-card__header {
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  border-radius: inherit;
}

.products-card__pic {
  background-color: #fff;
  width: 100%;
  height: 240px;
  display: flex;
  place-items: center;
  justify-content: center;
  border-radius: inherit;
}

.products-card__photo {
  width: 100%;
  max-width: 120px;
  height: auto;
}

.products-card__title {
  font-size: 24px;
  line-height: 29px;
  color: rgb(91, 52, 32);
  text-align: center;
}

.products-card__content {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  row-gap: 20px;
}

.products-card__price {
  color: rgb(100,50,25);
  display: flex;
  column-gap: 5px;
  text-align: center;
  margin-top: auto;
}

.products-card__description {
  font-size: 18px;
  line-height: 22px;
  color: rgb(100,50,25);
}
</style>
