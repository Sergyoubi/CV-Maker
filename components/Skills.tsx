"use client";
import { HomePageContext } from "@/app/(Home)/page";
import { useContext } from "react";
import { IoBookOutline } from "react-icons/io5";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Skills = () => {
  const context = useContext(HomePageContext);
  if (!context) {
    throw new Error("Profils must be used within a HomePageContext.Provider");
  }
  const { handleClickOnSkills } = context;

  return (
    <div className="w-full flex flex-col justify-center items-center mt-2">
      <div className="w-[95%] h-[8vh] flex justify-start items-center">
        <p className="text-slate-600 text-base font-bold underline underline-offset-4 decoration-2 decoration-fuchsia-300 relative left-[10%]">
          Compétences
        </p>
      </div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="w-[95%] h-[25vh] 2xl:h-[20vh] 4xl:h-[15vh]">
            <div
              onClick={handleClickOnSkills}
              className="w-full h-full bg-white flex flex-col justify-center items-start rounded-2xl border border-slate-400 hover:border-slate-50 hover:shadow-lg cursor-pointer transition duration-500 ease-in-out gap-1"
            >
              <div className="size-[2.8rem] rounded-full bg-fuchsia-200 flex-center ml-4 2xl:ml-5 3xl:ml-7 4xl:ml-9">
                <IoBookOutline className="text-2xl text-slate-700" />
              </div>
              <p className="text-slate-800 font-bold text-sm ml-4 2xl:ml-5 3xl:ml-7 4xl:ml-9">
                Compétences
              </p>
              <p className="text-slate-800 font-thin text-sm ml-4 2xl:ml-5 3xl:ml-7 4xl:ml-9">
                - lorem ipsum
              </p>
              <p className="text-slate-800 font-thin text-sm ml-4 2xl:ml-5 3xl:ml-7 4xl:ml-9">
                - lorem ipsum
              </p>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-xs">Clicker pour ajouter</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default Skills;
