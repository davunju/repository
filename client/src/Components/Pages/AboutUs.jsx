import { pictures } from "../Home/Hero/data";

const AboutUs = () => {
  return (
    <main className="text-slate-700 w-full lg:w-[980px] mx-auto p-3 mb-10 md:mb-16 relative">
      <div class="absolute inset-0 -z-10 overflow-hidden">
        <svg
          class="absolute left-[max(50%,25rem)] top-0 bottom-0 h-full w-[128rem] -translate-x-1/2 stroke-slate-300 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width="200"
              height="200"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              stroke-width="0"
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            stroke-width="0"
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="mb-5">
        <h1 className="text-4xl font-bold leading-6 mb-5">
          High Court of Tanzania
        </h1>
        <h2
          className="leading-6 text-3xl text-red-500 font-semibold
        "
        >
          Commercial Division
        </h2>
      </div>
      <div className="flex items-start justify-between gap-10 mb-8 md:mb-10">
        <p className="leading-6 text-lg">
          The Commercial Court was officially inaugurated on 15th September,
          1999. The Government of Tanzania endorsed the recommendations in 1997.
          It is a division of the High Court of Tanzania. The difference with
          other High Court Registries is that this court specializes in the
          determination of commercial disputes only.
        </p>
        <img
          src="/assets/gravel.jpg"
          alt=""
          className="w-1/2 h-auto rounded-xl"
        />
      </div>
      <div className="mb-5 relative text-lg">
        <h2 className="text-3xl font-semibold leading-6 mb-5">
          Our <span className="font-bold text-red-500">Leadership</span>
        </h2>
        <p className="w-full lg:w-[70%] mb-8">
          They're leaders who are passionate about{" "}
          <span className="font-medium text-red-500">Legal</span> and{" "}
          <span className="font-medium text-sky-500">Justice</span>, leading the{" "}
          {""}
          <span className="font-semibold">Commercial Division</span> with their
          heart.
        </p>
        <div className="grid grid-cols-3 gap-5 place-items-center w-full">
          {pictures.map((picture) => (
            <div key={picture.id} className="w-full">
              <img
                src={picture.url}
                alt=""
                className="mb-3 rounded-lg w-full h-64"
              />
              <div>
                <h1 className="font-medium">{picture.name}</h1>
                <h2>{picture.position}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mb-10">
        <h2 className="text-3xl font-semibold mb-4">
          Historical <span className="font-bold text-red-500">Background</span>
        </h2>

        <div className="text-lg">
          <div className="flex items-center justify-start gap-5 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              className="size-20 fill-sky-500"
            >
              <path d="M384 32l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L398.4 96c-5.2 25.8-22.9 47.1-46.4 57.3L352 448l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0-192 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0 0-294.7c-23.5-10.3-41.2-31.6-46.4-57.3L128 96c-17.7 0-32-14.3-32-32s14.3-32 32-32l128 0c14.6-19.4 37.8-32 64-32s49.4 12.6 64 32zm55.6 288l144.9 0L512 195.8 439.6 320zM512 416c-62.9 0-115.2-34-126-78.9c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C627.2 382 574.9 416 512 416zM126.8 195.8L54.4 320l144.9 0L126.8 195.8zM.9 337.1c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C242 382 189.7 416 126.8 416S11.7 382 .9 337.1z" />
            </svg>
            <p className="">
              In 1993 a Legal Sector Task Force was established by the
              government to look at complements to the legal system that would
              provide a positive climate for investment and economic
              development. In connection with the far reaching economic reform
              programme by the government, it was recognized that a well
              functioning legal sector was a prerequisite for the success of the
              reforms.
            </p>
          </div>

          <div className="flex items-center justify-start gap-5 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="size-20 fill-sky-500"
            >
              <path d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32L0 64 0 368 0 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30l0-247.7c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48l0-16z" />
            </svg>
            <p>
              The proposal recommended a higher degree of specialization in the
              judiciary with the establishment of a commercial court within the
              Civil Division of the High Court. The Government of Tanzania
              endorsed the recommendations in 1997. The Commercial Court was
              officially inaugurated on 15th September, 1999. It is a division
              of the High Court of Tanzania. The difference with other High
              Court Registries is that this court specializes in the
              determination of commercial disputes only.
            </p>
          </div>

          <div className="flex items-center justify-start gap-5 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              className="size-24 fill-sky-500"
            >
              <path d="M320.7 352c8.1-89.7 83.5-160 175.3-160c8.9 0 17.6 .7 26.1 1.9L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1l32 0 0 69.7c-.1 .9-.1 1.8-.1 2.8l0 112c0 22.1 17.9 40 40 40l16 0c1.2 0 2.4-.1 3.6-.2c1.5 .1 3 .2 4.5 .2l31.9 0 24 0c22.1 0 40-17.9 40-40l0-24 0-64c0-17.7 14.3-32 32-32l64 0 .7 0zM640 368a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L480 385.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0z" />
            </svg>
            <p>
              The court commenced its business in the rented premises at Upanga
              Maweni Street. Later, moved into its own building on 27th and 28th
              of January, 2001 after the building was refurbished by DANIDA. The
              building was officially inaugurated on 11th May, 2001 by his
              excellency president Benjamin William Mkapa. Currently, it is
              based in Dar es Salaam with sub-registries in Arusha and Mwanza.
              Plans are underway to open more sub-registries in other High Court
              Zonal Centres, such as, Mbeya, Dodoma and Tanga.
            </p>
          </div>
        </div>
      </div>

      <div className="text-lg flex items-start w-full justify-start gap-5">
        <div className="w-full">
          <h1 className="text-xl mb-3 font-medium text-red-500">Vision</h1>
          <p>
            To carry out the administration of Justice to the general public in
            dealing with disposal of cases effectively and efficiently
          </p>
        </div>
        <div className="w-full">
          <h1 className="text-xl mb-3 font-medium text-red-500">Mission</h1>
          <p>Timely and Accessible Justice for All</p>
        </div>
        <div className="w-full">
          <h1 className="text-xl mb-3 font-medium text-red-500">Core Values</h1>
          <ul>
            <li>Equality (before the law)</li>
            <li>Impartiality</li>
            <li>Independence of decision-making</li>
            <li>Competence and professionalism</li>
            <li>Integrity</li>
            <li>Accessibility</li>
            <li>Timeliness</li>
            <li>Certainty and predictability of decisions</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
