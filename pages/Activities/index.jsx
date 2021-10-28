import React from "react";
import MainLayout from "../../components/Layout/MainLayout";
import MainContainer from "../../components/Containers/MainContainer";
import ReactPlayer from "react-player";
import {PHOTO_ID} from "../../utils/Constants";

const ActivitiesPage = () => {
    return (
        <MainLayout bgPath={PHOTO_ID.ABOUT_ME_BG_IMG}>
            <MainContainer>
                <div className={"col-span-12 mt-7 flex flex-wrap items-center justify-center"}>
                    <div className={"mt-2 mx-2"}><ReactPlayer url="https://youtu.be/cku-b6mCxfw"/></div>
                    <div className={"mt-2 mx-2"}><ReactPlayer url="https://youtu.be/w_h5BOAa1xY"/></div>
                    <div className={"mt-2 mx-2"}><ReactPlayer url="https://youtu.be/eg6uuoJcWtA"/></div>
                    <div className={"mt-2 mx-2"}><ReactPlayer url="https://youtu.be/qE-1FOyyhvQ"/></div>
                    <div className={"mt-2 mx-2"}><ReactPlayer url="https://youtu.be/hBKxCCJrCss"/></div>
                </div>
            </MainContainer>
        </MainLayout>
    );
};

export default ActivitiesPage;
