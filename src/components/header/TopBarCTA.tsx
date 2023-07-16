import React from "react";

export interface ITopBarCTAProps {
  btnText: string;
  message: string;
}

const TopBarCTA: React.FC<ITopBarCTAProps> = ({ btnText, message }) => {
  return (
    <>
      <div className="max-w-[1440px] mx-auto topbar-container flex justify-center items-center gap-x-[15px] bg-primary-500">
        <div>
          <button className="topbar-cta-btn font-normal bg-white rounded-xl flex items-center justify-center">
            {btnText}
          </button>
        </div>
        <div>
          <h6 className="topbar-message">{message}</h6>
        </div>
      </div>
    </>
  );
};

export default TopBarCTA;
