import img1 from "../../assets/CardImage.png";
const ServicesData = [
  {
    id: 1,
    image: img1,
    name: "Chai",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    aos: "slide-right",
  },
  {
    id: 2,
    image: img1,
    name: "Karak Chai",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    aos: "slide-up",
  },
  {
    id: 3,
    image: img1,
    name: "Kashmiri Chai",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    aos: "slide-left",
  },
];

const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="bg-gray-100 ">
        <div className="container py-20">
          <div data-aos="fade-up" className="text-center mb-20">
            <h1 className="text-4xl font-bold font-cursive text-secondary">
              Best Chai in town{" "}
            </h1>
          </div>

          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center ">
            {ServicesData.map((data, index) => {
              return (
                <div
                  data-aos={data.aos}
                  data-aos-delay={data.aosDelay}
                  key={index}
                  className="rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl duration-400 max-w-[300px] group relative cursor-pointer "
                >
                  <div className="h-[122px]">
                    <img
                      src={data.image}
                      className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-125 group-hover:rotate-6 duration-500"
                      alt=""
                    />
                  </div>
                  <div className="p-4  text-center ">
                    <h1 className="text-xl font-bold">{data.name}</h1>
                    <p className="text-gray-500 group-hover:text-white duration-500 line-clamp-2">
                      {data.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
