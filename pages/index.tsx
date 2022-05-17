import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Script from "next/script";

const Home: NextPage = () => {
  const allConductors = [35, 50, 70, 95, 120, 185];
  const allColdlineLengths = [240, 255, 265, 280, 290, 325];
  const allHotlinePinLength = [105, 110, 115, 120, 125, 130];
  const allHotlinePostLength = [90, 95, 100, 105, 110, 115];
  const [conductor, setconductor] = useState<number>(35);
  const [insulator, setinsulator] = useState<string>(`Pin`);
  const [isSingle, setisSingle] = useState<boolean>(true);
  const [isPar, setisPar] = useState<boolean>(false);
  const [isColdeline, setisColdeline] = useState<boolean>(false);
  const [is22, setis22] = useState<boolean>(true);
  const [currentLength, setcurrentLength] = useState<number>(0);

  useEffect(() => {
    cal();
    // eslint-disable-next-line
  }, [conductor, insulator, isSingle, isPar, isColdeline, is22]);

  function cal() {
    let result;
    if (!isColdeline) {
      if (insulator === `Pin`) {
        switch (conductor) {
          case allConductors[0]:
            result = allHotlinePinLength[0];
            break;
          case allConductors[1]:
            result = allHotlinePinLength[1];
            break;
          case allConductors[2]:
            result = allHotlinePinLength[2];
            break;
          case allConductors[3]:
            result = allHotlinePinLength[3];
            break;
          case allConductors[4]:
            result = allHotlinePinLength[4];
            break;
          case allConductors[5]:
            result = allHotlinePinLength[5];
            break;
          default:
            result = 0;
            break;
        }
        if (isSingle) {
          result = result;
          if (is22) {
            result = result;
          } else {
            result += 8;
          }
        } else {
          result += 25;
          if (is22) {
            result = result;
          } else {
            result += 5;
          }
        }
      } else {
        switch (conductor) {
          case allConductors[0]:
            result = allHotlinePostLength[0];
            break;
          case allConductors[1]:
            result = allHotlinePostLength[1];
            break;
          case allConductors[2]:
            result = allHotlinePostLength[2];
            break;
          case allConductors[3]:
            result = allHotlinePostLength[3];
            break;
          case allConductors[4]:
            result = allHotlinePostLength[4];
            break;
          case allConductors[5]:
            result = allHotlinePostLength[5];
            break;
          default:
            result = 0;
            break;
        }
        if (isSingle) {
          result = result;
          if (is22) {
            result = result;
          } else {
            result += 5;
          }
        } else {
          result += 15;
          if (is22) {
            result = result;
          } else {
            result += 5;
          }
        }
      }

      if (isPar) {
        result = result;
      } else {
        result -= 10;
      }
      setcurrentLength(result);
    } else {
      switch (conductor) {
        case allConductors[0]:
          result = allColdlineLengths[0];
          break;
        case allConductors[1]:
          result = allColdlineLengths[1];
          break;
        case allConductors[2]:
          result = allColdlineLengths[2];
          break;
        case allConductors[3]:
          result = allColdlineLengths[3];
          break;
        case allConductors[4]:
          result = allColdlineLengths[4];
          break;
        case allConductors[5]:
          result = allColdlineLengths[5];
          break;
        default:
          result = 0;
          break;
      }

      if (isPar) {
        result = result;
      } else {
        result -= 10;
      }

      if (is22) {
        result = result;
      } else {
        result += 10;
      }
      setcurrentLength(result);
    }
  }

  const btn_normal = `inline-block px-6 py-2.5 bg-white text-blue-600 ring-2 ring-blue-600 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:text-white hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 focus:text-white active:bg-blue-800 active:shadow-lg `;
  const btn_push = `inline-block px-6 py-2.5 font-medium text-xs leading-tight uppercase rounded shadow-md bg-blue-700 shadow-lg outline-none ring-0 text-white active:bg-blue-800 active:shadow-lg `;
  const div_box = `flex rounded my-2 justify-center items-center`;
  const div_flex_box = `mb-4 mt-2 flex flex-col space-y-3 sm:space-y-0 md:space-y-0 lg:space-y-0 sm:space-x-3 md:space-x-3 lg:space-x-3 sm:flex-row md:flex-row lg:flex-row items-center justify-center`;
  const div_box_bg = `w-full md:w-full lg:w-full px-6 py-4 bg-gray-100 shadow-lg`;
  return (
    <div>
      <Head>
        <title>Tie wire calculator</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
        <script
          data-name="BMC-Widget"
          data-cfasync="false"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="kirato"
          data-description="Support me on Buy me a coffee!"
          data-message="Thank you for visiting. You can now buy me a coffeee."
          data-color="#FFDD00"
          data-position="Right"
          data-x_margin="18"
          data-y_margin="18"
        ></script>
      </Head>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
          <div className="mx-auto max-w-md">
            <div className="divide-y divide-gray-300/50">
              <div className=" pb-8 text-base leading-7 text-gray-600">
                <p className="text-center font-bold uppercase text-5xl md:text-6xl lg:text-6xl">
                  tie wire calculator
                </p>
                <p className="text-center text-xl font-bold text-purple-500 hover:text-blue-600 duration-500 ease-in-out">
                  <a href="#how_to_use">How to use ?</a>
                </p>
              </div>
              <div className="pt-8 text-base font-semibold leading-7">
                <p id="voltage" className="text-gray-700">
                  ระดับแรงดันไฟฟ้า
                </p>
                <div className={div_flex_box}>
                  <button
                    onClick={() => {
                      setis22(true);
                    }}
                    type="button"
                    className={`${
                      is22 === true ? btn_push : btn_normal
                    }transition duration-150 ease-in-out`}
                  >
                    22 kV
                  </button>
                  <button
                    onClick={() => {
                      setis22(false);
                    }}
                    type="button"
                    className={`${
                      is22 === false ? btn_push : btn_normal
                    }transition duration-150 ease-in-out`}
                  >
                    33 kV
                  </button>
                </div>
              </div>
              <div className="pt-8 text-base font-semibold leading-7">
                <p id="working_style" className="text-gray-700">
                  ลักษณะการปฏิบัติงาน
                </p>
                <div className={div_flex_box}>
                  <button
                    onClick={() => {
                      setisColdeline(false);
                    }}
                    type="button"
                    className={`${
                      isColdeline === false ? btn_push : btn_normal
                    }transition duration-150 ease-in-out`}
                  >
                    Hotline
                  </button>
                  <button
                    onClick={() => {
                      setisColdeline(true);
                    }}
                    type="button"
                    className={`${
                      isColdeline === true ? btn_push : btn_normal
                    }transition duration-150 ease-in-out`}
                  >
                    Coldline
                  </button>
                </div>
              </div>
              <div className="pt-8 text-base font-semibold leading-7">
                <p id="conductor_size" className="text-gray-700">
                  ขนาดสายไฟฟ้า (สายเปลือย)
                </p>
                <div className={div_flex_box}>
                  {allConductors.map((n) => (
                    <button
                      key={n}
                      onClick={async () => {
                        setconductor(n);
                      }}
                      type="button"
                      className={`${
                        n === conductor ? btn_push : btn_normal
                      } transition duration-150 ease-in-out`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>
              <div className="pt-8 text-base font-semibold leading-7">
                <p id="insulator_type" className="text-gray-700">
                  ประเภทลูกถ้วย
                </p>
                <div className={div_flex_box}>
                  <button
                    onClick={() => {
                      setinsulator(`Pin`);
                    }}
                    type="button"
                    className={`${
                      insulator === `Pin` ? btn_push : btn_normal
                    } transition duration-150 ease-in-out`}
                  >
                    Pin
                  </button>
                  <button
                    onClick={() => {
                      setinsulator(`Line Post`);
                    }}
                    type="button"
                    className={`${
                      insulator === `Line Post` ? btn_push : btn_normal
                    } transition duration-150 ease-in-out`}
                  >
                    Line Post
                  </button>
                  <button
                    onClick={() => {
                      setinsulator(`Pin Post`);
                    }}
                    type="button"
                    className={`${
                      insulator === `Pin Post` ? btn_push : btn_normal
                    } transition duration-150 ease-in-out`}
                  >
                    Pin Post
                  </button>
                </div>
              </div>
              <div className="pt-8 text-base font-semibold leading-7">
                <p id="structure_type" className="text-gray-700">
                  ลักษณะโครงสร้าง
                </p>
                <div className={div_flex_box}>
                  <button
                    onClick={() => {
                      setisSingle(true);
                    }}
                    type="button"
                    className={`${
                      isSingle === true ? btn_push : btn_normal
                    } transition duration-150 ease-in-out`}
                  >
                    ทางตรง
                  </button>
                  <button
                    onClick={() => {
                      setisSingle(false);
                    }}
                    type="button"
                    className={`${
                      isSingle === false ? btn_push : btn_normal
                    } transition duration-150 ease-in-out`}
                  >
                    ทางโค้ง
                  </button>
                </div>
              </div>
              <div className="pt-8 text-base font-semibold leading-7">
                <p id="PAR" className="text-gray-700">
                  มี Preformed Armor Rod หรือไม่{" "}
                </p>
                <div className={div_flex_box}>
                  <button
                    onClick={() => {
                      setisPar(false);
                    }}
                    type="button"
                    className={`${
                      isPar === false ? btn_push : btn_normal
                    } transition duration-150 ease-in-out`}
                  >
                    ไม่มี
                  </button>
                  <button
                    onClick={() => {
                      setisPar(true);
                    }}
                    type="button"
                    className={`${
                      isPar === true ? btn_push : btn_normal
                    } transition duration-150 ease-in-out`}
                  >
                    มี
                  </button>
                </div>
              </div>
              <div className="pt-8 text-base font-semibold leading-7">
                <p
                  id="result"
                  className="text-blue-600 p-4 bg-gray-200 rounded-xl font-bold text-center mb-2 text-8xl md:text-6xl lg:text-8xl"
                >
                  {`${currentLength}`} cm.
                </p>
                <p className="text-center mb-6">Tie wire length</p>
              </div>
              <div className="text-gray-700 pt-8 text-base font-normal leading-7">
                <p
                  id="how_to_use"
                  className=" mb-4 bg-blue-600 text-gray-200 rounded text-center text-2xl p-1"
                >
                  How to use
                </p>
                <p className="mb-6 ">
                  Follow this steps to use this application.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg
                      className="h-6 w-6 flex-none fill-blue-100 stroke-blue-600 stroke-2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="11" />
                      <path
                        d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                        fill="none"
                      />
                    </svg>
                    <p className="ml-4">
                      Select{" "}
                      <code className="bg-gray-200 rounded-md p-2  font-bold text-blue-600">
                        <a href="#voltage">voltage</a>
                      </code>{" "}
                      in the system.
                    </p>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-6 w-6 flex-none fill-blue-100 stroke-blue-600 stroke-2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="11" />
                      <path
                        d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                        fill="none"
                      />
                    </svg>
                    <p className="ml-4">
                      Select your{" "}
                      <code className="bg-gray-200 rounded-md p-2  font-bold text-blue-600">
                        <a href="#working_style">working style.</a>
                      </code>{" "}
                    </p>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-6 w-6 flex-none fill-blue-100 stroke-blue-600 stroke-2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="11" />
                      <path
                        d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                        fill="none"
                      />
                    </svg>
                    <p className="ml-4">
                      Select{" "}
                      <code className="bg-gray-200 rounded-md p-2  font-bold text-blue-600">
                        <a href="#conductor_size">conductor size</a>
                      </code>{" "}
                      in the system.
                    </p>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-6 w-6 flex-none fill-blue-100 stroke-blue-600 stroke-2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="11" />
                      <path
                        d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                        fill="none"
                      />
                    </svg>
                    <p className="ml-4">
                      Select{" "}
                      <code className="bg-gray-200 rounded-md p-2  font-bold text-blue-600">
                        <a href="#insulator_type">insulator type</a>
                      </code>{" "}
                      in the system.
                    </p>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-6 w-6 flex-none fill-blue-100 stroke-blue-600 stroke-2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="11" />
                      <path
                        d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                        fill="none"
                      />
                    </svg>
                    <p className="ml-4">
                      Select{" "}
                      <code className="bg-gray-200 rounded-md p-2  font-bold text-blue-600">
                        <a href="#structure_type">structure type</a>
                      </code>{" "}
                      in the system
                    </p>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-6 w-6 flex-none fill-blue-100 stroke-blue-600 stroke-2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="11" />
                      <path
                        d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                        fill="none"
                      />
                    </svg>
                    <p className="ml-4">
                      Is this system has{" "}
                      <code className="bg-gray-200 rounded-md p-2  font-bold text-blue-600">
                        <a href="#PAR">Preformed Armor Rod</a>
                      </code>{" "}
                      ?
                    </p>
                  </li>
                </ul>
                <p className="mt-4 mb-4">
                  The{" "}
                  <code className="bg-blue-600 text-white rounded-md p-2 font-bold">
                    <a href="#result">result</a>
                  </code>{" "}
                  will be shown in below section.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
