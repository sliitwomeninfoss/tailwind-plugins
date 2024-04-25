import "./App.css";
import ButtonWrapper from "@sliit-wif/button-wrapper/src/Button";

function App() {
  return (
    <div className="App">
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
