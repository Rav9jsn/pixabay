import React, { useContext } from "react";
import pixabayContext from "../Context/Pixabaycontext";

const Navbar = () => {
  const { fetchImageByCategory } = useContext(pixabayContext);
  const { setQuery } = useContext(pixabayContext);

  return (
    <div>
      <div className="bg-black font-bold lg:gap-9 md:gap-8 sm:gap-5 flex-wrap flex gap-4 p-10 w-max-[50vw] justify-center ">
        <button
          onClick={() => fetchImageByCategory("nature")}
          className=" border-{#EAD3B9} sm:border-[0.1px] border-[2px] rounded-md p-[8px] hover:border-[0px] uppercase text-[#ffffff] text-[0.7rem] sm:text-[1rem]"
        >
          Nature
        </button>
        <button
          onClick={() => fetchImageByCategory("science")}
          className=" border-{#EAD3B9} border-[2px] rounded-md p-[8px] hover:border-[0px] uppercase text-[#ffffff] text-[0.7rem] sm:text-[1rem]"
        >
          {" "}
          Science
        </button>
        <button
          onClick={() => fetchImageByCategory("computer")}
          className=" border-{#EAD3B9} border-[2px] rounded-md p-[8px] hover:border-[0px] uppercase text-[#ffffff] text-[0.7rem] sm:text-[1rem]"
        >
          Computer
        </button>
        <button
          onClick={() => fetchImageByCategory("buildings")}
          className=" border-{#EAD3B9} border-[2px] rounded-md p-[8px] hover:border-[0px] uppercase text-[#ffffff] text-[0.7rem] sm:text-[1rem]"
        >
          Buildings
        </button>
        <button
          onClick={() => fetchImageByCategory("sports")}
          className=" border-{#EAD3B9} border-[2px] rounded-md p-[8px] hover:border-[0px] uppercase text-[#ffffff] text-[0.7rem] sm:text-[1rem]"
        >
          Sports
        </button>
        <button
          onClick={() => fetchImageByCategory("transportation")}
          className=" border-{#EAD3B9} border-[2px] rounded-md p-[8px] hover:border-[0px] uppercase text-[#ffffff] text-[0.7rem] sm:text-[1rem]"
        >
          Transportation
        </button>
        <button
          onClick={() => fetchImageByCategory("travel")}
          className=" border-{#EAD3B9} border-[2px] rounded-md p-[8px] hover:border-[0px] uppercase text-[#ffffff] text-[0.7rem] sm:text-[1rem]"
        >
          Travel
        </button>
        <button
          onClick={() => fetchImageByCategory("food")}
          className=" border-{#EAD3B9} border-[2px] rounded-md p-[8px] hover:border-[0px] uppercase text-[#ffffff] text-[0.7rem] sm:text-[1rem]"
        >
          Food
        </button>
      </div>
      <form className="w-max-[100vw]  bg-black  justify-center flex ">
        <input
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Image"
          className="bg-black lg:w-[20rem] w-[15rem] bg-gradient-to-r from-slate-900 to-stone-700 my-5 rounded-lg focus:outline-none text-white px-[15px] py-[10px]"
          type="text"
        />
      </form>
    </div>
  );
};

export default Navbar;
