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
  const [isColdeline, setisColdeline] = useState<boolean>(true);
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

  return (
    <div className="min-h-screen justify-center items-center">
      <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
        <div className="px-6 py-4">
          <p className="text-grey-darker text-base">Tie wire length</p>
          <div className="font-bold text-center text-xl mb-2">
            {`${currentLength}`} cm.
          </div>
        </div>
      </div>
      <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">เลือกชนิดการทำงาน</div>
          {/* <select
            className="w-full text-center"
            name="conductor size"
            id="conductorSize"
          >
            <option value="1">Pin Type</option>
            <option value="2">Line Post Type</option>
            <option value="3">Pin Post Type</option>
          </select> */}
          <div className="flex space-x-2 overflow-auto px-6 py-4">
            <button
              onClick={() => {
                setis22(true);
              }}
              type="button"
              className="inline-block px-6 py-2.5 bg-white text-blue-600 ring-2 ring-blue-600 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 focus:text-white active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              22 kV
            </button>
            <button
              onClick={() => {
                setis22(false);
              }}
              type="button"
              className="inline-block px-6 py-2.5 bg-white text-blue-600 ring-2 ring-blue-600 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 focus:text-white active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              33 kV
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">เลือกชนิดการทำงาน</div>
          {/* <select
            className="w-full text-center"
            name="conductor size"
            id="conductorSize"
          >
            <option value="1">Pin Type</option>
            <option value="2">Line Post Type</option>
            <option value="3">Pin Post Type</option>
          </select> */}
          <div className="flex space-x-2 overflow-auto px-6 py-4">
            <button
              onClick={() => {
                setisColdeline(false);
              }}
              type="button"
              className="inline-block px-6 py-2.5 bg-white text-blue-600 ring-2 ring-blue-600 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 focus:text-white active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Hotline
            </button>
            <button
              onClick={() => {
                setisColdeline(true);
              }}
              type="button"
              className="inline-block px-6 py-2.5 bg-white text-blue-600 ring-2 ring-blue-600 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 focus:text-white active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Coldline
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-md rounded shadow-lg my-2">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">เลือกขนาดสายตัวนำไฟฟ้า</div>
          {/* <select
            className="w-full text-center"
            name="conductor size"
            id="conductorSize"
          >
            <option value="35">35</option>
            <option value="50">50</option>
            <option value="70">70</option>
            <option value="95">95</option>
            <option value="120">120</option>
            <option value="185">185</option>
          </select> */}
          <div className="flex space-x-2 overflow-auto px-6 py-4">
            {allConductors.map((n) => (
              <button
                onClick={async () => {
                  setconductor(n);
                }}
                type="button"
                className="inline-block px-6 py-2.5 bg-white text-blue-600 ring-2 ring-blue-600 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 focus:text-white active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                {n}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">เลือกชนิดลูกถ้วย</div>
          {/* <select
            className="w-full text-center"
            name="conductor size"
            id="conductorSize"
          >
            <option value="1">Pin Type</option>
            <option value="2">Line Post Type</option>
            <option value="3">Pin Post Type</option>
          </select> */}
          <div className="flex space-x-2 overflow-auto px-6 py-4">
            <button
              onClick={() => {
                setinsulator(`Pin`);
              }}
              type="button"
              className="inline-block px-6 py-2.5 bg-white text-blue-600 ring-2 ring-blue-600 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 focus:text-white active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Pin
            </button>
            <button
              onClick={() => {
                setinsulator(`Line Post`);
              }}
              type="button"
              className="inline-block px-6 py-2.5 bg-white text-blue-600 ring-2 ring-blue-600 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 focus:text-white active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Line Post
            </button>
            <button
              onClick={() => {
                setinsulator(`Pin Post`);
              }}
              type="button"
              className="inline-block px-6 py-2.5 bg-white text-blue-600 ring-2 ring-blue-600 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 focus:text-white active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Pin Post
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">เลือกชนิดคอนสาย</div>
          {/* <select
            className="w-full text-center"
            name="conductor size"
            id="conductorSize"
          >
            <option value="1">Pin Type</option>
            <option value="2">Line Post Type</option>
            <option value="3">Pin Post Type</option>
          </select> */}
          <div className="flex space-x-2 overflow-auto px-6 py-4">
            <button
              onClick={() => {
                setisSingle(false);
              }}
              type="button"
              className="inline-block px-6 py-2.5 bg-white text-blue-600 ring-2 ring-blue-600 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 focus:text-white active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              ทางโค้ง
            </button>
            <button
              onClick={() => {
                setisSingle(true);
              }}
              type="button"
              className="inline-block px-6 py-2.5 bg-white text-blue-600 ring-2 ring-blue-600 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 focus:text-white active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              ทางตรง
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            มี Preformed Armor Rod หรือไม่
          </div>
          {/* <select
            className="w-full text-center"
            name="conductor size"
            id="conductorSize"
          >
            <option value="1">Pin Type</option>
            <option value="2">Line Post Type</option>
            <option value="3">Pin Post Type</option>
          </select> */}
          <div className="flex space-x-2 overflow-auto px-6 py-4">
            <button
              onClick={() => {
                setisPar(false);
              }}
              type="button"
              className="inline-block px-6 py-2.5 bg-white text-blue-600 ring-2 ring-blue-600 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 focus:text-white active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              ไม่มี
            </button>
            <button
              onClick={() => {
                setisPar(true);
              }}
              type="button"
              className="inline-block px-6 py-2.5 bg-white text-blue-600 ring-2 ring-blue-600 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 focus:text-white active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              มี
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
