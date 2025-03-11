import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import LandingPage from "./Pages/LandingPage";
import Login from "./auth/Login";
import Register from "./auth/Register";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/landingpage" element={<LandingPage />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </>
  );
}
