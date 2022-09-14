import React from 'react';
import './App.css';
import {Star} from "./Star";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

function App() {
    return (
        <div className="App">
            <Rating/>
            <Accordion/>
        </div>
    );
}

export default App;

export const Rating = () => {
    return (
        <div>
           <Star/>
           <Star/>
           <Star/>
           <Star/>
           <Star/>
        </div>
    )
}

export const Accordion = () => {
    return (

        <div>
          <AccordionTitle/>
            <AccordionBody/>
        </div>
    )
}