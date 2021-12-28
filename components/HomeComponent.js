import { FaExternalLinkAlt } from "react-icons/fa";

export default function HomeComponent() {
  return (
    <div className="md:container md:mx-auto">
      <section
        id="home"
        className="flex flex-col justify-between items-center md:flex-row mt-16"
      >
        <div className="flex-1">
          <p className="text-gray-700">Front-End Software Developer</p>
          <h1 className="max-w-xl font-bold text-2xl lg:text-4xl xl:text-6xl text-[#45526E] mt-3 mb-1">
            For the web I build things
          </h1>
          <a
            className="inline-block rounded-full bg-[#410083] py-2 px-10 mt-8 text-white text-base transition-all delay-100 hover:bg-[#7012CE]"
            href="#"
          >
            RESUME
          </a>
        </div>
        <div>
          <img src="/images/hero.svg" alt="hero" className="max-w-full" />
        </div>
      </section>

      <section
        id="about"
        className="flex flex-col items-center md:flex-row my-20 py-16 scroll-pt-44"
      >
        <div>
          <img src="/images/about.svg" alt="about" className="w-full" />
        </div>
        <p className="max-w-lg text-[#45526E] leading-8">
          I'm Muhibullah, a web developer and designer who makes websites and
          apps using like, HTML, CSS and Javascript. I really enjoy learning new
          thinks like React, React Native, Vue. I also enjoy wireframing, ui,
          ux, and design in general. My interest in web development started back
          in 2012.
        </p>
      </section>

      <section className="flex flex-col items-center text-center my-20 py-16">
        <div>
          <img src="/images/tech.svg" alt="tech" className="w-full" />
        </div>
        <h1 className="max-w-xl font-bold text-2xl text-[#45526E]">
          Here are a few technologies I've been working with recently:
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

      <section className="flex flex-col items-center my-36 py-16">
        <h1 className="max-w-xl font-bold text-3xl text-[#45526E]">
          Where I’ve Worked
        </h1>
        <div className="flex gap-8 mt-8">
          <div>
            <div>
              <span className="text-gray-500 text-xs">2015- Present</span>
              <h1 className="text-gray-700 text-xl font-bold">Loops IT</h1>
            </div>
            <p className="text-gray-500 text-sm">
              Co-founder & Head of department of IT
            </p>
          </div>

          <div>
            <div>
              <span className="text-gray-500 text-xs">2012 - 2015</span>
              <h1 className="text-gray-700 text-xl font-bold">
                Algorithm Software Technology
              </h1>
            </div>
            <p className="text-gray-500 text-sm">Junior Software Developer</p>
          </div>
        </div>
      </section>

      <section id="works" className="flex flex-col items-center my-48 py-20">
        <h1 className="max-w-xl font-bold text-3xl text-[#45526E]">
          Noteworthy Projects
        </h1>
        <p className="text-gray-500 mb-16 mt-2">
          I have contributed as frontend developer
        </p>

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
      </section>
    </div>
  );
}
