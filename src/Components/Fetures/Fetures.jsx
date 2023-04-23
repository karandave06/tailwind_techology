import "./fetures.scss";
import Item from "./Item";

const Fetures = () => {
  return (
    <div className="fetures">
      {/* flex container */}

      <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
        {/* whats diffrent */}
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
            Whats diffrent about us?
          </h2>

          <p className="max-w-sm text-center text-black md:text-left">
            We provides all the functionality your team nedds,without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>

        {/* Number's list */}

        <div className="flex flex-col space-y-8 md:w-1/2">
          {/* List item 1 */}

         

          <Item number="01"/>
          <Item number="02"/>
          <Item number="03"/>
          <Item number="04"/>
        </div>
      </div>
    </div>
  );
};

export default Fetures;
