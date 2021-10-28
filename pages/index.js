import MainLayout from "../components/Layout/MainLayout";
import MainContainer from "../components/Containers/MainContainer";
import HeroSection from "../components/HeroSection/HeroSection";

export default function Home() {
    return (
        <MainLayout>
            <MainContainer>
                <HeroSection/>
            </MainContainer>
        </MainLayout>
    );
}

