import HeroImage from "../../assets/HeroImage.png";

const Home = () => {
  return (
    <div className="min-h-[550px] h-screen bg-brandDark/90 flex flex-col justify-center items-center text-white px-4 sm:px-8">
      <div className="container mx-auto mt-20 lg:px-16 xl:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start mb-8 md:mb-0 order-2 md:order-1">
            {" "}
            {/* Added order classes */}
            <h1
              data-aos="fade-up"
              data-aos-once="true"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left py-10"
            >
              Treat yourself to the pinnacle of
              <span
                data-aos="zoom-out"
                data-aos-delay="300"
                className="font-cursive text-secondary text-5xl"
              >
                {" "}
                Chai{" "}
              </span>
              delights.
              <br />
              Visit Us and have Some
              <span
                data-aos="zoom-out"
                data-aos-delay="300"
                className="font-cursive text-secondary text-5xl"
              >
                {" "}
                Karhak Chai{" "}
              </span>
            </h1>
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              className="bg-gradient-to-r from-secondary via-secondary/60 to-secondary text-white rounded-lg px-6 py-3 text-center duration-500 hover:text-black font-semibold"
            >
              Have Some Chai...!
            </button>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="mt-8 md:mt-0 md:ml-10 flex justify-center order-1 md:order-2"
          >
            <img
              className="w-[350px] sm:w-96 md:w-[550px] lg:w-[450px]  mx-auto spin mb-8" // Adjusted image width
              src={HeroImage}
              alt="Chai Delights"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
