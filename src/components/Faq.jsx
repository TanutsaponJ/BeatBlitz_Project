import { useState } from "react";
import img from "../assets/faq.png";
import FaqCard from "../layout/FaqCard";

function Faq() {
  const [open, setOpen] = useState(false);

  const toggle = (i) => {
    if (open === i) {
      return setOpen(null);
    }

    setOpen(i);
  };

  const accordionData = [
    {
      title: "This is first question",
      dec: " Lorem ipsum dolor sit amet consectetur.",
    },
    {
      title: "This is first question",
      dec: " Lorem ipsum dolor sit amet consectetur.",
    },
    {
      title: "This is first question",
      dec: " Lorem ipsum dolor sit amet consectetur.",
    },
    {
      title: "This is first question",
      dec: " Lorem ipsum dolor sit amet consectetur.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold mt-24 text-center lg:text-start">
        FAQs
      </h1>
      <h3 className="text-xl font-medium mt-4">What people Asks From Us</h3>

      <div className="flex flex-col text-xl font-semibold lg:flex-row items-center justify-center">
        <div className="w-full lg:w-3/4">
          <img src={img} alt="FAQs Image" />
        </div>
        <section className="w-full grid place-items-center">
          <div className="lg:px-[40px] max-w-[800px] -mt-10">
            {accordionData.map((data, i) => {
              return (
                <FaqCard
                  key={i}
                  open={i === open}
                  title={data.title}
                  dec={data.dec}
                  toggle={() => toggle(i)}
                />
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Faq;
