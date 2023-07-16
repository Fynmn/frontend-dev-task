import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { MdArrowDropDown } from "react-icons/md";
import { BsCheck2 } from "react-icons/bs";

const Body = () => {
  return (
    <>
      <div className="md:max-w-6xl xl:max-w-7xl px-[20px] md:px-[40px] w-full mx-auto flex flex-col-reverse md:grid md:grid-cols-[319px,1fr] md:gap-x-[35px]">
        <div className="">
          <div className="flex flex-col gap-y-[30px]">
            <div className="px-[27px] py-[30px] card">
              <button className="w-[240px] flex justify-between items-center">
                <h3
                  className="font-inter text-[18px] font-bold"
                  style={{ color: "#014EFF" }}
                >
                  7-Day Fast Start
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="9"
                  viewBox="0 0 14 9"
                  fill="none"
                >
                  <path d="M1 1L7 7L13 1" stroke="#464E5B" stroke-width="2" />
                </svg>
              </button>
              <div className="flex flex-col gap-y-[9px] py-[14px] items-center">
                <div
                  className="w-full rounded-[10px] h-2"
                  style={{
                    background: "#EFF6FA",
                  }}
                >
                  <div
                    className="h-2 rounded-[10px]"
                    style={{ width: "35%", backgroundColor: "#0C9C00" }}
                  />
                </div>
                <span
                  className="flex gap-x-1 text-[11px] font-normal leading-[19.138px] tracking-[0.453px]"
                  style={{ color: "#595E67" }}
                >
                  <p>20%</p> <p>Complete</p>
                </span>
              </div>
              <div className="flex flex-col gap-y-[23px]">
                <button
                  className="flex items-center gap-x-[14px] text-[14px] leading-[20.8px] font-bold"
                  style={{ color: "#2478CC" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="9"
                    viewBox="0 0 8 9"
                    fill="none"
                  >
                    <circle cx="4" cy="4.5" r="4" fill="#2478CC" />
                  </svg>
                  <p>Day 1 | 7-Figure Math + AC Formula</p>
                </button>
                <button
                  className="flex items-center gap-x-4 text-[14px] leading-[20.8px] font-normal"
                  style={{ color: "#464E5B" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    fill="none"
                  >
                    <path
                      d="M1 9.5L5 5.5L1 1.5"
                      stroke="#464E5B"
                      stroke-width="2"
                    />
                  </svg>
                  <p>Day 2 | Pick a Market</p>
                </button>
                <button
                  className="flex items-center gap-x-4 text-[14px] leading-[20.8px] font-normal"
                  style={{ color: "#464E5B" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    fill="none"
                  >
                    <path
                      d="M1 9.5L5 5.5L1 1.5"
                      stroke="#464E5B"
                      stroke-width="2"
                    />
                  </svg>
                  <p>Day 3 | Your superpower</p>
                </button>
                <button
                  className="flex items-center gap-x-4 text-[14px] leading-[20.8px] font-normal"
                  style={{ color: "#464E5B" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    fill="none"
                  >
                    <path
                      d="M1 9.5L5 5.5L1 1.5"
                      stroke="#464E5B"
                      stroke-width="2"
                    />
                  </svg>
                  <p>Day 4 | Your disruptive idea</p>
                </button>
                <button
                  className="flex items-center gap-x-4 text-[14px] leading-[20.8px] font-normal"
                  style={{ color: "#464E5B" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    fill="none"
                  >
                    <path
                      d="M1 9.5L5 5.5L1 1.5"
                      stroke="#464E5B"
                      stroke-width="2"
                    />
                  </svg>
                  <p>Day 5 | Front end sales funnel</p>
                </button>
                <button
                  className="flex items-center gap-x-4 text-[14px] leading-[20.8px] font-normal"
                  style={{ color: "#464E5B" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    fill="none"
                  >
                    <path
                      d="M1 9.5L5 5.5L1 1.5"
                      stroke="#464E5B"
                      stroke-width="2"
                    />
                  </svg>
                  <p>Day 6 | Back end sales funnel</p>
                </button>
                <button
                  className="flex items-center gap-x-4 text-[14px] leading-[20.8px] font-normal"
                  style={{ color: "#464E5B" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    fill="none"
                  >
                    <path
                      d="M1 9.5L5 5.5L1 1.5"
                      stroke="#464E5B"
                      stroke-width="2"
                    />
                  </svg>
                  <p>Day 7 | Scaling your offer</p>
                </button>
              </div>
            </div>
            <div className="flex flex-col px-[67px] py-[34px] gap-y-[11px] card items-center">
              <div className="flex flex-col gap-y-1">
                <h3
                  className="font-poppins text-[24px] font-normal leading-[30px] tracking-[0.25px]"
                  style={{ color: "#4B4B4B" }}
                >
                  Need Help?
                </h3>
                <div
                  style={{ height: "2px", backgroundColor: "#FFC700" }}
                ></div>
              </div>
              <div className="relative flex justify-center w-[126px] h-[126px] rounded-full">
                <img
                  className="absolute object-contain w-full h-full rounded-full z-10"
                  src="/img/Alen.png"
                  alt=""
                />
                <div className="absolute bottom-8 right-9">
                  <div className="relative">
                    <div className="absolute z-20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="34"
                        height="33"
                        viewBox="0 0 34 33"
                        fill="none"
                      >
                        <circle
                          cx="17"
                          cy="16.5"
                          r="15"
                          fill="#49A55D"
                          stroke="#FBFCFF"
                          stroke-width="3"
                        />
                      </svg>
                    </div>
                    <div className="absolute z-30 top-[9px] left-[9.9px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="14"
                        viewBox="0 0 15 14"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_1_162)">
                          <path
                            d="M14.5 7C14.5 10.3827 11.3658 13.125 7.5 13.125C6.8067 13.1259 6.11626 13.0359 5.44637 12.8573C4.93537 13.1163 3.762 13.6133 1.788 13.937C1.613 13.965 1.48 13.783 1.54912 13.6202C1.85888 12.8888 2.13888 11.914 2.22287 11.025C1.151 9.94875 0.5 8.54 0.5 7C0.5 3.61725 3.63425 0.875 7.5 0.875C11.3658 0.875 14.5 3.61725 14.5 7ZM4.875 7C4.875 6.76794 4.78281 6.54538 4.61872 6.38128C4.45462 6.21719 4.23206 6.125 4 6.125C3.76794 6.125 3.54538 6.21719 3.38128 6.38128C3.21719 6.54538 3.125 6.76794 3.125 7C3.125 7.23206 3.21719 7.45462 3.38128 7.61872C3.54538 7.78281 3.76794 7.875 4 7.875C4.23206 7.875 4.45462 7.78281 4.61872 7.61872C4.78281 7.45462 4.875 7.23206 4.875 7ZM8.375 7C8.375 6.76794 8.28281 6.54538 8.11872 6.38128C7.95462 6.21719 7.73206 6.125 7.5 6.125C7.26794 6.125 7.04538 6.21719 6.88128 6.38128C6.71719 6.54538 6.625 6.76794 6.625 7C6.625 7.23206 6.71719 7.45462 6.88128 7.61872C7.04538 7.78281 7.26794 7.875 7.5 7.875C7.73206 7.875 7.95462 7.78281 8.11872 7.61872C8.28281 7.45462 8.375 7.23206 8.375 7ZM11 7.875C11.2321 7.875 11.4546 7.78281 11.6187 7.61872C11.7828 7.45462 11.875 7.23206 11.875 7C11.875 6.76794 11.7828 6.54538 11.6187 6.38128C11.4546 6.21719 11.2321 6.125 11 6.125C10.7679 6.125 10.5454 6.21719 10.3813 6.38128C10.2172 6.54538 10.125 6.76794 10.125 7C10.125 7.23206 10.2172 7.45462 10.3813 7.61872C10.5454 7.78281 10.7679 7.875 11 7.875Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_162">
                            <rect x="0.5" width="14" height="14" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-x-1 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="11"
                  viewBox="0 0 10 11"
                  fill="none"
                >
                  <circle cx="5" cy="5.5" r="5" fill="#49A55D" />
                </svg>
                <p className="text-[7.475px] leading-[12.707px] font-medium">
                  AVAILABLE
                </p>
              </div>
              <div className="flex flex-col gap-y-[1px] text-center">
                <h3
                  className="font-inter text-[15.546px] font-black leading-[18.373px] tracking-[0.177px]"
                  style={{ color: "#0F131A" }}
                >
                  Alen Sulfuric
                </h3>
                <p
                  className="text-[9.893px] font-normal leading-[13.426px] tracking-[0.318px] w-[121.168px]"
                  style={{ color: "#595E67", fontFamily: "Arial" }}
                >
                  Motivational Speaker & Influence Expert
                </p>
              </div>
              <div
                className="flex justify-center items-center gap-x-[5.76px] w-full py-[8.64px]"
                style={{ backgroundColor: "#49A55D", borderRadius: "3px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1_173)">
                    <path
                      d="M16.6187 8.37891C16.6187 12.2449 13.0367 15.3789 8.61865 15.3789C7.8263 15.38 7.03724 15.2771 6.27165 15.0729C5.68765 15.3689 4.34665 15.9369 2.09065 16.3069C1.89065 16.3389 1.73865 16.1309 1.81765 15.9449C2.17165 15.1089 2.49165 13.9949 2.58765 12.9789C1.36265 11.7489 0.618652 10.1389 0.618652 8.37891C0.618652 4.51291 4.20065 1.37891 8.61865 1.37891C13.0367 1.37891 16.6187 4.51291 16.6187 8.37891ZM5.61865 8.37891C5.61865 8.11369 5.5133 7.85934 5.32576 7.6718C5.13822 7.48426 4.88387 7.37891 4.61865 7.37891C4.35344 7.37891 4.09908 7.48426 3.91155 7.6718C3.72401 7.85934 3.61865 8.11369 3.61865 8.37891C3.61865 8.64412 3.72401 8.89848 3.91155 9.08601C4.09908 9.27355 4.35344 9.37891 4.61865 9.37891C4.88387 9.37891 5.13822 9.27355 5.32576 9.08601C5.5133 8.89848 5.61865 8.64412 5.61865 8.37891ZM9.61865 8.37891C9.61865 8.11369 9.5133 7.85934 9.32576 7.6718C9.13822 7.48426 8.88387 7.37891 8.61865 7.37891C8.35344 7.37891 8.09908 7.48426 7.91155 7.6718C7.72401 7.85934 7.61865 8.11369 7.61865 8.37891C7.61865 8.64412 7.72401 8.89848 7.91155 9.08601C8.09908 9.27355 8.35344 9.37891 8.61865 9.37891C8.88387 9.37891 9.13822 9.27355 9.32576 9.08601C9.5133 8.89848 9.61865 8.64412 9.61865 8.37891ZM12.6187 9.37891C12.8839 9.37891 13.1382 9.27355 13.3258 9.08601C13.5133 8.89848 13.6187 8.64412 13.6187 8.37891C13.6187 8.11369 13.5133 7.85934 13.3258 7.6718C13.1382 7.48426 12.8839 7.37891 12.6187 7.37891C12.3534 7.37891 12.0991 7.48426 11.9115 7.6718C11.724 7.85934 11.6187 8.11369 11.6187 8.37891C11.6187 8.64412 11.724 8.89848 11.9115 9.08601C12.0991 9.27355 12.3534 9.37891 12.6187 9.37891Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_173">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0.618652 0.378906)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <p className="font-inter text-white text-[14px] leading-none tracking-[0.144px] font-black">
                  Chat With Us
                </p>
              </div>
              <div className="gap-x-1 flex text-[10.932px] font-normal leading-[18.585px]">
                <p>Or Call Us at</p>
                <p className="font-bold" style={{ color: "#014EFF" }}>
                  +1 (800) 444 2041
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-[18px] px-[40px] py-[26px] card">
              <div>
                <span className="flex items-center font-poppins text-[39.848px] font-bold leading-[57.716px] tracking-[5.811px gap-x-1">
                  <div>
                    <h1 className="">NHB</h1>
                    <div
                      className="h-[2px] w-[94px]"
                      style={{ backgroundColor: "#FFC700" }}
                    ></div>
                  </div>
                  <p className="" style={{ color: "#FFC700" }}>
                    +
                  </p>
                </span>
              </div>
              <div>
                <h3
                  className="font-poppins text-[18px] leading-6 tracking-[0.25px] font-normal"
                  style={{ color: "#4B4B4B" }}
                >
                  Want Our Help Getting 100+ Sales Per Day?
                </h3>
              </div>
              <div className="flex flex-col gap-y-4">
                <span className="flex gap-x-2 items-center">
                  <div
                    className="w-4 h-4 rounded-full flex justify-center items-center text-white"
                    style={{
                      backgroundColor: "var(--theme-success-default, #66CB9F)",
                    }}
                  >
                    <BsCheck2 size={12} />
                  </div>
                  <p
                    className="text-[12px] leading-[14px] font-normal tracking-[0.12px]"
                    style={{ color: "#5B5B5B" }}
                  >
                    What you get when you join
                  </p>
                </span>
                <span className="flex gap-x-2 items-center">
                  <div
                    className="w-4 h-4 rounded-full flex justify-center items-center text-white"
                    style={{
                      backgroundColor: "var(--theme-success-default, #66CB9F)",
                    }}
                  >
                    <BsCheck2 size={12} />
                  </div>
                  <p
                    className="text-[12px] leading-[14px] font-normal tracking-[0.12px]"
                    style={{ color: "#5B5B5B" }}
                  >
                    Weekly group coaching calls with us{" "}
                  </p>
                </span>
                <span className="flex gap-x-2 items-center">
                  <div
                    className="w-4 h-4 rounded-full flex justify-center items-center text-white"
                    style={{
                      backgroundColor: "var(--theme-success-default, #66CB9F)",
                    }}
                  >
                    <BsCheck2 size={12} />
                  </div>
                  <p
                    className="text-[12px] leading-[14px] font-normal tracking-[0.12px]"
                    style={{ color: "#5B5B5B" }}
                  >
                    Entire Automatic Clients course{" "}
                  </p>
                </span>
                <span className="flex gap-x-2 items-center">
                  <div
                    className="w-4 h-4 rounded-full flex justify-center items-center text-white"
                    style={{
                      backgroundColor: "var(--theme-success-default, #66CB9F)",
                    }}
                  >
                    <BsCheck2 size={12} />
                  </div>
                  <p
                    className="text-[12px] leading-[14px] font-normal tracking-[0.12px]"
                    style={{ color: "#5B5B5B" }}
                  >
                    All templates, scripts, sales funnels, etc{" "}
                  </p>
                </span>
                <span className="flex gap-x-2 items-center">
                  <div
                    className="w-4 h-4 rounded-full flex justify-center items-center text-white"
                    style={{
                      backgroundColor: "var(--theme-success-default, #66CB9F)",
                    }}
                  >
                    <BsCheck2 size={12} />
                  </div>
                  <p
                    className="text-[12px] leading-[14px] font-normal tracking-[0.12px]"
                    style={{ color: "#5B5B5B" }}
                  >
                    Emails & SMS sequences, etc{" "}
                  </p>
                </span>
              </div>
              <div></div>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-3">
              <h1
                className="font-poppins font-medium leading-7 md:leading-9 tracking-[0.25px] text-[22px] md:text-2xl"
                style={{ color: "#0F131A" }}
              >
                Hey Alen, Welcome to your 7-Day Fast Start
              </h1>
              <div className="relative h-[250px] md:h-[399px] w-full">
                <iframe
                  className="object w-full h-full rounded-[5.6px]"
                  src="https://www.youtube.com/embed/WyltKn3pi9U"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-col gap-y-2">
                <div className="flex flex-col md:flex-row gap-y-2 md:gap-y-0">
                  <div className="flex flex-col gap-y-4 md:gap-y-6">
                    <div
                      className="font-poppins font-bold break-words xl:leading-[26px] xl:text-[18px] md:w-[500px] xl:w-full"
                      style={{ color: "#2478CC" }}
                    >
                      PUBG Mobile x Godzilla vs. Kong Trailer - Official Trailer
                    </div>
                    <div
                      className="flex gap-x-[5px] font-normal tracking-[0.2px] text-sm"
                      style={{ color: "#606060" }}
                    >
                      <div>13,741 views</div>
                      <div>•</div>
                      <div>May 11, 2021</div>
                    </div>
                  </div>
                  <div className="flex-1"></div>
                  <div className="flex flex-col justify-start items-center gap-y-2">
                    <button
                      className="px-[38px] py-[4px] border border-solid rounded-4 font-bold leading-6 text-xs"
                      style={{
                        borderColor: "#1285FF",
                        color: "#1285FF",
                      }}
                    >
                      Download Video
                    </button>
                    <div
                      className="text-[8px] font-normal leading-4 tracking-[0.16px]"
                      style={{ color: "#606060" }}
                    >
                      File Format: MP4 | File Size: 852 MB
                    </div>
                  </div>
                </div>
                <div
                  className="w-full h-[0.699px]"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.10)" }}
                />
              </div>

              <div>
                <div className="flex">
                  <div className="flex flex-col">
                    <div className="flex gap-x-[6px] items-center">
                      <p
                        className="text-[12px] md:text-[14px] leading-[16px] tracking-[0.25px] font-normal"
                        style={{ color: "#030303" }}
                      >
                        Alen Sultanic
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6.50004 1.0835C3.51004 1.0835 1.08337 3.51016 1.08337 6.50016C1.08337 9.49016 3.51004 11.9168 6.50004 11.9168C9.49004 11.9168 11.9167 9.49016 11.9167 6.50016C11.9167 3.51016 9.49004 1.0835 6.50004 1.0835ZM5.37337 9.71225L2.69212 7.031L3.80254 5.92058L5.37337 7.49141L9.35462 3.51016L10.465 4.62058L5.37337 9.71225Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                    <div>
                      <p
                        className="text-[10px] md:text-xs leading-[18px] tracking-[0.3px] font-normal"
                        style={{ color: "#606060" }}
                      >
                        Nothing Held Back Coach
                      </p>
                    </div>
                  </div>
                  <div className="flex-1"></div>
                  <div className="flex flex-col md:flex-row text-xs md:gap-x-3">
                    <span className="flex gap-x-1">
                      <p
                        className="text-[9px] md:text-xs tracking-[0.25px] font-bold"
                        style={{ color: "#030303" }}
                      >
                        CALL TYPE:
                      </p>
                      <p
                        className="text-[9px] md:text-xs tracking-[0.25px] font-normal"
                        style={{ color: "#030303" }}
                      >
                        EXPERT TRAINING
                      </p>
                    </span>
                    <span className="flex gap-x-1">
                      <p
                        className="text-[9px] md:text-xs tracking-[0.25px] font-bold"
                        style={{ color: "#030303" }}
                      >
                        DATE OF CALL:
                      </p>
                      <p
                        className="text-[9px] md:text-xs tracking-[0.25px] font-normal"
                        style={{ color: "#030303" }}
                      >
                        MAY 12TH, 2021
                      </p>
                    </span>
                    <span className="flex gap-x-1">
                      <p
                        className="text-[9px] md:text-xs tracking-[0.25px] font-bold"
                        style={{ color: "#030303" }}
                      >
                        TIME OF CALL:
                      </p>{" "}
                      <p
                        className="text-[9px] md:text-xs tracking-[0.25px] font-normal"
                        style={{ color: "#030303" }}
                      >
                        11:00 A.M. EST
                      </p>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <div>
                  <p
                    className="text-[12px] leading-[20px]  md:text-[14px] md:leading-[24px] tracking-[0.2px] font-normal"
                    style={{ color: "#393939" }}
                  >
                    Godzilla, Kong, and Mechagodzilla arrive in PUBG Mobile's
                    version 1.4 update which also brings microcosm gameplay, a
                    new vehicle, Hangar which is new arena map available
                    beginning June 1, and more. Check out the trailer. Godzilla,
                    Kong and Mechagodzilla join the Battle Royale as non-hostile
                    characters that may bring Titan Crystals, destroy Apex
                    Cybernetics and Monster Settlements and drop enhancement
                    items in the Erangel, Sanhok and Livk maps respectively. The
                    Version 1.4 update is available now.
                  </p>
                </div>
                <a href="">
                  <p
                    className="text-xs leading-[2opx] tracking-[0.007px] font-bold"
                    style={{ color: "var(--blue-nhb-default, #1285FF)" }}
                  >
                    Show more...
                  </p>
                </a>
              </div>
            </div>
            <div className="flex items-center gap-x-2 md:gap-x-0">
              <button
                className="px-4 py-[8px] md:px-10 md:py-[13px] rounded-4 text-white font-bold text-[11px] md:text-[14px] leading-4 md:leading-[100%] tracking-[0.144px]"
                style={{ backgroundColor: "#1285FF" }}
              >
                SIGN UP FOR THE NEXT CALL
              </button>
              <div className="flex-1"></div>
              <button className="flex items-center gap-x-2 md:gap-x-3">
                <p className="text-[12px] leading-4 md:text-[16px] md:leading-5 tracking-[0.067px] font-normal">
                  Go to Next Lesson
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.65058e-06 9.00048L12.17 9.00049L6.58 14.5905L8 16.0005L16 8.00049L8.00001 0.000486183L6.59001 1.41049L12.17 7.00049L6.17511e-06 7.00048L5.65058e-06 9.00048Z"
                    fill="#2478CC"
                  />
                </svg>
              </button>
            </div>
            <div
              className="w-full h-[1px]"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.10)" }}
            />
            <div className="flex flex-col gap-y-[37px] pb-3 ">
              <div className="flex flex-col gap-y-5">
                <div className="flex gap-x-8">
                  <span className="flex gap-x-1 items-center">
                    <p
                      className="text-[15px] font-normal leading-[22px] tracking-[0.1px]"
                      style={{ color: "#030303" }}
                    >
                      334
                    </p>
                    <p
                      className="text-[16px] font-normal leading-[22px] tracking-[0.1px]"
                      style={{ color: "#030303" }}
                    >
                      Comments
                    </p>
                  </span>
                  <span className="flex gap-x-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1_496)">
                        <path
                          d="M3 18.5005H9V16.5005H3V18.5005ZM3 6.50049V8.50049H21V6.50049H3ZM3 13.5005H15V11.5005H3V13.5005Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_496">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(0 0.500488)"
                          />
                        </clipPath>
                      </defs>
                    </svg>{" "}
                    <p
                      className="text-sm leading-[22px] tracking-[0.5px] font-normal"
                      style={{ color: "#606060" }}
                    >
                      SORT BY
                    </p>
                  </span>
                </div>
                <div className="flex w-full gap-x-[17px] items-center">
                  <span className="relative w-10 h-10 rounded-4 bg-red-200">
                    <img
                      className="absolute object-contain w-full h-full rounded-4"
                      src="/img/User_1.png"
                      alt=""
                    />
                  </span>
                  <span className="flex-1">
                    <input
                      type="text"
                      placeholder="Add a public comment"
                      className="w-full border-b-[1px] text-sm tracking-[0.2px] font-normal"
                      style={{
                        borderColor: "rgba(0, 0, 0, 0.10)",
                      }}
                    />
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-y-7">
                <div className="flex w-full items-start gap-x-[17px]">
                  <span className="relative w-10 h-10 rounded-4 bg-red-200">
                    <img
                      className="absolute object-contain w-full h-full rounded-4"
                      src="/img/User_2.png"
                      alt=""
                    />
                  </span>
                  <div className="">
                    <div className="flex gap-x-1">
                      <h5
                        className="text-[13px] font-normal leading-[18px] mb-1"
                        style={{ color: "#030303" }}
                      >
                        Mike_Fails_at_games
                      </h5>
                      <p
                        className="text-xs leading-[18px] tracking-[0.3px] font-normal"
                        style={{ color: "#606060" }}
                      >
                        1 hour ago
                      </p>
                    </div>
                    <p
                      className="text-[13px] font-normal leading-[20px] tracking-[0.2px] mb-3"
                      style={{ color: "#030303" }}
                    >
                      At this rate why not have Kong and Godzilla show up as
                      MK11 dlc
                    </p>
                    <div className="flex font-bold items-center">
                      <button className="flex gap-x-2 items-center pr-2">
                        <BiSolidLike />
                      </button>
                      <p
                        className="text-xs leading-[18px] tracking-[0.3px] font-normal"
                        style={{ color: "#606060" }}
                      >
                        496
                      </p>
                      <button className="pl-4">
                        <BiSolidDislike />
                      </button>
                      <button
                        className="pl-6 text-[13px] font-normal tracking-[0.007px]"
                        style={{ color: "#606060" }}
                      >
                        REPLY
                      </button>
                    </div>
                    <div className="pt-[12px]">
                      <button className="flex items-center">
                        <MdArrowDropDown />
                        <div
                          className="flex items-center text-[14px] leading-4 font-normal tracking-[0.5px]"
                          style={{ color: "#065FD4" }}
                        >
                          <p className="pr-1 pl-2">View</p>
                          <p className="pr-1">17</p>
                          <p>replies</p>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex w-full items-start gap-x-[17px]">
                  <span className="relative w-10 h-10 rounded-4 bg-red-200">
                    <img
                      className="absolute object-contain w-full h-full rounded-4"
                      src="/img/User_3.png"
                      alt=""
                    />
                  </span>
                  <div className="">
                    <div className="flex gap-x-1">
                      <h5
                        className="text-[13px] font-normal leading-[18px] mb-1"
                        style={{ color: "#030303" }}
                      >
                        ShadowXBlaster
                      </h5>
                      <p
                        className="text-xs leading-[18px] tracking-[0.3px] font-normal"
                        style={{ color: "#606060" }}
                      >
                        1 hour ago
                      </p>
                    </div>
                    <p
                      className="text-[13px] font-normal leading-[20px] tracking-[0.2px] mb-3"
                      style={{ color: "#030303" }}
                    >
                      A game which is a great example of "Nothing like what was
                      shown".
                    </p>
                    <p
                      className="text-[13px] font-normal leading-[20px] tracking-[0.2px] mb-3"
                      style={{ color: "#030303" }}
                    >
                      Perfect.....
                    </p>
                    <div className="flex font-bold items-center">
                      <button className="flex gap-x-2 items-center pr-2">
                        <BiSolidLike />
                      </button>
                      <p
                        className="text-xs leading-[18px] tracking-[0.3px] font-normal"
                        style={{ color: "#606060" }}
                      >
                        242
                      </p>
                      <button className="pl-4">
                        <BiSolidDislike />
                      </button>
                      <button
                        className="pl-6 text-[13px] font-normal tracking-[0.007px]"
                        style={{ color: "#606060" }}
                      >
                        REPLY
                      </button>
                    </div>
                    <div className="pt-[12px]">
                      <button className="flex items-center">
                        <MdArrowDropDown />
                        <div
                          className="flex items-center text-[14px] leading-4 font-normal tracking-[0.5px]"
                          style={{ color: "#065FD4" }}
                        >
                          <p className="pr-1 pl-2">View</p>
                          <p className="pr-1">8</p>
                          <p>replies</p>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex w-full items-start gap-x-[17px]">
                  <span className="relative w-10 h-10 rounded-4 bg-red-200">
                    <img
                      className="absolute object-contain w-full h-full rounded-4"
                      src="/img/User_4.png"
                      alt=""
                    />
                  </span>
                  <div className="">
                    <div className="flex gap-x-1">
                      <h5
                        className="text-[13px] font-normal leading-[18px] mb-1"
                        style={{ color: "#030303" }}
                      >
                        NyX
                      </h5>
                      <p
                        className="text-xs leading-[18px] tracking-[0.3px] font-normal"
                        style={{ color: "#606060" }}
                      >
                        1 hour ago
                      </p>
                    </div>
                    <p
                      className="text-[13px] font-normal leading-[20px] tracking-[0.2px] mb-3"
                      style={{ color: "#030303" }}
                    >
                      Someone just make a Monster Fighting Game and give us
                      Godzilla vs Kong in Game Form
                    </p>
                    <div className="flex font-bold items-center">
                      <button className="flex gap-x-2 items-center pr-2">
                        <BiSolidLike />
                      </button>
                      <p
                        className="text-xs leading-[18px] tracking-[0.3px] font-normal"
                        style={{ color: "#606060" }}
                      >
                        180
                      </p>
                      <button className="pl-4">
                        <BiSolidDislike />
                      </button>
                      <button
                        className="pl-6 text-[13px] font-normal tracking-[0.007px]"
                        style={{ color: "#606060" }}
                      >
                        REPLY
                      </button>
                    </div>
                    <div className="pt-[12px]">
                      <button className="flex items-center">
                        <MdArrowDropDown />
                        <div
                          className="flex items-center text-[14px] leading-4 font-normal tracking-[0.5px]"
                          style={{ color: "#065FD4" }}
                        >
                          <p className="pr-1 pl-2">View</p>
                          <p className="pr-1">12</p>
                          <p>replies</p>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="h-[1px] w-full"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.10)" }}
            />
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-col gap-y-1">
                <h4
                  className="font-poppins text-2xl leading-9 tracking-[0.25px] font-medium"
                  style={{ color: "#0F131A" }}
                >
                  Download Resources
                </h4>
                <p
                  className="text-[18px] leading-6 font-normal"
                  style={{ color: "#595E67" }}
                >
                  Here are a must do step by step to kickstart your business!
                </p>
              </div>
              <div
                className="flex flex-col px-4 xl:px-7 py-4 border rounded-4"
                style={{
                  boxShadow:
                    "0px 3px 8px -1px rgba(50, 50, 71, 0.05), 0px 0px 1px 0px rgba(12, 26, 75, 0.24)",
                }}
              >
                <div className="flex">
                  <div className="flex items-center gap-x-[10px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="31"
                      viewBox="0 0 30 31"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.75 6.75037C3.75 3.98894 5.98858 1.75037 8.75 1.75037H19.1789C20.505 1.75037 21.7768 2.27715 22.7145 3.21483L24.7855 5.2859C25.7232 6.22358 26.25 7.49535 26.25 8.82143V24.2504C26.25 27.0118 24.0114 29.2504 21.25 29.2504H8.75C5.98858 29.2504 3.75 27.0118 3.75 24.2504V6.75037ZM23.75 10.5004V24.2504C23.75 25.6311 22.6307 26.7504 21.25 26.7504H8.75C7.36929 26.7504 6.25 25.6311 6.25 24.2504V6.75037C6.25 5.36965 7.36929 4.25037 8.75 4.25037H17.5V6.75037C17.5 8.82143 19.1789 10.5004 21.25 10.5004H23.75ZM23.6113 8.00037C23.4886 7.64736 23.2871 7.32296 23.0178 7.05367L20.9467 4.9826C20.6774 4.71331 20.353 4.51179 20 4.38904V6.75037C20 7.44072 20.5596 8.00037 21.25 8.00037H23.6113Z"
                        fill="#12131A"
                      />
                      <path
                        d="M11.2502 15.5004C10.5599 15.5004 10.0002 16.06 10.0002 16.7504C10.0002 17.4407 10.5599 18.0004 11.2502 18.0004H18.7502C19.4406 18.0004 20.0002 17.4407 20.0002 16.7504C20.0002 16.06 19.4406 15.5004 18.7502 15.5004H11.2502Z"
                        fill="#12131A"
                      />
                      <path
                        d="M11.2502 20.5004C10.5599 20.5004 10.0002 21.06 10.0002 21.7504C10.0002 22.4407 10.5599 23.0004 11.2502 23.0004H15.0002C15.6906 23.0004 16.2502 22.4407 16.2502 21.7504C16.2502 21.06 15.6906 20.5004 15.0002 20.5004H11.2502Z"
                        fill="#12131A"
                      />
                    </svg>
                    <p
                      className="underline font-inter font-black text-[10px] md:text-[12px] xl:text-[16px] xl:leading-[21.431px] tracking-[0.191px]"
                      style={{ color: "#0F131A" }}
                    >
                      VSL Draft Template Excercise.pdf
                    </p>
                  </div>
                  <div className="flex-1"></div>
                  <button
                    className="flex items-center px-5 py-1 border gap-x-[6px] rounded-4"
                    style={{ backgroundColor: "#1285ff" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.50854 20.8998C3.50854 20.5815 3.64394 20.2763 3.88494 20.0513C4.12595 19.8262 4.45282 19.6998 4.79365 19.6998H20.2149C20.5557 19.6998 20.8826 19.8262 21.1236 20.0513C21.3646 20.2763 21.5 20.5815 21.5 20.8998C21.5 21.218 21.3646 21.5233 21.1236 21.7483C20.8826 21.9734 20.5557 22.0998 20.2149 22.0998H4.79365C4.45282 22.0998 4.12595 21.9734 3.88494 21.7483C3.64394 21.5233 3.50854 21.218 3.50854 20.8998ZM7.74038 11.6514C7.98137 11.4264 8.30818 11.3 8.64895 11.3C8.98971 11.3 9.31652 11.4264 9.55751 11.6514L11.2191 13.203V4.09978C11.2191 3.78152 11.3545 3.4763 11.5955 3.25125C11.8365 3.02621 12.1634 2.89978 12.5042 2.89978C12.8451 2.89978 13.1719 3.02621 13.413 3.25125C13.654 3.4763 13.7893 3.78152 13.7893 4.09978V13.203L15.451 11.6514C15.5695 11.5368 15.7113 11.4453 15.8681 11.3825C16.0249 11.3196 16.1935 11.2865 16.3642 11.2851C16.5348 11.2837 16.704 11.3141 16.862 11.3744C17.0199 11.4347 17.1634 11.5238 17.284 11.6365C17.4047 11.7492 17.5001 11.8832 17.5647 12.0306C17.6294 12.1781 17.6619 12.3361 17.6604 12.4955C17.6589 12.6548 17.6235 12.8123 17.5561 12.9587C17.4888 13.1051 17.3909 13.2375 17.2681 13.3482L13.4128 16.9482C13.1718 17.1731 12.845 17.2995 12.5042 17.2995C12.1635 17.2995 11.8367 17.1731 11.5957 16.9482L7.74038 13.3482C7.49946 13.1231 7.36412 12.818 7.36412 12.4998C7.36412 12.1816 7.49946 11.8764 7.74038 11.6514Z"
                        fill="white"
                      />
                    </svg>
                    <p className="text-white text-xs font-bold tracking-[0.14px]">
                      Download
                    </p>
                  </button>
                </div>
                {/* <div className="w-full my-[14px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="779"
                    height="1"
                    viewBox="0 0 779 1"
                    fill="none"
                  >
                    <path d="M0 0.500366H779" stroke="#E0DFDF" />
                  </svg>
                </div> */}
                <div
                  className="h-[1px] w-full my-[14px]"
                  style={{ backgroundColor: "#E0DFDF" }}
                />
                <div className="flex">
                  <div className="flex items-center gap-x-[10px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="31"
                      viewBox="0 0 30 31"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.75 6.75037C3.75 3.98894 5.98858 1.75037 8.75 1.75037H19.1789C20.505 1.75037 21.7768 2.27715 22.7145 3.21483L24.7855 5.2859C25.7232 6.22358 26.25 7.49535 26.25 8.82143V24.2504C26.25 27.0118 24.0114 29.2504 21.25 29.2504H8.75C5.98858 29.2504 3.75 27.0118 3.75 24.2504V6.75037ZM23.75 10.5004V24.2504C23.75 25.6311 22.6307 26.7504 21.25 26.7504H8.75C7.36929 26.7504 6.25 25.6311 6.25 24.2504V6.75037C6.25 5.36965 7.36929 4.25037 8.75 4.25037H17.5V6.75037C17.5 8.82143 19.1789 10.5004 21.25 10.5004H23.75ZM23.6113 8.00037C23.4886 7.64736 23.2871 7.32296 23.0178 7.05367L20.9467 4.9826C20.6774 4.71331 20.353 4.51179 20 4.38904V6.75037C20 7.44072 20.5596 8.00037 21.25 8.00037H23.6113Z"
                        fill="#12131A"
                      />
                      <path
                        d="M10.0002 4.87537C10.0002 4.53019 10.2801 4.25037 10.6252 4.25037H11.8752C12.2204 4.25037 12.5002 4.53019 12.5002 4.87537V6.12537C12.5002 6.47054 12.2204 6.75037 11.8752 6.75037H10.6252C10.2801 6.75037 10.0002 6.47054 10.0002 6.12537V4.87537Z"
                        fill="#12131A"
                      />
                      <path
                        d="M10.0002 9.87537C10.0002 9.53019 10.2801 9.25037 10.6252 9.25037H11.8752C12.2204 9.25037 12.5002 9.53019 12.5002 9.87537V11.1254C12.5002 11.4705 12.2204 11.7504 11.8752 11.7504H10.6252C10.2801 11.7504 10.0002 11.4705 10.0002 11.1254V9.87537Z"
                        fill="#12131A"
                      />
                      <path
                        d="M12.5002 12.3754C12.5002 12.0302 12.7801 11.7504 13.1252 11.7504H14.3752C14.7204 11.7504 15.0002 12.0302 15.0002 12.3754V13.6254C15.0002 13.9705 14.7204 14.2504 14.3752 14.2504H13.1252C12.7801 14.2504 12.5002 13.9705 12.5002 13.6254V12.3754Z"
                        fill="#12131A"
                      />
                      <path
                        d="M10.6252 14.2504C10.2801 14.2504 10.0002 14.5302 10.0002 14.8754V16.1254C10.0002 16.4705 10.2801 16.7504 10.6252 16.7504H11.8752C12.2204 16.7504 12.5002 16.4705 12.5002 16.1254V14.8754C12.5002 14.5302 12.2204 14.2504 11.8752 14.2504H10.6252Z"
                        fill="#12131A"
                      />
                      <path
                        d="M12.5002 17.3754C12.5002 17.0302 12.7801 16.7504 13.1252 16.7504H14.3752C14.7204 16.7504 15.0002 17.0302 15.0002 17.3754V18.6254C15.0002 18.9705 14.7204 19.2504 14.3752 19.2504H13.1252C12.7801 19.2504 12.5002 18.9705 12.5002 18.6254V17.3754Z"
                        fill="#12131A"
                      />
                      <path
                        d="M10.6252 19.2504C10.2801 19.2504 10.0002 19.5302 10.0002 19.8754V21.1254C10.0002 21.4705 10.2801 21.7504 10.6252 21.7504H11.8752C12.2204 21.7504 12.5002 21.4705 12.5002 21.1254V19.8754C12.5002 19.5302 12.2204 19.2504 11.8752 19.2504H10.6252Z"
                        fill="#12131A"
                      />
                      <path
                        d="M12.5002 22.3754C12.5002 22.0302 12.7801 21.7504 13.1252 21.7504H14.3752C14.7204 21.7504 15.0002 22.0302 15.0002 22.3754V23.6254C15.0002 23.9705 14.7204 24.2504 14.3752 24.2504H13.1252C12.7801 24.2504 12.5002 23.9705 12.5002 23.6254V22.3754Z"
                        fill="#12131A"
                      />
                      <path
                        d="M10.6252 24.2504C10.2801 24.2504 10.0002 24.5302 10.0002 24.8754V26.1254C10.0002 26.4705 10.2801 26.7504 10.6252 26.7504H11.8752C12.2204 26.7504 12.5002 26.4705 12.5002 26.1254V24.8754C12.5002 24.5302 12.2204 24.2504 11.8752 24.2504H10.6252Z"
                        fill="#12131A"
                      />
                      <path
                        d="M13.1252 6.75037C12.7801 6.75037 12.5002 7.03019 12.5002 7.37537V8.62537C12.5002 8.97054 12.7801 9.25037 13.1252 9.25037H14.3752C14.7204 9.25037 15.0002 8.97054 15.0002 8.62537V7.37537C15.0002 7.03019 14.7204 6.75037 14.3752 6.75037H13.1252Z"
                        fill="#12131A"
                      />
                    </svg>
                    <p
                      className="underline font-inter font-black text-[10px] md:text-[12px] xl:text-[16px] xl:leading-[21.431px] tracking-[0.191px]"
                      style={{ color: "#0F131A" }}
                    >
                      2,498 Niches Spreadsheet.xls
                    </p>
                  </div>
                  <div className="flex-1"></div>
                  <button
                    className="flex items-center px-5 py-1 border gap-x-[6px] rounded-4"
                    style={{ backgroundColor: "#1285ff" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.50854 20.8998C3.50854 20.5815 3.64394 20.2763 3.88494 20.0513C4.12595 19.8262 4.45282 19.6998 4.79365 19.6998H20.2149C20.5557 19.6998 20.8826 19.8262 21.1236 20.0513C21.3646 20.2763 21.5 20.5815 21.5 20.8998C21.5 21.218 21.3646 21.5233 21.1236 21.7483C20.8826 21.9734 20.5557 22.0998 20.2149 22.0998H4.79365C4.45282 22.0998 4.12595 21.9734 3.88494 21.7483C3.64394 21.5233 3.50854 21.218 3.50854 20.8998ZM7.74038 11.6514C7.98137 11.4264 8.30818 11.3 8.64895 11.3C8.98971 11.3 9.31652 11.4264 9.55751 11.6514L11.2191 13.203V4.09978C11.2191 3.78152 11.3545 3.4763 11.5955 3.25125C11.8365 3.02621 12.1634 2.89978 12.5042 2.89978C12.8451 2.89978 13.1719 3.02621 13.413 3.25125C13.654 3.4763 13.7893 3.78152 13.7893 4.09978V13.203L15.451 11.6514C15.5695 11.5368 15.7113 11.4453 15.8681 11.3825C16.0249 11.3196 16.1935 11.2865 16.3642 11.2851C16.5348 11.2837 16.704 11.3141 16.862 11.3744C17.0199 11.4347 17.1634 11.5238 17.284 11.6365C17.4047 11.7492 17.5001 11.8832 17.5647 12.0306C17.6294 12.1781 17.6619 12.3361 17.6604 12.4955C17.6589 12.6548 17.6235 12.8123 17.5561 12.9587C17.4888 13.1051 17.3909 13.2375 17.2681 13.3482L13.4128 16.9482C13.1718 17.1731 12.845 17.2995 12.5042 17.2995C12.1635 17.2995 11.8367 17.1731 11.5957 16.9482L7.74038 13.3482C7.49946 13.1231 7.36412 12.818 7.36412 12.4998C7.36412 12.1816 7.49946 11.8764 7.74038 11.6514Z"
                        fill="white"
                      />
                    </svg>
                    <p className="text-white text-xs font-bold tracking-[0.14px]">
                      Download
                    </p>
                  </button>
                </div>
                {/* <div className="w-full my-[14px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="779"
                    height="1"
                    viewBox="0 0 779 1"
                    fill="none"
                  >
                    <path d="M0 0.500366H779" stroke="#E0DFDF" />
                  </svg>
                </div>{" "} */}
                <div
                  className="h-[1px] w-full my-[14px]"
                  style={{ backgroundColor: "#E0DFDF" }}
                />
                <div className="flex">
                  <div className="flex items-center gap-x-[10px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="31"
                      viewBox="0 0 30 31"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.75 6.75037C3.75 3.98894 5.98858 1.75037 8.75 1.75037H19.1789C20.505 1.75037 21.7768 2.27715 22.7145 3.21483L24.7855 5.2859C25.7232 6.22358 26.25 7.49535 26.25 8.82143V24.2504C26.25 27.0118 24.0114 29.2504 21.25 29.2504H8.75C5.98858 29.2504 3.75 27.0118 3.75 24.2504V6.75037ZM23.75 10.5004V24.2504C23.75 25.6311 22.6307 26.7504 21.25 26.7504H8.75C7.36929 26.7504 6.25 25.6311 6.25 24.2504V6.75037C6.25 5.36965 7.36929 4.25037 8.75 4.25037H17.5V6.75037C17.5 8.82143 19.1789 10.5004 21.25 10.5004H23.75ZM23.6113 8.00037C23.4886 7.64736 23.2871 7.32296 23.0178 7.05367L20.9467 4.9826C20.6774 4.71331 20.353 4.51179 20 4.38904V6.75037C20 7.44072 20.5596 8.00037 21.25 8.00037H23.6113Z"
                        fill="#12131A"
                      />
                      <path
                        d="M10.0002 4.87537C10.0002 4.53019 10.2801 4.25037 10.6252 4.25037H11.8752C12.2204 4.25037 12.5002 4.53019 12.5002 4.87537V6.12537C12.5002 6.47054 12.2204 6.75037 11.8752 6.75037H10.6252C10.2801 6.75037 10.0002 6.47054 10.0002 6.12537V4.87537Z"
                        fill="#12131A"
                      />
                      <path
                        d="M10.0002 9.87537C10.0002 9.53019 10.2801 9.25037 10.6252 9.25037H11.8752C12.2204 9.25037 12.5002 9.53019 12.5002 9.87537V11.1254C12.5002 11.4705 12.2204 11.7504 11.8752 11.7504H10.6252C10.2801 11.7504 10.0002 11.4705 10.0002 11.1254V9.87537Z"
                        fill="#12131A"
                      />
                      <path
                        d="M12.5002 12.3754C12.5002 12.0302 12.7801 11.7504 13.1252 11.7504H14.3752C14.7204 11.7504 15.0002 12.0302 15.0002 12.3754V13.6254C15.0002 13.9705 14.7204 14.2504 14.3752 14.2504H13.1252C12.7801 14.2504 12.5002 13.9705 12.5002 13.6254V12.3754Z"
                        fill="#12131A"
                      />
                      <path
                        d="M10.6252 14.2504C10.2801 14.2504 10.0002 14.5302 10.0002 14.8754V16.1254C10.0002 16.4705 10.2801 16.7504 10.6252 16.7504H11.8752C12.2204 16.7504 12.5002 16.4705 12.5002 16.1254V14.8754C12.5002 14.5302 12.2204 14.2504 11.8752 14.2504H10.6252Z"
                        fill="#12131A"
                      />
                      <path
                        d="M12.5002 17.3754C12.5002 17.0302 12.7801 16.7504 13.1252 16.7504H14.3752C14.7204 16.7504 15.0002 17.0302 15.0002 17.3754V18.6254C15.0002 18.9705 14.7204 19.2504 14.3752 19.2504H13.1252C12.7801 19.2504 12.5002 18.9705 12.5002 18.6254V17.3754Z"
                        fill="#12131A"
                      />
                      <path
                        d="M10.6252 19.2504C10.2801 19.2504 10.0002 19.5302 10.0002 19.8754V21.1254C10.0002 21.4705 10.2801 21.7504 10.6252 21.7504H11.8752C12.2204 21.7504 12.5002 21.4705 12.5002 21.1254V19.8754C12.5002 19.5302 12.2204 19.2504 11.8752 19.2504H10.6252Z"
                        fill="#12131A"
                      />
                      <path
                        d="M12.5002 22.3754C12.5002 22.0302 12.7801 21.7504 13.1252 21.7504H14.3752C14.7204 21.7504 15.0002 22.0302 15.0002 22.3754V23.6254C15.0002 23.9705 14.7204 24.2504 14.3752 24.2504H13.1252C12.7801 24.2504 12.5002 23.9705 12.5002 23.6254V22.3754Z"
                        fill="#12131A"
                      />
                      <path
                        d="M10.6252 24.2504C10.2801 24.2504 10.0002 24.5302 10.0002 24.8754V26.1254C10.0002 26.4705 10.2801 26.7504 10.6252 26.7504H11.8752C12.2204 26.7504 12.5002 26.4705 12.5002 26.1254V24.8754C12.5002 24.5302 12.2204 24.2504 11.8752 24.2504H10.6252Z"
                        fill="#12131A"
                      />
                      <path
                        d="M13.1252 6.75037C12.7801 6.75037 12.5002 7.03019 12.5002 7.37537V8.62537C12.5002 8.97054 12.7801 9.25037 13.1252 9.25037H14.3752C14.7204 9.25037 15.0002 8.97054 15.0002 8.62537V7.37537C15.0002 7.03019 14.7204 6.75037 14.3752 6.75037H13.1252Z"
                        fill="#12131A"
                      />
                    </svg>
                    <p
                      className="underline font-inter font-black text-[10px] md:text-[12px] xl:text-[16px] xl:leading-[21.431px] tracking-[0.191px]"
                      style={{ color: "#0F131A" }}
                    >
                      1 Million Graphics Template.zip
                    </p>
                  </div>
                  <div className="flex-1"></div>
                  <button
                    className="flex items-center px-5 py-1 border gap-x-[6px] rounded-4"
                    style={{ backgroundColor: "#1285ff" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.50854 20.8998C3.50854 20.5815 3.64394 20.2763 3.88494 20.0513C4.12595 19.8262 4.45282 19.6998 4.79365 19.6998H20.2149C20.5557 19.6998 20.8826 19.8262 21.1236 20.0513C21.3646 20.2763 21.5 20.5815 21.5 20.8998C21.5 21.218 21.3646 21.5233 21.1236 21.7483C20.8826 21.9734 20.5557 22.0998 20.2149 22.0998H4.79365C4.45282 22.0998 4.12595 21.9734 3.88494 21.7483C3.64394 21.5233 3.50854 21.218 3.50854 20.8998ZM7.74038 11.6514C7.98137 11.4264 8.30818 11.3 8.64895 11.3C8.98971 11.3 9.31652 11.4264 9.55751 11.6514L11.2191 13.203V4.09978C11.2191 3.78152 11.3545 3.4763 11.5955 3.25125C11.8365 3.02621 12.1634 2.89978 12.5042 2.89978C12.8451 2.89978 13.1719 3.02621 13.413 3.25125C13.654 3.4763 13.7893 3.78152 13.7893 4.09978V13.203L15.451 11.6514C15.5695 11.5368 15.7113 11.4453 15.8681 11.3825C16.0249 11.3196 16.1935 11.2865 16.3642 11.2851C16.5348 11.2837 16.704 11.3141 16.862 11.3744C17.0199 11.4347 17.1634 11.5238 17.284 11.6365C17.4047 11.7492 17.5001 11.8832 17.5647 12.0306C17.6294 12.1781 17.6619 12.3361 17.6604 12.4955C17.6589 12.6548 17.6235 12.8123 17.5561 12.9587C17.4888 13.1051 17.3909 13.2375 17.2681 13.3482L13.4128 16.9482C13.1718 17.1731 12.845 17.2995 12.5042 17.2995C12.1635 17.2995 11.8367 17.1731 11.5957 16.9482L7.74038 13.3482C7.49946 13.1231 7.36412 12.818 7.36412 12.4998C7.36412 12.1816 7.49946 11.8764 7.74038 11.6514Z"
                        fill="white"
                      />
                    </svg>
                    <p className="text-white text-xs font-bold tracking-[0.14px]">
                      Download
                    </p>
                  </button>
                </div>
              </div>
            </div>
            <div
              className="flex flex-col items-center justify-center mt-16 py-8 px-[40px] xl:px-[81px] rounded-lg bg-white"
              style={{ border: "1px solid var(--green-nhb, #49A55D)" }}
            >
              <h2 className="font-poppins text-2xl leading-[39.165px] font-normal tracking-[0.917px]">
                Apply To join
              </h2>
              <h1 className="pb-6 font-poppins text-[32px] leading-[39.165px] tracking-[0.917px] font-bold text-center">
                The NHB Mastermind
              </h1>
              <p
                className="pb-[17px] text-base font-normal tracking-[1px] text-center"
                style={{ textTransform: "lowercase" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque vitae non sodales tristique. In blandit consequat
                diam enim aliquet sodales. Venenatis malesuada mauris
                suspendisse vel lectus. Quam tincidunt volutpat a commodo eget
                nec.
              </p>
              <button
                className="mt-4 md:mt-0 text-white py-[14px] px-14 text-[14px] leading-[18px] md:leading-[100%] font-bold tracking-[0.144px] rounded-4 "
                style={{ backgroundColor: "var(--green-nhb, #49A55D)" }}
              >
                Click Here To Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
