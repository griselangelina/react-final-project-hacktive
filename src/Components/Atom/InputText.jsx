import React from 'react'
import './Atom.css';
import {SearchBtnIcon} from './Button';
export const InputText = (props) => {  
    return (    
            <input className="input-text-a" onChange={()=>this.props.change()}></input>
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

export const InputTamu = (props) => {  
    return (    
            <input className="input-text-c" type={props.type} name={props.name} value={props.value} onChange={props.change}></input>
    )
}
