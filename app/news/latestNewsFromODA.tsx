export default function LatestNewsGrid() {
  return (
    <div className="flex flex-col mt-[160px] mx-[200px]">
      <div className="flex flex-row justify-start text-[32px]">
        Latest News from ODA
      </div>
      <div className="grid grid-cols-2">
        <div>
          <img src="/pages/news/news1.png" alt="" />
          <p className="font-medium">
            ODA Achieves 200+ Happy Clients Milestone!
          </p>
          <p className="text-titleDescription">
            One Direction Australia proudly announces reaching over 200
            satisfied clients, a testament to their exceptional commercial
            cleaning services.
          </p>
          <div className="mt-[32px] flex flex-row">
            <a href="#" className="underline text-blue-600">
              Read More
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="30"
              viewBox="0 0 29 30"
              fill="none"
            >
              <path
                d="M19.151 17.057L19.151 9.90344L11.9974 9.90344"
                stroke="#79B3E1"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.13361 19.9208L19.0508 10.0037"
                stroke="#79B3E1"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div>
          <img src="/pages/news/news2.png" alt="" />
          <p className="font-medium">
            ODA Launches Eco-Friendly Cleaning Services{" "}
          </p>
          <p className="text-titleDescription">
            Committed to sustainability, ODA introduces eco-friendly cleaning
            solutions for businesses, reducing environmental impact.
          </p>
          <div className="mt-[32px] flex flex-row">
            <a href="#" className="underline text-blue-600">
              Read More
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="30"
              viewBox="0 0 29 30"
              fill="none"
            >
              <path
                d="M19.151 17.057L19.151 9.90344L11.9974 9.90344"
                stroke="#79B3E1"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.13361 19.9208L19.0508 10.0037"
                stroke="#79B3E1"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
