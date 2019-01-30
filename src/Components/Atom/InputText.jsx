import React from 'react'
import './Atom.css';
import {SearchBtnIcon} from './Button';
export const InputText = () => {  
    return (    
            <input className="input-text-a" onChange={()=>this.change()}></input>
    )
}

export const InputTextCategory = () => {  
    return (    

            <div className="input-text-b"> 
                <div className="input-search-text">
                <SearchBtnIcon />
                </div>
            </div>
      
    )
}

export const InputTamu = () => {  
    return (    
            <input className="input-text-c"></input>
    )
}
