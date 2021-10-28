import React from "react";
import MainContainer from "../Containers/MainContainer";
import NavItem from "./NavItem";

const Header = () => {
    return (
        <MainContainer>
            <div className={`col-start-2 col-span-10 h-28 flex flex-row items-center justify-center`}>
                <NavItem href={'/'} title={'Home'}/>
                <NavItem href={'/AboutMe'} title={'About me'}/>
                <NavItem href={'/Portfolios'} title={'Portfolios'}/>
            </div>
        </MainContainer>
    );
};

export default Header;
