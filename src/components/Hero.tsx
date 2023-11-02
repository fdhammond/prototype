import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Button from "./button/Button";

export default function Hero() {
  return (
    <div className="flex items-start justify-center h-screen relative">
      <img
        src="https://ippsum.bold-themes.com/gea/wp-content/uploads/sites/2/2020/05/hero_home_04.jpg"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="flex absolute left-0 top-1/2 transform -translate-y-1/2 max-w-[600px] max-h-[600px] border-b-[10px] border-b-primary md:ml-44">
        <div className="bg-white p-14 text-secondary">
          <h1 className="text-[48px] md:text-7xl font-bold py-4 text-left md:leading-[5.5rem]">
            We're <br /> Ippsum Developers
          </h1>

          <Button
            text={"Book a Meeting"}
            icon={<BsFillArrowRightCircleFill className="text-4xl mr-6" />}
            animation={
              "hover:bg-secondary hover:text-white hover:transform hover:scale-110 transition-all duration-300"
            }
          />
        </div>
      </div>
    </div>
  );
}
