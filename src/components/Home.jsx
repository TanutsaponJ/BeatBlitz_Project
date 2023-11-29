import img from "../assets/hero.png";
import Button from "../layout/Button";

function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:flex-row items-center lg:justify-between lg:px-32 px-5">
      <div className="w-full lg:w-2/4 space-y-4 mt-20">
        <h1 className="text-5xl font-semibold leading-tight">
          Discover Next-Level Audio Experiences
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro cum
          quam dolorem, molestias dolorum iure perspiciatis cupiditate
          aspernatur excepturi eius.
        </p>
        <Button title="Order Now" />
      </div>

      <div className="mt-10">
        <img src={img} alt="img" />
      </div>
    </div>
  );
}

export default Home;
