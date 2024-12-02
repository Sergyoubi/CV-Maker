"use client";
import { PiBuildingOfficeThin } from "react-icons/pi";
import { useContext } from "react";
import { HomePageContext } from "@/app/(Home)/page";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Experience = () => {
  const context = useContext(HomePageContext);
  if (!context) {
    throw new Error("Profils must be used within a HomePageContext.Provider");
  }
  const { handleClickOnExperience } = context;
  return (
    <div className="w-full flex flex-col justify-center items-center mt-2">
      <div className="w-[95%] h-[8vh] flex justify-start items-center">
        <p className="text-slate-600 text-base font-bold underline underline-offset-4 decoration-2 decoration-rose-200 relative left-[10%]">
          Expérience pro
        </p>
      </div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="w-[95%] h-[25vh] 2xl:h-[20vh] 4xl:h-[15vh]">
            <div
              onClick={handleClickOnExperience}
              className="w-full h-full bg-white rounded-2xl border border-slate-400 hover:border-slate-50 hover:shadow-lg cursor-pointer mb-3 flex flex-col justify-center items-start transition duration-500 ease-in-out gap-1"
            >
              <div className="size-[2.8rem] rounded-full bg-rose-200 flex-center ml-4 2xl:ml-5 3xl:ml-7 4xl:ml-9">
                <PiBuildingOfficeThin className="text-2xl text-slate-700" />
              </div>
              <p className="text-slate-800 font-bold text-sm ml-4 2xl:ml-5 3xl:ml-7 4xl:ml-9">
                Intitulé de poste
              </p>
              <p className="text-slate-600 font-thin text-xs ml-4 2xl:ml-5 3xl:ml-7 4xl:ml-9">
                Nom de l'entreprise
              </p>
              <p className="text-slate-600 font-thin text-xs ml-4 2xl:ml-5 3xl:ml-7 4xl:ml-9">
                Date
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

export default Experience;
