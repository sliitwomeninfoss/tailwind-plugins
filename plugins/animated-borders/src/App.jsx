import "./App.css";

function App() {
  return (
    <button
      className="flex justify-center 
      items-center bg-blue-900 
      hover:bg-cyan-200 rounded-[10px] 
      text-white hover:text-blue-900 
      font-bold py-2 px-4 focus:outline-none 
      focus:shadow-outline animated-border
      from-blue-800 via-sky-400 to-blue-800 
      transition-all"
    >
      Custom Button
    </button>
  );
}

export default App;
