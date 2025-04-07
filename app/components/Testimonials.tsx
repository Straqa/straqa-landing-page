import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function Testimonials() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const container = containerRef.current;

      let tl = gsap.timeline({ defaults: { ease: "none" } });

      tl.to(container, {
        x: "-80%",
        duration: 15,
        repeat: -1,
        yoyo: true,
      });
    },
    { scope: containerRef }
  );

  const ReviewCard = ({
    name,
    role,
    image,
    review,
  }: {
    name: string;
    role: string;
    image: string;
    review: string;
  }) => {
    return (
      <div className="w-[75vw] md:w-[500px]" data-aos="fade-up">
        <div>
          <div className="w-full p-[35px] bg-[#F7F9FC] hover:bg-[#008AFF] space-y-5 text-[#222D39] hover:text-white duration-300 ease-in-out rounded-md">
            <img src="/icons/quote.svg" alt="" />
            <p className=" ">{review}</p>
          </div>
        </div>
        <div className="px-[20px] flex items-center gap-3 mt-5">
          <img
            src={image}
            alt=""
            className="h-[35px] w-[35px] rounded-full object-cover"
          />
          <div>
            <h4 className="text-lg md:text-xl font-semibold text-[#222D39]">
              {name}
            </h4>
            <p className="text-[#008AFF] font-medium">{role}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full bg-white py-20">
      <div className="max-w-[1200px] mx-auto">
        <div
          className="flex items-end gap-2 justify-between px-[20px] md:px-[50px]"
          data-aos="fade-up"
        >
          <div className="w-full md:max-w-[500px] text-center md:text-left">
            <p className="font-semibold text-[#008AFF] capitalize">
              TESTIMONIALS
            </p>
            <h3 className="text-2xl md:text-4xl font-semibold mt-2 md:mt-5 text-[#222D39]">
              See What Others Have to Say About Us
            </h3>
          </div>
          {/* <div className="hidden md:flex items-center gap-4">
                        <div className="h-[50px] w-[50px] flex items-center justify-center text-white bg-[#020C14] opacity-30 rounded-md cursor-not-allowed">
                            <FaArrowLeftLong size={18} />
                        </div>
                        <div className="h-[50px] w-[50px] flex items-center justify-center text-white bg-[#020C14] rounded-md cursor-pointer">
                            <FaArrowRightLong size={18} />
                        </div>
                    </div> */}
        </div>
        <div className="w-full overflow-x-hidden overflow-y-hidden px-[20px] md:px-[50px] pb-5">
          <div
            className="w-fit flex items-center flex-nowrap gap-5 mt-10 pt-5"
            ref={containerRef}
          >
            <ReviewCard
              name="Stephen"
              role="Business Owner"
              image="/images/portraits/user-2.jpeg"
              review="Straqa streamlined our data and payment processes, saving us time and uncovering valuable insights!"
            />
            <ReviewCard
              name="David"
              role="Business Owner"
              image="/images/portraits/user-1.jpeg"
              review="Straqa streamlined our data and payment processes, saving us time and uncovering valuable insights!"
            />
            <ReviewCard
              name="Cynthia"
              role="Business Owner"
              image="/images/portraits/cynthia.png"
              review="Straqa streamlined our data and payment processes, saving us time and uncovering valuable insights!"
            />

            <ReviewCard
              name="Joshua Ofor"
              role="Licensees, TedxMambillastreet"
              image="/images/portraits/joshua.jpeg"
              review="We used Straqa for our Ticketing, it was a smooth and effortless process. Our money was disbursed on time and the Straqa system was responsive and user friendly"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
