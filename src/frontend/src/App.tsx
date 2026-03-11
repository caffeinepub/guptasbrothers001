import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AboutSection } from "./components/AboutSection";
import { AppsSection } from "./components/AppsSection";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { StatsBar } from "./components/StatsBar";
import { useAllApps } from "./hooks/useQueries";

const queryClient = new QueryClient();

function AppContent() {
  const { data: apps = [] } = useAllApps();

  return (
    <div className="min-h-screen flex flex-col font-body">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <StatsBar apps={apps} />
        <AppsSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  );
}
