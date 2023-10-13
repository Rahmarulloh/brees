import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import LayoutComponent from "./components/Layout";
import DragAndDropExample from "./dnd";

function App() {
  return (
    <div className="App">
      <LayoutComponent />
      {/* <DragAndDropExample /> */}
    </div>
  );
}

export default App;
