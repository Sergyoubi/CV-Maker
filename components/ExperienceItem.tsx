"use client";
import { HomePageContext } from "@/app/(Home)/page";
import { useContext, useState } from "react";
import Draggable from "react-draggable";
import { RiDeleteBin2Fill } from "react-icons/ri";

const ExperienceItem = () => {
  // context
  const context = useContext(HomePageContext);
  if (!context) {
    throw new Error("Profils must be used within a HomePageContext.Provider");
  }
  const {
    handleResetExperience,
    changeActiveToolbar,
    changeActiveExperienceToolbar,
    experienceTitle,
    experienceJob,
    experienceCompany,
    experienceDate,
    experienceDescription,
  } = context;
  //states
  const [isExperienceItemHovered, setIsExperienceItemHovered] =
    useState<boolean>(false);
  const handleMouseEnter = () => {
    setIsExperienceItemHovered(true);
  };
  const handleMouseLeave = () => {
    setIsExperienceItemHovered(false);
  };
  return (
    <Draggable bounds={{ left: -115, right: 120 }}>
      <div
        className="w-[50%] border-2 border-transparent hover:border-dashed hover:border-rose-200 cursor-grab"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => changeActiveToolbar("experience")}
      >
        <div className="w-full h-[5vh] my-2 flex justify-between items-center">
          <p
            contentEditable={true}
            onClick={() => changeActiveExperienceToolbar("title")}
            className="cursor-text focus:outline-2 focus:outline-blue-500 mb-3"
            style={{
              color: experienceTitle.textColor,
              fontSize: experienceTitle.fontSize,
              fontWeight: experienceTitle.fontWeight,
            }}
          >
            Expérience professionnel
          </p>
          {isExperienceItemHovered ? (
            <RiDeleteBin2Fill
              onClick={handleResetExperience}
              className="text-red-500 hover:text-red-400 text-[1.3rem] cursor-pointer relative right-2"
            />
          ) : null}
        </div>
        <div className="w-full h-[18vh] flex flex-col justify-center items-center gap-3">
          <section className="w-full h-[30%] flex flex-col justify-center items-center gap-1">
            <div className="w-full flex justify-start items-center gap-1">
              <p
                contentEditable={true}
                onClick={() => changeActiveExperienceToolbar("job")}
                className="cursor-text focus:outline-2 focus:outline-blue-500"
                style={{
                  color: experienceJob.textColor,
                  fontSize: experienceJob.fontSize,
                  fontWeight: experienceJob.fontWeight,
                }}
              >
                Intitulé de poste
              </p>
              <p>-</p>
              <p
                contentEditable={true}
                onClick={() => changeActiveExperienceToolbar("company")}
                className="cursor-text focus:outline-2 focus:outline-blue-500"
                style={{
                  color: experienceCompany.textColor,
                  fontSize: experienceCompany.fontSize,
                  fontWeight: experienceCompany.fontWeight,
                }}
              >
                Nom de l'entreprise
              </p>
            </div>
            <div className="w-full flex justify-start items-center gap-1">
              <p
                contentEditable={true}
                onClick={() => changeActiveExperienceToolbar("date")}
                className="cursor-text focus:outline-2 focus:outline-blue-500"
                style={{
                  color: experienceDate.textColor,
                  fontSize: experienceDate.fontSize,
                  fontWeight: experienceDate.fontWeight,
                }}
              >
                5 Jan 2020
              </p>
              <p
                contentEditable={true}
                className="text-xs font-normal text-neutral-400"
              >
                -
              </p>
              <p
                contentEditable={true}
                className="cursor-text focus:outline-2 focus:outline-blue-500"
                style={{
                  color: experienceDate.textColor,
                  fontSize: experienceDate.fontSize,
                  fontWeight: experienceDate.fontWeight,
                }}
              >
                14 Sep 2023
              </p>
            </div>
          </section>
          <div className="w-full h-[70%] flex flex-col justify-start items-start gap-1 relative top-1">
            <li
              contentEditable={true}
              onClick={() => changeActiveExperienceToolbar("description")}
              className="list-disc ml-3 cursor-text focus:outline-2 focus:outline-blue-500"
              style={{
                color: experienceDescription.textColor,
                fontSize: experienceDescription.fontSize,
                fontWeight: experienceDescription.fontWeight,
              }}
            >
              Déscription Lorem ipsum dolor sit amet consectetur!
            </li>
            <li
              contentEditable={true}
              onClick={() => changeActiveExperienceToolbar("description")}
              className="list-disc ml-3 cursor-text focus:outline-2 focus:outline-blue-500"
              style={{
                color: experienceDescription.textColor,
                fontSize: experienceDescription.fontSize,
                fontWeight: experienceDescription.fontWeight,
              }}
            >
              Déscription Lorem ipsum dolor sit amet consectetur!
            </li>
            <li
              contentEditable={true}
              onClick={() => changeActiveExperienceToolbar("description")}
              className="list-disc ml-3 cursor-text focus:outline-2 focus:outline-blue-500"
              style={{
                color: experienceDescription.textColor,
                fontSize: experienceDescription.fontSize,
                fontWeight: experienceDescription.fontWeight,
              }}
            >
              Déscription Lorem ipsum dolor sit amet consectetur!
            </li>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default ExperienceItem;
