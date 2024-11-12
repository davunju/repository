const Footer = () => {
  const thisYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-red-950 bg-blend-multiply bg-paper bg-cover bg-center text-slate-50">
      <div className=" ">
        <div className="w-full mx-auto md:flex justify-center flex-col md:flex-row gap-5 lg:gap-10 md:py-14 py-5 px-5 text-center md:text-start">
          <div className="mb-5">
            <h1 className="text-xl underline underline-offset-4 mb-3 font-semibold">
              Contact Us
            </h1>
            <address className="mb-3 not-italic">
              High Court Commercial Division <br /> Barabara ya Kivukoni/Luthuli{" "}
              <br />
              P.O. Box. 12533 Dar Es Salaam
            </address>
            <div className="flex justify-center md:justify-start gap-2 items-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="size-5 fill-slate-50"
              >
                <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
              </svg>
              <a
                href="mailto:comcourt@judiciary.go.tz"
                className="hover:text-sky-500 hover:underline hover:underline-offset-4"
              >
                <p>comcourt@judiciary.go.tz</p>
              </a>
            </div>
            <div className="flex justify-center md:justify-start gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="size-5 fill-slate-50"
              >
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>
              <a
                href="tel:+255 124371"
                className="hover:text-sky-500 hover:underline hover:underline-offset-4"
              >
                <p>+255 124371</p>
              </a>
            </div>
          </div>
          <div className="mb-5">
            <h1 className="text-xl underline underline-offset-4 mb-3 font-semibold">
              Subscribe for alerts
            </h1>
            <p className="mb-2">
              Be the first one to get our news <br /> and anouncements by
              subscribing <br />
              to our newsletter.
            </p>
            <form action="" className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="size-5 fill-slate-400 absolute top-3 left-2 max-[760px]:hidden"
              >
                <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
              </svg>
              <input
                type="email"
                placeholder="Email"
                className="block mb-3 p-2 md:w-64 w-10/12 mx-auto md:mx-0 md:indent-6 outline-none text-slate-400"
              />
              <button className="block bg-sky-500 md:w-40 w-10/12 mx-auto md:mx-0 p-2 text-xl text-slate-50 hover:bg-orange-400">
                Subscribe
              </button>
            </form>
          </div>
          <div>
            <h1 className="text-xl underline underline-offset-4 mb-5 font-semibold">
              Follow Us
            </h1>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                <a
                  href="https://www.facebook.com/Mahakamayatanzania/"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="size-6 cursor-pointer fill-slate-50"
                  >
                    <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/judiciarytanzania/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="size-6 cursor-pointer fill-slate-50"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/judiciarytz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="size-6 fill-slate-50 cursor-pointer"
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCIo5RlJAAAPU646tJH6y4pQ/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className="size-6 cursor-pointer fill-slate-50"
                  >
                    <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                  </svg>
                </a>
                <a
                  href="https://jmap.judiciary.go.tz/court-details/3c0c242e-497c-4a5a-b150-ecc847415428"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="size-6 cursor-pointer fill-slate-50"
                  >
                    <path d="M256 0c17.7 0 32 14.3 32 32l0 34.7C368.4 80.1 431.9 143.6 445.3 224l34.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-34.7 0C431.9 368.4 368.4 431.9 288 445.3l0 34.7c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-34.7C143.6 431.9 80.1 368.4 66.7 288L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l34.7 0C80.1 143.6 143.6 80.1 224 66.7L224 32c0-17.7 14.3-32 32-32zM128 256a128 128 0 1 0 256 0 128 128 0 1 0 -256 0zm128-80a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
                  </svg>
                </a>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7923.230382543851!2d39.29075958853835!3d-6.816569661564156!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4b19c229457f%3A0x644cc50a095c165c!2sHigh%20Court%20of%20Tanzania%20Commercial%20Division!5e0!3m2!1sen!2stz!4v1728543481874!5m2!1sen!2stz"
                allowfullscreen=""
                height="200"
                width="200"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="rounded-md w-full mx-auto"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-1 p-4 text-sm md:text-base border-t border-slate-50 bg-red-950">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="size-4 fill-slate-50"
        >
          <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z" />
        </svg>
        <p> JoT {thisYear}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
