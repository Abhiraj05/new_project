import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="bg-white min-h-screen flex flex-col items-center justify-center px-6 pt-15 md:py-12">
        <h1 className="md:text-4xl text-3xl font-bold text-gray-900 mb-6 text-center">
          About AI Quiz Generator
        </h1>
        <p className="flex-wrap text-[17px] md:text-lg text-gray-700 max-w-3xl text-center leading-relaxed ">
          The{" "}
          <span className="font-semibold text-blue-600">
            AI Quiz Generator{" "}
          </span>
          is an intelligent platform that allows users to effortlessly create
          quizzes on any topic using the power of Artificial Intelligence. By
          leveraging advanced natural language processing, the system
          automatically generates well-structured and accurate questions, saving
          users time and effort.
        </p>
        <p className="flex-wrap text-[17px] md:text-lg text-gray-700 max-w-3xl text-center leading-relaxed mt-4 ">
          Whether you’re a student preparing for exams, a teacher designing
          assessments, or just someone who loves testing knowledge — this tool
          helps you generate, customize, and take quizzes instantly. Simply
          enter a topic or description, and let the AI do the rest!
        </p>
        <p className=" flex-wrap text-[15px] md:text-md text-gray-600 max-w-2xl text-center mt-6 italic">
          Our goal is to make learning interactive, efficient, and fun — one
          quiz at a time.
        </p>
      </div>
      <Footer></Footer>
    </>
  );
};
export default About;
