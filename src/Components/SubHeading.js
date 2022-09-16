import React from "react";

const H3 = (props) => {
    return (
        <>
            <h3 className="sub-heading mt-4 pt-5">{props.text}</h3>
            <hr className="divider"/>
        </>
    )
}
export default H3