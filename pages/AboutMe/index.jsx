import React from "react";
import MainLayout from "../../components/Layout/MainLayout";
import MainContainer from "../../components/Containers/MainContainer";
import AboutMeCard from "../../components/AboutMeCard/AboutMeCard";
import {ABOUT_ME, PHOTO_ID} from "../../utils/Constants";

const AboutMe = () => {
    return (
        <MainLayout bgPath={PHOTO_ID.ABOUT_ME_BG_IMG}>
            <MainContainer>
                {
                    ABOUT_ME.map((item, index) => (
                        <AboutMeCard key={index} index={index} imagePath={item.imagePath} text={item.text}
                                     title={item.title}/>
                    ))
                }
            </MainContainer>
        </MainLayout>
    );
};

export default AboutMe;
