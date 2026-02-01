import React, { use, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "motion/react";
import Loader from "./Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWandMagicSparkles,
  faCircleCheck,
  faBolt,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const MainContent = () => {
  const navigate = useNavigate();
  const [loading, setloadervalue] = useState(false);
  const activateLoader = () => {
    setloadervalue(true);
    setTimeout(() => {
      setloadervalue(false);
      navigate("/generatequiz");
    }, 1500);
  };
  return (
    <>
      {loading && <Loader />}
      <main id="main-content">
        <section
          id="hero-section"
          className="bg-gradient-to-br from-primary via-blue-600 to-accent h-[740px] flex items-center"
        >
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.h1
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:text-5xl text-4xl font-bold text-white mb-6 sm:flex-wrap"
            >
              Create Quizzes{" "}
              <span className="text-[#FE9D1B]">
                <Typewriter
                  words={["Instantly with AI", "In Seconds", "One Click Away"]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </motion.h1>
            <motion.p
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto sm:flex-wrap"
            >
              Turn any topic, text, or document into an interactive quiz in
              seconds. Perfect for educators, students, and professionals.
            </motion.p>
            <motion.button
              initial={{ scale: 0.7, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="hover:bg-white hover:border-cyan-500 hover:border  hover:rounded-lg  hover:text-cyan-500 bg-accent border border-cyan-500 bg-cyan-500 text-white px-8 py-4 rounded-lg md:text-[17px] text-[16px] font-semibold transition-colors shadow-lg"
              onClick={activateLoader}
            >
              <FontAwesomeIcon icon={faWandMagicSparkles} className="mr-2" />
              Generate Your Quiz Now
            </motion.button>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.25,
                    delayChildren: 0.8,
                  },
                },
              }}
              className="mt-12 flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-8 text-blue-100 text-center"
            >
              {[faCircleCheck, faBolt, faStar].map((icon, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { scale: 0.6, opacity: 0 },
                    visible: { scale: 1, opacity: 1 },
                  }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center"
                >
                  <FontAwesomeIcon icon={icon} className="mr-2" />
                  <span>
                    {icon === faCircleCheck && "Sign Up to Get Started"}
                    {icon === faBolt && "Instant Generation"}
                    {icon === faStar && "AI-Powered"}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MainContent;
