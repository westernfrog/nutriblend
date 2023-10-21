"use client";

import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSearchParams, usePathname } from "next/navigation";

export default function Meal(props) {
  const router = useSearchParams();

  const [data, setData] = useState(null);
  const [diet, setDiet] = useState(router.get("diet"));
  const [health, setHealth] = useState(router.get("health"));
  const [cuisineType, setCuisineType] = useState(router.get("cuisineType"));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.edamam.com/search?q=${props.q}&app_id=ace62b9f&app_key=d63b97c069015e1d981f048d2c3eaf27&to=7&Diet=${diet}&Health=${health}&cuisineType=${cuisineType}`
        );
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [props.selectedDay, diet, health, cuisineType]);
  return (
    <>
      {data ? (
        <div className="col-span-4 mb-12 lg:mb-0">
          <div className="relative">
            <Image
              src={data?.hits[props.selectedDay]?.recipe?.image}
              alt="Recipe"
              className="w-full h-96 object-cover object-center rounded-3xl ring-1 ring-neutral-700"
              width={1000}
              height={1000}
            />
            <div className="absolute bottom-0 h-96 py-12 w-full px-6 lg:px-8 hover:bg-black/70 bg-black/60 flex flex-col items-start justify-end gap-3 rounded-3xl">
              <p className="font-semibold text-sm text-neutral-900 bg-neutral-300 rounded-full px-2 py-1">
                {props.q}
              </p>
              <h1 className="font-black text-xl lg:text-4xl text-neutral-300 drop-shadow-3xl">
                {data?.hits[props.selectedDay]?.recipe?.label}
              </h1>
            </div>
          </div>
          <div className="my-5">
            <div className="grid grid-cols-12 items-center text-center gap-4 my-2">
              {data?.hits[props.selectedDay].recipe?.healthLabels
                ?.slice(0, 6)
                .map((item, index) => (
                  <button
                    key={index}
                    className="col-span-6 lg:col-span-4 font-light text-sm text-neutral-300 bg-neutral-900 ring-1 ring-neutral-700 rounded-full p-2 font-light"
                  >
                    {item}
                  </button>
                ))}
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="col-span-4 mb-12 lg:mb-0">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Recipe"
                className="w-full h-96 object-cover object-center rounded-3xl"
                width={1000}
                height={1000}
              />
              <div className="absolute bottom-0 h-96 w-full py-12 px-8 hover:bg-black/70 bg-black/50 flex flex-col items-start justify-end gap-3 rounded-3xl">
                <p className="font-semibold text-sm text-neutral-900 bg-neutral-300 rounded-full px-2 py-1">
                  {props.q}
                </p>
                <h1 className="font-black text-xl lg:text-4xl text-neutral-300 drop-shadow-3xl">
                  Crispy Potato Mojos recipes
                </h1>
              </div>
            </div>
            <div className="my-5 font-semibold">
              <div className="grid items-center justify-center text-center gap-4 my-2">
                <button className="my-5 animate-pulse">
                  <EllipsisHorizontalIcon className="w-12 h-12 text-neutral-300 mx-auto" />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
