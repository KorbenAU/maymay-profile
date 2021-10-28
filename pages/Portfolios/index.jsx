import React from "react";
import MainLayout from "../../components/Layout/MainLayout";
import MainContainer from "../../components/Containers/MainContainer";
import ImageCard from "../../components/ImageCard/ImageCard";
import {PHOTO_ID} from "../../utils/Constants";

const PortfolioPage = () => {
    return (
        <MainLayout bgPath={PHOTO_ID.PORTFOLIO_BG_IMG}>
            <MainContainer>
                <ImageCard/>
                <ImageCard/>
                <ImageCard/>
                <ImageCard/>
                <ImageCard/>
                <ImageCard/>
                <ImageCard/>
                <ImageCard/>
                <ImageCard/>
            </MainContainer>
        </MainLayout>
    );
};

export default PortfolioPage;
