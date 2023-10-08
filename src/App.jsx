import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ClientFeedback from "./Containers/ClientFeedback/ClientFeedback";
import Footer from "./Containers/Footer/Footer";
import OurVision from "./Containers/OurVision/OurVision";
import SucceedProjects from "./Containers/SucceedProjects/SucceedProjects";
import WhoWeAre from "./Containers/WhoWeAre/WhoWeAre";

function App() {
  return (
    <>
      <div className="first_section">
        <Navbar />
        <OurVision />
        <WhoWeAre />
        <SucceedProjects />
        <ClientFeedback />
      </div>
      <div className="footer_section">
        <Footer />
      </div>
    </>
  );
}

export default App;
