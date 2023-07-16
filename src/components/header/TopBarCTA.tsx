import React from "react";

export interface ITopBarCTAProps {
  btnText: string;
  message: string;
}

const TopBarCTA: React.FC<ITopBarCTAProps> = ({ btnText, message }) => {
  return (
    <>
      <div className="max-w-[1440px] mx-auto py-4 md:py-0 md:h-[49px] flex flex-col-reverse md:flex-row justify-center items-center gap-y-2 md:gap-y-0 gap-x-[15px] bg-primary-500">
        <div>
          <button
            className="flex items-center justify-center text-[9px] h-[21px] w-[104.325px] leading-[9px] tracking-[1.5px] font-normal bg-white rounded-xl "
            style={{ color: "#464e5b", textTransform: "uppercase" }}
          >
            {btnText}
          </button>
        </div>
        <div>
          <h6 className="text-[13.5px] md:text-[14px] md:leading-[22.4px] px-4 md:px-0 font-normal text-white text-center">
            {message}
          </h6>
        </div>
      </div>
    </>
  );
};

export default TopBarCTA;
