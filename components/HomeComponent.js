import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import Navbar from "./Navbar";
export default function HomeComponent() {
  return (
    <>
      <div className="hero-gradient p-4 md:p-0">
        <Navbar />

        <div className="md:container md:mx-auto">
          <section
            id="home"
            className="flex flex-col justify-between items-center md:flex-row md:mt-16"
          >
            <div className="flex-1 text-center md:text-left">
              <h1 className="md:max-w-xl font-bold text-2xl lg:text-4xl xl:text-6xl text-[#45526E] mt-3 mb-1">
                Front-End Software Developer
              </h1>
              <p className="text-gray-700 mt-5 md:max-w-xl">
                I&rsquo;m Muhibullah, a web developer and designer. I also enjoy
                wireframing, ui, ux, and design in general. My interest in web
                development started back in 2012.
              </p>

              <a
                className="inline-block rounded-full bg-[#410083] py-2 px-10 mt-8 text-white text-base transition-all delay-100 hover:bg-[#7012CE]"
                href="https://docs.google.com/document/d/1MWCXVYZEl6aXu4zZst2fEW9qLHkViZyPUMhvJt99Xf0/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                RESUME
              </a>
            </div>
            <div>
              <Image
                src="/images/hero.svg"
                alt="hero"
                className="max-w-full"
                height={600}
                width={600}
              />
            </div>
          </section>
        </div>
      </div>

      <div className="tech-gradient p-4 md:p-0">
        <div className="md:container md:mx-auto">
          <section
            id="technology"
            className="flex flex-col items-center text-center my-20 py-16"
          >
            <div>
              <Image
                src="/images/tech.svg"
                alt="tech"
                className="w-full"
                height={400}
                width={400}
              />
            </div>
            <h1 className="max-w-xl font-bold text-2xl text-[#45526E]">
              Here are a few technologies I&rsquo;ve been working with recently:
            </h1>
            <div className="max-w-2xl mt-6">
              <span className="badge-ring m-2">HTML</span>
              <span className="badge-ring m-2">CSS</span>
              <span className="badge-ring m-2">JAVASCRIPT(ES6+)</span>
              <span className="badge-ring m-2">NODE JS</span>
              <span className="badge-ring m-2">MONGO DB</span>
              <span className="badge-ring m-2">REACT</span>
              <span className="badge-ring m-2">NEXT JS</span>
              <span className="badge-ring m-2">REACT NATIVE</span>
              <span className="badge-ring m-2">.NET CORE</span>
              <span className="badge-ring m-2">.NET (webform)</span>
            </div>
          </section>
        </div>
      </div>

      <section
        id="experience"
        className=" p-4 md:p-0 flex flex-col md:flex-row justify-center items-center my-36 py-16"
      >
        <div className="text-center md:text-left">
          <h1 className="mb-6 font-bold text-3xl text-[#45526E]">
            Where I’ve Worked
          </h1>

          <div>
            <span className="text-gray-700 text-md font-bold">Loops IT</span>
            <span className="text-gray-500 text-xs ml-2">2015- Present</span>

            <p className="text-gray-400 text-sm">
              Co-founder & Head of department of IT
            </p>
          </div>

          <div className="mt-5">
            <span className="text-gray-700 text-md font-bold">
              Algorithm Software Technology
            </span>
            <span className="text-gray-500 text-xs ml-2">2012 - 2015</span>

            <p className="text-gray-400 text-sm">Junior Software Developer</p>
          </div>
        </div>
        <Image
          src="/images/jobs.svg"
          alt="tech"
          className="w-full"
          height={400}
          width={400}
        />
      </section>

      <section
        id="work"
        className=" p-4 md:p-0 md:container md:mx-auto my-48 py-20"
      >
        <h1 className="font-bold text-3xl text-center text-[#45526E]">
          Noteworthy Projects
        </h1>
        <p className="text-gray-500 mb-16 mt-2 text-center">
          I have contributed as frontend developer
        </p>

        <div className="overflow-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-800 uppercase tracking-wider">
                  Start Year
                </th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-800 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-800 uppercase tracking-wider">
                  Made at
                </th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-800 uppercase tracking-wider">
                  Built with
                </th>
                <th className="px-6 py-3 text-center text-sm font-bold text-gray-800 uppercase tracking-wider">
                  Link
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  2013
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  Tailoring shops & Fabric Retailers Management Service
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Loops IT
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span>.Net Webform</span>
                  <span className="mx-2">C#</span>
                  <span>Ms.SQL</span>
                  <span className="mx-2">Jquery</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                  <a href="">
                    <FaExternalLinkAlt className="inline" />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  2013
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  Tailoring shops & Fabric Retailers Management Service
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Loops IT
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span>.Net Webform</span>
                  <span className="mx-2">C#</span>
                  <span>Ms.SQL</span>
                  <span className="mx-2">Jquery</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                  <a href="">
                    <FaExternalLinkAlt className="inline" />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  2013
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  Tailoring shops & Fabric Retailers Management Service
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Loops IT
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span>.Net Webform</span>
                  <span className="mx-2">C#</span>
                  <span>Ms.SQL</span>
                  <span className="mx-2">Jquery</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                  <a href="">
                    <FaExternalLinkAlt className="inline" />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  2013
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  Tailoring shops & Fabric Retailers Management Service
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Loops IT
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span>.Net Webform</span>
                  <span className="mx-2">C#</span>
                  <span>Ms.SQL</span>
                  <span className="mx-2">Jquery</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                  <a href="">
                    <FaExternalLinkAlt className="inline" />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  2013
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  Tailoring shops & Fabric Retailers Management Service
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Loops IT
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span>.Net Webform</span>
                  <span className="mx-2">C#</span>
                  <span>Ms.SQL</span>
                  <span className="mx-2">Jquery</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                  <a href="">
                    <FaExternalLinkAlt className="inline" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
