import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

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
  const div_flex_box = `flex flex-col space-y-3 sm:space-y-0 md:space-y-0 lg:space-y-0 sm:space-x-3 md:space-x-3 lg:space-x-3 sm:flex-row md:flex-row lg:flex-row items-center justify-center`;
  const div_box_bg = `w-full md:w-full lg:w-full px-6 py-4 bg-gray-100 shadow-lg`;
  return (
    <div className=" flex-col space-y-4">
      <div className={`${div_box} fixed sm:static md:static lg:static`}>
        <div className={div_box_bg}>
          <div className=" font-bold text-center mb-2 text-9xl md:text-6xl lg:text-9xl">
            {`${currentLength}`} cm.
          </div>
          <p className="text-grey-darker text-base text-center ">
            Tie wire length
          </p>
        </div>
      </div>
      <div className={`mt-10 sm:mt-0 md:mt-0 lg:mt-0`}>
        <div className={div_box}>
          <div className={div_box_bg}>
            {/* <div className="font-bold text-xl mb-2">เลือกชนิดการทำงาน</div> */}
            <div className={div_flex_box}>
              <button
                onClick={() => {
                  setis22(true);
                }}
                type="button"
                className={`${is22 === true ? btn_push : btn_normal
                  }transition duration-150 ease-in-out`}
              >
                22 kV
              </button>
              <button
                onClick={() => {
                  setis22(false);
                }}
                type="button"
                className={`${is22 === false ? btn_push : btn_normal
                  }transition duration-150 ease-in-out`}
              >
                33 kV
              </button>
            </div>
          </div>
        </div>
        <div className={div_box}>
          <div className={div_box_bg}>
            {/* <div className="font-bold text-xl mb-2">เลือกชนิดการทำงาน</div> */}
            <div className={div_flex_box}>
              <button
                onClick={() => {
                  setisColdeline(false);
                }}
                type="button"
                className={`${isColdeline === false ? btn_push : btn_normal
                  }transition duration-150 ease-in-out`}
              >
                Hotline
              </button>
              <button
                onClick={() => {
                  setisColdeline(true);
                }}
                type="button"
                className={`${isColdeline === true ? btn_push : btn_normal
                  }transition duration-150 ease-in-out`}
              >
                Coldline
              </button>
            </div>
          </div>
        </div>
        <div className={div_box}>
          <div className={div_box_bg}>
            <div className="font-bold text-xl mb-2 lg:text-center">
              ขนาดสายไฟฟ้า(AL)
            </div>
            <div className={div_flex_box}>
              {allConductors.map((n) => (
                <button
                  key={n}
                  onClick={async () => {
                    setconductor(n);
                  }}
                  type="button"
                  className={`${n === conductor ? btn_push : btn_normal
                    } transition duration-150 ease-in-out`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className={div_box}>
          <div className={div_box_bg}>
            <div className="font-bold text-xl mb-2 lg:text-center">
              ชนิดลูกถ้วย
            </div>
            <div className={div_flex_box}>
              <button
                onClick={() => {
                  setinsulator(`Pin`);
                }}
                type="button"
                className={`${insulator === `Pin` ? btn_push : btn_normal
                  } transition duration-150 ease-in-out`}
              >
                Pin
              </button>
              <button
                onClick={() => {
                  setinsulator(`Line Post`);
                }}
                type="button"
                className={`${insulator === `Line Post` ? btn_push : btn_normal
                  } transition duration-150 ease-in-out`}
              >
                Line Post
              </button>
              <button
                onClick={() => {
                  setinsulator(`Pin Post`);
                }}
                type="button"
                className={`${insulator === `Pin Post` ? btn_push : btn_normal
                  } transition duration-150 ease-in-out`}
              >
                Pin Post
              </button>
            </div>
          </div>
        </div>
        <div className={div_box}>
          <div className={div_box_bg}>
            <div className="font-bold text-xl mb-2 lg:text-center">
              ชนิดโครงสร้าง
            </div>
            <div className={div_flex_box}>
              <button
                onClick={() => {
                  setisSingle(true);
                }}
                type="button"
                className={`${isSingle === true ? btn_push : btn_normal
                  } transition duration-150 ease-in-out`}
              >
                ทางตรง
              </button>
              <button
                onClick={() => {
                  setisSingle(false);
                }}
                type="button"
                className={`${isSingle === false ? btn_push : btn_normal
                  } transition duration-150 ease-in-out`}
              >
                ทางโค้ง
              </button>
            </div>
          </div>
        </div>
        <div className={div_box}>
          <div className={div_box_bg}>
            <div className="font-bold text-xl mb-2 lg:text-center">
              มี Preformed Armor Rod หรือไม่
            </div>
            <div className={div_flex_box}>
              <button
                onClick={() => {
                  setisPar(false);
                }}
                type="button"
                className={`${isPar === false ? btn_push : btn_normal
                  } transition duration-150 ease-in-out`}
              >
                ไม่มี
              </button>
              <button
                onClick={() => {
                  setisPar(true);
                }}
                type="button"
                className={`${isPar === true ? btn_push : btn_normal
                  } transition duration-150 ease-in-out`}
              >
                มี
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
