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
import Home from "./Pages/Guru/Home";
import GuruTryout from "./Pages/Guru/GuruTryout";
import CreateTryout from "./Pages/Guru/CreateTryout";
import EditTryout from "./Pages/Guru/EditTryout";
import GuruTryoutDetail from "./Pages/Guru/GuruTryOutDetail";
import GuruTryoutSubjek from "./Pages/Guru/GuruTryoutSubjek";
import CreateTryoutSubjek from "./Pages/Guru/CreateTryoutSubjek";
import EditTryoutSubjek from "./Pages/Guru/EditTryoutSubjek";

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
                <Route path="/Guru/Home" element={<Home />} />
                <Route path="/Guru/Tryout" element={<GuruTryout />} />
                <Route path="/Guru/CreateTryout" element={<CreateTryout />} />
                <Route path="/Guru/EditTryout" element={<EditTryout />} />
                <Route path="/Guru/Tryout/id" element={<GuruTryoutDetail />} />
                <Route
                  path="/Guru/Tryout/id/subjek"
                  element={<GuruTryoutSubjek />}
                />
                <Route
                  path="/Guru/CreateTryout/id/subjek"
                  element={<CreateTryoutSubjek />}
                />
                <Route
                  path="/Guru/EditTryout/id/subjek"
                  element={<EditTryoutSubjek />}
                />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </>
  );
}
