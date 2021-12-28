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
            href="https://github.com/muhib-dev"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            className="ring-1 ring-gray-400 h-6 w-6 rounded-full flex items-center justify-center"
            href="https://www.linkedin.com/in/muhibullah-khandaker/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a
            className="ring-1 ring-gray-400 h-6 w-6 rounded-full flex items-center justify-center"
            href="https://twitter.com/Muhebollah"
            target="_blank"
          >
            <FaTwitter />
          </a>
          <a
            className="ring-1 ring-gray-400 h-6 w-6 rounded-full flex items-center justify-center"
            href="https://www.facebook.com/muhibollah.kh"
            target="_blank"
          >
            <FaFacebook />
          </a>
          <a
            className="ring-1 ring-gray-400 h-6 w-6 rounded-full flex items-center justify-center"
            href="mailto:muhebollah.diu@gmail.com"
          >
            <FaEnvelope />
          </a>
        </div>
        <nav>
          <ul className="flex justify-between items-center gap-5 text-gray-700">
            <li>
              <Link
                className="cursor-pointer"
                activeClass="text-purple-900 font-bold"
                to="home"
                spy={true}
                smooth={true}
                offset={-150}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer"
                activeClass="text-purple-900 font-bold"
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer"
                activeClass="text-purple-900 font-bold"
                to="technology"
                spy={true}
                smooth={true}
                offset={-150}
              >
                Technology
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer"
                activeClass="text-purple-900 font-bold"
                to="experience"
                spy={true}
                smooth={true}
                offset={-150}
              >
                Experience
              </Link>
            </li>

            <li>
              <Link
                className="cursor-pointer"
                activeClass="text-purple-900 font-bold"
                spy={true}
                smooth={true}
                to="work"
              >
                Work
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
