import React from 'react';

export type AccordionTitleProps={
    title:string
}

export const AccordionTitle = (props:AccordionTitleProps) => {
    return (
        <div>
            <div>{props.title}</div>
        </div>
    );
};

