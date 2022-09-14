import React from 'react';

export type StarProps={
    selected:boolean
}

export const Star = (props:StarProps) => {
    if(props.selected){
        return <span><b> Star </b></span>
    }else {
        return <span> Star </span>
    }
};

