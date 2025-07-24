<script setup lang="ts">
const menu: Menu[] = [
  {
    name: 'Главная',
    to: '/',
    title: 'Перейти на главную',
  },
  {
    name: 'Продукты',
    to: '/products',
    title: 'Перейти в каталог продуктов',
  },
];
</script>

<template>
  <ul class="header-menu">
    <li v-for="(menuItem, menuIdx) in menu" :key="menuIdx" class="header-menu__item">
      <NuxtLink
          :to="menuItem.to"
          :title="menuItem.title"
          class="header-menu__link"
          active-class="header-menu__link--active"
      >
        {{ menuItem.name }}
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped>
.header-menu {
  justify-content: center;
  column-gap: 20px;
}

.header-menu .header-menu__link {
  color: rgb(255,255,255);
  font-weight: 700;
  text-transform: uppercase;
  font-size: 24px;
  line-height: 29px;
  transition: color 0.3s ease-in-out;
}

.header-menu .header-menu__link:hover,
.header-menu .header-menu__link--active {
  color: rgb(185, 120, 93);
}
</style>
