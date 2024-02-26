import { useState, useEffect } from "react";
import logo from "../../assets/LogoImage.png";
import { FaCoffee } from "react-icons/fa";
import { PropTypes } from "prop-types";

const Menus = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Services",
    link: "/#services",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
];

const Navbar = ({ openModal }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`py-2 ${scrolled ? "bg-primary" : "bg-transparent"}`}
      style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}
    >
      <div className="container">
        <div className="flex justify-between items-center gap-4">
          <div data-aos="fade-down" data-aos-once="true">
            <a
              href="/"
              className="font-bold flex justify-center items-center text-4xl gap-2 tracking-wider font-cursive text-secondary"
            >
              <img src={logo} alt="logo" className="w-14" />
              ChaiPeelo
            </a>
          </div>

          {/* Links*/}
          <div
            data-aos="fade-left"
            data-aos-once="true"
            data-aos-delay="300"
            className="flex justify-between items-center gap-4"
          >
            <ul className="hidden md:flex items-center gap-4">
              {Menus.map((data, index) => (
                <li key={index}>
                  <a
                    href={data.link}
                    className="inline-block text-md font-medium tracking-wide py-4 px-4 hover:text-white text-gray-200 duration-200 uppercase"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={openModal}
              className="bg-gradient-to-r from-secondary via-secondary/60 to-secondary rounded-lg px-5 py-2.5 text-center duration-500 items-center flex hover:text-black text-gray-200 gap-2 font-semibold"
            >
              Reserve <FaCoffee className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  openModal: PropTypes.func.isRequired,
};

export default Navbar;
