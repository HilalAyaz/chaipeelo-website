import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import footerImg from "../../assets/FooterBackground.jpg";

const background = {
  backgroundImage: `linear-gradient(to top, rgba(0,0,0,.6), rgba(0,0,0,.8)), url(${footerImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Footer = () => {
  return (
    <div style={background}>
      <footer className=" body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left space-y-4">
            <a className="flex  font-medium items-center md:justify-start justify-center text-secondary">
              <span className="text-6xl font-cursive">ChaiPeelo</span>
            </a>
            <p className="mt-2  text-gray-400">
              Immerse yourself in the luxurious experience of sipping on a
              perfectly brewed cup of Chai!
            </p>
            <button className="bg-gradient-to-r from-secondary via-secondary/60 to-secondary text-white rounded-lg px-8 py-2 text-center duration-500  hover:text-black font-semibold">
              Visit Us...!
            </button>{" "}
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center ">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4 ">
              <h2 className="text-xl font-bold text-secondary tracking-widest  mb-5 ">
                Navigation
              </h2>
              <nav className="list-none mb-10 space-y-5 ">
                <li>
                  <a className="text-gray-400 font-medium hover:text-secondary/80 hover:cursor-pointer duration-300  ">
                    Home
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 font-medium hover:text-secondary/80 hover:cursor-pointer duration-300  ">
                    Services
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 font-medium hover:text-secondary/80 hover:cursor-pointer duration-300  ">
                    Menu
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 font-medium hover:text-secondary/80 hover:cursor-pointer duration-300  ">
                    Reserve Seat
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4 ">
              <h2 className="text-xl font-bold text-secondary tracking-widest  mb-5 ">
                Some Links
              </h2>
              <nav className="list-none mb-10 space-y-5">
                <li>
                  <a className="text-gray-400 font-medium hover:text-secondary/80 hover:cursor-pointer duration-300  ">
                    First Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 font-medium hover:text-secondary/80 hover:cursor-pointer duration-300  ">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 font-medium hover:text-secondary/80 hover:cursor-pointer duration-300  ">
                    Third Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 font-medium hover:text-secondary/80 hover:cursor-pointer duration-300  ">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4  ">
              <h2 className="text-xl font-bold text-secondary tracking-widest  mb-5">
                Contact Us
              </h2>
              <div className="text-gray-400 space-y-5">
                <p className="mb-2">
                  Address: 123 ChaiPeelo Street, City, Country
                </p>
                <p className="mb-2">Phone: +123 456 7890</p>
                <p className="mb-2">Email: info@chaipeelo.com</p>
                <div className="flex mt-4">
                  <a href="#" className="mr-3">
                    <FaInstagram className="h-8 w-8 hover:text-rose-500/70 duration-300" />
                  </a>
                  <a href="#" className="mr-3">
                    <FaYoutube className="h-8 w-8 hover:text-red-500 duration-300" />
                  </a>
                  <a href="#">
                    <FaFacebook className="h-8 w-8 hover:text-blue-600 duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
