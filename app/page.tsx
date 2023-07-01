export default function Home() {
  return (
    <>
      <nav></nav>
      <div className="relative max-w-5xl mx-auto ">
        <header className="pt-20 sm:pt-24 lg:pt-32">
          <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white pb-5">
            Hi, Im suhyun Han
          </h1>
          <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
            A Front-end Developer
          </h1>
        </header>
        <section className="pt-20 sm:pt-24 lg:pt-32">
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
              <ul>
                <li className=" font-extrabold">
                  TypeScript, Next.js, MUI, REST API, AWS
                </li>
                <li>new Career Report</li>
                <li>B2B strength/career/leadership report</li>
              </ul>
            </div>
          </div>
          <div className="relative sm:block md:flex">
            <div className="w-[400px] h-[500px] bg-slate-600 flex-1 m-auto" />
            <div className="flex-1 p-5">
              <div className="text-center mb-6">
                <p className="font-bold text-2xl">Futureplay.co</p>
                <p className="">Homepage of a VC company called Futureplay.</p>
              </div>
              <ul>
                <li className=" font-extrabold">
                  TypeScript, Next.js, Bootstrap, GraphQL, AWS, wordpress,
                  Hasura
                </li>
                <li>
                  Website Redesign Project (main, about, culture, investment,
                  consulting, portfolio, contents, FP Original, locale feature..
                  etc)
                </li>
                <li>Playbook landing page</li>
                <li>Membership website (canceled)</li>
                <li>more detail (노션 페이지 이동)</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="pt-20 sm:pt-24 lg:pt-32">
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
