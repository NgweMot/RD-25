import React from "react";
import Lottie from "lottie-react";
import EmptyJson from "../assets/EmptyBox.json";

const EmptyBox = () => {
  return (
    <div>
      <Lottie className="w-[300px] h-[300px]" animationData={EmptyJson} loop={true} />
      <p className="mt-3 text-center text-lg">There is no list ......</p>
    </div>
  );
};

export default EmptyBox;
