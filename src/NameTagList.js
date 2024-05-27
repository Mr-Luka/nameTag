import React from "react";
import NameTag from "./NameTag.js";
import "./styles.css";

const NameTagList = props=> {
    const renderNameTag = (name, index) => (
        <nameTag 
            name={name}
            key={name}
            removeName={props.removeName}
            index={index}
        />
    );
    const NameTagElements = props.name.map(renderNameTag);
    return <main>{NameTagElements}</main>
}

export default NameTagList;