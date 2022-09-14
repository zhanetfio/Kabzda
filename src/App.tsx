import React from 'react';
import './App.css';
import {Star} from "./Star";

function App() {
    return (
        <div className="App">
            <Rating/>
            <According/>
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

export const According = () => {
    return (
        <div>
            <div>Menu</div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}