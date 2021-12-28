import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <header className="pt-11 sticky top-0 bg-white">
      <div className="flex justify-between items-center md:container md:mx-auto">
        <div className="flex justify-between items-center gap-4 text-gray-500">
          <a
            className="ring-1 ring-gray-400 h-6 w-6 rounded-full flex items-center justify-center"
            href="#"
          >
            <FaGithub />
          </a>
          <a
            className="ring-1 ring-gray-400 h-6 w-6 rounded-full flex items-center justify-center"
            href="#"
          >
            <FaLinkedin />
          </a>
          <a
            className="ring-1 ring-gray-400 h-6 w-6 rounded-full flex items-center justify-center"
            href="#"
          >
            <FaTwitter />
          </a>
          <a
            className="ring-1 ring-gray-400 h-6 w-6 rounded-full flex items-center justify-center"
            href="#"
          >
            <FaFacebook />
          </a>
          <a
            className="ring-1 ring-gray-400 h-6 w-6 rounded-full flex items-center justify-center"
            href="#"
          >
            <FaEnvelope />
          </a>
        </div>
        <nav>
          <ul className="flex justify-between items-center gap-3 text-gray-700">
            <li>
              <Link
                activeClass="text-purple-900 font-bold"
                to="home"
                spy={true}
                smooth={true}
                offset={-150}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                activeClass="text-purple-900 font-bold"
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                activeClass="text-purple-900 font-bold"
                to="works"
                spy={true}
                smooth={true}
              >
                WORKS
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
