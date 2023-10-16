"use client";

import Survey from "../components/Survey";
import { useRouter } from "next/navigation";

export default function SurveyPage(params) {
  const router = useRouter();
  const questions = [
    "How many meals do you (or want to have) in a day?",
    "Choose a plan type",
    "Any dietary preferences?",
    "Any health preferences?",
  ];

  const options = [
    { choices: ["Two", "Three", "Five"] },
    { choices: ["Weekly", "Daily"] },
    {
      choices: [
        "Balanced Diet (Recommended)",
        "Low-Carb (Less than 20% of total calories from carbs)",
        "Low-Fat (Less than 15% of total calories from fat)",
      ],
    },
    {
      choices: [
        "Vegan (No meat, poultry, fish, dairy, eggs or honey)",
        "Vegetarian (No wheat, can have gluten though)",
        "Alcohol free (No alcohol used or contained)",
        "Peanut free (No peanuts or products containing peanuts)",
      ],
    },
  ];

  const handleSurveySubmit = (answers) => {
    console.log(answers);
    localStorage.setItem("answers", answers);
    router.push("/plan");
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
