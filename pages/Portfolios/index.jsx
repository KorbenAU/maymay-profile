import React from "react";
import MainLayout from "../../components/Layout/MainLayout";
import MainContainer from "../../components/Containers/MainContainer";
import ImageCard from "../../components/ImageCard/ImageCard";
import {PHOTO_ID, PORTFOLIO_IMAGES} from "../../utils/Constants";
import {useRouter} from "next/router";

const PortfolioPage = () => {
    const router = useRouter();

    const onImageClick = (index) => {
        router.push(`/Portfolios/${index}`);
    };

    return (
        <MainLayout bgPath={PHOTO_ID.PORTFOLIO_BG_IMG}>
            <MainContainer>
                {
                    PORTFOLIO_IMAGES.map((item, index) => (
                        <ImageCard key={index} date={item.date} imagePath={item.path}
                                   onClick={() => onImageClick(index)}/>
                    ))
                }
            </MainContainer>
        </MainLayout>
    );
};

export default PortfolioPage;
