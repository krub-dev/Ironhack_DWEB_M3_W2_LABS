<script setup>
import ProjectList from './components/ProjectList.vue';
</script>

<template>
  <div class="layout-bg">
    <div class="main-container">
      <div class="banner">
        <img src="/src/assets/banner-krub.png" alt="banner krub" width="600" height="auto" />
      </div>
      <h1>KIKO RUBIO ILLÁN</h1>
      <h2>Full Stack Developer</h2>
      <ProjectList />
    </div>
  </div>
  <a href="https://krub.dev" target="_blank">
    <img src="/src/assets/krub-logo.png" alt="Krub logo" class="footer-logo" />
  </a>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&display=swap');
.banner {
  height: 15em;
  will-change: filter;
  transition: filter 300ms;
  filter: drop-shadow(0 0 2em #1e1e1eaa);
}

.logo:hover {
  filter: drop-shadow(0 0 2em #1e1e1eaa);
}

.footer-logo {
  position: fixed;
  bottom: 20px;
  left: 20px;
  width: 80px;
  z-index: 100;
  opacity: 0.9;
}

.layout-bg {
  min-height: 100vh;
  width: 100vw;
  background: var(--color-bg);
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.main-container {
  width: 600px;
  min-height: 100vh;
  background: #F5CA1C;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
}
h1 {
  color: #1e1e1e;
  font-size: 3em;
  margin: 0.7em 0 0.2em 0;
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-shadow: 2px 4px 12px rgba(30,30,30,0.18);
  text-transform: uppercase;
  border-bottom: 3px solid #1e1e1e;
  display: inline-block;
  animation: fadeInDown 1s cubic-bezier(.77,0,.18,1) both;
}
h2 {
  color: #1e1e1e;
  font-size: 2em;
  margin: 0.2em 0 1em 0;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-shadow: 1px 2px 8px rgba(30,30,30,0.12);
  text-transform: uppercase;
  animation: fadeInUp 1.2s cubic-bezier(.77,0,.18,1) both;
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
