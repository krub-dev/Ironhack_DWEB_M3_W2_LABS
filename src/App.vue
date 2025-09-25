<script setup>
// Ya no necesitamos importar ProjectList directamente
// El router se encarga de mostrar los componentes según la URL
</script>

<template>
	<div class="layout-bg">
		<div class="main-container">
			<!-- Barra de navegación -->
			<nav class="navigation">
				<router-link to="/" class="nav-link" active-class="active"
					>Home</router-link
				>
				<router-link
					to="/projects"
					class="nav-link"
					active-class="active"
					>Projects</router-link
				>
			</nav>

			<!-- Aquí se muestran los componentes según la ruta actual -->
			<router-view />
		</div>
	</div>

	<!-- Logo fijo en esquina -->
	<a href="https://krub.dev" target="_blank">
		<img
			src="/src/assets/krub-logo.png"
			alt="Krub logo"
			class="footer-logo"
		/>
	</a>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&display=swap");
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
	width: 100%;
	max-width: 600px;
	min-height: 100vh;
	background: #f5ca1c;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	box-sizing: border-box;
	margin: 0 auto;
	padding: 0;
}
h1 {
	color: #1e1e1e;
	font-size: 3em;
	margin: 0.7em 0 0.2em 0;
	font-family: "Montserrat", sans-serif;
	font-weight: 900;
	letter-spacing: 0.08em;
	text-shadow: 2px 4px 12px rgba(30, 30, 30, 0.18);
	text-transform: uppercase;
	border-bottom: 3px solid #1e1e1e;
	display: inline-block;
	animation: fadeInDown 1s cubic-bezier(0.77, 0, 0.18, 1) both;
}
h2 {
	color: #1e1e1e;
	font-size: 2em;
	margin: 0.2em 0 1em 0;
	font-family: "Montserrat", sans-serif;
	font-weight: 700;
	letter-spacing: 0.04em;
	text-shadow: 1px 2px 8px rgba(30, 30, 30, 0.12);
	text-transform: uppercase;
	animation: fadeInUp 1.2s cubic-bezier(0.77, 0, 0.18, 1) both;
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

/* Estilos para la barra de navegación */
.navigation {
	width: 100%;
	display: flex;
	justify-content: center;
	gap: 2rem;
	padding: 1.5rem 1rem 1rem 1rem;
	border-bottom: 2px solid #1e1e1e;
	margin-bottom: 0;
}

.nav-link {
	color: #1e1e1e;
	text-decoration: none;
	font-family: "Montserrat", sans-serif;
	font-weight: 700;
	font-size: 1.1em;
	text-transform: uppercase;
	letter-spacing: 0.05em;
	padding: 8px 16px;
	border-radius: 6px;
	transition: all 0.3s ease;
	position: relative;
}

.nav-link:hover {
	background: rgba(30, 30, 30, 0.1);
	transform: translateY(-2px);
}

.nav-link.active {
	background: #1e1e1e;
	color: #f5ca1c;
	box-shadow: 0 4px 12px rgba(30, 30, 30, 0.3);
}

.nav-link.active:hover {
	background: #1e1e1e;
	color: #f5ca1c;
}
</style>
