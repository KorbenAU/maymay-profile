import React, {useRef} from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Background from "./Background";

const MainLayout = (props) => {
    return (
        <>
            <Background bgPath={props.bgPath}/>
            <div className={"w-full h-full"}>
                <Header/>
                <div className={"min-h-screen"}>
                    {props.children}
                </div>
                <Footer/>
            </div>
        </>
    );
};

export default MainLayout;
