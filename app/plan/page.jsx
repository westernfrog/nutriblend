"use client";

import Meal from "./Meal";
import { useState } from "react";

export default function Plan() {
  const week = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"];
  const [selectedDay, setSelectedDay] = useState(0);

  const handleDayClick = (day) => {
    setSelectedDay(day);
    console.log(selectedDay);
  };
  return (
    <>
      <div className="bg-[url('https://images.unsplash.com/photo-1517178313064-9447953f46e8')] lg:h-screen lg:w-screen bg-cover bg-center">
        <div className="lg:p-12 px-6 py-8 backdrop-blur-lg w-full h-full bg-black/40">
          <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-10 mb-12">
            {week.map((item, index) => (
              <button
                key={index}
                className={`col-span-6 text-neutral-300 hover:bg-neutral-800 ring-1 ring-neutral-800 py-2 px-5 text-sm rounded-full transition duration-300 ease-in-out ${
                  selectedDay === index ? "bg-neutral-700" : "bg-neutral-900"
                }`}
                onClick={() => handleDayClick(index)}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="lg:grid grid-cols-12 items-center justify-center gap-12">
            <Meal q="Breakfast" selectedDay={selectedDay} />
            <Meal q="Lunch" selectedDay={selectedDay} />
            <Meal q="Dinner" selectedDay={selectedDay} />
          </div>
        </div>
      </div>
    </>
  );
}
