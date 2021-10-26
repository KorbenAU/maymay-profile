import React, {useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import Image from "next/image";

const NavItem = ({href, title}) => {
    const [isHovering, setIsHovering] = useState(false);
    const [isKeyDown, setIsKeyDown] = useState(false);
    const router = useRouter();
    let active = router.pathname === href;

    return (
        <Link href={href}>
            <a
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onMouseDown={() => {
                    console.log("key down");
                    setIsKeyDown(true);
                }}
                onMouseUp={() => {
                    console.log("key up");
                    setIsKeyDown(false);
                }}
                className={`relative overflow-hidden text-black ml-11 w-36 h-16 text-center rounded-xl 
                ${isHovering ? "shadow-lg" : "shadow-xl"} 
                ${active ? "font-bold" : ""} 
                ${isKeyDown ? "shadow-inner" : "shadow-lg"}`}>
                <div className={'w-full h-full relative flex items-center justify-center'}>
                    <Image
                        className={"absolute z-0 h-full w-full"}
                        // src={getUnsplashUrl(PHOTO_ID.HOME_PAGE_BG_IMG, width, height)}
                        src={"/images/paper_texture.jpeg"}
                        alt="panther"
                        layout="fill"
                        objectFit={"cover"}
                        objectPosition={"center"}/>
                    <div className={"absolute z-10 bg-isabelline opacity-70 h-full w-full"}/>
                    <span className={"relative z-20 h-full w-full flex items-center justify-center"}>{title}</span>
                </div>
            </a>
        </Link>
    );
};

export default NavItem;
