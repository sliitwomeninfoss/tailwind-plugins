import logo from "./logo.svg";
import "./App.css";
import ButtonWrapper from "@sliit-wif/button-wrapper/src/Button";

function App() {
  return (
    <div className="App">
      <button className="flex justify-center items-center bg-blue-900 hover:bg-cyan-200 rounded-[10px] text-white hover:text-blue-900 font-bold py-2 px-4 focus:outline-none focus:shadow-outline animated-border from-blue-800 via-sky-400 to-blue-800 transition-all">
        Custom Button
      </button>
      <ButtonWrapper
        to="/next-page"
        className="w-auto"
        arrow
        arrowClassName="md:mt-[0.08rem]"
      >
        Go to Next Page
      </ButtonWrapper>
    </div>
  );
}

export default App;
