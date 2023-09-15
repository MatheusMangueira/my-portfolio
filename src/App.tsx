import { HomePage } from "./components";
import { ButtonNavigate } from "./components/ButtonNavigate/ButtonNavigate";
import { Footer } from "./components/Footer";
import { TranslationProvider } from "./context";
import { AboutPage } from "./view/AboutPage";
import { ContactPage } from "./view/ContactPage";
import { WorksPage } from "./view/WorksPage";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <TranslationProvider>
        <div className="max-w-[1920px] mx-auto" aria-label="main page">
          <div className="hidden lg:block">
            <ButtonNavigate />
          </div>
          <HomePage />
          <AboutPage />
          <WorksPage />
          <ContactPage />
          <Footer />
        </div>
      </TranslationProvider>
    </Router>
  );
}

export default App;
