import React from 'react'
import './Atom.css';
export const ButtonSearch = () => {  
    return (    
            <button className="button-search-header">
                
            </button>
    )
}

export const ButtonNav = (props) => {  
    return (    
            <button className="button-nav" onClick={() => props.klik()}>
                {props.children}
            </button>
    )
}

export const LongButton = (props) => {  
    return (    
            <button className="long-button">
                {props.children}
            </button>
    )
}
export const LongButtonRed = (props) => {  
    return (    
            <button className="long-button-red" onClick={() => props.click()}>
                {props.children}
            </button>
    )
}
export const PesanBtn = (props) => {  
    return (    
            <button className="pesan-button">
                {props.children}
            </button>
    )
}

export const SearchBtn = (props) => {  
    return (    
            <button className="search-button">
                {props.children}
            </button>
    )
}

export const SearchBtnIcon =() =>{

    return(
        <div className="button-icon-search">
                <svg viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false"><path d="m2.5 7c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5m13.1 6.9-2.8-2.9c.7-1.1 1.2-2.5 1.2-4 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.5 0 2.9-.5 4-1.2l2.9 2.8c.2.3.5.4.9.4.3 0 .6-.1.8-.4.5-.5.5-1.2 0-1.7"></path></svg>
                
        </div>
    )
}


export const PlusButton =() =>{

    return(
        <button type="button" className="plus-button" aria-busy="false">
        <span className="in">
        <svg viewBox="0 0 24 24" role="img" aria-label="add" focusable="false" style={{height: `1em`,width: `1em` ,display: `block`, fill:`currentcolor`}}>
        <rect height="2" rx="1" width="12" x="6" y="11"></rect>
        <rect height="12" rx="1" width="2" x="11" y="6"></rect>
        </svg></span>
        </button>
    )
}

export const MinButton = () =>{
    return(
    <button type="button" className="plus-button" aria-busy="false">
        <span className="in">
        <svg viewBox="0 0 24 24" role="img" aria-label="substract" focusable="false" style={{height: `1em`,width: `1em` ,display: `block`, fill:`currentcolor`}}>
<rect height="2" rx="1" width="12" x="6" y="11"></rect>

        <rect height="2" rx="1" width="12" x="6" y="11"></rect>
        </svg></span>
        </button>
    )
}