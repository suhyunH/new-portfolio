"use client";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";

export default function Home() {
  const scrollElement = useRef<any[]>([]);
  const scrollingTop = useCallback(async (index: number) => {
    const elmnt = scrollElement;
    if (elmnt?.current) {
      elmnt?.current[index].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav
        className={`bg-white dark:bg-gray-900 shadow-lg top-0 fixed w-full flex items-center  justify-end p-4 z-50`}
      >
        <div className="hidden items-center space-x-12 lg:flex">
          <div
            className="text-lg font-semibold text-gray-800 dark:text-white cursor-pointer"
            onClick={() => scrollingTop(0)}
          >
            me
          </div>
          <div
            className="text-lg font-semibold text-gray-800 dark:text-white cursor-pointer"
            onClick={() => scrollingTop(1)}
          >
            Skills & Project
          </div>
          <div
            className="text-lg font-semibold text-gray-800 dark:text-white cursor-pointer"
            onClick={() => scrollingTop(2)}
          >
            Testimonials
          </div>
        </div>
        <div className="flex items-center space-x-4 lg:hidden w-full">
          <div className="cursor-pointer flex justify-between w-full">
            <div
              className={`lg:flex lg:items-center transition-transform duration-300 ease-in-out transform ${
                menuOpen
                  ? "translate-x-full  visible"
                  : "translate-x-0 invisible"
              }`}
            >
              <div
                className="text-lg font-semibold text-gray-800 dark:text-white cursor-pointer"
                onClick={() => scrollingTop(0)}
              >
                me
              </div>
              <div
                className="text-lg font-semibold text-gray-800 dark:text-white cursor-pointer"
                onClick={() => scrollingTop(1)}
              >
                Skills & Project
              </div>
              <div
                className="text-lg font-semibold text-gray-800 dark:text-white cursor-pointer"
                onClick={() => scrollingTop(2)}
              >
                Testimonials
              </div>
            </div>
            <button
              type="button"
              onClick={toggleMenu}
              className="text-2xl text-gray-800 dark:text-white "
            >
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className="max-w-5xl mx-auto"
        ref={(el) => (scrollElement.current[0] = el)}
      >
        <header className="mt-20 sm:mt-24 lg:mt-32 flex flex-col items-center justify-center">
          <div className="my-auto text-center">
            <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight dark:text-white pb-2">
              Hi, Im Suhyun Han
            </h1>
            <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight dark:text-white pb-8">
              A Front-end Developer
            </h1>
          </div>
        </header>

        <section
          className="pt-20 sm:pt-24 lg:pt-32"
          ref={(el) => (scrollElement.current[1] = el)}
        >
          <p className="relative text-slate-900 font-bold text-2xl lg:text-5xl tracking-tight text-left dark:text-white pb-5">
            Skills & Projects
          </p>
          <div className="relative sm:block md:flex mb-8">
            <Image src="./futureplay.gif" alt="futureplay gif" />
            <div className="flex-1 p-5">
              <div className="text-center mb-6">
                <p className="font-bold text-2xl">Tanagement</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Discover Your Talents and Develop Them into Strengths with
                  Career Development Service Tool that Help You in Software
                  Development.
                </p>
              </div>
              <p className="font-extrabold text-xl">
                TypeScript, Next.js, MUI, REST API, AWS
              </p>
              <div className="mt-6">
                <p className="font-bold text-xl mb-3">What I Have Done</p>
                <ul className="ml-4 list-disc text-gray-600 dark:text-gray-300">
                  <li className="text-lg">New Career Report</li>
                  <li className="text-lg">
                    B2B Strength/Career/Leadership Report
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* 두 번째 프로젝트 정보 추가 */}
          <div className="relative sm:block md:flex mb-8">
            <div className="w-[400px] h-[500px] bg-slate-600 flex-1 m-auto rounded-lg shadow-md" />
            <div className="flex-1 p-5">
              <div className="text-center mb-6">
                <p className="font-bold text-2xl">Futureplay.co</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Homepage of a VC company called Futureplay.
                </p>
              </div>
              <p className="font-extrabold text-xl">
                TypeScript, Next.js, Bootstrap, GraphQL, AWS, wordpress, Hasura
              </p>
              <div className="mt-6">
                <p className="font-bold text-xl mb-3">What I Have Done</p>
                <ul className="ml-4 list-disc text-gray-600 dark:text-gray-300">
                  <li className="text-lg">
                    Website Redesign Project (main, about, culture, investment,
                    consulting, portfolio, contents, FP Original, locale
                    feature.. etc)
                  </li>
                  <li className="text-lg">Design Patterns</li>
                  <li className="text-lg">Playbook landing page</li>
                  <li className="text-lg">Membership website (canceled)</li>
                  <li className="text-lg">more detail (노션 페이지 이동)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          className="pt-20 sm:pt-24 lg:pt-32"
          ref={(el) => (scrollElement.current[2] = el)}
        >
          <p className="relative text-slate-900 font-bold text-2xl lg:text-5xl tracking-tight text-left dark:text-white pb-5">
            Testimonials
          </p>
          {[
            "What you have to do with your mind, when your body is miserable, is to make it think of something else.",
            "What you have to do with your mind, when your body is miserable, is to make it think of something else.",
            "What you have to do with your mind, when your body is miserable, is to make it think of something else.",
          ].map((item, index) => {
            const reverseOrder = index === 1;
            return (
              <div
                className={`border border-slate-300 rounded-lg p-6 mb-6 hover:shadow-md flex mx-3 ${
                  reverseOrder ? "flex-row-reverse" : "flex-row"
                }`}
                key={index}
              >
                <div className="border rounded-full w-20 h-20 bg-slate-700" />
                <h1
                  className={`text-slate-900 text-lg sm:text-base lg:text-2xl tracking-tight dark:text-white ${
                    reverseOrder ? "mr-6 text-right" : "ml-6 text-left"
                  }`}
                >
                  {item}
                </h1>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
}
