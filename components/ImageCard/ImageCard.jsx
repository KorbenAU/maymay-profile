import React from "react";
import Image from "next/image/";

const ImageCard = ({imagePath, date, onClick}) => {
    return (
        <div className={"relative col-span-3 h-72 mt-12 rounded-3xl overflow-hidden"} onClick={onClick}>
            <Image
                className={"h-full w-full"}
                src={imagePath}
                alt="panther"
                width={"400"}
                height={"400"}
            />
            <div className={"z-30 relative ml-2"}>
                <span>{date}</span>
            </div>
        </div>
    );
};

export default ImageCard;
