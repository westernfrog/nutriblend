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

  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1517178313064-9447953f46e8')] lg:h-screen lg:w-screen bg-cover bg-center">
      <div className="relative backdrop-blur bg-black/40 h-screen flex flex-col items-center justify-center p-8">
        <h1 className="absolute top-0 text-lg lg:text-2xl text-lime-300 font-semibold text-center lg:max-w-xl mx-auto lg:py-20 py-12 px-8">
          {questions[currentQuestion]}
        </h1>
        <div className="lg:bg-white/5 rounded-xl lg:py-10 lg:px-16 text-lime-100 w-full max-w-2xl">
          {options[currentQuestion].choices.map((choice, index) => (
            <div
              className="gap-4 flex items-center text-sm font-light text-neutral-200 lg:text-lg my-3"
              key={index}
            >
              <input
                type="radio"
                name={`question${currentQuestion}`}
                value={choice.params}
                checked={answers[currentQuestion] === choice.params}
                onChange={handleSelectChange}
                className="bg-transparent text-lime-700 focus:ring-0 ring-1 ring-rose-200"
              />
              {choice.name}
            </div>
          ))}
          <div className="flex items-center justify-between mt-10">
            <button
              className="ring-1 ring-lime-200 lg:py-2 lg:px-3 p-2 rounded-xl text-neutral-300 disabled:opacity-30 hover:bg-black/30 transition duration-300 ease-in-out"
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
