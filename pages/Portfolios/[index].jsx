import React from "react";
import MainLayout from "../../components/Layout/MainLayout";
import MainContainer from "../../components/Containers/MainContainer";
import {PHOTO_ID, PORTFOLIO_IMAGES} from "../../utils/Constants";
import Image from "next/image";
import {useRouter} from "next/router";

const ImageDetails = () => {
    const router = useRouter();

    let index = -1;

    if (router.query) {
        index = router.query["index"];
    }

    return (
        <MainLayout bgPath={PHOTO_ID.PORTFOLIO_BG_IMG}>
            <MainContainer>
                {index >= 0 && <div className={"col-span-12 relative mt-12"}>
                    <Image
                        src={PORTFOLIO_IMAGES[index].path}
                        alt="panther"
                        width={"1920"}
                        height={"1080"}
                    />
                </div>}
            </MainContainer>
        </MainLayout>
    );
};

export default ImageDetails;
