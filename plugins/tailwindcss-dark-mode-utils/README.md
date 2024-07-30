# @sliit-wif/tailwindcss-dark-mode-utils

## Description

A Tailwind CSS plugin that provides custom utilities for dark mode enhancements. This plugin includes utilities for background colors, text colors, borders, shadows, and hover states specific to dark mode.

## Installation

1. **Install the Plugin**

   Install the plugin via npm:

   ```bash
   npm install @sliit-wif/tailwindcss-dark-mode-utils
   ```

   Or with yarn:

   ```bash
   yarn add @sliit-wif/tailwindcss-dark-mode-utils
   ```

2. **Configure Tailwind CSS**

   Add the plugin to your `tailwind.config.js`:

   ```javascript
   /** @type {import('tailwindcss').Config} */
   const config = {
     content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
     theme: {
       extend: {
         colors: {
           gray: {
             800: "#2d3748",
             700: "#4a5568",
             600: "#718096",
           },
           white: "#ffffff",
           "primary-light": "#3490dc",
           "primary-dark": "#1d4ed8",
         },
         boxShadow: {
           "card-dark": "0 4px 6px rgba(0, 0, 0, 0.1)",
         },
         borderRadius: {
           card: "0.5rem",
         },
         transitionProperty: {
           theme: "background-color, color, border-color, box-shadow",
         },
       },
     },
     darkMode: "class", // Enable dark mode with 'class'
     plugins: [
       require("@sliit-wif/tailwindcss-dark-mode-utils"), // Include the custom plugin
     ],
   };

   module.exports = config;
   ```

## Usage

1. **Include the Material Icons Font**

   Add the following `<link>` tag to your HTML file (e.g., `public/index.html`):

   ```html
   <link
     rel="stylesheet"
     href="https://fonts.googleapis.com/icon?family=Material+Icons"
   />
   ```

2. **Apply Dark Mode Utilities**

   Use the dark mode utilities in your Tailwind CSS classes. For example:

   ```html
   <div class="bg-white dark:bg-gray-800 text-black dark:text-white">
     <!-- Your content here -->
   </div>
   ```

   **React Component Example:**

   ```jsx
   import React, { useState } from "react";
   import "./App.css"; // Ensure Tailwind CSS is imported

   const App = () => {
     const [darkMode, setDarkMode] = useState(false);

     const toggleDarkMode = () => {
       setDarkMode(!darkMode);
       document.documentElement.classList.toggle("dark", !darkMode);
     };

     return (
       <div
         className={`min-h-screen ${
           darkMode ? "dark:bg-gray-800 dark:text-white" : "bg-white text-black"
         }`}
       >
         <header className="p-4 bg-primary-light dark:bg-primary-dark text-center">
           <h1 className="text-3xl font-bold">
             Tailwind CSS Dark Mode Example
           </h1>
           <button
             onClick={toggleDarkMode}
             className="mt-4 px-4 py-2 rounded bg-primary-dark text-white dark:bg-primary-light dark:text-black flex items-center justify-center"
           >
             {darkMode ? (
               <span className="material-icons mr-2">brightness_7</span> // Sun icon for light mode
             ) : (
               <span className="material-icons mr-2">brightness_4</span> // Moon icon for dark mode
             )}
             Toggle Dark Mode
           </button>
         </header>
         <main className="p-4">
           <section className="bg-gray-100 dark:bg-gray-700 p-6 rounded shadow-card-dark">
             <h2 className="text-xl font-semibold">Welcome to Dark Mode</h2>
             <p>This section will use dark mode colors when enabled.</p>
           </section>
         </main>
       </div>
     );
   };

   export default App;
   ```

## API

### Dark Mode Utilities

- `.dark\:bg-gray-800`: Applies a background color of `gray-800` in dark mode.
- `.dark\:text-white`: Applies a text color of `white` in dark mode.
- `.dark\:border-gray-700`: Applies a border color of `gray-700` in dark mode.
- `.dark\:shadow-md`: Applies a medium shadow in dark mode.
- `.dark\:hover\:bg-gray-700:hover`: Changes background color on hover to `gray-700` in dark mode.

## License

MIT License. See the [LICENSE](./LICENSE) file for details.
