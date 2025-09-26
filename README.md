# 🚀 Ironhack DWEB - Module 3 Week 2 Labs

Professional full-stack web application developed during **Ironhack Web Development Bootcamp**. This project showcases a complete Vue.js frontend with Express.js backend, featuring advanced CRUD operations, featured projects system, and elegant dark UI design.

## 📋 **Project Overview**

### **Labs Completed:**

-   **Lab 1:** Vue.js SPA with routing (Home, Projects, Contact, 404)
-   **Lab 2:** Professional contact form with dark theme styling
-   **Lab 3:** Complete CRUD API integration with Express backend
-   **Lab 4:** Featured projects system with dynamic filtering
-   **Bonus:** Advanced API Projects Manager with admin interface

### **Key Features:**

-   🌟 **Featured Projects System** - Toggle between featured and all projects
-   🔧 **CRUD API Manager** - Complete admin interface for project management
-   🎨 **Elegant Dark UI** - Consistent golden/dark theme across all components
-   📱 **Responsive Design** - Mobile-first approach with smooth animations
-   ⚡ **Real-time Updates** - Live project filtering and management
-   🔗 **Professional Integration** - LinkedIn button and contact system

### **Tech Stack:**

-   **Frontend:** Vue.js 3 (Composition API), Vue Router, CSS3, HTML5
-   **Backend:** Node.js, Express.js, CORS, File System Operations
-   **Data:** JSON file storage with real-time CRUD operations
-   **UI/UX:** Dark theme design, responsive layout, smooth animations
-   **Tools:** Vite, npm, Git, VS Code

---

## 🏗️ **Architecture**

```
📁 Ironhack_DWEB_M3_W2_LABS/
├── 🖥️ Frontend (Vue.js)           → http://localhost:5173
│   ├── src/
│   │   ├── components/
│   │   │   ├── Home.vue              # Landing page
│   │   │   ├── ProjectList.vue       # Featured/All projects toggle
│   │   │   ├── ApiProjects.vue       # CRUD Manager Interface
│   │   │   ├── Contact.vue           # Dark theme contact form
│   │   │   ├── NotFound404.vue       # 404 error page
│   │   │   └── LinkedInButton.vue    # Professional networking
│   │   ├── data/projects.json        # Enhanced with featured property
│   │   └── main.js
│   └── package.json
└── 🌐 Backend (Express API)        → http://localhost:3001
    ├── server.js                    # Full CRUD REST API
    └── package.json
```

---

## ⚡ **Quick Start**

### **Prerequisites:**

-   Node.js (v18+)
-   npm

### **1. Clone & Install:**

```bash
git clone <repository-url>
cd Ironhack_DWEB_M3_W2_LABS

# Install frontend dependencies
npm install

# Install backend dependencies
cd api-projects
npm install
cd ..
```

### **2. Start Development Servers:**

**Terminal 1 - Frontend (Vue):**

```bash
npm run dev
# → Frontend available at http://localhost:5173
```

**Terminal 2 - Backend (Express API):**

```bash
cd api-projects
node server.js
# → API available at http://localhost:3001
```

### **3. Access Application:**

-   **Frontend:** http://localhost:5173
-   **API Endpoints:** http://localhost:3001/api/projects

---

## 🌐 **API Endpoints**

### **Base URL:** `http://localhost:3001`

| Method   | Endpoint            | Description        | Body         | Notes                    |
| -------- | ------------------- | ------------------ | ------------ | ------------------------ |
| `GET`    | `/api/projects`     | Get all projects   | -            | Includes featured status |
| `POST`   | `/api/projects`     | Create new project | Project JSON | Auto-assigns unique ID   |
| `PUT`    | `/api/projects/:id` | Update project     | Project JSON | Supports featured toggle |
| `DELETE` | `/api/projects/:id` | Delete project     | -            | Permanent deletion       |

### **Enhanced Project Schema:**

```javascript
{
  "id": "unique-identifier",
  "title": "Project Title",
  "description": "Detailed description",
  "image": "https://example.com/image.jpg",
  "technologies": ["Vue.js", "Express.js"],
  "rating": 5,
  "repo": "https://github.com/username/project",
  "featured": true  // 🌟 NEW: Featured projects system
}
```

### **Example API Usage:**

```javascript
// Get all projects
const response = await fetch("http://localhost:3001/api/projects");
const projects = await response.json();

// Create new project
await fetch("http://localhost:3001/api/projects", {
	method: "POST",
	headers: { "Content-Type": "application/json" },
	body: JSON.stringify({
		title: "New Project",
		description: "Project description",
		technologies: ["Vue.js", "Express"],
		rating: 5,
	}),
});
```

---

## 🎨 **Features**

### **Frontend Features:**

-   ✅ **SPA Routing** - Vue Router navigation with smooth transitions
-   ✅ **Featured Projects System** - Toggle between featured/all projects view
-   ✅ **CRUD API Manager** - Complete admin interface for project management
-   ✅ **Responsive Design** - Mobile-first approach with elegant animations
-   ✅ **Dark Theme UI** - Consistent golden/dark color scheme
-   ✅ **Component Architecture** - Reusable Vue components with Composition API
-   ✅ **Professional Styling** - Hover effects, smooth transitions, modern design
-   ✅ **Form Handling** - Advanced forms with validation and custom styling
-   ✅ **LinkedIn Integration** - Professional networking button

### **Backend Features:**

-   ✅ **RESTful API** - Standard HTTP methods with proper status codes
-   ✅ **CORS Enabled** - Cross-origin requests fully supported
-   ✅ **File-based Storage** - JSON file persistence with backup
-   ✅ **Error Handling** - Comprehensive error responses and logging
-   ✅ **Featured Projects** - Backend support for featured/regular categorization
-   ✅ **Express Middleware** - JSON parsing, logging, request validation
-   ✅ **Unique ID Generation** - Automatic ID assignment for new projects

### **Advanced Features:**

-   🌟 **Dynamic Project Filtering** - Real-time toggle between featured and all projects
-   🔧 **Admin Dashboard** - Complete project management with dropdown interface
-   📊 **Color-coded Notifications** - Visual feedback for CRUD operations
-   🎨 **Homogeneous Design** - Consistent styling across all components
-   ⚡ **Real-time Updates** - Instant UI updates after API operations

---

## 📁 **Project Structure**

### **Frontend Components:**

-   `Home.vue` - Landing page with portfolio showcase and elegant design
-   `ProjectList.vue` - Featured/All projects toggle with accordion interface
-   `ApiProjects.vue` - Complete CRUD manager with dropdown selection and form
-   `Contact.vue` - Dark theme contact form with professional styling
-   `NotFound404.vue` - 404 error page with code-themed design
-   `LinkedInButton.vue` - Reusable LinkedIn integration component

### **Backend Structure:**

-   `server.js` - Express server with full CRUD endpoints
-   Enhanced JSON file operations with featured projects support
-   Comprehensive error handling and logging
-   CORS configuration for seamless frontend communication
-   Automatic ID generation and data validation

---

## 🚀 **Development**

### **Frontend Development:**

```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
```

### **Backend Development:**

```bash
cd api-projects
node server.js       # Start API server
# Use Ctrl+C to stop server
```

---

## 🎯 **Learning Objectives Achieved**

-   ✅ **Vue.js SPA Development** - Composition API, reactive data, component lifecycle
-   ✅ **Advanced Vue Router** - Navigation guards, route parameters, nested routes
-   ✅ **RESTful API Design** - HTTP methods, status codes, proper JSON responses
-   ✅ **Full-stack Integration** - Seamless frontend-backend communication
-   ✅ **Modern JavaScript** - ES6+, async/await, modules, destructuring
-   ✅ **File System Operations** - Node.js fs module with error handling
-   ✅ **Professional UI/UX** - Dark themes, animations, responsive design
-   ✅ **State Management** - Vue reactivity, computed properties, watchers
-   ✅ **Form Handling** - Validation, custom styling, user feedback
-   ✅ **CRUD Operations** - Create, Read, Update, Delete with real-time updates
-   ✅ **Featured Content System** - Dynamic filtering and categorization
-   ✅ **Admin Interface Design** - Professional management dashboard

---

## 👨‍💻 **Developer**

**Kiko Rubio Illán**

-   GitHub: [@krub-dev](https://github.com/krub-dev)
-   LinkedIn: [Kiko Rubio Illán](https://linkedin.com/in/krub)
-   Portfolio: [krub.dev](https://krub.dev)

---

## 📄 **License**

This project was developed as part of **Ironhack Web Development Bootcamp** coursework.
