import { Link } from "react-scroll";

function Navbar() {
  return (
    <div>
      <div>
        <div>
          <div>
            <Link>BeatBlitz</Link>
          </div>

          <nav>
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Home
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
