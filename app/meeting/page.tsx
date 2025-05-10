"use client";


import Calendly from "./calendly";
import ShowcaseNavbar from "@/components/showcase-navbar";
import { PiCheckCircle } from "react-icons/pi";
import { motion } from "framer-motion";

const checkItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const Meeting = () => {



  return (
    <div className="
    
    flex flex-col  w-full  

     overflow-clip inset-0 -z-10 
  bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]
    
    ">
      <ShowcaseNavbar />
      <div className="md:px-0 px-6 xl:w-4/5 2xl:w-[68%] justify-between md:mt-14 md:flex mx-auto  ">
        <div className="md:w-2/5">
          <h1 className="text-4xl font-semibold pt-10   ">Let&apos;s Meet</h1>
          <p className="text-lg text-gray-500 py-4">
            We are always excited to meet new people and discuss new projects.
            Please feel free to book a meeting with us.
          </p>

          {[
                {
                  title: "Marketing Strategy Development",
                  description:
                    "Craft a winning marketing strategy tailored to your business goals and target audience, ensuring maximum reach and engagement.",
                },
                {
                  title: "Digital Advertising Solutions",
                  description:
                    "Leverage cutting-edge digital advertising techniques to boost brand visibility, drive traffic, and generate leads for your business.",
                },
                {
                  title: "Social Media Management",
                  description:
                    "Elevate your brand's presence on social media platforms with expert content creation, scheduling, and performance analysis.",
                },
                {
                  title: "SEO Optimization",
                  description:
                    "Improve your website’s search engine rankings with our comprehensive SEO services, driving organic traffic and increasing conversions.",
                },
                {
                  title: "Analytics & Performance Tracking",
                  description:
                    "Gain valuable insights into your marketing campaigns through advanced analytics tools, helping you make data-driven decisions.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={checkItemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 1.8 }}
                  className="flex gap-x-4 py-4"
                >
                  <PiCheckCircle className=" rounded-md text-[#3d80d7] text-2xl flex-shrink-0" />
                  <ul>
                    <h3 className="text-lg font-bold text-gray-700">
                      {item.title}
                    </h3>
                    <div className="text-gray-400">{item.description}</div>
                  </ul>
                </motion.div>
              ))}
        </div>

    <div className="md:w-1/2">
      <Calendly />
      </div>
      </div>
    </div>
  );
};

export default Meeting;
