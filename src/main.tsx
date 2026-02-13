import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider";
import { Analytics } from "@vercel/analytics/react";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <>
      <App />
      <Analytics />
    </>
  </ThemeProvider>,
);
