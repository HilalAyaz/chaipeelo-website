import AOS from "aos";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import DownloadBanner from "./components/DownloadBanner/DownloadSection";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="overflow-hidden">
      <Navbar openModal={openModal} />
      <Home openModal={openModal} />
      <Services openModal={openModal} />
      <Banner openModal={openModal} />
      <DownloadBanner openModal={openModal} />
      <Testimonial openModal={openModal} />
      <Footer />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;
