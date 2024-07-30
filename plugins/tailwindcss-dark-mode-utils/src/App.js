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
        <h1 className="text-3xl font-bold">Tailwind CSS Dark Mode Example</h1>
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
