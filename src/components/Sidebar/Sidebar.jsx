import { Dropdown } from "flowbite-react";
import "./Sidebar.scss";
import { RiInstagramFill, RiTwitterXFill } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className="w-64  h-screen pt-6 text-one font-black text-2xl tracking-wider hidden lg:block absolute z-1">
      <div className="flex justify-center">
        <div className="bg-black rounded-full w-52 h-52"></div>
      </div>
      <ul className="flex flex-col items-center justify-around h-64 mt-10">
        <li>
          <Dropdown label="PORTFOLIO" inline>
            <Dropdown.Item className="text-two">ORIGINAL ART</Dropdown.Item>
            <Dropdown.Item className="text-two">ROUGH WORK</Dropdown.Item>
            <Dropdown.Item className="text-two">CLIENT WORK</Dropdown.Item>
            <Dropdown.Item className="text-two">ANIMATION</Dropdown.Item>
          </Dropdown>
        </li>
        <li>
          <Dropdown label="RESOURCES" inline>
            <Dropdown.Item className="text-two">FREE BRUSHES</Dropdown.Item>
            <Dropdown.Item className="text-two">TUTORIALS</Dropdown.Item>
          </Dropdown>
        </li>
        <li>ABOUT</li>
        <li>CONTACT</li>
        <li className="flex">
          <RiInstagramFill className="mr-1 cursor-pointer"/>
          <RiTwitterXFill className="ml-1 cursor-pointer"/>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
