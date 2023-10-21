"use client";

import Survey from "../components/Survey";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SurveyPage(params) {
  const router = useRouter();
  const [answers, setAnswers] = useState({});
  const questions = [
    "Nutrient level aspects of the recipe.",
    "Ingredient level aspects of the recipe.",
    "The cuisine types refer to the cuisine that the recipe would fall under.",
  ];

  const options = [
    {
      choices: [
        {
          name: "Balanced (Protein/Fat/Carb values in 15/35/50 ratio)",
          params: "balanced",
        },
        {
          name: "High-Fiber (More than 5g fiber per serving)",
          params: "high-fiber",
        },
        {
          name: "High-Protein (More than 50% of total calories from proteins)",
          params: "high-protein",
        },
        {
          name: "Low-Carb (Less than 20% of total calories from carbs)",
          params: "low-carb",
        },
        {
          name: "Low-Fat (Less than 15% of total calories from fat)",
          params: "low-fat",
        },
      ],
    },
    {
      choices: [
        {
          name: "Alcohol-Cocktail (Describes an alcoholic cocktail)",
          params: "alcohol-cocktail",
        },
        {
          name: "Alcohol-Free (No alcohol used or contained)",
          params: "alcohol-free",
        },
        {
          name: "Dairy-Free (No dairy; no lactose)",
          params: "dairy-free",
        },
        {
          name: "Vegan (No meat, poultry, fish, dairy, eggs or honey)",
          params: "vegan",
        },
        {
          name: "Vegetarian (No meat, poultry, or fish)",
          params: "vegetarian",
        },
      ],
    },
    {
      choices: [
        {
          name: "American",
          params: "american",
        },
        {
          name: "Asian",
          params: "asian",
        },
        {
          name: "Chinese",
          params: "chinese",
        },
        {
          name: "French",
          params: "french",
        },
        {
          name: "Indian",
          params: "indian",
        },
      ],
    },
  ];

  const handleSurveySubmit = (answers) => {
    setAnswers(answers);

    router.push(
      `/plan?diet=${answers[0]}&health=${answers[1]}&cuisineType=${answers[2]}`
    );
  };
  return (
    <>
      <Survey
        questions={questions}
        options={options}
        onSubmit={handleSurveySubmit}
      />
    </>
  );
}
