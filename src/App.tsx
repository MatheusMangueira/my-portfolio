import { HomePage } from "./components";
import { ButtonNavigate } from "./components/ButtonNavigate/ButtonNavigate";
import { Footer } from "./components/Footer";
import { AboutPage } from "./view/AboutPage";
import { ContactPage } from "./view/ContactPage";
import { WorksPage } from "./view/WorksPage";

function App() {
  return (
    <>
      <div className="hidden lg:block">
        <ButtonNavigate />
      </div>
      <HomePage />
      <AboutPage />
      <WorksPage />
      <ContactPage />
      <Footer />
    </>
  );
}

export default App;
