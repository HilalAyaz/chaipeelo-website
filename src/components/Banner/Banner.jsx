import BannerImage from "../../assets/BannerImage.png";
import BackgroundImage from "../../assets/BackgroundTexture.jpg";
import { SiCoffeescript } from "react-icons/si";
import { GiCoffeeCup } from "react-icons/gi";
import { FiCoffee } from "react-icons/fi";
const BgImage = {
  backgroundImage: `linear-gradient(to top, rgba(0,0,0,.6), rgba(0,0,0,.8)), url(${BackgroundImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Banner = () => {
  return (
    <>
      <span id="about"></span>
      <div style={BgImage}>
        <div className="container min-h-[550px] flex justify-center items-center py-12 sm:py-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pr-6 ">
            <div data-aos="zoom-in">
              <img
                src={BannerImage}
                alt=""
                className=" max-w-[360px] w-full mx-auto spin drop-shadow-2xl"
              />
            </div>
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1
                data-aos="fade-up"
                className="text-4xl font-bold text-secondary  text-center sm:text-start font-cursive"
              >
                Best Chai in Town!
              </h1>
              <p
                data-aos="fade-up"
                className="text-sm text-center sm:text-start text-gray-300 tracking-wider leading-5"
              >
                This is the best Chai I have ever had in my life.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className=" space-y-5">
                  <div data-aos="fade-up" className="flex items-center gap-3 ">
                    {" "}
                    <SiCoffeescript className="text-2xl w-12 h-12 shadow-sm p-3 rounded-full bg-yellow-800" />
                    <span className="font-medium text-gray-300">
                      Karak Chai
                    </span>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="flex items-center gap-3"
                  >
                    {" "}
                    <FiCoffee className="text-2xl w-12 h-12 shadow-sm p-3 rounded-full bg-yellow-800" />
                    <span className="font-medium text-gray-300">Cold Chai</span>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-aos-offset="0"
                    className="flex items-center gap-3"
                  >
                    {" "}
                    <GiCoffeeCup className="text-2xl w-12 h-12 shadow-sm p-3 rounded-full bg-yellow-800" />
                    <span className="font-medium text-gray-300">Hot Chai</span>
                  </div>
                </div>
                <div
                  data-aos="slide-left"
                  className=" border-l-4 border-secondary/60 pl-8 space-y-3"
                >
                  {" "}
                  <h1 className="text-2xl text-secondary font-semibold font-cursive ">
                    Black Tea Lovers
                  </h1>
                  <p className="text-sm text-gray-300 text-justify">
                    Immerse yourself in the luxurious experience of sipping on a
                    perfectly brewed cup of black tea.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
