declare type textType = {
  textColor?: string;
  fontSize?: number;
  fontWeight?: number;
};

declare type ContextType = {
  handleClickOnProfil: () => void;
  handleResetProfil: () => void;
  handleClickOnExperience: () => void;
  handleResetExperience: () => void;
  handleClickOnEducation: () => void;
  handleResetEducation: () => void;
  handleClickOnSkills: () => void;
  handleResetSkills: () => void;
  changeActiveToolbar: (payload: string | null) => void;
  isProfilShown: boolean;
  isExperienceShown: boolean;
  isEducationShown: boolean;
  isSkillShown: boolean;
  activeToolbar: string | null;
  // Profile data
  profilToolBar: string | null;
  profilTitle: textType;
  profilSubTitle: textType;
  changeActiveProfilToolbar: (payload: string) => void;
  /* title */
  changeProfilTitleColor: (payload: string) => void;
  changeProfilTitleSize: (payload: number) => void;
  changeProfilTitleWeight: (payload: number) => void;
  /* subtitle */
  changeProfilSubTitleColor: (payload: string) => void;
  changeProfilSubTitleSize: (payload: number) => void;
  changeProfilSubTitleWeight: (payload: number) => void;
  /*--- xx ---*/

  /* Experience data */
  experienceToolBar: string | null;
  experienceTitle: textType;
  experienceJob: textType;
  experienceCompany: textType;
  experienceDate: textType;
  experienceDescription: textType;
  /* active toolbar */
  changeActiveExperienceToolbar: (payload: string) => void;
  /* title */
  changeExperienceTitleColor: (payload: string) => void;
  changeExperienceTitleFontSize: (payload: number) => void;
  changeExperienceTitleFontWeight: (payload: number) => void;
  /* job */
  changeExperienceJobColor: (payload: string) => void;
  changeExperienceJobFontSize: (payload: number) => void;
  changeExperienceJobFontWeight: (payload: number) => void;
  /* Company */
  changeExperienceCompanyColor: (payload: string) => void;
  changeExperienceCompanyFontSize: (payload: number) => void;
  changeExperienceCompanyFontWeight: (payload: number) => void;
  /* Date */
  changeExperienceDateColor: (payload: string) => void;
  changeExperienceDateFontSize: (payload: number) => void;
  changeExperienceDateFontWeight: (payload: number) => void;
  /* Job description */
  changeExperienceDescriptionColor: (payload: string) => void;
  changeExperienceDescriptionFontSize: (payload: number) => void;
  changeExperienceDescriptionFontWeight: (payload: number) => void;

  /*--- xx ---*/
  /* Education data */
  educationToolBar: string | null;
  educationTitle: textType;
  educationDegree: textType;
  educationSchool: textType;
  educationYear: textType;
  /* active toolbar */
  changeActiveEducationToolbar: (payload: string) => void;
  /* title */
  changeEducationTitleFontColor: (payload: string) => void;
  changeEducationTitleFontSize: (payload: number) => void;
  changeEducationTitleFontWeight: (payload: number) => void;
  /* Degree */
  changeEducationDegreeFontColor: (payload: string) => void;
  changeEducationDegreeFontSize: (payload: number) => void;
  changeEducationDegreeFontWeight: (payload: number) => void;
  /* School */
  changeEducationSchoolFontColor: (payload: string) => void;
  changeEducationSchoolFontSize: (payload: number) => void;
  changeEducationSchoolFontWeight: (payload: number) => void;
  /* Graduation year */
  changeEducationYearFontColor: (payload: string) => void;
  changeEducationYearFontSize: (payload: number) => void;
  changeEducationYearFontWeight: (payload: number) => void;

  /*--- xx ---*/
  /* Skills data */
  skillsToolBar: string | null;
  skillsTitle: textType;
  skillsList: textType;
  /* change active toolbar */
  changeActiveSkillsToolbar: (payload: string) => void;
  /* Skills title */
  changeSkillsTitleFontColor: (payload: string) => void;
  changeSkillsTitleFontSize: (payload: number) => void;
  changeSkillsTitleFontWeight: (payload: number) => void;
  /* Skills list */
  changeSkillsListFontColor: (payload: string) => void;
  changeSkillsListFontSize: (payload: number) => void;
  changeSkillsListFontWeight: (payload: number) => void;
};
