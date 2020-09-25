import React, { useState } from 'react'
import Add from './Add';
import Search from './Search';

export default function Notes(){

    const [display, setDisplay]= useState({
        addComponent: true,
        searchComponent: false,
    });
    const onClickHandler =(display) => {
        setDisplay({
            ...display,
            [display]: true,
        });
    };
    return (
        <div>
            {display.addComponent === true? <Add /> : null}
            {display.SearchComponent === true? <Search /> : null}
            <button onClick={()=> onClickHandler("addComponent")}>Add on|off</button>
            <button onClick={()=> onClickHandler("searchComponent")}>Search on|off</button>
        </div>
    )
}