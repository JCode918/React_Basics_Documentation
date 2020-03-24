import React from 'react'

export const WarningBanner = (props) =>{
    if(!props.warn){
        return null;
    }

    return (
        <div className="warning">
            This is a Warning Message!!
        </div>
    );
};

export default WarningBanner;