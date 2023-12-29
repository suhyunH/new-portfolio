"use client"; //this is all client components
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import DotDivider from "../components/DotDivider";
import SectionTitle from "../components/SectionTitle";
import NavItem from "../components/NavItem";
import { Testimonial } from "../constants/testimonial";
import { Project } from "../constants/project";

export default function Home() {
  const navItems = ["About", "Projects", "Testimonials", "Contact"];
  const scrollElement = useRef<any[]>([]);
  const [scrolling, setScrolling] = useState<number | null>();
  const scrollingTop = useCallback(
    async (index: number) => {
      const elmnt = scrollElement;
      if (elmnt?.current) {
        elmnt?.current[index].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    },
    [scrollElement]
  );
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 600;

      const sectionPositions = scrollElement.current.map((el) => {
        return el.offsetTop;
      });
      const currentSectionIndex =
        sectionPositions.filter((el) => el <= scrollY).length - 1;
      if (scrolling !== currentSectionIndex) {
        setScrolling(currentSectionIndex);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolling]);
  return (
    <>
      <nav
        className={`bg-white  top-0 fixed w-full flex items-center  justify-center sm:justify-end p-4 z-50 `}
      >
        <div className="flex items-center space-x-2">
          {navItems.map((navItem, index) => (
            <NavItem
              key={index}
              scrolling={scrolling}
              navItem={navItem}
              number={index}
              scrollingTop={scrollingTop}
            />
          ))}
        </div>
      </nav>

      <header className="h-[100vh] sm:py-48 lg:py-64 flex flex-col items-center justify-center max-w-5xl mx-auto animate-fadeInDown">
        <div className="my-auto text-center animate-fadeInDown space-y-2">
          <h1 className="font-semibold text-2xl sm:text-3xl lg:text-5xl tracking-tight  text-black pb-2">
            Hello,
          </h1>
          <h1 className="font-semibold text-2xl sm:text-3xl lg:text-5xl tracking-tight text-black pb-2">
            I&apos;m <span className=" text-[#2978b5]">Suhyun Han</span>
          </h1>
          <h1 className=" font-semibold text-2xl sm:text-3xl lg:text-5xl tracking-tight text-black pb-8">
            A Front-End Developer
          </h1>
          <div className="flex justify-center lg:space-x-20 space-x-5 mt-10">
            <Image
              src="/react-logo.svg"
              alt="react logo"
              width={50}
              height={50}
            />
            <Image
              src="/nextjs-logo.svg"
              alt="NextJs logo"
              width={60}
              height={50}
            />
            <Image src="/ts-logo.png" alt="ts logo" width={50} height={50} />
            <Image
              src="/graphql-logo.png"
              alt="GraphQL-logo"
              width={50}
              height={50}
            />
          </div>
        </div>
      </header>
      <DotDivider />
      <section
        className="py-20 sm:py-24 lg:py-32 px-[20px] "
        ref={(el) => (scrollElement.current[0] = el)}
      >
        <div className="max-w-3xl  mx-auto ">
          <SectionTitle title="About me 👋" />
          <h1 className="lg:text-lg sm:text-xl  text-gray-800  max-w-5xl mx-auto text-justify">
            Hi, I&apos;m Suhyun Han, a second-year front-end developer.
            <br />
            <br />
            At the first company I joined as an intern, I was in charge of
            front-end development for the main website renewal project. I
            devised a design pattern to facilitate communication with the CM who
            was in charge of design and prevent development confusion, and was
            recognized for my fast work speed and active problem-solving skills,
            so I was hired as a full-time employee just two months after
            joining.
            <br />
            <br />I quickly learned{" "}
            <strong>wordpress, GraphQL, and Hasura </strong> and was responsible
            for the development of the entire website, including backend work. I
            worked on bounce rate improvement and refactoring based on GA
            analysis, and code improvements such as adapter implementation.
            <br />
            <br />
            In the second half of 2022, I participated in a rebranding project
            from the planning stage, improving my communication skills with
            non-developer team members. Based on this experience, in the project
            I joined in 2023, I improved my communication with PMs through
            accurate sharing.
            <br />
            <br />
            Lastly, as a non-major, I am constantly learning and striving to
            improve my skills, including enrolling in an University to acquire
            CS knowledge.
            <br />
            <br />
            Based on these experiences and efforts, I will do my best to create
            better results and achieve the company&apos;s goals. If we work
            together, I am confident that I will be able to contribute to the
            project through smooth collaboration with the team members.
            <br />
            <br />
            If you think i am the right person to work with or have any
            question. Please feel free to{" "}
            <span
              className="font-bold hover:cursor-pointer"
              onClick={() => scrollingTop(3)}
            >
              contact me.
            </span>{" "}
            I look forward to hearing from you. Thank you for your
            consideration.
          </h1>
        </div>
      </section>
      <DotDivider />
      <section
        className="py-20 sm:py-24 lg:py-32 max-w-3xl mx-auto px-[20px]"
        ref={(el) => (scrollElement.current[1] = el)}
      >
        <SectionTitle title="Projects 🗂" />
        <div className="grid gap-12 md:gap-20 ">
          {Project.map((item) => (
            <div className="relative block" key={item.name}>
              <div className="flex-1 p-5">
                <div className="text-center">
                  <p className="font-bold text-2xl">{item.name}</p>
                  <p className="text-gray-600 pt-4">{item.description}</p>
                </div>
                <p className="font-extrabold text-xl text-[#2978b5] text-center py-4">
                  {item.stack}
                </p>
                {/* <div className="mt-6">
                <p className="font-bold text-lg mb-3">What I Have Done</p>
                <ul className="ml-4 list-disc text-gray-600 ">
                  {item.list.map((list, index) => (
                    <li className="text-base" key={index}>
                      {list}
                    </li>
                  ))}
                </ul>
              </div> */}
              </div>
              <Image
                src={item.imageSrc}
                alt={item.imageAlt}
                width={500}
                height={400}
                className="mx-auto"
                priority
              />
            </div>
          ))}
        </div>
      </section>
      <DotDivider />
      <section
        className="pt-20 sm:pt-24 lg:pt-32 max-w-3xl mx-auto px-[20px]"
        ref={(el) => (scrollElement.current[2] = el)}
      >
        <SectionTitle title="Testimonials 📝" />
        {Testimonial.map((item, index) => {
          return (
            <div
              className="border border-slate-300 rounded-lg p-6 mb-6 hover:shadow-md flex mx-3 flex-row"
              key={index}
            >
              <div className="border rounded-full w-2 h-20 bg-slate-700 mt-1" />
              <div className="w-[95%]">
                <h1 className="text-slate-900 text-base sm:text-sm lg:text-lg tracking-tight ml-6  text-justify">
                  {item.testimonial}
                </h1>
                <br />
                <h1 className="ml-6">
                  - {item.name} ({item.position})
                </h1>
              </div>
            </div>
          );
        })}
      </section>
      <section
        className="pt-20 sm:pt-24 lg:pt-32 max-w-5xl mx-auto mb-[200px] mt-[200px] "
        ref={(el) => (scrollElement.current[3] = el)}
      >
        <div className="flex  justify-center space-x-10 lg:space-x-20 mb-[100px]">
          <a href="mailto:tngus5280@gmail.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className=""
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </a>

          <a href="https://github.com/suhyunH" target="blank">
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className=" fill-slate-900 "
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
              ></path>
            </svg>
          </a>
          <a href="https://linkedin.com/in/suhyunH9" target="blank">
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-slate-900 "
            >
              <path
                d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
        </div>
        <p className="text-center"> 2023 suhyunHan - All rights reserved </p>
      </section>
    </>
  );
}
