import { Routes, Route, Link } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import SearchPage from "../SearchPage/SearchPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Music App</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
