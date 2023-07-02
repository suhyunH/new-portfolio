"use client";
import DubaiClouds from "@/public/Clouds";
import { useCallback, useRef } from "react";

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

  return (
    <>
      <nav className="fixed bg-white dark:bg-gray-900">
        <ul>
          <li>me</li>
          <li onClick={() => scrollingTop(0)}>Skills & Project</li>
          <li onClick={() => scrollingTop(1)}>Testimonials</li>
        </ul>
      </nav>
      <div className="relative max-w-5xl mx-auto ">
        <header className="pt-20 sm:pt-24 lg:pt-32 flex align-center justify-center">
          <div className="my-auto">
            <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white pb-5">
              Hi, Im suhyun Han
            </h1>
            <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
              A Front-end Developer
            </h1>
          </div>
          <DubaiClouds />
        </header>
        <section
          className="pt-20 sm:pt-24 lg:pt-32"
          ref={(el) => (scrollElement.current[0] = el)}
        >
          <p className="relative text-slate-900 font-bold text-2xl lg:text-5xl tracking-tight text-left dark:text-white pb-5">
            Skills & Projects
          </p>
          <div className="relative sm:block md:flex  mb-8">
            <div className="w-[400px] h-[500px] bg-slate-600 flex-1 m-auto" />
            <div className="flex-1 p-5">
              <div className="text-center mb-6">
                <p className="font-bold text-2xl">Tanagement</p>
                <p className="">
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
                <ul className="ml-3 space-y-2">
                  <li className=" text-lg">new Career Report</li>
                  <li className="text-lg">
                    B2B strength/career/leadership report
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative sm:block md:flex">
            <div className="w-[400px] h-[500px] bg-slate-600 flex-1 m-auto" />
            <div className="flex-1 p-5">
              <div className="text-center mb-6">
                <p className="font-bold text-2xl">Futureplay.co</p>
                <p className="">Homepage of a VC company called Futureplay.</p>
              </div>
              <p className=" font-extrabold text-xl">
                TypeScript, Next.js, Bootstrap, GraphQL, AWS, wordpress, Hasura
              </p>
              <div className="mt-6">
                <p className="font-bold text-xl mb-3">What I Have Done</p>

                <ul className=" ml-3 space-y-2">
                  <li className="text-lg">
                    Website Redesign Project (main, about, culture, investment,
                    consulting, portfolio, contents, FP Original, locale
                    feature.. etc)
                  </li>
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
          ref={(el) => (scrollElement.current[1] = el)}
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
                className={`border border-slate-300 rounded-[10px] p-6 mb-6 hover:shadow-md flex mx-3 ${
                  reverseOrder ? "flex-row-reverse" : "flex-row"
                }`}
                key={index}
              >
                <div className="border rounded-full w-20 h-20  bg-slate-700" />
                <h1
                  className={` text-slate-900 text-lg  sm:text-base lg:text-2xl tracking-tight dark:text-white ${
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
