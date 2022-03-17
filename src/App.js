import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomeScreen from "./Screens/HomeScreen";
import StrategyScreen from "./Screens/StrategyScreen";
import UiScreen from "./Screens/UiScreen";
import "bootstrap/dist/css/bootstrap.min.css";
import Development from "./Screens/Development";
import About from "./Screens/About";
import Contact from "./Screens/Contact";

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route exact path='/' element={<HomeScreen />} />
          <Route path='/strategy' element={<StrategyScreen />} />
          <Route path='/Ui' element={<UiScreen />} />
          <Route path='/development' element={<Development />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
