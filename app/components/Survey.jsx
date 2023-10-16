"use client";

import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const Survey = ({ questions, options, onSubmit }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));

  const handleSelectChange = (e) => {
    const { value } = e.target;
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onSubmit(answers);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  console.log(answers);

  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1463740839922-2d3b7e426a56')] lg:h-screen lg:w-screen bg-cover bg-center">
      <div className="relative backdrop-blur backdrop-brightness-50 lg:bg-black/0 bg-black/20 h-screen flex flex-col items-center justify-center p-8">
        <h1 className="text-xl lg:text-3xl font-bold absolute px-6 lg:top-20 top-10 text-center text-lime-200 lg:max-w-2xl drop-shadow-xl">
          Some quick questions for your{" "}
          <span className="text-rose-500">meal plan</span>
        </h1>
        <div className="lg:bg-black/10 rounded-xl lg:py-10 lg:px-16 text-lime-100 w-full max-w-2xl">
          <p className="text-lg lg:text-2xl text-lime-200 font-semibold text-center lg:max-w-sm mx-auto lg:w-96 mb-8">
            {questions[currentQuestion]}
          </p>
          {options[currentQuestion].choices.map((choice, index) => (
            <div
              className="gap-4 flex items-center text-base lg:text-xl my-3"
              key={index}
            >
              <input
                type="radio"
                name={`question${currentQuestion}`}
                value={choice}
                checked={answers[currentQuestion] === choice}
                onChange={handleSelectChange}
                className="bg-transparent text-rose-400 focus:ring-rose-400"
              />
              {choice}
            </div>
          ))}
          <div className="flex items-center justify-between mt-10">
            <button
              className="ring-1 ring-lime-200 lg:py-2 lg:px-3 p-2 rounded-xl text-lime-100 disabled:opacity-30 hover:bg-black/30 transition duration-300 ease-in-out"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              <ArrowLeftIcon className="lg:w-6 w-4 lg:h-6 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="ring-1 ring-lime-200 lg:py-2 lg:px-3 p-2 rounded-xl text-sm lg:text-base text-lime-100 font-medium hover:bg-black/30 transition duration-300 ease-in-out"
            >
              {currentQuestion < questions.length - 1 ? (
                <ArrowRightIcon className="lg:w-6 w-4 lg:h-6 h-4" />
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Survey;
