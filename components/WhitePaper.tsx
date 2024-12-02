"use client";
import { HomePageContext } from "@/app/(Home)/page";
import { useContext } from "react";
import ProfileItem from "./ProfileItem";
import ExperienceItem from "./ExperienceItem";
import EducationItem from "./EducationItem";
import SkillsItem from "./SkillsItem";

const WhitePaper = () => {
  //context
  const context = useContext(HomePageContext);
  if (!context) {
    throw new Error("Profils must be used within a HomePageContext.Provider");
  }
  const { isProfilShown, isExperienceShown, isEducationShown, isSkillShown } =
    context;

  return (
    <div className="w-[95%] h-[145vh] 2xl:w-[90%] 2xl:h-[110vh] 3xl:w-[70%] 4xl:h-[80vh] bg-white flex flex-col justify-center items-center shadow-lg">
      {isProfilShown ? <ProfileItem /> : null}
      {isExperienceShown ? <ExperienceItem /> : null}
      {isEducationShown ? <EducationItem /> : null}
      {isSkillShown ? <SkillsItem /> : null}
    </div>
  );
};

export default WhitePaper;
