import { Navigate, Route, Routes } from "react-router";
import Dashboard from "@/pages/dashboard";
import Setting from "@/pages/setting";
import Layout from "./components/layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route
        path="/dashboard"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />
      <Route
        path="/setting"
        element={
          <Layout>
            <Setting />
          </Layout>
        }
      />
      <Route
        path="*"
        element={<h1 className="text-5xl text-center py-10">404</h1>}
      />
    </Routes>
  );
}

export default App;
