import React, { useContext } from "react";
import Navbar from "./Navbar";
import pixabayContext from "../Context/Pixabaycontext";

const Images = () => {
  const { imageData } = useContext(pixabayContext);

  return (
    <>
      <Navbar />
      <div className="bg-black pt-6">
        <div className="grid mx-[auto] md:w-[80vw] sm:w-[80vw] w-[80vw]  lg:grid-cols-3 md:grid-cols-2 grid-cols-1  justify-items-center duration-500 hover:gap-[33px] gap-[25px]">
          {imageData.map((image) => (
            <div className="" key={image.id}>
              <div>
                <img
                  className=" hover:scale-[1.1] duration-500 rounded-[15px]"
                  src={image.largeImageURL}
                  alt="althai"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Images;
