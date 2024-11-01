import { Navbar, Dropdown } from "flowbite-react";
import "./Navbar.scss";
import { RiInstagramFill, RiTwitterXFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbarcomp = () => {
  return (
    <Navbar fluid rounded className="lg:hidden" >
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white title-font text-gray-700">
          Berry ART
        </span>
      </Navbar.Brand>
      <Navbar.Toggle/>
      <Navbar.Collapse>
        <Navbar active>
        <Dropdown label="PORTFOLIO" inline>
            <Dropdown.Item className="text-two"><Link to="/ArtGrid">ORIGINAL ART</Link></Dropdown.Item>
            <Dropdown.Item className="text-two"><Link to="/ArtGrid">ROUGH WORK</Link></Dropdown.Item>
            <Dropdown.Item className="text-two"><Link to="/ArtGrid">CLIENT WORK</Link></Dropdown.Item>
            <Dropdown.Item className="text-two"><Link to="/ArtGrid">ANIMATION</Link></Dropdown.Item>
          </Dropdown>
        </Navbar>
        <Navbar>
        <Dropdown label="RESOURCES" inline>
            <Dropdown.Item className="text-two"><Link to="/ArtGrid">FREE BRUSHES</Link></Dropdown.Item>
            <Dropdown.Item className="text-two"><Link to="/ArtGrid">TUTORIALS</Link></Dropdown.Item>
          </Dropdown>
        </Navbar>
        <Navbar.Link className='md:mt-2 lg:mt-0'>ABOUT</Navbar.Link>
        <Navbar.Link className='md:mt-2 lg:mt-0' href="#">CONTACT</Navbar.Link>
        <Navbar className="flex justify-start items-center">
          <RiInstagramFill className="mr-1"/>
          <RiTwitterXFill className="ml-1"/>
        </Navbar>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbarcomp;
