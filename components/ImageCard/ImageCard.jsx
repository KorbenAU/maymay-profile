import React from "react";
import Image from "next/image/";

const ImageCard = () => {
    return (
        <div className={"relative col-span-3 h-64 mt-12 rounded-3xl overflow-hidden opacity-70"}>
            <Image
                className={"h-full w-full"}
                // src={getUnsplashUrl(PHOTO_ID.HOME_PAGE_BG_IMG, width, height)}
                src={"https://source.unsplash.com/random"}
                alt="panther"
                layout="fill"
                objectFit={"cover"}
                objectPosition={"center"}/>
        </div>
    );
};

export default ImageCard;
