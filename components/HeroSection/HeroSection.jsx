import React from "react";
import {HERO_SECTION} from "../../utils/Constants";

const HeroSection = () => {
    return (
        <div className={"relative col-start-1 col-span-7 mt-48 rounded-2xl overflow-hidden shadow-2xl"}>
            <div className={"z-0 absolute h-full w-full bg-white opacity-50"}>
            </div>
            <span className={"relative inline-block z-10 text-4xl m-5 mt-12"}>{HERO_SECTION.TITLE}</span>
            <span className={"inline-block z-10 m-5 text-2xl mb-16"}>
                {HERO_SECTION.TEXT}
            </span>
        </div>
    );
};

export default HeroSection;
