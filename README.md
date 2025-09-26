# 🚀 Ironhack DWEB - Module 3 Week 2 Labs

Professional full-stack web application developed during **Ironhack Web Development Bootcamp**. This project showcases a complete Vue.js frontend with Express.js backend, featuring advanced CRUD operations, featured projects system, and elegant dark UI design.

## 📋 **Project Overview**

### **Labs Completed:**

-   **M3_W2_D1_LAB1:** Vue.js component with personal info and featured projects list
-   **M3_W2_D2_LAB1:** SPA routing (Home, Projects, 404) with CSS styling
-   **M3_W2_D2_LAB2:** Contact form component with professional styling
-   **M3_W2_D2_LAB3:** Complete CRUD API integration with Express backend

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

| Method   | Endpoint            | Description        | Body         | Notes                      |
| -------- | ------------------- | ------------------ | ------------ | -------------------------- |
| `GET`    | `/api/projects`     | Get all projects   | -            | Includes featured status   |
| `POST`   | `/api/projects`     | Create new project | Project JSON | Auto-assigns sequential ID |
| `PUT`    | `/api/projects/:id` | Update project     | Project JSON | ID = numeric project ID    |
| `DELETE` | `/api/projects/:id` | Delete project     | -            | ID = numeric project ID    |

### **Enhanced Project Schema:**

```javascript
{
  "id": 1,                                     // Auto-incremental unique identifier
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
-   ✅ **Unique ID Generation** - Sequential auto-incremental IDs for new projects

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

### **M3_W2_D1_LAB1 - Personal Portfolio Component:**

-   ✅ **Component Creation** - Personal info with h1 (name), h2 (job title)
-   ✅ **Project Highlights** - JSON-based featured projects list
-   ✅ **Professional Design** - Header/banner image integration
-   ✅ **External Links** - Portfolio link with branding

### **M3_W2_D2_LAB1 - SPA Routing:**

-   ✅ **Vue Router** - Home component at `/home` and `/` routes
-   ✅ **Projects Display** - Component for current/featured projects
-   ✅ **404 Error Handling** - Custom NotFound component for invalid routes
-   ✅ **Professional Styling** - CSS across all components

### **M3_W2_D2_LAB2 - Contact Form:**

-   ✅ **Contact Component** - Professional collaboration inquiry form
-   ✅ **Form Validation** - Input validation and user feedback
-   ✅ **Dark Theme Design** - Elegant styling matching portfolio theme

### **M3_W2_D2_LAB3 - CRUD Integration:**

-   ✅ **Complete CRUD** - Create, Read, Update, Delete operations
-   ✅ **API Integration** - Express.js backend with JSON file storage
-   ✅ **Security Features** - Confirm dialogs for delete operations
-   ✅ **Real-time Updates** - Immediate UI feedback for all operations
-   ✅ **Featured Projects** - Enhanced system beyond basic requirements

---

## 👨‍💻 **Developer**

-   GitHub: [@krub-dev](https://github.com/krub-dev)
-   LinkedIn: [Kiko Rubio Illán](https://linkedin.com/in/krub)
-   Portfolio: [krub.dev](https://krub.dev)

---

This project was developed as part of **Ironhack Web Development Bootcamp** coursework.
