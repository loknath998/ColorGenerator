import React,{useState} from 'react';
import './index.css';
import PlusOneIcon from '@material-ui/icons/PlusOne';
import ExposureNeg1Icon from '@material-ui/icons/ExposureNeg1';
import ColorBlock from './ColorBlock';

import Clock from 'react-digital-clock';

const App =()=>{

    let [num , updateNum] = useState(0);
    let [colorArray,updateColorArray] = useState(["#17a9a9"]); 
    let [index,updateIndex] = useState(0);

    let [midColor, updateMidColor] = useState("#244d52");
    // let [color,updateColor]=useState(colorArray[index]);
    // let [color,updateColor]=useState("#befc1");
    const increment = ()=>{
        updateNum(num+1);
        if(num+1 >= colorArray.length)
        {
            let randomColor= "#"+Math.floor(Math.random()*16777215).toString(16);
            updateColorArray((previousColorArray)=>{
                return [...previousColorArray,randomColor];
            });
        }
        updateIndex(index+1);
        // console.log(index, colorArray[index],colorArray, 'updated');

    }
    const decrement =()=>{
        if(num>0)
        {
            updateNum(num-1);
            updateIndex(index-1);
        }
        // console.log(index, colorArray[index],colorArray, 'updated');
    }
    const changeMidColor= (idx)=>{
        updateMidColor(colorArray[idx]);
    }
    const changeBgColor=(idx)=>{
        updateIndex(idx);
        updateNum(idx);
    }

    return <>
    <div className="external_div" style={{backgroundColor:colorArray[index]}}>
        <div  style={{backgroundColor:colorArray[index]}} className="main_div">
            <h2>Here i have also use material UI Icons</h2>
            <h2><Clock /></h2>
            <div className="center_div">
                <h1 style={{backgroundColor:midColor}} >"{num}"</h1>
                <div className="btn_div">
                <button onClick={increment} className="mid_btn" style={{backgroundColor:midColor}}>Increment <PlusOneIcon />   </button>
                <button onClick={decrement} className="mid_btn" style={{backgroundColor:midColor}}>Decrement <ExposureNeg1Icon /> </button>
                </div>

                <h3>color:{colorArray[index]} </h3>
            </div>

        </div>
            {colorArray.map((value, index)=>{
                return <ColorBlock 
                    colorB={value} 
                    key={index} 
                    idx={index} 
                    changeMidColor={changeMidColor}
                    changeBgColor={changeBgColor}
                     />;
            })}
    </div>            
    </>;
}

export default App;