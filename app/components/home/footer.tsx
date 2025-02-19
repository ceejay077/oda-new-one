import React from "react";
import FooterSocial from "./sub-components/footerSocial";
import { Montserrat, Inter } from "next/font/google";

const montserratfont = Montserrat({
  subsets: ["latin"],
  weight: "500",
});

const interfont = Inter({
  subsets: ["latin"],
  weight: "400",
});

export default function Footer() {
  return (
    <footer className="w-full max-w-full md:px-[200px] pt-20  border-t-2 bg-CTRbg h-auto sm:h-auto px-10">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-6  mt-8">
        <div className="sm:col-span-2">
          <a href="#" className="inline-flex items-center">
            <span className={`text-xl font-bold tracking-wide text-white ${montserratfont.className}`}>
              Get in touch with us
            </span>
          </a>
          <div className="flex justify-between items-center mb-6 mt-6">
            <div className={`text-white divide-y ${interfont.className} leading-28`}>Your E-Mail Address</div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19" fill="none">
              <path d="M3.07573 1.62207L19.6816 1.62207V15.8443" stroke="white" stroke-width="3"/>
              <path d="M19.6816 1.62207L1 17.6221" stroke="white" stroke-width="3"/>
            </svg>
            </div>
          </div>
          
          <div className="mt-6  border-t">
            <p className={`text-sm text-white mt-5 ${interfont.className} leading-28 opacity-6`}>
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
          <p className={`text-xl font-bold tracking-wide text-white ${montserratfont.className}`}>
            Quick Links
          </p>
          <a href="#" className={`${interfont.className} opacity-6 text-[18px] leading-40` }>About Us</a>
          <a href="#" className={`${interfont.className} opacity-6 text-[18px] leading-40`}>Services</a>
          <a href="#" className={`${interfont.className} opacity-6 text-[18px] leading-40`}>Contact Us</a>
          <a href="#" className={`${interfont.className} opacity-6 text-[18px] leading-40`}>Certifications & Awards</a>
        </div>
        <div className="flex flex-col gap-2 text-sm text-white lg:ml-10">
          <p className={`text-xl font-bold tracking-wide text-white ${montserratfont.className}`}>
            Information
          </p>
          <a href="#" className={`${interfont.className} opacity-6 text-[18px] leading-40`}>FAQ</a>
          <a href="#" className={`${interfont.className} opacity-6 text-[18px] leading-40`}>News</a>
        </div>
        <div className="flex flex-col gap-2 text-sm text-white">
          <p className={`text-xl font-bold tracking-wide text-white ${montserratfont.className}`}>
            Company
          </p>
          <a href="#" className={`${interfont.className} opacity-6 text-[18px] leading-40`}>About Us</a>
          <a href="#" className={`${interfont.className} opacity-6 text-[18px] leading-40`}>Careers</a>
          <a href="#" className={`${interfont.className} opacity-6 text-[18px] leading-40`}>Contact Us</a>
        </div>
      </div>

      {/* Footer bottom section */}
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 lg:flex-row ">
        <div>
          <FooterSocial />
        </div>
        <div className="w-full sm:w-auto">
          <img
            src="/images/oda-white.png"
            alt=""
            className="w-full sm:w-auto"
          />
        </div>
      </div>

      {/* Footer legal and policies section */}
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className={`text-sm text-white ${interfont.className} opacity-6`}>© 2024 All rights reserved</p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="#"
              className={`text-sm text-white ${interfont.className} opacity-6`}
            >
              Privacy &amp; Cookies Policy
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`text-sm text-white ${interfont.className} opacity-6`}
            >
              Disclaimer
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
