import sections from "@/data/sections";
import SectionLink from "./SectionLink";
import { useState } from "react";

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false); // initiate isNavOpen state with false

  return (
    <>
      <div className="px-4 py-4 md:py-0 md:px-12 flex flex-1 visible md:invisible">
        {/* <DownloadButton btnText="Download CV" pdfUrl="assets/files/CV.pdf" /> */}
        <section className="flex">
          <div
            className="space-y-2 group"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span
              className="block h-0.5 w-8 animate-puls"
              style={{ backgroundColor: "#f4af32" }}
            ></span>
            <span
              className="block h-0.5 w-8 animate-puls"
              style={{ backgroundColor: "#f4af32" }}
            ></span>
            <span
              className="block h-0.5 w-8 animate-puls"
              style={{ backgroundColor: "#f4af32" }}
            ></span>
          </div>

          <div
            className={
              isNavOpen
                ? "showMenuNav ease-in duration-700"
                : "hideMenuNav ease-out duration-700"
            }
          >
            <div
              className="absolute top-0 right-0 px-12 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8"
                style={{ color: "#f4af32" }}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] gap-y-6">
              {sections.map((section, i) => (
                <SectionLink
                  key={i}
                  name={section.name}
                  url={section.url}
                  dropdown={false}
                  direction={section.direction}
                />
              ))}
            </ul>
          </div>
        </section>
      </div>

      <ul className="max-w-7xl w-full mx-auto px-[38px] justify-between hidden md:flex">
        {sections.map((section, i) => (
          <SectionLink
            key={i}
            name={section.name}
            url={section.url}
            dropdown={section.dropdown}
            direction={section.direction}
          />
        ))}
        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        transition: left 4s ease-in;
      }
    `}</style>
      </ul>
    </>
  );
};

export default Nav;
