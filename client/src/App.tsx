import { Route, Routes } from "react-router-dom";

import HomePage from "@/pages/Home";
import LoginPage from "@/pages/Auth/Login";
import SignUpPage from "./pages/Auth/SignUp";
import RootLayout from "./components/layouts/Root";

function App() {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/signup" element={<SignUpPage />} />
      </Routes>
    </RootLayout>
  );
}

export default App;
