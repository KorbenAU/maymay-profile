import React, {useEffect, useState} from "react";
import Image from "next/image/";
import {PHOTO_ID} from "../../utils/Constants";

const getWindowSize = () => {
    const {innerWidth: width, innerHeight: height} = window;
    return {width, height};
};

const Background = ({bgPath}) => {
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();
    if (!bgPath) {
        bgPath = PHOTO_ID.HOME_PAGE_BG_IMG;
    }

    useEffect(() => {
        const {width, height} = getWindowSize();
        setWidth(width);
        setHeight(height);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            const {width, height} = getWindowSize();
            setWidth(width);
            setHeight(height);
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (width && height) {
        return (
            <>
                <div className={"z-0 absolute h-full w-full"}>
                    <Image
                        className={"h-full w-full"}
                        src={bgPath}
                        alt="panther"
                        layout="fill"
                        objectFit={"cover"}
                        objectPosition={"center -400px"}/>
                </div>
                <div
                    className={"z-10 absolute h-full w-full bg-gradient-to-b from-platinum to-transparent bg-opacity-60 blur-3xl"}/>
            </>
        );
    } else {
        return <div/>;
    }

};

export default Background;
