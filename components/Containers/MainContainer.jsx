import React from "react";

const MainContainer = (props) => {
    return (
        <div className={'grid grid-cols-12 gap-4'}>
            {props.children}
        </div>
    );
};

export default MainContainer;
