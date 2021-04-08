import React from 'react';

const ColorBlock= (props)=>{

    return <>
        <button 
        style={{background:props.colorB}} 
            className="color_block" 
            onClick={()=>{
               props.changeMidColor(props.idx); 
            }}
            onDoubleClick={()=>{
                props.changeBgColor(props.idx);
            }}
            >
           {props.colorB} 
        </button>
     </>;
}
// #c6174a
export default ColorBlock;