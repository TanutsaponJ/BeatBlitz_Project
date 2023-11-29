import { Link } from "react-scroll";

function Footer() {
  return (
    <div className="bg-backgroundColor text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold text-xl pb-4">BeatBlitz</h1>
          <p className="text-sm">
            Step into a world of sonic excellence. Our headsets combine sleek
            design with advanced technology fro truly immersive auditory
            journey.
          </p>
        </div>

        <div>
          <h1 className="font-semibold text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className="flex flex-col gap-2">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              About
            </Link>
            <Link
              to="features"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Features
            </Link>
            <Link
              to="product"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Product
            </Link>
          </nav>
        </div>
        <div>
          <h1 className="font-semibold text-xl pb-4 pt-5 md:pt-0">Features</h1>
          <nav className="flex flex-col gap-2">
            <Link
              to="features"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              User Friendly
            </Link>
            <Link
              to="features"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Latest Technology
            </Link>
          </nav>
        </div>

        <div>
          <h1 className="font-semibold text-xl pb-4 pt-5 md:pt-0">
            Contact Us
          </h1>
          <nav className="flex flex-col gap-2">
            <Link
              to="/"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              BeatBlitz@gmail.com
            </Link>

            <Link
              to="features"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              +99 957 623 2213
            </Link>

            <Link
              to="features"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Social media
            </Link>
          </nav>
        </div>
      </div>
      <div className="text-center py-4">
        @copyright developer by
        <span className="text-brightColor">Tanutsapon Jinaongkan</span>
        All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
