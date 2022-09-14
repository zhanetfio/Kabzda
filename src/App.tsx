import React from 'react';
import './App.css';
import {Star} from "./Star";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

function App() {
    return (
        <div className="App">
            <PageTitle title={"This is APP components"}/>
            <Rating value={3}/>
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
        </div>
    );
}

export default App;

type RatingProps = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export const Rating = (props: RatingProps) => {
    if (props.value === 1) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    }
    if (props.value === 2) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    }
    if (props.value === 3) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    }
    if (props.value === 4) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
            </div>
        )
    }
    if (props.value === 5) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
            </div>
        )
    }
    return (
        <div>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>

        </div>
    )
}

type AccordionProps = {
    titleValue: string
    collapsed: boolean
}

export const Accordion = (props: AccordionProps) => {
    if (props.collapsed) {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
            </div>
        )
    } else {
        return (

            <div>
                <AccordionTitle title={props.titleValue}/>
                <AccordionBody/>
            </div>
        )
    }
}

type PageTitleProps = {
    title: string
}
const PageTitle = (props: PageTitleProps) => {
    return (
        <h1>{props.title}</h1>
    )
}