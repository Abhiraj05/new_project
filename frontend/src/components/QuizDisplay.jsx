import React from "react";

const QuizDisplay = ({ quiz }) => {

  if (!quiz || !Array.isArray(quiz) || quiz.length === 0) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <p className="text-gray-500 text-center">No quiz data available</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-200 text-cyan-500 p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-bold mb-6 text-primary">Generated Quiz</h3>

      {quiz.map((q, index) => (
        <div key={index} className="mb-6 border-b pb-4">
          <p className="font-semibold mb-2 text-gray-700">
            {index + 1}. {q.question}
          </p>

          <ul className="space-y-1 ml-4 list-disc text-gray-700">
            {Object.keys(q)
              .filter((key) => key.toLowerCase().startsWith("option"))
              .map((opt, i) => (
                <li key={i}>{q[opt]}</li>
              ))}
          </ul>

          <p className="text-sm text-green-600 mt-2">
            ✅ Correct: {q.correct_answer}
          </p>
        </div>
      ))}
    </div>
  );
};

export default QuizDisplay;
