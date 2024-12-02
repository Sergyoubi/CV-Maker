import Education from "./Education";
import Experience from "./Experience";
import Profils from "./Profils";
import Skills from "./Skills";

const LeftSideBar = () => {
  return (
    <section className="w-[20%] h-full flex flex-col justify-center items-center gap-2">
      <div className="w-[90%] h-[10%] flex justify-start items-center">
        <p className="text-gray-800 font-bold text-2xl relative left-[5%]">
          CV.Maker
        </p>
      </div>
      <div className="w-[90%] h-[85%] flex justify-center items-center 4xl:items-start">
        <div className="w-[90%] h-[93%] 4xl:h-[90%] flex flex-col justify-start items-center overflow-y-scroll">
          <Profils />
          <Experience />
          <Education />
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default LeftSideBar;
