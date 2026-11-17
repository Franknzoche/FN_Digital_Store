import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/inter";
import "./index.css";
import App from "./App.tsx";

async function demarrer() {
  if (import.meta.env.DEV) {
    const { worker } = await import("./test/mocks/browser");
    await worker.start({ onUnhandledFrame: "bypass" });
  }

  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

demarrer();