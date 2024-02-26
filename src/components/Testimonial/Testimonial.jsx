import Slider from "react-slick";
import { PiQuotesFill } from "react-icons/pi";

const TestData = [
  {
    id: 1,
    name: "Hilal",
    image: "https://picsum.photos/101/101",
    description:
      "Hilal is a loyal patron of ChaiPeelo! Their enthusiastic support and appreciation for our tea and coffee offerings are truly heartwarming. Thank you, Hilal, for being an integral part of the ChaiPeelo community!",
  },
  {
    id: 2,
    name: "Khan",
    image: "https://picsum.photos/103/103",
    description:
      "Khan loves ChaiPeelo's cozy ambiance and delicious beverages! Their glowing reviews and recommendations have brought many new customers through our doors. We're grateful for Khan's continued support and advocacy.",
  },
  {
    id: 3,
    name: "Maryam",
    image: "https://picsum.photos/104/104",
    description:
      "Maryam is a true ChaiPeelo ambassador! Their dedication to spreading the word about our coffee and tea house has helped us grow our loyal customer base. Thank you, Maryam, for your unwavering support and enthusiasm!",
  },
  {
    id: 4,
    name: "Muneeb",
    image: "https://picsum.photos/102/102",
    description:
      "Muneeb's passion for ChaiPeelo is contagious! Their positive energy and genuine love for our beverages create a welcoming atmosphere for all who visit. We appreciate Muneeb's commitment to making ChaiPeelo a special place for everyone.",
  },
  {
    id: 5,
    name: "Saeed",
    image: "https://picsum.photos/106/106",
    description:
      "Saeed is a ChaiPeelo enthusiast! Their creative ideas and feedback have inspired us to continually innovate and improve. Thank you, Saeed, for your valuable contributions to making ChaiPeelo a beloved destination for tea and coffee lovers!",
  },
];
const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="bg-gray-100 ">
      <div className=" py-14 mb-10">
        <div className="container">
          <div data-aos="fade-up" className="text-center mb-5">
            <h1 className="text-4xl font-bold font-cursive text-gray-900">
              Testimonials{" "}
            </h1>
          </div>
          <div data-aos="zoom-in" data-aos-delay="300">
            <Slider {...settings}>
              {TestData.map((data) => {
                return (
                  <div key={data.id} className="my-6 ">
                    <div className="flex flex-col  gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/30 relative h-[300px]">
                      <div className=" shadow-2xl rounded-full w-20 h-20 ">
                        <img
                          src={data.image}
                          alt=""
                          className="rounded-full w-20 h-20"
                        />
                      </div>
                      <PiQuotesFill className="text-5xl text-secondary/60 absolute top-10 right-10" />

                      <div className=" flex flex-col items-center gap-4">
                        <div className="space-y-3">
                          <p className="text-sm text-primary text-justify">
                            {data.description}
                          </p>
                          <h1 className=" text-2xl font-bold text-black/70 font-cursive">
                            {data.name}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}{" "}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
