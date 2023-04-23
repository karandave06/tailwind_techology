import './cta.scss'
const Cta = () => {
  return (
    <div className="cta  bg-[#ef5535]">
      <div className="container flex flex-col items-center justiyf-between px-6  mx-auto space-y-12 md:py-12 py-4 text-white md:flex-row md:space-y-0 ">
        <h2 className="text-2xl font-bold  text-center md:text-4xl md:max-w-xl md:text-left">
          {" Simplify how your team work's today"}
        </h2>

        <div className="flex justify-center mb-4">
          <a
            href="#"
            className="p-3 pt-2  rounded-full text-black self-baseline hover:text-white  bg-[#f5f5f5] px-6 hover:bg-gray-900 shadow-2xl"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cta;
