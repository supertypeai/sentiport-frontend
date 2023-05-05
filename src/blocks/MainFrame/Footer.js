import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer items-center p-4 text-neutral-content">
      <div className="items-center grid-flow-col">
        <a href="https://supertype.ai">
          <Image
            src="/supertype.svg"
            alt="Supertype Logo"
            width={100}
            height={24}
            priority
          />
        </a>
        <p>Copyright © 2023 - All right reserved</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <div>
          Follow our socials:
        </div>
        <a href="https://www.youtube.com/@SamuelChan">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current link link-hover"
          >
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
