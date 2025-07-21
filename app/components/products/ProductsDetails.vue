<script setup lang="ts">
interface Props {
  product: Products
}

defineProps<Props>()
</script>

<template>
  <section class="products-details">
    <img :src="product.image" :alt="product.title" class="products-details__img">

    <div class="products-details__info">
      <header class="products-details__header">
        <h1 class="products-details__title">
          {{ product.title }}
        </h1>
      </header>

      <p class="products-details__description">
        {{ product.description }}
      </p>

      <footer class="products-details__footer">
        <ul class="products-details__rating">
          <li class="products-details__rating-item">
            <strong>Кол-во оценок:</strong> {{ product.rating.count }}
          </li>
          <li class="products-details__rating-item">
            <b>Рейтинг продукта:</b> {{ product.rating.rate }}
          </li>
        </ul>
      </footer>
    </div>

    <div class="products-details__wrapper">
      <p class="products-details__price">
        <strong class="products-details__price--normal">{{ product.price }}$</strong>
      </p>
    </div>
  </section>
</template>

<style scoped>
.products-details {
  display: grid;
  outline: 3px solid #633219;
  padding: 20px;
  background-color: rgb(255,248,220);
  border-radius: 8px;
  column-gap: 20px;
  grid-template-columns: auto auto 1fr;
}

.products-details .products-details__img {
  width: 100%;
  max-width: 180px;
  height: 180px;
  object-fit: contain;
  background-color: #fff;
  border-radius: inherit;
}

.products-details .products-details__info {
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
}

.products-details .products-details__title {
  font-size: 24px;
  line-height: 29px;
  color: rgb(91, 52, 32);
}

.products-details .products-details__description {
  font-size: 18px;
  line-height: 22px;
  color: rgb(100,50,25);
}

.products-details .products-details__footer {
  margin-top: auto;
  display: flex;
  column-gap: 20px;
}

.products-details .products-details__price {
  color: rgb(100,50,25);
  display: flex;
  flex-direction: column;
  margin-left: auto;
  text-align: right;
}

.products-details .products-details__price--normal {
  font-size: 14px;
  line-height: 17px;
}

.products-details .products-details__wrapper {
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  width: 100%;
  max-width: 240px;
}

.products-details .products-details__rating {
  column-gap: 20px;
}
</style>
