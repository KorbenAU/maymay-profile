import React from "react";
import Image from "next/image";

const AboutMeCard = ({text, index, imagePath, title}) => {
    return (
        <div className={"col-start-3 col-span-8 flex items-center justify-between mt-7"}>
            {
                index % 2 === 0 ? (
                    <>
                        <div className={"flex flex-col pl-10"}>
                            <span className={"inline-block text-4xl mb-3"}>{title}</span>
                            <span className={"inline-block text-2xl"}>{text}</span>
                        </div>
                        <div className={""}>
                            <Image
                                className={"h-full w-full"}
                                src={imagePath}
                                alt="image"
                                width={"300"}
                                height={"200"}/>
                        </div>
                    </>
                ) : (
                    <>
                        <div className={""}>
                            <Image
                                className={""}
                                src={imagePath}
                                alt="image"
                                width={"400"}
                                height={"400"}/>
                        </div>
                        <div className={"flex flex-col pr-10"}>
                            <span className={"inline-block text-4xl mb-3"}>{title}</span>
                            <span className={"inline-block text-2xl"}>{text}</span>
                        </div>
                    </>
                )
            }

        </div>
    );
};

export default AboutMeCard;
