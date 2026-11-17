import { Outlet } from "react-router-dom";
import { Header } from "./Hearder";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsappButton";

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-encre">
      <Header />
      <main className="mx-auto w-full max-w-[1200px] flex-1 px-4 py-6">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}