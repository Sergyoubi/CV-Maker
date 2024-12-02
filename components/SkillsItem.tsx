"use client";
import { HomePageContext } from "@/app/(Home)/page";
import { useContext, useState } from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import Draggable from "react-draggable";

const SkillsItem = () => {
  // context
  const context = useContext(HomePageContext);
  if (!context) {
    throw new Error("Profils must be used within a HomePageContext.Provider");
  }
  const {
    handleResetSkills,
    changeActiveToolbar,
    changeActiveSkillsToolbar,
    skillsTitle,
    skillsList,
  } = context;
  // states
  const [isSkillsItemHovered, setIsSkillsItemHovered] =
    useState<boolean>(false);
  const handleMouseEnter = () => {
    setIsSkillsItemHovered(true);
  };
  const handleMouseLeave = () => {
    setIsSkillsItemHovered(false);
  };

  return (
    <Draggable bounds={{ left: -210, right: 250 }}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => changeActiveToolbar("skills")}
        className="w-[30%] h-[11rem] flex flex-col justify-center items-center border-2 border-transparent hover:border-dashed hover:border-fuchsia-300 cursor-grab"
      >
        <div className="w-full h-[20%] flex justify-between items-center">
          <p
            contentEditable={true}
            onClick={() => changeActiveSkillsToolbar("title")}
            className="cursor-text focus:outline-2 focus:outline-blue-500"
            style={{
              color: skillsTitle.textColor,
              fontSize: skillsTitle.fontSize,
              fontWeight: skillsTitle.fontWeight,
            }}
          >
            Compétences
          </p>
          <span className="w-[25%] h-full flex justify-end items-center">
            {isSkillsItemHovered ? (
              <RiDeleteBin2Fill
                onClick={handleResetSkills}
                className="text-red-500 hover:text-red-400 text-[1.3rem] cursor-pointer relative right-2"
              />
            ) : null}
          </span>
        </div>
        <div className="w-full h-[80%] flex flex-col justify-center items-start">
          <p
            contentEditable={true}
            onClick={() => changeActiveSkillsToolbar("list")}
            className="cursor-text focus:outline-2 focus:outline-blue-500"
            style={{
              color: skillsList.textColor,
              fontSize: skillsList.fontSize,
              fontWeight: skillsList.fontWeight,
            }}
          >
            -Lorem Skills 1
          </p>
          <p
            contentEditable={true}
            onClick={() => changeActiveSkillsToolbar("list")}
            className="cursor-text focus:outline-2 focus:outline-blue-500"
            style={{
              color: skillsList.textColor,
              fontSize: skillsList.fontSize,
              fontWeight: skillsList.fontWeight,
            }}
          >
            -Lorem Skills 2
          </p>
          <p
            contentEditable={true}
            onClick={() => changeActiveSkillsToolbar("list")}
            className="cursor-text focus:outline-2 focus:outline-blue-500"
            style={{
              color: skillsList.textColor,
              fontSize: skillsList.fontSize,
              fontWeight: skillsList.fontWeight,
            }}
          >
            -Lorem Skills 3
          </p>
          <p
            contentEditable={true}
            onClick={() => changeActiveSkillsToolbar("list")}
            className="cursor-text focus:outline-2 focus:outline-blue-500"
            style={{
              color: skillsList.textColor,
              fontSize: skillsList.fontSize,
              fontWeight: skillsList.fontWeight,
            }}
          >
            -Lorem Skills 4
          </p>
          <p
            contentEditable={true}
            onClick={() => changeActiveSkillsToolbar("list")}
            className="cursor-text focus:outline-2 focus:outline-blue-500"
            style={{
              color: skillsList.textColor,
              fontSize: skillsList.fontSize,
              fontWeight: skillsList.fontWeight,
            }}
          >
            -Lorem Skills 5
          </p>
          <p
            contentEditable={true}
            onClick={() => changeActiveSkillsToolbar("list")}
            className="cursor-text focus:outline-2 focus:outline-blue-500"
            style={{
              color: skillsList.textColor,
              fontSize: skillsList.fontSize,
              fontWeight: skillsList.fontWeight,
            }}
          >
            -Lorem Skills 6
          </p>
        </div>
      </div>
    </Draggable>
  );
};

export default SkillsItem;
