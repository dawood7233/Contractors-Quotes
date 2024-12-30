import React from "react";
import OurWork from "../Components/OurWork";
import Services from "./Services";

const HomePage = () => {
  return (
    <div className="relative">
      <video
        className="w-full h-auto"
        src="/workers.mp4"
        type="video/mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>
      <div className="absolute top-80 left-64 w-96 bg-slate-600 shadow-xl z-10 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl">
        <div className="card-body">
          <input
            type="text"
            placeholder="Choose Project Type"
            className="input input-bordered join-item"
          />
          <input
            type="text"
            placeholder="Zip Code"
            className="input input-bordered join-item"
          />
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Get Quote</button>
          </div>
        </div>
      </div>
      {/* our Services section */}
      <div>
        <h1 className="font-bold text-4xl text-center pt-8 ">
          Our Offered Services
        </h1>
        <Services />
      </div>
      {/* Our Projects section */}
      <OurWork />
    </div>
  );
};

export default HomePage;
