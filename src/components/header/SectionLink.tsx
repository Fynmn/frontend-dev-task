export interface ISectionProps {
  name: string;
  url: string;
  dropdown: boolean;
  direction: "up" | "down" | null;
}

const SectionLink: React.FC<ISectionProps> = ({
  name,
  url,
  dropdown,
  direction,
}) => {
  return (
    <>
      <a href={url}>
        <li
          className={`flex flex-col font-roboto text-[17px] leading-[19.5px] ${
            dropdown && direction && direction === "up"
              ? "font-bold"
              : "font-normal"
          }`}
        >
          <div className="flex items-center gap-x-1 pb-1">
            {name}
            {dropdown && direction && direction === "up" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
              >
                <path
                  d="M13.0076 8L7.00262 2L0.997674 8"
                  stroke="black"
                  stroke-width="2"
                />
              </svg>
            ) : dropdown && direction && direction === "down" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
              >
                <path
                  d="M0.995117 1L7.00006 7L13.005 1"
                  stroke="black"
                  stroke-width="2"
                />
              </svg>
            ) : (
              <></>
            )}
          </div>
          {dropdown && direction && direction === "up" ? (
            <div className="w-full h-[2px] bg-black"></div>
          ) : (
            <></>
          )}
        </li>
      </a>
    </>
  );
};

export default SectionLink;
