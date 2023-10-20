import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";

export default function Nav() {
  return (
    <nav className="flex flex-col md:flex-row md:items-center justify-between px-6 md:h-full">
      <div className="flex items-center ml-8">
        <img
          src="https://ippsum.bold-themes.com/gea/wp-content/uploads/sites/2/2019/02/logo_black.png"
          alt="Logo"
          className="mr-2 w-[190px] h-auto"
        />
      </div>

      <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
        <li className="mb-2 md:mb-0 hover:border-primary hover:border-b-4 hover:mb-[-4px] border-transparent h-full">
          Home
        </li>
        <li className="mb-2 md:mb-0 hover:border-primary hover:border-b-4 hover:mb-[-4px]">
          About
        </li>
        <li className="mb-2 md:mb-0 hover:border-primary hover:border-b-4 hover:mb-[-4px]">
          Service
        </li>
        <li className="mb-2 md:mb-0 hover:border-primary hover:border-b-4 hover:mb-[-4px]">
          Pages
        </li>
        <li className="mb-2 md:mb-0 hover:border-primary hover:border-b-4 hover:mb-[-4px]">
          Contact
        </li>
        <li className="mb-2 md:mb-0 hover:border-primary hover:border-b-4 hover:mb-[-4px]">
          <AiOutlineTwitter className="text-12" />
        </li>
        <li className="mb-2 md:mb-0 hover:border-primary hover:border-b-4 hover:mb-[-4px]">
          <BiLogoFacebook className="text-6" />
        </li>
        <li className="mb-2 md:mb-0 hover:border-primary hover:border-b-4 hover:mb-[-4px]">
          <IoMdMail className="text-6" />
        </li>
      </ul>
    </nav>
  );
}
