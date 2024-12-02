"use client";
import LeftSideBar from "@/components/LeftSideBar";
import MainComponents from "@/components/MainComponents";
import { useState, createContext, useEffect } from "react";

export const HomePageContext = createContext<ContextType | null>(null);

const Home = () => {
  const [isProfilShown, setIsProfilShown] = useState<boolean>(false);
  const [isExperienceShown, setIsExperienceShown] = useState<boolean>(false);
  const [isEducationShown, setIsEducationShown] = useState<boolean>(false);
  const [isSkillShown, setIsSkillShown] = useState<boolean>(false);
  const [activeToolbar, setActiveToolbar] = useState<string | null>(null);

  const handleClickOnProfil = () => {
    setIsProfilShown(true);
  };
  const handleResetProfil = () => {
    setIsProfilShown(false);
  };
  const handleClickOnExperience = () => {
    setIsExperienceShown(true);
  };
  const handleResetExperience = () => {
    setIsExperienceShown(false);
  };
  const handleClickOnEducation = () => {
    setIsEducationShown(true);
  };
  const handleResetEducation = () => {
    setIsEducationShown(false);
  };
  const handleClickOnSkills = () => {
    setIsSkillShown(true);
  };
  const handleResetSkills = () => {
    setIsSkillShown(false);
  };
  const changeActiveToolbar = (payload: string | null) => {
    setActiveToolbar(payload);
  };

  /* ---- Profil section data (3)  ---- */
  // 1 - profile Toolbar data
  const [profilToolBar, setProfileToolBar] = useState<string | null>(null);
  const changeActiveProfilToolbar = (payload: string) => {
    setProfileToolBar(payload);
  };
  // 2 - profile title data
  const [profilTitle, setProfilTitle] = useState<textType>({
    textColor: "#000000",
    fontSize: 14,
    fontWeight: 500,
  });
  const changeProfilTitleColor = (payload: string) => {
    setProfilTitle((prev) => ({
      ...prev,
      textColor: payload,
    }));
  };
  const changeProfilTitleSize = (payload: number) => {
    setProfilTitle((prev) => ({
      ...prev,
      fontSize: payload,
    }));
  };
  const changeProfilTitleWeight = (payload: number) => {
    setProfilTitle((prev) => ({
      ...prev,
      fontWeight: payload,
    }));
  };

  // 3 - profile subtitle data
  const [profilSubTitle, setProfilSubTitle] = useState<textType>({
    textColor: "#000000",
    fontSize: 14,
    fontWeight: 200,
  });
  const changeProfilSubTitleColor = (payload: string) => {
    setProfilSubTitle((prev) => ({
      ...prev,
      textColor: payload,
    }));
  };
  const changeProfilSubTitleSize = (payload: number) => {
    setProfilSubTitle((prev) => ({
      ...prev,
      fontSize: payload,
    }));
  };
  const changeProfilSubTitleWeight = (payload: number) => {
    setProfilSubTitle((prev) => ({
      ...prev,
      fontWeight: payload,
    }));
  };

  /* ---- Experience section data (6 data)  ---- */

  // 1 - Experience Toolbar
  const [experienceToolBar, setExperienceToolBar] = useState<string | null>(
    null
  );
  const changeActiveExperienceToolbar = (payload: string) => {
    setExperienceToolBar(payload);
  };
  // 2 - Experience title
  const [experienceTitle, setExperienceTitle] = useState<textType>({
    textColor: "#000000",
    fontSize: 20,
    fontWeight: 800,
  });
  const changeExperienceTitleColor = (payload: string) => {
    setExperienceTitle((prev) => ({
      ...prev,
      textColor: payload,
    }));
  };
  const changeExperienceTitleFontSize = (payload: number) => {
    setExperienceTitle((prev) => ({
      ...prev,
      fontSize: payload,
    }));
  };
  const changeExperienceTitleFontWeight = (payload: number) => {
    setExperienceTitle((prev) => ({
      ...prev,
      fontWeight: payload,
    }));
  };
  // 3 - Experience Job
  const [experienceJob, setExperienceJob] = useState<textType>({
    textColor: "#000000",
    fontSize: 16,
    fontWeight: 500,
  });
  const changeExperienceJobColor = (payload: string) => {
    setExperienceJob((prev) => ({
      ...prev,
      textColor: payload,
    }));
  };
  const changeExperienceJobFontSize = (payload: number) => {
    setExperienceJob((prev) => ({
      ...prev,
      fontSize: payload,
    }));
  };
  const changeExperienceJobFontWeight = (payload: number) => {
    setExperienceJob((prev) => ({
      ...prev,
      fontWeight: payload,
    }));
  };
  // 4 - Experience company
  const [experienceCompany, setExperienceCompany] = useState<textType>({
    textColor: "#000000",
    fontSize: 16,
    fontWeight: 500,
  });
  const changeExperienceCompanyColor = (payload: string) => {
    setExperienceCompany((prev) => ({
      ...prev,
      textColor: payload,
    }));
  };
  const changeExperienceCompanyFontSize = (payload: number) => {
    setExperienceCompany((prev) => ({
      ...prev,
      fontSize: payload,
    }));
  };
  const changeExperienceCompanyFontWeight = (payload: number) => {
    setExperienceCompany((prev) => ({
      ...prev,
      fontWeight: payload,
    }));
  };
  // 5 - Experience Date
  const [experienceDate, setExperienceDate] = useState<textType>({
    textColor: "#000000",
    fontSize: 14,
    fontWeight: 100,
  });
  const changeExperienceDateColor = (payload: string) => {
    setExperienceDate((prev) => ({
      ...prev,
      textColor: payload,
    }));
  };
  const changeExperienceDateFontSize = (payload: number) => {
    setExperienceDate((prev) => ({
      ...prev,
      fontSize: payload,
    }));
  };
  const changeExperienceDateFontWeight = (payload: number) => {
    setExperienceDate((prev) => ({
      ...prev,
      fontWeight: payload,
    }));
  };
  // 6 - Experience Description
  const [experienceDescription, setExperienceDescription] = useState<textType>({
    textColor: "#000000",
    fontSize: 11,
    fontWeight: 100,
  });
  const changeExperienceDescriptionColor = (payload: string) => {
    setExperienceDescription((prev) => ({
      ...prev,
      textColor: payload,
    }));
  };
  const changeExperienceDescriptionFontSize = (payload: number) => {
    setExperienceDescription((prev) => ({
      ...prev,
      fontSize: payload,
    }));
  };
  const changeExperienceDescriptionFontWeight = (payload: number) => {
    setExperienceDescription((prev) => ({
      ...prev,
      fontWeight: payload,
    }));
  };

  /* ---- Education section data (5 data) ---- */

  // 1 - Education Toolbar data
  const [educationToolBar, setEducationToolBar] = useState<string | null>(null);
  const changeActiveEducationToolbar = (payload: string) => {
    setEducationToolBar(payload);
  };
  // 2 - Education title data
  const [educationTitle, setEducationTitle] = useState<textType>({
    textColor: "#000000",
    fontSize: 20,
    fontWeight: 800,
  });
  const changeEducationTitleFontColor = (payload: string) => {
    setEducationTitle((prev) => ({
      ...prev,
      textColor: payload,
    }));
  };
  const changeEducationTitleFontSize = (payload: number) => {
    setEducationTitle((prev) => ({
      ...prev,
      fontSize: payload,
    }));
  };
  const changeEducationTitleFontWeight = (payload: number) => {
    setEducationTitle((prev) => ({
      ...prev,
      fontWeight: payload,
    }));
  };
  // 3 - Education degree
  const [educationDegree, setEducationDegree] = useState<textType>({
    textColor: "#000000",
    fontSize: 14,
    fontWeight: 400,
  });
  const changeEducationDegreeFontColor = (payload: string) => {
    setEducationDegree((prev) => ({
      ...prev,
      textColor: payload,
    }));
  };
  const changeEducationDegreeFontSize = (payload: number) => {
    setEducationDegree((prev) => ({
      ...prev,
      fontSize: payload,
    }));
  };
  const changeEducationDegreeFontWeight = (payload: number) => {
    setEducationDegree((prev) => ({
      ...prev,
      fontWeight: payload,
    }));
  };
  // 4 - Education school
  const [educationSchool, setEducationSchool] = useState<textType>({
    textColor: "#000000",
    fontSize: 12,
    fontWeight: 100,
  });
  const changeEducationSchoolFontColor = (payload: string) => {
    setEducationSchool((prev) => ({
      ...prev,
      textColor: payload,
    }));
  };
  const changeEducationSchoolFontSize = (payload: number) => {
    setEducationSchool((prev) => ({
      ...prev,
      fontSize: payload,
    }));
  };
  const changeEducationSchoolFontWeight = (payload: number) => {
    setEducationSchool((prev) => ({
      ...prev,
      fontWeight: payload,
    }));
  };
  // 5 - Education Year
  const [educationYear, setEducationYear] = useState<textType>({
    textColor: "#000000",
    fontSize: 11,
    fontWeight: 100,
  });
  const changeEducationYearFontColor = (payload: string) => {
    setEducationYear((prev) => ({
      ...prev,
      textColor: payload,
    }));
  };
  const changeEducationYearFontSize = (payload: number) => {
    setEducationYear((prev) => ({
      ...prev,
      fontSize: payload,
    }));
  };
  const changeEducationYearFontWeight = (payload: number) => {
    setEducationYear((prev) => ({
      ...prev,
      fontWeight: payload,
    }));
  };

  /* ---- Skills section data (3)  ---- */

  // 1 - Skills Toolbar data
  const [skillsToolBar, setSkillsToolBar] = useState<string | null>(null);
  const changeActiveSkillsToolbar = (payload: string) => {
    setSkillsToolBar(payload);
  };

  // 2 - Skills title
  const [skillsTitle, setSkillsTitle] = useState<textType>({
    textColor: "#000000",
    fontSize: 20,
    fontWeight: 800,
  });
  const changeSkillsTitleFontColor = (payload: string) => {
    setSkillsTitle((prev) => ({
      ...prev,
      textColor: payload,
    }));
  };
  const changeSkillsTitleFontSize = (payload: number) => {
    setSkillsTitle((prev) => ({
      ...prev,
      fontSize: payload,
    }));
  };
  const changeSkillsTitleFontWeight = (payload: number) => {
    setSkillsTitle((prev) => ({
      ...prev,
      fontWeight: payload,
    }));
  };
  // 3 - Skills list data
  const [skillsList, setSkillsList] = useState<textType>({
    textColor: "#000000",
    fontSize: 13,
    fontWeight: 200,
  });
  const changeSkillsListFontColor = (payload: string) => {
    setSkillsList((prev) => ({
      ...prev,
      textColor: payload,
    }));
  };
  const changeSkillsListFontSize = (payload: number) => {
    setSkillsList((prev) => ({
      ...prev,
      fontSize: payload,
    }));
  };
  const changeSkillsListFontWeight = (payload: number) => {
    setSkillsList((prev) => ({
      ...prev,
      fontWeight: payload,
    }));
  };

  return (
    <div className="w-screen h-screen bg-white flex-center">
      <HomePageContext.Provider
        value={{
          handleClickOnProfil,
          handleResetProfil,
          handleClickOnExperience,
          handleResetExperience,
          handleClickOnEducation,
          handleResetEducation,
          handleClickOnSkills,
          handleResetSkills,
          changeActiveToolbar,
          isProfilShown,
          isExperienceShown,
          isEducationShown,
          isSkillShown,
          activeToolbar,
          //profile data
          profilToolBar,
          profilTitle,
          profilSubTitle,
          changeActiveProfilToolbar,
          changeProfilTitleColor,
          changeProfilTitleSize,
          changeProfilTitleWeight,
          changeProfilSubTitleColor,
          changeProfilSubTitleSize,
          changeProfilSubTitleWeight,
          // experience Data
          experienceToolBar,
          experienceTitle,
          experienceJob,
          experienceCompany,
          experienceDate,
          experienceDescription,
          changeActiveExperienceToolbar,
          changeExperienceTitleColor,
          changeExperienceTitleFontSize,
          changeExperienceTitleFontWeight,
          changeExperienceJobColor,
          changeExperienceJobFontSize,
          changeExperienceJobFontWeight,
          changeExperienceCompanyColor,
          changeExperienceCompanyFontSize,
          changeExperienceCompanyFontWeight,
          changeExperienceDateColor,
          changeExperienceDateFontSize,
          changeExperienceDateFontWeight,
          changeExperienceDescriptionColor,
          changeExperienceDescriptionFontSize,
          changeExperienceDescriptionFontWeight,
          // Education data
          educationToolBar,
          educationTitle,
          educationDegree,
          educationSchool,
          educationYear,
          changeActiveEducationToolbar,
          changeEducationTitleFontColor,
          changeEducationTitleFontSize,
          changeEducationTitleFontWeight,
          changeEducationDegreeFontColor,
          changeEducationDegreeFontSize,
          changeEducationDegreeFontWeight,
          changeEducationSchoolFontColor,
          changeEducationSchoolFontSize,
          changeEducationSchoolFontWeight,
          changeEducationYearFontColor,
          changeEducationYearFontSize,
          changeEducationYearFontWeight,
          // Skills data
          skillsToolBar,
          skillsTitle,
          skillsList,
          changeActiveSkillsToolbar,
          changeSkillsTitleFontColor,
          changeSkillsTitleFontSize,
          changeSkillsTitleFontWeight,
          changeSkillsListFontColor,
          changeSkillsListFontSize,
          changeSkillsListFontWeight,
        }}
      >
        <LeftSideBar />
        <MainComponents />
      </HomePageContext.Provider>
    </div>
  );
};

export default Home;
