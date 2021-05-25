import "./App.css";
import Navbar from "./components/Navbar.js";
import Body from "./components/Body.js";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="">
          <Body />
        </div>
      </div>
    </Router>
  );
}

export default App;
