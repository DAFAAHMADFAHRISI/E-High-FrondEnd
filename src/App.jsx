import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import SiswaLandingPage from "./Pages/Siswa/LandingPage";
import Login from "./auth/Login";
import Register from "./auth/Register";
import SiswaDashBoard from "./Pages/Siswa/DashBoard";
import SiswaTryout from "./Pages/Siswa/Tryout";
import SiswaTryoutDetail from "./Pages/Siswa/TryoutDetail";
import SiswaTryoutPengerjaan from "./Pages/Siswa/TryoutPengerjaan";
import SiswaTryoutPembahasan from "./Pages/Siswa/TryoutPembahasan";
import SiswaTryoutHasil from "./Pages/Siswa/TryoutHasil";
import Dashboard from "./Pages/Admin/DashBoard";
import DetailMurid from "./Pages/Admin/DetailMurid";
import DetailGuru from "./Pages/Admin/DetailGuru";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Admin/DashBoard" element={<Dashboard />} />
        <Route path="/Admin/DetailMurid" element={<DetailMurid />} />
        <Route path="/Admin/DetailGuru" element={<DetailGuru />} />
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route
                  path="/Siswa/landingpage"
                  element={<SiswaLandingPage />}
                />
                <Route path="/Siswa/DashBoard" element={<SiswaDashBoard />} />
                <Route path="/Siswa/Tryout" element={<SiswaTryout />} />
                <Route
                  path="/Siswa/Tryout/id"
                  element={<SiswaTryoutDetail />}
                />
                <Route
                  path="/Siswa/TryoutPengerjaan"
                  element={<SiswaTryoutPengerjaan />}
                />
                <Route
                  path="/Siswa/TryoutPembahasan"
                  element={<SiswaTryoutPembahasan />}
                />
                <Route
                  path="/Siswa/TryoutHasil"
                  element={<SiswaTryoutHasil />}
                />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </>
  );
}
