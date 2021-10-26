import React from "react";

const MainContainer = (props) => {
    return (
        <div className={"relative grid grid-cols-12 gap-4 px-28 z-40"}>
            {props.children}
        </div>
    );
};

export default MainContainer;
