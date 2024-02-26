import bgImg from "../../assets/DownloadBanner.jpg";
import { FaAppStore, FaGooglePlay } from "react-icons/fa";

const BgImage = {
  backgroundImage: `linear-gradient(to top, rgba(0,0,0,.3), rgba(0,0,0,.5)), url(${bgImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const DownloadSection = () => {
  return (
    <div style={BgImage}>
      <div className="container h-[350px] min-h-full py-10 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4 ">
          <div data-aos="fade-up" className="space-y-6 max-w-xl mx-auto py-3">
            <h1 className="text-2xl font-semibold text-gray-400 text-center sm:text-left sm:text-4xl pl-3 ">
              <span className="font-cursive text-secondary">ChaiPeelo</span> is
              available on Google Play and App Store
            </h1>
            <div className="flex items-center justify-center sm:justify-start gap-5">
            <a href="#" className="flex-none flex items-center">
              <FaAppStore className="text-5xl text-sky-500 mx-2 hover:text-green-500 duration-500" />
              <span className="text-gray-400 font-semibold hover:text-green-500 duration-500">
                App Store
              </span>
            </a>
            <a href="#" className="flex-none flex items-center">
              <FaGooglePlay className="text-5xl text-sky-600 mx-2 hover:text-green-500 duration-500" />
              <span className="text-gray-400 font-semibold hover:text-green-500 duration-500">
                Google Play
              </span>
            </a>
          </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
