import { useContext } from "react";
import ExperienceToolBar from "./ExperienceToolBar";
import ProfilToolBar from "./ProfilToolBar";
import { HomePageContext } from "@/app/(Home)/page";
import EducationToolBar from "./EducationToolBar";
import SkillsToolBar from "./SkillsToolBar";

const ToolbarWrapper = () => {
  //context
  const context = useContext(HomePageContext);
  if (!context) {
    throw new Error("Profils must be used within a HomePageContext.Provider");
  }
  const {
    activeToolbar,
    isProfilShown,
    isExperienceShown,
    isEducationShown,
    isSkillShown,
  } = context;

  return (
    <div className="w-full h-[8%] 2xl:h-[5.5%] 4xl:h-[4%] bg-gradient-to-r from-teal-400 via-blue-500 to-purple-400 rounded-t-xl flex-center">
      {activeToolbar === "profil" && isProfilShown ? <ProfilToolBar /> : null}
      {activeToolbar === "experience" && isExperienceShown ? (
        <ExperienceToolBar />
      ) : null}
      {activeToolbar === "education" && isEducationShown ? (
        <EducationToolBar />
      ) : null}
      {activeToolbar === "skills" && isSkillShown ? <SkillsToolBar /> : null}
    </div>
  );
};

export default ToolbarWrapper;
