import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Button from "./button/Button";

export default function SolutionSection() {
  return (
    <div className="flex flex-col h-[270px] w-full mt-[90px] mb-[164px] justify-center align-middle items-center">
      <h1 className="text-5xl md:text-[60px] font-bold text-center">
        One Solution Ippsum App
      </h1>
      <div className="flex gap-2 md:gap-8 align-middle text-center items-center flex-col md:flex-row mt-8">
        <Button text={"Get Ippsum for $59"} blackBackground={true} />
        <Button
          text={"See How It Works"}
          icon={<BsFillArrowRightCircleFill className="text-4xl mr-6" />}
          animation={
            "hover:bg-secondary hover:text-white hover:transform hover:scale-110 transition-all duration-300"
          }
        />
      </div>
    </div>
  );
}
