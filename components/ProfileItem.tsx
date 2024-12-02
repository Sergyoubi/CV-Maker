"use client";
import { useContext, useState } from "react";
import Draggable from "react-draggable";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { HomePageContext } from "@/app/(Home)/page";

const ProfileItem = () => {
  // context
  const context = useContext(HomePageContext);
  if (!context) {
    throw new Error("Profils must be used within a HomePageContext.Provider");
  }
  const {
    handleResetProfil,
    changeActiveToolbar,
    changeActiveProfilToolbar,
    profilTitle,
    profilSubTitle,
  } = context;

  //states
  const [isProfileItemHovered, setIsProfileItemHovered] =
    useState<boolean>(false);
  const handleMouseEnter = () => {
    setIsProfileItemHovered(true);
  };
  const handleMouseLeave = () => {
    setIsProfileItemHovered(false);
  };

  return (
    <Draggable bounds={{ left: -80, right: 80 }}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => changeActiveToolbar("profil")}
        className="w-[60%] flex-center border-2 border-transparent hover:border-dashed hover:border-lime-400 cursor-grab"
      >
        <div className="w-[80%] flex flex-col justify-start items-start gap-1 flex-wrap">
          <p
            contentEditable={true}
            onClick={() => changeActiveProfilToolbar("title")}
            className="cursor-text focus:outline-2 focus:outline-blue-500"
            style={{
              color: profilTitle.textColor,
              fontSize: profilTitle.fontSize,
              fontWeight: profilTitle.fontWeight,
            }}
          >
            John Doe
          </p>
          <p
            contentEditable={true}
            onClick={() => changeActiveProfilToolbar("subtitle")}
            className="cursor-text focus:outline-2 focus:outline-blue-500"
            style={{
              color: profilSubTitle.textColor,
              fontSize: profilSubTitle.fontSize,
              fontWeight: profilSubTitle.fontWeight,
            }}
          >
            Résumé de votre profil Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Libero et tenetur alias numquam?
          </p>
        </div>
        <div className="w-[20%] flex flex-col justify-start items-center">
          {isProfileItemHovered ? (
            <RiDeleteBin2Fill
              onClick={handleResetProfil}
              className="text-red-500 hover:text-red-400 text-[1.3rem] relative left-6 bottom-5 cursor-pointer"
            />
          ) : null}
        </div>
      </div>
    </Draggable>
  );
};

export default ProfileItem;
