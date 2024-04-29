import React from "react";
import "./App.css";
import { ButtonWrapper } from "./Button";

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
