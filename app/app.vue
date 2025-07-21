<script setup lang="ts"></script>

<template>
  <div class="app">
    <HeaderBar class="app__header" />

    <div class="app__content">
      <NuxtPage />
    </div>

    <footer class="app__footer">
      Copyright by @ProAndSmiDev
    </footer>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  min-height: 100vh;
  align-items: center;
}

.app .app__header,
.app .app__footer {
  flex: 0 0 auto;
  align-self: stretch;
  background-color: rgb(100,50,25);
}

.app .app__content {
  flex: 1 0 auto;
  display: grid;
  width: 100%;
  max-width: 1820px;
}

.app .app__footer {
  display: flex;
  justify-content: center;
  padding: 20px 40px;
  font-size: 18px;
  line-height: 25px;
  color: #fff;
}
</style>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

html {
  scrollbar-width: thin;
  scrollbar-color: rgb(149, 74, 40) transparent;
}

button {
  background-color: transparent;
  border: unset;
  cursor: pointer;
}

img {
  width: auto;
  height: 100%;
  object-fit: cover;
}

ul, ol {
  list-style: none;
  display: flex;
}

a {
  text-decoration: none;
}
</style>
