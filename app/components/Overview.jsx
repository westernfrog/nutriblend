export default function Overview(params) {
  return (
    <>
      <main className="bg-[url('https://images.unsplash.com/photo-1463740839922-2d3b7e426a56')] h-screen w-screen bg-cover bg-center">
        <div className="backdrop-blur backdrop-brightness-50 h-screen flex flex-col items-center justify-center p-20">
          <h1 className="font-bold text-lime-200 text-9xl drop-shadow-xl">
            NUTRIBLEND
          </h1>
          <p className="text-lime-50 font-thin text-2xl px-96 py-5 text-center">
            Wasted a lot of time thinking about what I should make for dinner
            today Want to watch what I eat but don't know how? Not good at
            pre-planning meals Want to track my weight and calorie intake
          </p>
          <button className="text-lime-900 drop-shadow-xl bg-lime-50 hover:bg-lime-200 transition duration-300 ease-in-out px-6 py-4 rounded-2xl">
            Get Started
          </button>
        </div>
      </main>
    </>
  );
}
