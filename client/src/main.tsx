import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@/styles/global.css";
import { BrowserRouter } from "react-router-dom";
import RootProvider from "./components/providers/RootProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <RootProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RootProvider>
);
