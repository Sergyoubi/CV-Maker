"use client";
import { HomePageContext } from "@/app/(Home)/page";
import { useContext, useState } from "react";
import Draggable from "react-draggable";
import { RiDeleteBin2Fill } from "react-icons/ri";

const EducationItem = () => {
  // context
  const context = useContext(HomePageContext);
  if (!context) {
    throw new Error("Profils must be used within a HomePageContext.Provider");
  }
  const {
    handleResetEducation,
    changeActiveToolbar,
    changeActiveEducationToolbar,
    educationTitle,
    educationDegree,
    educationSchool,
    educationYear,
  } = context;
  //states
  const [isEducationItemHovered, setIsEducationItemHovered] =
    useState<boolean>(false);
  const handleMouseEnter = () => {
    setIsEducationItemHovered(true);
  };
  const handleMouseLeave = () => {
    setIsEducationItemHovered(false);
  };

  return (
    <Draggable bounds={{ left: -150, right: 200 }}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => changeActiveToolbar("education")}
        className="w-[40%] h-[7rem] flex-center border-2 border-transparent hover:border-dashed hover:border-teal-300 cursor-grab"
      >
        <div className="w-[70%] h-full flex flex-col justify-start items-start gap-2">
          <div className="w-full flex justify-start items-center">
            <p
              contentEditable={true}
              onClick={() => changeActiveEducationToolbar("title")}
              className="cursor-text focus:outline-2 focus:outline-blue-500"
              style={{
                color: educationTitle.textColor,
                fontSize: educationTitle.fontSize,
                fontWeight: educationTitle.fontWeight,
              }}
            >
              Education
            </p>
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-1">
            <p
              contentEditable={true}
              onClick={() => changeActiveEducationToolbar("degree")}
              className="cursor-text focus:outline-2 focus:outline-blue-500"
              style={{
                color: educationDegree.textColor,
                fontSize: educationDegree.fontSize,
                fontWeight: educationDegree.fontWeight,
              }}
            >
              Diplome / Certificat
            </p>
            <p
              contentEditable={true}
              onClick={() => changeActiveEducationToolbar("school")}
              className="cursor-text focus:outline-2 focus:outline-blue-500"
              style={{
                color: educationSchool.textColor,
                fontSize: educationSchool.fontSize,
                fontWeight: educationSchool.fontWeight,
              }}
            >
              Université / Formation
            </p>
            <p
              contentEditable={true}
              onClick={() => changeActiveEducationToolbar("year")}
              className="cursor-text focus:outline-2 focus:outline-blue-500"
              style={{
                color: educationYear.textColor,
                fontSize: educationYear.fontSize,
                fontWeight: educationYear.fontWeight,
              }}
            >
              Année
            </p>
          </div>
        </div>
        <div className="w-[30%] h-full flex justify-end items-start">
          {isEducationItemHovered ? (
            <RiDeleteBin2Fill
              onClick={handleResetEducation}
              className="text-red-500 hover:text-red-400 text-[1.3rem] cursor-pointer relative right-2 top-1"
            />
          ) : null}
        </div>
      </div>
    </Draggable>
  );
};

export default EducationItem;
