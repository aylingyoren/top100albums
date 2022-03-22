import { Routes, Route, Link } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import NavBar from "../NavBar/NavBar";
import SearchPage from "../SearchPage/SearchPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Pulse On Music</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route
          path="*"
          element={
            <div style={{ padding: "1rem" }}>
              <h1>Error 404: Not Found</h1>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
