import { BsFillArrowRightCircleFill } from "react-icons/bs";

export default function Hero() {
  return (
    <div className="flex items-start justify-center h-screen relative">
      <img
        src="https://ippsum.bold-themes.com/gea/wp-content/uploads/sites/2/2020/05/hero_home_04.jpg"
        alt=""
        className="w-full h-full object-cover"
      />

      <div className="flex absolute left-0 top-1/2 transform -translate-y-1/2 max-w-[600px] max-h-[475px] border-b-[10px] border-b-primary md:ml-44">
        <div className="bg-white p-14 text-secondary">
          <h1 className="text-7xl font-bold py-4 text-left leading-[5.5rem]">
            We're <br /> Ippsum Developers
          </h1>

          <button className="border rounded-[50px] border-secondary py-4 px-4 mt-4 flex justify-center items-center text-2xl hover:bg-secondary hover:text-white hover:transform hover:scale-110 transition-all duration-300">
            <BsFillArrowRightCircleFill className="text-4xl mr-6" />
            Book a Meeting
          </button>
        </div>
      </div>
    </div>
  );
}
