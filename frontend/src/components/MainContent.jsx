import React, { use, useState } from "react";
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
            <h1 className="md:text-5xl text-4xl font-bold text-white mb-6 sm:flex-wrap">
              Create Quizzes Instantly with AI
            </h1>
            <p className="md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto sm:flex-wrap">
              Turn any topic, text, or document into an interactive quiz in
              seconds. Perfect for educators, students, and professionals.
            </p>
            <button
              className="hover:bg-white hover:border-cyan-500 hover:border  hover:rounded-lg  hover:text-cyan-500 bg-accent border border-cyan-500 bg-cyan-500 text-white px-8 py-4 rounded-lg md:text-lg font-semibold transition-colors shadow-lg"
              onClick={activateLoader}
            >
              <FontAwesomeIcon icon={faWandMagicSparkles} className="mr-2" />
              Generate Your Quiz Now
            </button>
            <div className="mt-12 flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-8 text-blue-100 text-center">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faCircleCheck} className="mr-2" />
                <span>Sign Up to Get Started</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faBolt} className="mr-2" />
                <span>Instant Generation</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faStar} className="mr-2" />
                <span>AI-Powered</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MainContent;
