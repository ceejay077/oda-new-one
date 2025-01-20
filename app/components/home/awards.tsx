import React from "react";
import Image from "next/image";

export default function Awards() {
  return (
    <div
      style={{
        marginLeft: "200px",
        marginRight: "200px",
        marginTop: "100px",
      }}
    >
      <div className="text-center ">
        <h2 className="text-3xl f text-gray-900 dark:text-sectionTitle sm:text-4xl xl:text-5xl">
          Awards & Certifications
        </h2>
        <p
          className="max-w-4xl mx-auto mt-5 text-base font-normal text-gray-600 dark:text-titleDescription"
          style={{ marginBottom: "48px" }}
        >
          Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.Horem ipsum
          dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
          velit interdum, ac aliquet odio mattis.
        </p>
      </div>
      <div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 justify-center place-items-center">
          <div>
            <Image
              src="/images/homePage/awards.png"
              alt="industrial cleaning"
              width={186}
              height={192}
            />
          </div>
          <div>
            <Image
              src="/images/homePage/awards.png"
              alt="industrial cleaning"
              width={186}
              height={192}
            />
          </div>
          <div>
            <Image
              src="/images/homePage/awards.png"
              alt="industrial cleaning"
              width={186}
              height={192}
            />
          </div>
          <div>
            <Image
              src="/images/homePage/awards.png"
              alt="industrial cleaning"
              width={186}
              height={192}
            />
          </div>
          <div>
            <Image
              src="/images/homePage/awards.png"
              alt="industrial cleaning"
              width={186}
              height={192}
            />
          </div>
          <div>
            <Image
              src="/images/homePage/awards.png"
              alt="industrial cleaning"
              width={186}
              height={192}
            />
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}
      <div
        className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-2 justify-center place-items-center "
        style={{ marginBottom: "160px" }}
      >
        <div>
          <Image
            src="/images/homePage/awards/CGU.png"
            alt="industrial cleaning"
            width={100}
            height={100}
          />
        </div>
        <div>
          <Image
            src="/images/homePage/awards/BCert_ISO_Logo.png"
            alt="industrial cleaning"
            width={100}
            height={100}
          />
        </div>
        <div>
          <Image
            src="/images/homePage/awards/Bcert-HACCP.png"
            alt="industrial cleaning"
            width={100}
            height={100}
          />
        </div>
        <div>
          <Image
            src="/images/homePage/awards/EML.png"
            alt="industrial cleaning"
            width={100}
            height={100}
          />
        </div>
        <div>
          <Image
            src="/images/homePage/awards/IMS-Logo.png"
            alt="industrial cleaning"
            width={100}
            height={100}
          />
        </div>
        <div>
          <Image
            src="/images/homePage/awards/JASANZ-transparent-RGB-300x300.png"
            alt="industrial cleaning"
            width={100}
            height={100}
          />
        </div>
        <div>
          <Image
            src="/images/homePage/awards/Labour.png"
            alt="industrial cleaning"
            width={100}
            height={100}
          />
        </div>
        <div>
          <Image
            src="/images/homePage/awards/LOGO-ISO-14001.png"
            alt="industrial cleaning"
            width={100}
            height={100}
          />
        </div>
        <div>
          <Image
            src="/images/homePage/awards/QZHO8328.png"
            alt="industrial cleaning"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}
