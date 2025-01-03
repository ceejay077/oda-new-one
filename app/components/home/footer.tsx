import React from "react";
import FooterSocial from "./sub-components/footerSocial";

export default function Footer() {
  return (
    <footer className="px-3 pt-4 lg:px-9 border-t-2 bg-CTRbg h-[557px]">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-6 mx-32 mt-8">
        <div className="sm:col-span-2">
          <a href="#" className="inline-flex items-center">
            <span className=" text-xl font-bold tracking-wide text-white">
              Get in touch with us
            </span>
          </a>
          <div className="text-white mt-6 divide-y">Your E-Mail Address</div>
          <div className="mt-6 lg:max-w-xl border-t ">
            <p className="text-sm text-white mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              felis mi, faucibus dignissim lorem id, imperdiet interdum mauris.
              Vestibulum ultrices sed libero non porta. Vivamus malesuada urna
              eu nibh malesuada, non finibus massa laoreet. Nunc nisi velit,
              feugiat a semper quis, pulvinar id libero. Vivamus mi diam,
              consectetur non orci ut, tincidunt pretium justo. In vehicula
              porta molestie. Suspendisse potenti.
            </p>
          </div>
        </div>
        <div></div>
        <div className="flex flex-col gap-2 text-sm text-white">
          <p className="text-base font-bold tracking-wide text-white">
            Quick Links
          </p>
          <a href="#">About Us</a>
          <a href="#">Services</a>
          <a href="#">Contact Us</a>
          <a href="#">Certifications & Awards</a>
        </div>
        <div className="flex flex-col gap-2 text-sm text-white">
          <p className="text-base font-bold tracking-wide text-white">
            Information
          </p>
          <a href="#">FAQ</a>
          <a href="#">News</a>
        </div>
        <div className="flex flex-col gap-2 text-sm text-white">
          <p className="text-base font-bold tracking-wide text-white">
            Company
          </p>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Contact Us</a>
        </div>

        {/* <div>
          <p className="text-base font-bold tracking-wide text-white">
            COMPANY IS ALSO AVAILABLE ON
          </p>
          <div className="flex items-center gap-1 px-2">
            <a href="#" className="w-full min-w-xl">
              <img
                src="https://mcqmate.com/public/images/icons/playstore.svg"
                alt="Playstore Button"
                className="h-10"
              />
            </a>
            <a
              className="w-full min-w-xl"
              href="https://www.youtube.com/channel/UCo8tEi6SrGFP8XG9O0ljFgA"
            >
              <img
                src="https://mcqmate.com/public/images/icons/youtube.svg"
                alt="Youtube Button"
                className="h-28"
              />
            </a>
          </div>
          <p className="text-base font-bold tracking-wide text-white">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 text-white">Email:</p>
            <a href="#" title="send email">
              admin@company.com
            </a>
          </div>
        </div> */}
      </div>

      {/* ---------------------------------------------------------------------------------------------------- */}

      <div className="flex flex-col-reverse justify-between pt-5 pb-10  lg:flex-row mx-32">
        <div>
          <FooterSocial />
        </div>
        <div>
          <img src="/images/oda-white.png" alt="" />
        </div>
      </div>

      {/* ---------------------------------------------------------------------------------------------------- */}

      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row mx-32">
        <p className="text-sm text-gray-600">© 2024 All rights reserved</p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="#"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Privacy &amp; Cookies Policy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Disclaimer
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
