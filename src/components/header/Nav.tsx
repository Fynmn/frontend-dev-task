import sections from "@/data/sections";
import SectionLink from "./SectionLink";

const Nav = () => {
  return (
    <>
      <ul className="max-w-7xl w-full flex mx-auto px-[38px] justify-between">
        {sections.map((section, i) => (
          <SectionLink
            key={i}
            name={section.name}
            url={section.url}
            dropdown={section.dropdown}
            direction={section.direction}
          />
        ))}
      </ul>
    </>
  );
};

export default Nav;
