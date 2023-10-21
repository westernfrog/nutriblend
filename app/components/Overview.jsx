"use client";

import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Overview(params) {
  return (
    <>
      <main className="bg-[url('https://images.unsplash.com/photo-1463740839922-2d3b7e426a56')] bg-cover bg-center lg:h-screen lg:w-screen">
        <div className="backdrop-blur bg-black/60 h-screen flex flex-col items-center justify-center lg:p-20 p-8">
          <h1 className="font-bold text-lime-200 lg:text-9xl text-4xl drop-shadow-xl">
            NUTRIBLEND
          </h1>
          <p className="text-lime-50 font lg:text-2xl lg:px-96 py-5 text-center">
            Wasted a lot of time thinking about what I should make for dinner
            today Want to watch what I eat but don't know how? Not good at
            pre-planning meals Want to track my weight and calorie intake?
          </p>
          <Link
            href={"/survey"}
            className="flex items-center gap-2 font-semibold text-lime-900 drop-shadow-xl bg-lime-50 hover:bg-lime-200 transition duration-300 ease-in-out lg:px-6 px-4 py-3 lg:py-4 lg:rounded-2xl rounded-xl text-sm lg:text-base"
          >
            Get Started{" "}
            <ArrowUpRightIcon
              className="lg:w-4 w-3 lg:h-4 h-3"
              strokeWidth={2}
            />
          </Link>
        </div>
      </main>
    </>
  );
}
