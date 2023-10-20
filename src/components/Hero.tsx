export default function Hero() {
  return (
    <div className="flex items-center justify-center h-screen relative">
      <img
        src="https://ippsum.bold-themes.com/gea/wp-content/uploads/sites/2/2020/05/hero_home_04.jpg"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="flex flex-col items-start justify-center h-full absolute">
        <div className="bg-white px-4 text-secondary w-[465px] h-[465px]">
          <h1 className="text-7xl font-bold">We're Ippsum Developers</h1>
          <button className="border rounded-2xl border-secondary py-2 px-4 mt-4">
            Book a Meeting
          </button>
        </div>
      </div>
    </div>
  );
}
