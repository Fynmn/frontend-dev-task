import React from "react";

interface ITopBarProps {
  firstName: string;
  profileImage: {
    url: string;
    alt: string;
  };
}

const TopBar: React.FC<ITopBarProps> = ({ firstName, profileImage }) => {
  return (
    <div className="max-w-7xl mx-auto w-full flex px-[40px] pb-[24px] pt-3">
      <div className="flex gap-x-[30px] w-full">
        <span className="flex items-center px-[5px] pr-[16px]">
          <h6 className="font-poppins text-base xl:text-[18px] font-bold leading-[30.7px] pr-[2px] tracking-[3px]">
            NOTHING HELD BACK
          </h6>
          <p
            style={{ color: "#F4AF32" }}
            className="font-bold text-[18px] font-poppins leading-[120%] tracking-[3px]"
          >
            +
          </p>
        </span>
        <span className="bg-f4-500 flex items-center rounded-4 w-[320px] xl:w-[380px]">
          <div className="px-2 rounded-r-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.24712 3.4667C5.23485 3.4667 3.60359 5.23104 3.60359 7.40747C3.60359 9.58389 5.23485 11.3482 7.24712 11.3482C9.25938 11.3482 10.8906 9.58389 10.8906 7.40747C10.8906 5.23104 9.25938 3.4667 7.24712 3.4667ZM2.12427 7.40747C2.12427 4.34738 4.41785 1.8667 7.24712 1.8667C10.0764 1.8667 12.37 4.34738 12.37 7.40747C12.37 10.4675 10.0764 12.9482 7.24712 12.9482C4.41785 12.9482 2.12427 10.4675 2.12427 7.40747Z"
                fill="#09204F"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.81979 10.1899C10.1086 9.87746 10.577 9.87746 10.8658 10.1899L13.2492 12.7677C13.538 13.0801 13.538 13.5866 13.2492 13.899C12.9603 14.2115 12.492 14.2115 12.2032 13.899L9.81979 11.3213C9.53094 11.0088 9.53094 10.5023 9.81979 10.1899Z"
                fill="#09204F"
              />
            </svg>
          </div>
          <input type="text" className="bg-f4-500 w-full h-8 rounded-r-4" />
        </span>
        <div className="flex items-center gap-x-[23px]">
          <button className="topbar-txt border border-primary-500 text-primary-500 px-3 py-1">
            WE'RE HIRING!
          </button>
          <button className="topbar-txt topbar-btn text-black px-3 py-1">
            NEED HELP?
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M16 20V4H4V19C4 19.2652 4.10536 19.5196 4.29289 19.7071C4.48043 19.8946 4.73478 20 5 20H16ZM19 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H17C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3V10H22V19C22 19.7956 21.6839 20.5587 21.1213 21.1213C20.5587 21.6839 19.7956 22 19 22ZM18 12V19C18 19.2652 18.1054 19.5196 18.2929 19.7071C18.4804 19.8946 18.7348 20 19 20C19.2652 20 19.5196 19.8946 19.7071 19.7071C19.8946 19.5196 20 19.2652 20 19V12H18ZM6 6H12V12H6V6ZM8 8V10H10V8H8ZM6 13H14V15H6V13ZM6 16H14V18H6V16Z"
              fill="#07080A"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M17 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H7V1H9V3H15V1H17V3ZM20 11H4V19H20V11ZM15 5H9V7H7V5H4V9H20V5H17V7H15V5ZM6 13H8V15H6V13ZM11 13H13V15H11V13ZM16 13H18V15H16V13Z"
              fill="black"
            />
          </svg>
        </div>
      </div>

      {/* <div className="flex-1"></div> */}
      <div className="flex items-center justify-center min-w-[174px]">
        <span className="flex items-center font-roboto text-[11.48px] pr-1">
          <h6 className="font-normal pr-1">Welcome Back,</h6>
          <h6 className="font-semibold">{firstName}</h6>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="16"
            viewBox="0 0 13 16"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.2301 5.60767C10.5579 5.60767 10.7531 5.97328 10.5708 6.24569L7.33521 11.0806C7.17284 11.3232 6.81611 11.3232 6.65374 11.0806L3.41813 6.2457C3.23582 5.97328 3.43108 5.60767 3.75887 5.60767L10.2301 5.60767Z"
              fill="black"
            />
          </svg>
        </span>
        <span className="relative w-8 h-8 rounded-full bg-red-300">
          <img
            className="absolute object-contain w-full"
            src={profileImage.url}
            alt={profileImage.alt}
          />
        </span>
      </div>
    </div>
  );
};

export default TopBar;
