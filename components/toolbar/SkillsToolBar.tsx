"use client";
import { GoPlus } from "react-icons/go";
import { HiOutlineMinusSmall } from "react-icons/hi2";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
import { useContext, useEffect, useState } from "react";
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

const SkillsToolBar = () => {
  //context
  const context = useContext(HomePageContext);
  if (!context) {
    throw new Error("Profils must be used within a HomePageContext.Provider");
  }
  const {
    skillsToolBar,
    /*----*/
    changeSkillsTitleFontColor,
    changeSkillsTitleFontSize,
    changeSkillsTitleFontWeight,
    /*----*/
    changeSkillsListFontColor,
    changeSkillsListFontSize,
    changeSkillsListFontWeight,
  } = context;
  // states for skills title
  const [titleColor, setTitleColor] = useColor("#000000");
  const [titleFontSize, setTitleFontSize] = useState<number>(20);
  const [titleFontWeight, setTitleFontWeight] = useState<number>(800);
  // states for Skills list
  const [skillsListColor, setSkillsListColor] = useColor("#000000");
  const [skillsListFontSize, setSkillsListFontSize] = useState<number>(13);
  const [skillsListFontWeight, setSkillsListFontWeight] = useState<number>(200);

  // useEffect for Skill title
  useEffect(() => {
    changeSkillsTitleFontColor(titleColor.hex);
  }, [titleColor]);

  useEffect(() => {
    changeSkillsTitleFontSize(titleFontSize);
  }, [titleFontSize]);

  useEffect(() => {
    changeSkillsTitleFontWeight(titleFontWeight);
  }, [titleFontWeight]);

  // useEffect for Skill list
  useEffect(() => {
    changeSkillsListFontColor(skillsListColor.hex);
  }, [skillsListColor]);

  useEffect(() => {
    changeSkillsListFontSize(skillsListFontSize);
  }, [skillsListFontSize]);

  useEffect(() => {
    changeSkillsListFontWeight(skillsListFontWeight);
  }, [skillsListFontWeight]);
  return (
    <>
      {skillsToolBar === "title" ? (
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

      {skillsToolBar === "list" ? (
        <div className="w-[25%] h-[80%] 4xl:w-[18%] bg-white flex justify-around items-center rounded-lg">
          <Popover>
            <PopoverTrigger className="h-full">
              <section className="w-[2.5rem] h-[86%] bg-slate-100 hover:bg-slate-200 rounded-md flex flex-col justify-center items-center cursor-pointer">
                <p className="text-[1.1rem] font-bold text-slate-900 select-none">
                  A
                </p>
                <div
                  style={{ backgroundColor: skillsListColor.hex }}
                  className="w-[70%] h-[40%] 4xl:h-[25%] rounded-2xl relative bottom-1"
                ></div>
              </section>
            </PopoverTrigger>
            <PopoverContent>
              <ColorPicker
                color={skillsListColor}
                onChange={setSkillsListColor}
              />
            </PopoverContent>
          </Popover>
          <section className="w-[40%] h-[86%] border border-slate-100 rounded-md flex-center">
            <div
              onClick={() =>
                setSkillsListFontSize((prev) => (prev > 5 ? prev - 1 : prev))
              }
              className="w-full h-full hover:bg-slate-50 flex-center cursor-pointer"
            >
              <HiOutlineMinusSmall className="text-[1.1rem] text-slate-700" />
            </div>
            <div className="w-full h-full flex-center">
              <p className="text-sm text-slate-800 font-normal select-none">
                {skillsListFontSize}
              </p>
            </div>
            <div
              onClick={() =>
                setSkillsListFontSize((prev) => (prev < 30 ? prev + 1 : prev))
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
                  style={{ fontWeight: skillsListFontWeight }}
                  className="text-[1.2rem] text-slate-900 select-none"
                >
                  B
                </p>
              </section>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel
                className="cursor-pointer"
                onClick={() => setSkillsListFontWeight(800)}
              >
                <p className="text-base font-bold text-slate-900">Bold</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel
                className="cursor-pointer"
                onClick={() => setSkillsListFontWeight(600)}
              >
                <p className="text-base font-medium text-slate-900">Medium</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel
                className="cursor-pointer"
                onClick={() => setSkillsListFontWeight(300)}
              >
                <p className="text-base font-normal text-slate-900">Normal</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel
                className="cursor-pointer"
                onClick={() => setSkillsListFontWeight(100)}
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

export default SkillsToolBar;
