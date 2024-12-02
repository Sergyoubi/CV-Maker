"use client";
import { GoPlus } from "react-icons/go";
import { HiOutlineMinusSmall } from "react-icons/hi2";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HomePageContext } from "@/app/(Home)/page";
import { useContext, useEffect, useState } from "react";

const ExperienceToolBar = () => {
  //context
  const context = useContext(HomePageContext);
  if (!context) {
    throw new Error("Profils must be used within a HomePageContext.Provider");
  }

  const {
    experienceToolBar,
    /*----*/
    changeExperienceTitleColor,
    changeExperienceTitleFontSize,
    changeExperienceTitleFontWeight,
    /*----*/
    changeExperienceJobColor,
    changeExperienceJobFontSize,
    changeExperienceJobFontWeight,
    /*----*/
    changeExperienceCompanyColor,
    changeExperienceCompanyFontSize,
    changeExperienceCompanyFontWeight,
    /*---*/
    changeExperienceDateColor,
    changeExperienceDateFontSize,
    changeExperienceDateFontWeight,
    /*---*/
    changeExperienceDescriptionColor,
    changeExperienceDescriptionFontSize,
    changeExperienceDescriptionFontWeight,
  } = context;
  // These states will hold value from each paragraph's toolBar (one text/paragraph  = one toolBar)
  // states for title
  const [titleColor, setTitleColor] = useColor("#000000");
  const [titleFontSize, setTitleFontSize] = useState<number>(20);
  const [titleFontWeight, setTitleFontWeight] = useState<number>(800);
  // states for job
  const [jobColor, setJobColor] = useColor("#000000");
  const [jobFontSize, setJobFontSize] = useState<number>(16);
  const [jobFontWeight, setJobFontWeight] = useState<number>(500);
  // states for company
  const [companyColor, setCompanyColor] = useColor("#000000");
  const [companyFontSize, setCompanyFontSize] = useState<number>(16);
  const [companyFontWeight, setCompanyFontWeight] = useState<number>(500);
  // states for date
  const [dateColor, setDateColor] = useColor("#000000");
  const [dateFontSize, setDateFontSize] = useState<number>(14);
  const [dateFontWeight, setDateFontWeight] = useState<number>(100);
  // states for job description
  const [descriptionColor, setDescriptionColor] = useColor("#000000");
  const [descriptionFontSize, setDescriptionFontSize] = useState<number>(11);
  const [descriptionFontWeight, setDescriptionFontWeight] =
    useState<number>(100);

  // useEffect for Title
  useEffect(() => {
    changeExperienceTitleColor(titleColor.hex);
  }, [titleColor]);

  useEffect(() => {
    changeExperienceTitleFontSize(titleFontSize);
  }, [titleFontSize]);

  useEffect(() => {
    changeExperienceTitleFontWeight(titleFontWeight);
  }, [titleFontWeight]);

  // useEffect for Job
  useEffect(() => {
    changeExperienceJobColor(jobColor.hex);
  }, [jobColor]);

  useEffect(() => {
    changeExperienceJobFontSize(jobFontSize);
  }, [jobFontSize]);

  useEffect(() => {
    changeExperienceJobFontWeight(jobFontWeight);
  }, [jobFontWeight]);

  // useEffect for Company
  useEffect(() => {
    changeExperienceCompanyColor(companyColor.hex);
  }, [companyColor]);

  useEffect(() => {
    changeExperienceCompanyFontSize(companyFontSize);
  }, [companyFontSize]);

  useEffect(() => {
    changeExperienceCompanyFontWeight(companyFontWeight);
  }, [companyFontWeight]);

  // useEffect for Dates
  useEffect(() => {
    changeExperienceDateColor(dateColor.hex);
  }, [dateColor]);

  useEffect(() => {
    changeExperienceDateFontSize(dateFontSize);
  }, [dateFontSize]);

  useEffect(() => {
    changeExperienceDateFontWeight(dateFontWeight);
  }, [dateFontWeight]);

  // useEffect job description
  useEffect(() => {
    changeExperienceDescriptionColor(descriptionColor.hex);
  }, [descriptionColor]);

  useEffect(() => {
    changeExperienceDescriptionFontSize(descriptionFontSize);
  }, [descriptionFontSize]);

  useEffect(() => {
    changeExperienceDescriptionFontWeight(descriptionFontWeight);
  }, [descriptionFontWeight]);

  return (
    <>
      {experienceToolBar === "title" ? (
        <div className="w-[25%] h-[80%] 4xl:w-[18%] bg-white flex justify-around items-center rounded-lg">
          <Popover>
            <PopoverTrigger className="h-full">
              <section className="w-[2.5rem] h-[86%] bg-slate-100 hover:bg-slate-200 rounded-md flex flex-col justify-center items-center cursor-pointer">
                <p className="text-[1.1rem] font-bold text-slate-900 select-none">
                  A
                </p>
                <div
                  style={{ backgroundColor: titleColor.hex }}
                  className="w-[70%] h-[40%] 4xl:h-[25%] rounded-2xl relative bottom-1"
                ></div>
              </section>
            </PopoverTrigger>
            <PopoverContent>
              <ColorPicker color={titleColor} onChange={setTitleColor} />
            </PopoverContent>
          </Popover>
          <section className="w-[40%] h-[86%] border border-slate-100 rounded-md flex-center">
            <div
              onClick={() =>
                setTitleFontSize((prev) => (prev > 5 ? prev - 1 : prev))
              }
              className="w-full h-full hover:bg-slate-50 flex-center cursor-pointer"
            >
              <HiOutlineMinusSmall className="text-[1.1rem] text-slate-700" />
            </div>
            <div className="w-full h-full flex-center">
              <p className="text-sm text-slate-800 font-normal select-none">
                {titleFontSize}
              </p>
            </div>
            <div
              onClick={() =>
                setTitleFontSize((prev) => (prev < 30 ? prev + 1 : prev))
              }
              className="w-full h-full hover:bg-slate-50 flex-center cursor-pointer"
            >
              <GoPlus className="text-[1.1rem] text-slate-700" />
            </div>
          </section>
          <DropdownMenu>
            <DropdownMenuTrigger className="h-full">
              <section className="w-[2.5rem] h-[86%] bg-slate-100 hover:bg-slate-200 rounded-md flex flex-col justify-center items-center cursor-pointer">
                <p
                  style={{ fontWeight: titleFontWeight }}
                  className="text-[1.2rem] text-slate-900 select-none"
                >
                  B
                </p>
              </section>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel
                className="cursor-pointer"
                onClick={() => setTitleFontWeight(800)}
              >
                <p className="text-base font-bold text-slate-900">Bold</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel
                className="cursor-pointer"
                onClick={() => setTitleFontWeight(600)}
              >
                <p className="text-base font-medium text-slate-900">Medium</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel
                className="cursor-pointer"
                onClick={() => setTitleFontWeight(300)}
              >
                <p className="text-base font-normal text-slate-900">Normal</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel
                className="cursor-pointer"
                onClick={() => setTitleFontWeight(100)}
              >
                <p className="text-base font-thin text-slate-900">Thin</p>
              </DropdownMenuLabel>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : null}

      {experienceToolBar === "job" ? (
        <div className="w-[25%] h-[80%] 4xl:w-[18%] bg-white flex justify-around items-center rounded-lg">
          <Popover>
            <PopoverTrigger className="h-full">
              <section className="w-[2.5rem] h-[86%] bg-slate-100 hover:bg-slate-200 rounded-md flex flex-col justify-center items-center cursor-pointer">
                <p className="text-[1.1rem] font-bold text-slate-900 select-none">
                  A
                </p>
                <div
                  style={{ backgroundColor: jobColor.hex }}
                  className="w-[70%] h-[40%] 4xl:h-[25%] rounded-2xl relative bottom-1"
                ></div>
              </section>
            </PopoverTrigger>
            <PopoverContent>
              <ColorPicker color={jobColor} onChange={setJobColor} />
            </PopoverContent>
          </Popover>
          <section className="w-[40%] h-[86%] border border-slate-100 rounded-md flex-center">
            <div
              onClick={() =>
                setJobFontSize((prev) => (prev > 5 ? prev - 1 : prev))
              }
              className="w-full h-full hover:bg-slate-50 flex-center cursor-pointer"
            >
              <HiOutlineMinusSmall className="text-[1.1rem] text-slate-700" />
            </div>
            <div className="w-full h-full flex-center">
              <p className="text-sm text-slate-800 font-normal select-none">
                {jobFontSize}
              </p>
            </div>
            <div
              onClick={() =>
                setJobFontSize((prev) => (prev < 30 ? prev + 1 : prev))
              }
              className="w-full h-full hover:bg-slate-50 flex-center cursor-pointer"
            >
              <GoPlus className="text-[1.1rem] text-slate-700" />
            </div>
          </section>
          <DropdownMenu>
            <DropdownMenuTrigger className="h-full">
              <section className="w-[2.5rem] h-[86%] bg-slate-100 hover:bg-slate-200 rounded-md flex flex-col justify-center items-center cursor-pointer">
                <p
                  style={{ fontWeight: jobFontWeight }}
                  className="text-[1.2rem] text-slate-900 select-none"
                >
                  B
                </p>
              </section>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel
                className="cursor-pointer"
                onClick={() => setJobFontWeight(800)}
              >
                <p className="text-base font-bold text-slate-900">Bold</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel
                className="cursor-pointer"
                onClick={() => setJobFontWeight(600)}
              >
                <p className="text-base font-medium text-slate-900">Medium</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel
                className="cursor-pointer"
                onClick={() => setJobFontWeight(300)}
              >
                <p className="text-base font-normal text-slate-900">Normal</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel
                className="cursor-pointer"
                onClick={() => setJobFontWeight(100)}
              >
                <p className="text-base font-thin text-slate-900">Thin</p>
              </DropdownMenuLabel>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : null}

      {experienceToolBar === "company" ? (
        <div className="w-[25%] h-[80%] 4xl:w-[18%] bg-white flex justify-around items-center rounded-lg">
          <Popover>
            <PopoverTrigger className="h-full">
              <section className="w-[2.5rem] h-[86%] bg-slate-100 hover:bg-slate-200 rounded-md flex flex-col justify-center items-center cursor-pointer">
                <p className="text-[1.1rem] font-bold text-slate-900 select-none">
                  A
                </p>
                <div
                  style={{ backgroundColor: companyColor.hex }}
                  className="w-[70%] h-[40%] 4xl:h-[25%] rounded-2xl relative bottom-1"
                ></div>
              </section>
            </PopoverTrigger>
            <PopoverContent>
              <ColorPicker color={companyColor} onChange={setCompanyColor} />
            </PopoverContent>
          </Popover>
          <section className="w-[40%] h-[86%] border border-slate-100 rounded-md flex-center">
            <div
              onClick={() =>
                setCompanyFontSize((prev) => (prev > 5 ? prev - 1 : prev))
              }
              className="w-full h-full hover:bg-slate-50 flex-center cursor-pointer"
            >
              <HiOutlineMinusSmall className="text-[1.1rem] text-slate-700" />
            </div>
            <div className="w-full h-full flex-center">
              <p className="text-sm text-slate-800 font-normal select-none">
                {companyFontSize}
              </p>
            </div>
            <div
              onClick={() =>
                setCompanyFontSize((prev) => (prev < 30 ? prev + 1 : prev))
              }
              className="w-full h-full hover:bg-slate-50 flex-center cursor-pointer"
            >
              <GoPlus className="text-[1.1rem] text-slate-700" />
            </div>
          </section>
          <DropdownMenu>
            <DropdownMenuTrigger className="h-full">
              <section className="w-[2.5rem] h-[86%] bg-slate-100 hover:bg-slate-200 rounded-md flex flex-col justify-center items-center cursor-pointer">
                <p
                  style={{ fontWeight: companyFontWeight }}
                  className="text-[1.2rem] text-slate-900 select-none"
                >
                  B
                </p>
              </section>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel
                className="cursor-pointer"
                onClick={() => setTitleFontWeight(800)}
              >
                <p className="text-base font-bold text-slate-900">Bold</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel
                className="cursor-pointer"
                onClick={() => setCompanyFontWeight(600)}
              >
                <p className="text-base font-medium text-slate-900">Medium</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel
                className="cursor-pointer"
                onClick={() => setCompanyFontWeight(300)}
              >
                <p className="text-base font-normal text-slate-900">Normal</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel
                className="cursor-pointer"
                onClick={() => setCompanyFontWeight(100)}
              >
                <p className="text-base font-thin text-slate-900">Thin</p>
              </DropdownMenuLabel>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : null}

      {experienceToolBar === "date" ? (
        <div className="w-[25%] h-[80%] 4xl:w-[18%] bg-white flex justify-around items-center rounded-lg">
          <Popover>
            <PopoverTrigger className="h-full">
              <section className="w-[2.5rem] h-[86%] bg-slate-100 hover:bg-slate-200 rounded-md flex flex-col justify-center items-center cursor-pointer">
                <p className="text-[1.1rem] font-bold text-slate-900 select-none">
                  A
                </p>
                <div
                  style={{ backgroundColor: dateColor.hex }}
                  className="w-[70%] h-[40%] 4xl:h-[25%] rounded-2xl relative bottom-1"
                ></div>
              </section>
            </PopoverTrigger>
            <PopoverContent>
              <ColorPicker color={dateColor} onChange={setDateColor} />
            </PopoverContent>
          </Popover>
          <section className="w-[40%] h-[86%] border border-slate-100 rounded-md flex-center">
            <div
              onClick={() =>
                setDateFontSize((prev) => (prev > 5 ? prev - 1 : prev))
              }
              className="w-full h-full hover:bg-slate-50 flex-center cursor-pointer"
            >
              <HiOutlineMinusSmall className="text-[1.1rem] text-slate-700" />
            </div>
            <div className="w-full h-full flex-center">
              <p className="text-sm text-slate-800 font-normal select-none">
                {dateFontSize}
              </p>
            </div>
            <div
              onClick={() =>
                setDateFontSize((prev) => (prev < 30 ? prev + 1 : prev))
              }
              className="w-full h-full hover:bg-slate-50 flex-center cursor-pointer"
            >
              <GoPlus className="text-[1.1rem] text-slate-700" />
            </div>
          </section>
          <DropdownMenu>
            <DropdownMenuTrigger className="h-full">
              <section className="w-[2.5rem] h-[86%] bg-slate-100 hover:bg-slate-200 rounded-md flex flex-col justify-center items-center cursor-pointer">
                <p
                  style={{ fontWeight: dateFontWeight }}
                  className="text-[1.2rem] text-slate-900 select-none"
                >
                  B
                </p>
              </section>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel
                className="cursor-pointer"
                onClick={() => setDateFontWeight(800)}
              >
                <p className="text-base font-bold text-slate-900">Bold</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel
                className="cursor-pointer"
                onClick={() => setDateFontWeight(600)}
              >
                <p className="text-base font-medium text-slate-900">Medium</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel
                className="cursor-pointer"
                onClick={() => setDateFontWeight(300)}
              >
                <p className="text-base font-normal text-slate-900">Normal</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel
                className="cursor-pointer"
                onClick={() => setDateFontWeight(100)}
              >
                <p className="text-base font-thin text-slate-900">Thin</p>
              </DropdownMenuLabel>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : null}

      {experienceToolBar === "description" ? (
        <div className="w-[25%] h-[80%] 4xl:w-[18%] bg-white flex justify-around items-center rounded-lg">
          <Popover>
            <PopoverTrigger className="h-full">
              <section className="w-[2.5rem] h-[86%] bg-slate-100 hover:bg-slate-200 rounded-md flex flex-col justify-center items-center cursor-pointer">
                <p className="text-[1.1rem] font-bold text-slate-900 select-none">
                  A
                </p>
                <div
                  style={{ backgroundColor: descriptionColor.hex }}
                  className="w-[70%] h-[40%] 4xl:h-[25%] rounded-2xl relative bottom-1"
                ></div>
              </section>
            </PopoverTrigger>
            <PopoverContent>
              <ColorPicker
                color={descriptionColor}
                onChange={setDescriptionColor}
              />
            </PopoverContent>
          </Popover>
          <section className="w-[40%] h-[86%] border border-slate-100 rounded-md flex-center">
            <div
              onClick={() =>
                setDescriptionFontSize((prev) => (prev > 5 ? prev - 1 : prev))
              }
              className="w-full h-full hover:bg-slate-50 flex-center cursor-pointer"
            >
              <HiOutlineMinusSmall className="text-[1.1rem] text-slate-700" />
            </div>
            <div className="w-full h-full flex-center">
              <p className="text-sm text-slate-800 font-normal select-none">
                {descriptionFontSize}
              </p>
            </div>
            <div
              onClick={() =>
                setDescriptionFontSize((prev) => (prev < 30 ? prev + 1 : prev))
              }
              className="w-full h-full hover:bg-slate-50 flex-center cursor-pointer"
            >
              <GoPlus className="text-[1.1rem] text-slate-700" />
            </div>
          </section>
          <DropdownMenu>
            <DropdownMenuTrigger className="h-full">
              <section className="w-[2.5rem] h-[86%] bg-slate-100 hover:bg-slate-200 rounded-md flex flex-col justify-center items-center cursor-pointer">
                <p
                  style={{ fontWeight: descriptionFontWeight }}
                  className="text-[1.2rem] text-slate-900 select-none"
                >
                  B
                </p>
              </section>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel
                className="cursor-pointer"
                onClick={() => setDescriptionFontWeight(800)}
              >
                <p className="text-base font-bold text-slate-900">Bold</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel
                className="cursor-pointer"
                onClick={() => setDescriptionFontWeight(600)}
              >
                <p className="text-base font-medium text-slate-900">Medium</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel
                className="cursor-pointer"
                onClick={() => setDescriptionFontWeight(300)}
              >
                <p className="text-base font-normal text-slate-900">Normal</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel
                className="cursor-pointer"
                onClick={() => setDescriptionFontWeight(100)}
              >
                <p className="text-base font-thin text-slate-900">Thin</p>
              </DropdownMenuLabel>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : null}
    </>
  );
};

export default ExperienceToolBar;
