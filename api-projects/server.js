const express = require("express");
const cors = require("cors"); // Permite comunicación entre puertos diferentes
const fs = require("fs"); // File System - leer/escribir archivos (nativo Node.js)
const path = require("path"); // Manejo de rutas multiplataforma (nativo Node.js)

const app = express();
const PORT = 3001; // Puerto libre (Vue usa 5173, React 3000, Spring Boot 8080)

// Middlewares (como @Configuration en Spring Boot)
app.use(cors()); // Permite que Vue (puerto 5173) hable con Express (puerto 3001)
app.use(express.json()); // Parsea JSON requests (como @RequestBody)

// Path al archivo JSON (como H2 database)
// __dirname = carpeta actual (/api-projects/)
// '../src/data/projects.json' = subir una carpeta, luego src/data/projects.json
const projectsFile = path.join(__dirname, "../src/data/projects.json");

// Leer proyectos del archivo (como findAll() en Spring Data)
function readProjects() {
	try {
		// fs.readFileSync - lee archivo completo de forma síncrona
		// 'utf8' - codificación de texto para caracteres especiales (ñ, á, etc.)
		const data = fs.readFileSync(projectsFile, "utf8");
		return JSON.parse(data); // Convierte string JSON a objeto JavaScript
	} catch (error) {
		console.error("Error reading projects:", error);
		return []; // Retorna array vacío si hay error
	}
}

// Escribir proyectos al archivo (como save() en Spring Data)
function writeProjects(projects) {
	try {
		// JSON.stringify(projects, null, 2) - convierte a JSON con formato bonito (indentado)
		fs.writeFileSync(projectsFile, JSON.stringify(projects, null, 2));
		return true;
	} catch (error) {
		console.error("Error writing projects:", error);
		return false;
	}
}

// ENDPOINTS (como @GetMapping, @PostMapping...)

// GET /api/projects - Leer todos (como @GetMapping)
app.get("/api/projects", (req, res) => {
	const projects = readProjects();
	res.json(projects);
});

// POST /api/projects - Crear nuevo (como @PostMapping)
app.post("/api/projects", (req, res) => {
	const projects = readProjects();

	// Generate next sequential ID
	const maxId =
		projects.length > 0 ? Math.max(...projects.map((p) => p.id || 0)) : 0;
	const newProject = {
		...req.body,
		id: maxId + 1,
	};
	projects.push(newProject);

	if (writeProjects(projects)) {
		res.status(201).json(newProject);
	} else {
		res.status(500).json({ error: "Failed to create project" });
	}
});

// PUT /api/projects/:id - Actualizar (como @PutMapping)
app.put("/api/projects/:id", (req, res) => {
	const projects = readProjects();
	const id = parseInt(req.params.id);
	const index = projects.findIndex((p) => p.id === id);

	if (index === -1) {
		return res.status(404).json({ error: "Project not found" });
	}

	projects[index] = { ...req.body, id };

	if (writeProjects(projects)) {
		res.json(projects[index]);
	} else {
		res.status(500).json({ error: "Failed to update project" });
	}
});

// DELETE /api/projects/:id - Borrar (como @DeleteMapping)
app.delete("/api/projects/:id", (req, res) => {
	const projects = readProjects();
	const id = parseInt(req.params.id);
	const filteredProjects = projects.filter((p) => p.id !== id);

	if (projects.length === filteredProjects.length) {
		return res.status(404).json({ error: "Project not found" });
	}

	if (writeProjects(filteredProjects)) {
		res.json({ message: "Project deleted successfully" });
	} else {
		res.status(500).json({ error: "Failed to delete project" });
	}
});

// Start server (como main method)
app.listen(PORT, () => {
	console.log(`🚀 API Server running on http://localhost:${PORT}`);
	console.log(
		`📡 API endpoints available at http://localhost:${PORT}/api/projects`
	);
});
