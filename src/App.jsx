import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import DownloadBanner from "./components/DownloadBanner/DownloadSection";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  });
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Home />
      <Services />
      <Banner />
      <DownloadBanner />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
