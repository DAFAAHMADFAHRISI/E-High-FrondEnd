import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LandingPage from "./Component/LandingPage";
import { UserHome } from "./Siswa/UserHome";
import { StatistikDanNilai } from "./Siswa/StatistikDanNilai";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div>
                <a href="https://vite.dev" target="_blank">
                  <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                  <img
                    src={reactLogo}
                    className="logo react"
                    alt="React logo"
                  />
                </a>
              </div>
              <h1 className="text-red-500">Vite + React</h1>
              <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
                </button>
                <p>
                  Edit <code>src/App.jsx</code> and save to test HMR
                </p>
              </div>
              <p className="read-the-docs">
                Click on the Vite and React logos to learn more
              </p>
            </>
          }
        />
        <Route path="/landingpages" element={<LandingPage />} />
        <Route path="/Siswa/UserHome" element={<UserHome />} />
        <Route
          path="/siswa/StatistikDanNilai"
          element={<StatistikDanNilai />}
        />
      </Routes>
    </>
  );
}

export default App;
