<script setup>
import { ref } from "vue";
import projects from "../data/projects.json";

const openAccordion = ref(null);

function toggleAccordion(index) {
	openAccordion.value = openAccordion.value === index ? null : index;
}
</script>

<template>
	<div class="projects-list">
		<h3 class="projects-title">Featured Projects</h3>
		<div
			v-for="(project, idx) in projects"
			:key="project.title"
			class="project-accordion"
		>
			<div class="accordion-wrapper">
				<button class="accordion-header" @click="toggleAccordion(idx)">
					<span class="project-title">{{ project.title }}</span>
					<span class="arrow" :class="{ open: openAccordion === idx }"
						>&#9660;</span
					>
				</button>
				<div v-if="openAccordion === idx" class="accordion-body">
					<div class="project-info">
						<p>{{ project.description }}</p>
						<div class="tech-list">
							<span
								v-for="tech in project.technologies"
								:key="tech"
								class="tech-chip"
								>{{ tech }}</span
							>
						</div>
						<div class="project-img-row">
							<img
								:src="project.image"
								:alt="project.title"
								class="project-img"
							/>
						</div>
						<div class="project-links-row">
							<a
								v-if="project.repo"
								:href="project.repo"
								class="repo-btn"
								target="_blank"
								rel="noopener noreferrer"
							>
								Repo
							</a>
							<div class="rating">
								{{ project.rating }} / 5 ⭐
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&display=swap");
.projects-title {
	color: #1e1e1e;
	font-family: "Montserrat", sans-serif;
	font-size: 2em;
	font-weight: 900;
	margin-bottom: 1.2em;
	letter-spacing: 0.07em;
	text-align: center;
	text-shadow: 1px 2px 8px rgba(30, 30, 30, 0.12);
}

.projects-list {
	width: 100%;
	padding: 1rem;
}

.project-accordion {
	margin-bottom: 1.5em;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.accordion-wrapper {
	width: 100%;
	max-width: 520px;
	border-radius: 12px;
	background: #1e1e1e;
	box-shadow: 0 2px 12px rgba(30, 30, 30, 0.12);
	overflow: hidden;
}

.accordion-header {
	width: 100%;
	background: goldenrod;
	color: #1e1e1e;
	font-family: "Montserrat", sans-serif;
	font-weight: 900;
	font-size: 1.1em;
	padding: 1em 2em;
	border: none;
	outline: none;
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
	transition: background 0.2s;
}

.accordion-header:hover {
	background: #ffd738;
}

.project-title {
	letter-spacing: 0.05em;
}

.arrow {
	transition: transform 0.3s;
}
.arrow.open {
	transform: rotate(180deg);
}

.accordion-body {
	background: #232323;
	color: #dbdbdb;
	padding: 1.2em 2em;
	display: flex;
	align-items: flex-start;
	width: 100%;
	border-bottom-left-radius: 12px;
	border-bottom-right-radius: 12px;
	box-sizing: border-box;
}

.project-img-row {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 1.2em 0 0.5em 0;
}
.project-img {
	width: 90%;
	max-width: 340px;
	height: 140px;
	object-fit: cover;
	border-radius: 12px;
	background: #eee;
	box-shadow: 0 2px 8px rgba(30, 30, 30, 0.18);
	display: block;
}

.project-info {
	flex: 1;
	display: flex;
	flex-direction: column;
	min-width: 0;
	min-height: 80px;
	justify-content: space-between;
}
.project-links-row {
	display: flex;
	flex: 1;
	align-items: flex-end;
	justify-content: space-between;
	width: 100%;
	margin-top: 1.2em;
	gap: 1em;
}
.repo-btn {
	background: #f5ca1c;
	color: #1e1e1e;
	font-weight: 700;
	font-family: "Montserrat", sans-serif;
	border: none;
	border-radius: 6px;
	padding: 0.4em 1.1em;
	text-decoration: none;
	font-size: 1em;
	box-shadow: 0 1px 4px rgba(30, 30, 30, 0.1);
	transition: background 0.2s, color 0.2s;
	cursor: pointer;
}
.repo-btn:hover {
	background: #ffd738;
	color: #232323;
}

.project-info p {
	margin: 0 0 0.5em 0;
	color: #dbdbdb;
	text-align: left;
}

.tech-list {
	margin-bottom: 1.2em;
	display: flex;
	flex-wrap: wrap;
	gap: 0.5em 0.5em;
}

.tech-chip {
	background: #f5ca1c;
	color: #1e1e1e;
	border-radius: 6px;
	padding: 0.2em 0.7em;
	margin-right: 0.5em;
	font-size: 0.9em;
	font-weight: 700;
	box-shadow: 0 1px 4px rgba(30, 30, 30, 0.1);
}

.rating {
	font-size: 1em;
	color: #f5ca1c;
	font-weight: bold;
	margin-top: 1.2em;
	display: flex;
	align-items: center;
}
</style>
