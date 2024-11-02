import { Dropdown } from "flowbite-react";
import "./Sidebar.scss";
import { RiInstagramFill, RiTwitterXFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64  h-screen pt-6 text-one font-black text-2xl tracking-wider hidden lg:block absolute z-1">
      <div className="flex justify-center">
        <div className="bg-black rounded-full w-52 h-52 flex items-center justify-center">
          {" "}
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white title-font text-white">
            Berry ART
          </span>
        </div>
      </div>
      <ul className="flex flex-col items-center justify-around h-64 mt-10">
        <li>
          <Dropdown label="PORTFOLIO" inline>
            <Dropdown.Item className="text-two"><Link to="/">ORIGINAL ART</Link></Dropdown.Item>
            <Dropdown.Item className="text-two"><Link to="/ArtGrid">ROUGH WORK</Link></Dropdown.Item>
            <Dropdown.Item className="text-two"><Link to="/ArtGrid">CLIENT WORK</Link></Dropdown.Item>
            <Dropdown.Item className="text-two"><Link to="/ArtGrid">ANIMATION</Link></Dropdown.Item>
          </Dropdown>
        </li>
        <li>
          <Dropdown label="RESOURCES" inline>
            <Dropdown.Item className="text-two"><Link to="/ArtGrid">FREE BRUSHES</Link></Dropdown.Item>
            <Dropdown.Item className="text-two"><Link to="/ArtGrid">TUTORIALS</Link></Dropdown.Item>
          </Dropdown>
        </li>
        <li>ABOUT</li>
        <li>CONTACT</li>
        <li className="flex">
          <RiInstagramFill className="mr-1 cursor-pointer" />
          <RiTwitterXFill className="ml-1 cursor-pointer" />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
