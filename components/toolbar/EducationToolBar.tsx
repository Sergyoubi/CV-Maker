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

const EducationToolBar = () => {
  //context
  const context = useContext(HomePageContext);
  if (!context) {
    throw new Error("Profils must be used within a HomePageContext.Provider");
  }

  const {
    educationToolBar,
    /*----*/
    changeEducationTitleFontColor,
    changeEducationTitleFontSize,
    changeEducationTitleFontWeight,
    /*----*/
    changeEducationDegreeFontColor,
    changeEducationDegreeFontSize,
    changeEducationDegreeFontWeight,
    /*----*/
    changeEducationSchoolFontColor,
    changeEducationSchoolFontSize,
    changeEducationSchoolFontWeight,
    /*----*/
    changeEducationYearFontColor,
    changeEducationYearFontSize,
    changeEducationYearFontWeight,
  } = context;

  // These states will hold value from each paragraph's toolBar (each text/paragraph has its own toolBar)
  // states for title
  const [titleColor, setTitleColor] = useColor("#000000");
  const [titleFontSize, setTitleFontSize] = useState<number>(20);
  const [titleFontWeight, setTitleFontWeight] = useState<number>(800);
  // states for Degree
  const [degreeColor, setDegreeColor] = useColor("#000000");
  const [degreeFontSize, setDegreeFontSize] = useState<number>(12);
  const [degreeFontWeight, setDegreeFontWeight] = useState<number>(400);
  // states for School
  const [schoolColor, setSchoolColor] = useColor("#000000");
  const [schoolFontSize, setSchoolFontSize] = useState<number>(12);
  const [schoolFontWeight, setSchoolFontWeight] = useState<number>(100);
  // states for Year
  const [educationYearColor, setEducationYearColor] = useColor("#000000");
  const [educationYearFontSize, setEducationYearFontSize] =
    useState<number>(11);
  const [educationYearFontWeight, setEducationYearFontWeight] =
    useState<number>(100);

  // useEffect for Title
  useEffect(() => {
    changeEducationTitleFontColor(titleColor.hex);
  }, [titleColor]);

  useEffect(() => {
    changeEducationTitleFontSize(titleFontSize);
  }, [titleFontSize]);

  useEffect(() => {
    changeEducationTitleFontWeight(titleFontWeight);
  }, [titleFontWeight]);

  // useEffect for Degree
  useEffect(() => {
    changeEducationDegreeFontColor(degreeColor.hex);
  }, [degreeColor]);

  useEffect(() => {
    changeEducationDegreeFontSize(degreeFontSize);
  }, [degreeFontSize]);

  useEffect(() => {
    changeEducationDegreeFontWeight(degreeFontWeight);
  }, [degreeFontWeight]);

  // useEffect for School
  useEffect(() => {
    changeEducationSchoolFontColor(schoolColor.hex);
  }, [schoolColor]);

  useEffect(() => {
    changeEducationSchoolFontSize(schoolFontSize);
  }, [schoolFontSize]);

  useEffect(() => {
    changeEducationSchoolFontWeight(schoolFontWeight);
  }, [schoolFontWeight]);

  // useEffect for Year of graduation
  useEffect(() => {
    changeEducationYearFontColor(educationYearColor.hex);
  }, [educationYearColor]);

  useEffect(() => {
    changeEducationYearFontSize(educationYearFontSize);
  }, [educationYearFontSize]);

  useEffect(() => {
    changeEducationYearFontWeight(educationYearFontWeight);
  }, [educationYearFontWeight]);

  return (
    <>
      {educationToolBar === "title" ? (
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
      {educationToolBar === "degree" ? (
        <div className="w-[25%] h-[80%] 4xl:w-[18%] bg-white flex justify-around items-center rounded-lg">
          <Popover>
            <PopoverTrigger className="h-full">
              <section className="w-[2.5rem] h-[86%] bg-slate-100 hover:bg-slate-200 rounded-md flex flex-col justify-center items-center cursor-pointer">
                <p className="text-[1.1rem] font-bold text-slate-900 select-none">
                  A
                </p>
                <div
                  style={{ backgroundColor: degreeColor.hex }}
                  className="w-[70%] h-[40%] 4xl:h-[25%] rounded-2xl relative bottom-1"
                ></div>
              </section>
            </PopoverTrigger>
            <PopoverContent>
              <ColorPicker color={degreeColor} onChange={setDegreeColor} />
            </PopoverContent>
          </Popover>
          <section className="w-[40%] h-[86%] border border-slate-100 rounded-md flex-center">
            <div
              onClick={() =>
                setDegreeFontSize((prev) => (prev > 5 ? prev - 1 : prev))
              }
              className="w-full h-full hover:bg-slate-50 flex-center cursor-pointer"
            >
              <HiOutlineMinusSmall className="text-[1.1rem] text-slate-700" />
            </div>
            <div className="w-full h-full flex-center">
              <p className="text-sm text-slate-800 font-normal select-none">
                {degreeFontSize}
              </p>
            </div>
            <div
              onClick={() =>
                setDegreeFontSize((prev) => (prev < 30 ? prev + 1 : prev))
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
                  style={{ fontWeight: degreeFontWeight }}
                  className="text-[1.2rem] text-slate-900 select-none"
                >
                  B
                </p>
              </section>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel
                className="cursor-pointer"
                onClick={() => setDegreeFontWeight(800)}
              >
                <p className="text-base font-bold text-slate-900">Bold</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel
                className="cursor-pointer"
                onClick={() => setDegreeFontWeight(600)}
              >
                <p className="text-base font-medium text-slate-900">Medium</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel
                className="cursor-pointer"
                onClick={() => setDegreeFontWeight(300)}
              >
                <p className="text-base font-normal text-slate-900">Normal</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel
                className="cursor-pointer"
                onClick={() => setDegreeFontWeight(100)}
              >
                <p className="text-base font-thin text-slate-900">Thin</p>
              </DropdownMenuLabel>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : null}
      {educationToolBar === "school" ? (
        <div className="w-[25%] h-[80%] 4xl:w-[18%] bg-white flex justify-around items-center rounded-lg">
          <Popover>
            <PopoverTrigger className="h-full">
              <section className="w-[2.5rem] h-[86%] bg-slate-100 hover:bg-slate-200 rounded-md flex flex-col justify-center items-center cursor-pointer">
                <p className="text-[1.1rem] font-bold text-slate-900 select-none">
                  A
                </p>
                <div
                  style={{ backgroundColor: schoolColor.hex }}
                  className="w-[70%] h-[40%] 4xl:h-[25%] rounded-2xl relative bottom-1"
                ></div>
              </section>
            </PopoverTrigger>
            <PopoverContent>
              <ColorPicker color={schoolColor} onChange={setSchoolColor} />
            </PopoverContent>
          </Popover>
          <section className="w-[40%] h-[86%] border border-slate-100 rounded-md flex-center">
            <div
              onClick={() =>
                setSchoolFontSize((prev) => (prev > 5 ? prev - 1 : prev))
              }
              className="w-full h-full hover:bg-slate-50 flex-center cursor-pointer"
            >
              <HiOutlineMinusSmall className="text-[1.1rem] text-slate-700" />
            </div>
            <div className="w-full h-full flex-center">
              <p className="text-sm text-slate-800 font-normal select-none">
                {schoolFontSize}
              </p>
            </div>
            <div
              onClick={() =>
                setSchoolFontSize((prev) => (prev < 30 ? prev + 1 : prev))
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
                  style={{ fontWeight: schoolFontWeight }}
                  className="text-[1.2rem] text-slate-900 select-none"
                >
                  B
                </p>
              </section>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel
                className="cursor-pointer"
                onClick={() => setSchoolFontWeight(800)}
              >
                <p className="text-base font-bold text-slate-900">Bold</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel
                className="cursor-pointer"
                onClick={() => setSchoolFontWeight(600)}
              >
                <p className="text-base font-medium text-slate-900">Medium</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel
                className="cursor-pointer"
                onClick={() => setSchoolFontWeight(300)}
              >
                <p className="text-base font-normal text-slate-900">Normal</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel
                className="cursor-pointer"
                onClick={() => setSchoolFontWeight(100)}
              >
                <p className="text-base font-thin text-slate-900">Thin</p>
              </DropdownMenuLabel>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : null}
      {educationToolBar === "year" ? (
        <div className="w-[25%] h-[80%] 4xl:w-[18%] bg-white flex justify-around items-center rounded-lg">
          <Popover>
            <PopoverTrigger className="h-full">
              <section className="w-[2.5rem] h-[86%] bg-slate-100 hover:bg-slate-200 rounded-md flex flex-col justify-center items-center cursor-pointer">
                <p className="text-[1.1rem] font-bold text-slate-900 select-none">
                  A
                </p>
                <div
                  style={{ backgroundColor: educationYearColor.hex }}
                  className="w-[70%] h-[40%] 4xl:h-[25%] rounded-2xl relative bottom-1"
                ></div>
              </section>
            </PopoverTrigger>
            <PopoverContent>
              <ColorPicker
                color={educationYearColor}
                onChange={setEducationYearColor}
              />
            </PopoverContent>
          </Popover>
          <section className="w-[40%] h-[86%] border border-slate-100 rounded-md flex-center">
            <div
              onClick={() =>
                setEducationYearFontSize((prev) => (prev > 5 ? prev - 1 : prev))
              }
              className="w-full h-full hover:bg-slate-50 flex-center cursor-pointer"
            >
              <HiOutlineMinusSmall className="text-[1.1rem] text-slate-700" />
            </div>
            <div className="w-full h-full flex-center">
              <p className="text-sm text-slate-800 font-normal select-none">
                {educationYearFontSize}
              </p>
            </div>
            <div
              onClick={() =>
                setEducationYearFontSize((prev) =>
                  prev < 30 ? prev + 1 : prev
                )
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
                  style={{ fontWeight: educationYearFontWeight }}
                  className="text-[1.2rem] text-slate-900 select-none"
                >
                  B
                </p>
              </section>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel
                className="cursor-pointer"
                onClick={() => setEducationYearFontWeight(800)}
              >
                <p className="text-base font-bold text-slate-900">Bold</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel
                className="cursor-pointer"
                onClick={() => setEducationYearFontWeight(600)}
              >
                <p className="text-base font-medium text-slate-900">Medium</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel
                className="cursor-pointer"
                onClick={() => setEducationYearFontWeight(300)}
              >
                <p className="text-base font-normal text-slate-900">Normal</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel
                className="cursor-pointer"
                onClick={() => setEducationYearFontWeight(100)}
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

export default EducationToolBar;
