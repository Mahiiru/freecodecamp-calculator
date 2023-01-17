import React from "react";

export function Button({text,eventButton,id}){
    return(
        <button className="Button" id={id} onClick={eventButton}>
            {text}
        </button>
    );
}